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
 * Extracts FULL content from hero section to footer, preserving order
 */
function parseNewStyleHtml(html: string): Partial<BlogArticle> {
  const contentBlocks: ContentBlock[] = []
  
  // Extract title
  const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i)
  const title = titleMatch ? stripHtml(titleMatch[1]) : ''
  
  // Extract description from hero paragraph
  const descMatch = html.match(/<p class="text-xl[^"]*text-white[^"]*"[^>]*>([\s\S]*?)<\/p>/i) ||
                    html.match(/<p class="[^"]*text-xl[^"]*"[^>]*>([\s\S]*?)<\/p>/i)
  const description = descMatch ? stripHtml(descMatch[1]) : ''
  
  // Extract category from badge
  const categoryMatch = html.match(/<span class="inline-block[^"]*"[^>]*>\s*([^<]+)\s*<\/span>/i)
  const category = categoryMatch ? stripHtml(categoryMatch[1]) : ''
  
  // Extract read time
  const readTimeMatch = html.match(/(\d+)\s*min\s*read/i)
  const readTime = readTimeMatch ? `${readTimeMatch[1]} min read` : ''
  
  // Extract image from hero - handle BOTH local images AND Unsplash URLs
  let image = ''
  const localImageMatch = html.match(/src="images\/([^"]+)"/i)
  const unsplashMatch = html.match(/src="(https:\/\/images\.unsplash\.com\/[^"]+)"/i)
  
  if (localImageMatch) {
    image = `/blog/${localImageMatch[1]}`
  } else if (unsplashMatch) {
    image = unsplashMatch[1]
  }
  
  // Extract date
  const dateMatch = html.match(/<time[^>]*datetime="([^"]+)"/i) ||
                    html.match(/(\w+\s+\d{1,2},\s+\d{4})/i)
  const date = dateMatch ? dateMatch[1] : ''
  
  // Extract article content - get EVERYTHING between <article> and </article>
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
  if (articleMatch) {
    const articleContent = articleMatch[1]
    
    // Extract Key Takeaways first (if present)
    const keyTakeawaysMatch = articleContent.match(/Key Takeaways[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/i)
    if (keyTakeawaysMatch) {
      const listHtml = keyTakeawaysMatch[1]
      const items: string[] = []
      const liMatches = listHtml.match(/<li[^>]*>([\s\S]*?)<\/li>/gi)
      if (liMatches) {
        liMatches.forEach(li => {
          // Get text content, skip bullet spans
          const text = stripHtml(li.replace(/<span[^>]*>[\s]*<\/span>/gi, ''))
          if (text.length > 5) {
            items.push(text)
          }
        })
      }
      if (items.length > 0) {
        contentBlocks.push({ type: 'keyTakeaways', items })
      }
    }
    
    // Now extract ALL content in ORDER by finding h2, h3, and p tags sequentially
    // Use a regex that captures all these elements in their original order
    const contentPattern = /<(h2|h3|p)[^>]*>([\s\S]*?)<\/\1>/gi
    let match
    
    while ((match = contentPattern.exec(articleContent)) !== null) {
      const tagType = match[1].toLowerCase()
      const content = stripHtml(match[2])
      
      // Skip empty content, Key Takeaways header, and very short content
      if (content.length < 10) continue
      if (content === 'Key Takeaways') continue
      if (content.includes('Key Takeaways')) continue
      
      // Map tag type to content block type
      if (tagType === 'h2') {
        contentBlocks.push({ type: 'heading2', content })
      } else if (tagType === 'h3') {
        contentBlocks.push({ type: 'heading3', content })
      } else if (tagType === 'p') {
        contentBlocks.push({ type: 'paragraph', content })
      }
    }
  }
  
  return {
    title,
    description,
    category,
    readTime,
    image,
    date,
    contentBlocks
  }
}

/**
 * Parse legacy Squarespace HTML articles
 * Extracts FULL content from the blog-item-content div, preserving order
 */
