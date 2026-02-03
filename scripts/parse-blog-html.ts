/**
 * Blog HTML Parser Script
 * 
 * This script parses HTML blog articles and outputs them in the blog-data.tsx format.
 * It handles both new-style HTML (clean structure) and legacy Squarespace HTML.
 * 
 * Usage:
 * 1. Place HTML files in the user_read_only_context/text_attachments/ folder
 * 2. Run this script to generate content blocks
 * 3. Copy the output into blog-data.tsx
 * 
 * For new articles:
 * - Extracts title, description, category, date, readTime, image from meta/header
 * - Extracts Key Takeaways card items
 * - Extracts all paragraphs and headings as content blocks
 * 
 * For legacy Squarespace articles:
 * - Extracts content from the blog-item-content div
 * - Converts paragraphs to content blocks
 */

import * as fs from 'fs'
import * as path from 'path'

interface ContentBlock {
  type: 'paragraph' | 'heading2' | 'heading3' | 'keyTakeaways' | 'questionsCard'
  content?: string
  items?: string[]
  questions?: string[]
  title?: string
  variant?: 'purple' | 'cyan'
}

interface BlogArticle {
  id: number
  title: string
  description: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
  author: string
  contentBlocks: ContentBlock[]
}

/**
 * Extracts text content from HTML, stripping tags but preserving text
 */
function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Parse new-style HTML articles (clean structure with tailwind)
 */
function parseNewStyleHtml(html: string): Partial<BlogArticle> {
  const contentBlocks: ContentBlock[] = []
  
  // Extract title
  const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i)
  const title = titleMatch ? stripHtml(titleMatch[1]) : ''
  
  // Extract description from hero paragraph
  const descMatch = html.match(/<p class="text-xl text-white[^"]*"[^>]*>([^<]+)<\/p>/i)
  const description = descMatch ? stripHtml(descMatch[1]) : ''
  
  // Extract category from badge
  const categoryMatch = html.match(/<span class="inline-block[^"]*"[^>]*>\s*([^<]+)\s*<\/span>/i)
  const category = categoryMatch ? stripHtml(categoryMatch[1]) : ''
  
  // Extract read time
  const readTimeMatch = html.match(/(\d+)\s*min\s*read/i)
  const readTime = readTimeMatch ? `${readTimeMatch[1]} min read` : ''
  
  // Extract image from hero
  const imageMatch = html.match(/src="images\/([^"]+)"/i)
  const image = imageMatch ? `/images/blog/${imageMatch[1]}` : ''
  
  // Extract Key Takeaways
  const keyTakeawaysMatch = html.match(/<div class="card-gradient[^"]*"[^>]*>[\s\S]*?<h2[^>]*>Key Takeaways<\/h2>[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i)
  if (keyTakeawaysMatch) {
    const listItems = keyTakeawaysMatch[1].match(/<li[^>]*>[\s\S]*?<span[^>]*>([^<]*)<\/span>[\s\S]*?<\/li>/gi)
    if (listItems) {
      const items = listItems.map(li => {
        const textMatch = li.match(/<span>([^<]*)<\/span>\s*<\/li>/i) || li.match(/<span[^>]*>([^<]*)<\/span>/gi)
        if (textMatch) {
          // Get the last span (the content one, not the bullet)
          const spans = li.match(/<span[^>]*>([^<]*)<\/span>/gi)
          if (spans && spans.length > 1) {
            const lastSpan = spans[spans.length - 1]
            const content = lastSpan.match(/<span[^>]*>([^<]*)<\/span>/i)
            return content ? stripHtml(content[1]) : ''
          }
        }
        return ''
      }).filter(item => item.length > 0)
      
      if (items.length > 0) {
        contentBlocks.push({ type: 'keyTakeaways', items })
      }
    }
  }
  
  // Extract article content
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
  if (articleMatch) {
    const articleContent = articleMatch[1]
    
    // Extract paragraphs (skip the key takeaways card)
    const paragraphs = articleContent.match(/<p class="text-(?:lg\s+)?text-gray-700[^"]*"[^>]*>([\s\S]*?)<\/p>/gi)
    if (paragraphs) {
      paragraphs.forEach(p => {
        const content = stripHtml(p)
        if (content.length > 20) { // Skip very short content
          contentBlocks.push({ type: 'paragraph', content })
        }
      })
    }
    
    // Extract h2 headings
    const h2s = articleContent.match(/<h2 class="text-3xl[^"]*"[^>]*>([^<]+)<\/h2>/gi)
    if (h2s) {
      h2s.forEach(h2 => {
        const content = stripHtml(h2)
        if (content.length > 0 && content !== 'Key Takeaways') {
          // Find position and insert at appropriate place
          contentBlocks.push({ type: 'heading2', content })
        }
      })
    }
    
    // Extract h3 headings
    const h3s = articleContent.match(/<h3 class="text-xl[^"]*"[^>]*>([^<]+)<\/h3>/gi)
    if (h3s) {
      h3s.forEach(h3 => {
        const content = stripHtml(h3)
        if (content.length > 0) {
          contentBlocks.push({ type: 'heading3', content })
        }
      })
    }
  }
  
  return {
    title,
    description,
    category,
    readTime,
    image,
    contentBlocks
  }
}

