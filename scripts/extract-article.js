import { readFileSync } from 'fs';

const html = readFileSync('/tmp/intersectionality-source.html', 'utf-8');

// Find all text between sqs-html-content blocks
const blocks = html.match(/<div class="sqs-html-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g);

if (blocks) {
  blocks.forEach((block, i) => {
    console.log(`\n=== BLOCK ${i} ===`);
    // Extract inner HTML
    const inner = block.replace(/<div class="sqs-html-content"[^>]*>/, '').replace(/<\/div>\s*<\/div>\s*<\/div>$/, '').trim();
    
    // Find paragraphs, blockquotes, headings
    const tagRegex = /<(p|blockquote|h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/g;
    let m;
    while ((m = tagRegex.exec(inner)) !== null) {
      const tag = m[1];
      const content = m[2].trim();
      // Clean but preserve key HTML like <a>, <em>, <strong>
      const cleaned = content
        .replace(/<br\s*\/?>/g, '\n')
        .replace(/\s+/g, ' ')
        .trim();
      console.log(`[${tag}] ${cleaned}`);
    }
  });
} else {
  console.log("No blocks found. Trying line-based extraction...");
  const lines = html.split('\n');
  for (let i = 1555; i < 1570; i++) {
    if (lines[i]) {
      console.log(`Line ${i+1} (length ${lines[i].length}): ${lines[i].substring(0, 500)}`);
      if (lines[i].length > 500) {
        console.log(`... continued: ${lines[i].substring(500, 1000)}`);
        console.log(`... continued: ${lines[i].substring(1000, 1500)}`);
        console.log(`... continued: ${lines[i].substring(1500, 2000)}`);
        console.log(`... continued: ${lines[i].substring(2000, 2500)}`);
        console.log(`... continued: ${lines[i].substring(2500, 3000)}`);
        console.log(`... continued: ${lines[i].substring(3000, 3500)}`);
        console.log(`... continued: ${lines[i].substring(3500, 4000)}`);
        console.log(`... continued: ${lines[i].substring(4000, 4500)}`);
        console.log(`... continued: ${lines[i].substring(4500, 5000)}`);
        console.log(`... continued: ${lines[i].substring(5000, 5500)}`);
        console.log(`... continued: ${lines[i].substring(5500, 6000)}`);
        console.log(`... continued: ${lines[i].substring(6000, 8000)}`);
      }
    }
  }
}
