import { readFileSync } from 'fs';

const html = readFileSync('/tmp/intersectionality-source.html', 'utf-8');

// Find the sqs-html-content div content on line 1559
const match = html.match(/<div class="sqs-html-content" data-sqsp-text-block-content>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div><div class="sqs-block image-block/);

if (match) {
  const content = match[1].trim();
  console.log("=== RAW HTML CONTENT ===");
  console.log(content);
  console.log("\n=== END ===");
  
  // Extract individual elements
  const elements = [];
  
  // Split by top-level tags
  const tagRegex = /<(p|blockquote|h[1-6])[^>]*>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = tagRegex.exec(content)) !== null) {
    const tag = m[1];
    const inner = m[2].trim();
    console.log(`\n--- ${tag.toUpperCase()} ---`);
    console.log(inner);
  }
} else {
  console.log("No match found");
  // Try alternate approach - just find the text block
  const altMatch = html.match(/sqs-html-content.*?data-sqsp-text-block-content>([\s\S]{500,5000})/);
  if (altMatch) {
    console.log("Alt match found:");
    console.log(altMatch[1].substring(0, 3000));
  }
}