/**
 * Parse legacy Squarespace HTML articles
 */
function parseLegacyHtml(html: string): Partial<BlogArticle> {
  const contentBlocks: ContentBlock[] = []
  
  // Extract title from meta or h1
  const titleMatch = html.match(/<meta itemprop="headline" content="([^"]+)"/i) ||
                     html.match(/<h1[^>]*>([^<]+)<\/h1>/i)
  const title = titleMatch ? stripHtml(titleMatch[1]) : ''
  
  // Extract description from meta
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/i) ||
                    html.match(/<meta itemprop="description" content="([^"]+)"/i)
  const description = descMatch ? stripHtml(descMatch[1]).substring(0, 200) : ''
  
  // Extract date
  const dateMatch = html.match(/<meta itemprop="datePublished" content="([^"]+)"/i)
  const date = dateMatch ? dateMatch[1].split('T')[0] : ''
  
  // Extract image
  const imageMatch = html.match(/<meta property="og:image" content="[^"]*\/([^"\/]+)"/i) ||
                     html.match(/<meta itemprop="image" content="[^"]*\/([^"\/]+)"/i)
  const image = imageMatch ? `/images/blog/${imageMatch[1]}` : ''
  
  // Find the main content area - look for blog-item-content or article content
  const contentMatch = html.match(/<div class="blog-item-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/i) ||
                       html.match(/<div class="sqs-block-content"[^>]*>([\s\S]*?)<\/div>/gi)
  
  if (contentMatch) {
    const content = Array.isArray(contentMatch) ? contentMatch.join(' ') : contentMatch[1]
    
    // Extract paragraphs
    const paragraphs = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi)
    if (paragraphs) {
      paragraphs.forEach(p => {
        const text = stripHtml(p)
        if (text.length > 30) {
          contentBlocks.push({ type: 'paragraph', content: text })
        }
      })
    }
    
    // Extract h2 headings
    const h2s = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)
    if (h2s) {
      h2s.forEach(h2 => {
        const text = stripHtml(h2)
        if (text.length > 0) {
          contentBlocks.push({ type: 'heading2', content: text })
        }
      })
    }
    
    // Extract h3 headings  
    const h3s = content.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)
    if (h3s) {
      h3s.forEach(h3 => {
        const text = stripHtml(h3)
        if (text.length > 0) {
          contentBlocks.push({ type: 'heading3', content: text })
        }
      })
    }
  }
  
  return {
    title,
    description,
    date,
    image,
    contentBlocks
  }
}

/**
 * Generate TypeScript code for a blog article
 */
function generateArticleCode(article: Partial<BlogArticle>, id: number): string {
  const blocks = article.contentBlocks || []
  
  let code = `  {
    id: ${id},
    title: "${article.title?.replace(/"/g, '\\"') || ''}",
    description: "${article.description?.replace(/"/g, '\\"') || ''}",
    category: "${article.category || 'Technology + Ethics'}",
    date: "${article.date || ''}",
    readTime: "${article.readTime || '8 min read'}",
    image: "${article.image || ''}",
    slug: "${article.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || ''}",
    author: "Dr. Dédé Tetsubayashi",
    contentBlocks: [\n`
  
  blocks.forEach((block, index) => {
    if (block.type === 'keyTakeaways' && block.items) {
      code += `      { type: "keyTakeaways", items: [\n`
      block.items.forEach((item, i) => {
        code += `        "${item.replace(/"/g, '\\"')}"${i < block.items!.length - 1 ? ',' : ''}\n`
      })
      code += `      ] }`
    } else if (block.type === 'paragraph' || block.type === 'heading2' || block.type === 'heading3') {
      code += `      { type: "${block.type}", content: "${block.content?.replace(/"/g, '\\"') || ''}" }`
    }
    
    if (index < blocks.length - 1) {
      code += ','
    }
    code += '\n'
  })
  
  code += `    ],
  },`
  
  return code
}

/**
 * Main function - parse all HTML files and output blog-data format
 */
async function main() {
  const inputDir = './user_read_only_context/text_attachments'
  
  // Get all HTML files
  const files = fs.readdirSync(inputDir)
    .filter(f => f.endsWith('.html'))
    .filter(f => /^\d{2}-/.test(f)) // Only numbered files (01-, 02-, etc.)
    .sort()
  
  console.log(`Found ${files.length} numbered HTML files to process\n`)
  
  files.forEach((file, index) => {
    const filePath = path.join(inputDir, file)
    const html = fs.readFileSync(filePath, 'utf-8')
    
    // Determine if new-style or legacy
    const isNewStyle = html.includes('cdn.tailwindcss.com')
    
    const article = isNewStyle ? parseNewStyleHtml(html) : parseLegacyHtml(html)
    
    console.log(`\n// Article ${index + 1}: ${file}`)
    console.log(`// Title: ${article.title}`)
    console.log(`// Content blocks: ${article.contentBlocks?.length || 0}`)
    console.log(generateArticleCode(article, index + 1))
  })
}

main().catch(console.error)