function parseLegacyHtml(html: string): Partial<BlogArticle> {
  const contentBlocks: ContentBlock[] = []
  
  // Extract title from meta or h1
  const titleMatch = html.match(/<meta itemprop="headline" content="([^"]+)"/i) ||
                     html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i) ||
                     html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  const title = titleMatch ? stripHtml(titleMatch[1]) : ''
  
  // Extract description from meta or first paragraph
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/i) ||
                    html.match(/<meta itemprop="description" content="([^"]+)"/i)
  const description = descMatch ? stripHtml(descMatch[1]).substring(0, 200) : ''
  
  // Extract date
  const dateMatch = html.match(/<meta itemprop="datePublished" content="([^"]+)"/i) ||
                    html.match(/<time[^>]*datetime="([^"]+)"/i) ||
                    html.match(/<time[^>]*class="dt-published"[^>]*>([^<]+)</i)
  const date = dateMatch ? dateMatch[1].split('T')[0] : ''
  
  // Extract image - check og:image, itemprop:image, and img tags
  let image = ''
  const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/i)
  const itemImageMatch = html.match(/<meta itemprop="image" content="([^"]+)"/i)
  const imgMatch = html.match(/<img[^>]*class="[^"]*thumb-image[^"]*"[^>]*data-src="([^"]+)"/i) ||
                   html.match(/<img[^>]*src="([^"]+)"[^>]*class="[^"]*thumb-image/i)
  
  if (ogImageMatch) {
    // Extract just the filename from the full URL
    const urlParts = ogImageMatch[1].split('/')
    const filename = urlParts[urlParts.length - 1].split('?')[0]
    image = `/blog/${filename}`
  } else if (itemImageMatch) {
    const urlParts = itemImageMatch[1].split('/')
    const filename = urlParts[urlParts.length - 1].split('?')[0]
    image = `/blog/${filename}`
  } else if (imgMatch) {
    const urlParts = imgMatch[1].split('/')
    const filename = urlParts[urlParts.length - 1].split('?')[0]
    image = `/blog/${filename}`
  }
  
  // Find the main content area - get EVERYTHING from blog-item-content
  // This captures from the content div all the way to its closing tag
  const contentMatch = html.match(/<div class="blog-item-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<footer|<\/article)/i)
  
  if (contentMatch) {
    const content = contentMatch[1]
    
    // Extract ALL content in ORDER by finding h2, h3, h4, and p tags sequentially
    const contentPattern = /<(h2|h3|h4|p)[^>]*>([\s\S]*?)<\/\1>/gi
    let match
    
    while ((match = contentPattern.exec(content)) !== null) {
      const tagType = match[1].toLowerCase()
      const text = stripHtml(match[2])
      
      // Skip empty or very short content
      if (text.length < 15) continue
      
      // Map tag type to content block type
      if (tagType === 'h2') {
        contentBlocks.push({ type: 'heading2', content: text })
      } else if (tagType === 'h3' || tagType === 'h4') {
        contentBlocks.push({ type: 'heading3', content: text })
      } else if (tagType === 'p') {
        contentBlocks.push({ type: 'paragraph', content: text })
      }
    }
  }
  
  // If no content found, try sqs-block-content divs
  if (contentBlocks.length === 0) {
    const sqsBlocks = html.match(/<div class="sqs-block-content"[^>]*>([\s\S]*?)<\/div>/gi)
    if (sqsBlocks) {
      sqsBlocks.forEach(block => {
        const contentPattern = /<(h2|h3|h4|p)[^>]*>([\s\S]*?)<\/\1>/gi
        let match
        while ((match = contentPattern.exec(block)) !== null) {
          const tagType = match[1].toLowerCase()
          const text = stripHtml(match[2])
          if (text.length < 15) continue
          
          if (tagType === 'h2') {
            contentBlocks.push({ type: 'heading2', content: text })
          } else if (tagType === 'h3' || tagType === 'h4') {
            contentBlocks.push({ type: 'heading3', content: text })
          } else if (tagType === 'p') {
            contentBlocks.push({ type: 'paragraph', content: text })
          }
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
