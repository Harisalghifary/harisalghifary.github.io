// Simple markdown to HTML converter for basic formatting
export function convertMarkdownToHtml(markdown: string): string {
  if (!markdown) return "";

  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")

    // Bold
    .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")

    // Italic
    .replace(/\*(.*)\*/gim, "<em>$1</em>")

    // Code blocks
    .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")

    // Inline code
    .replace(/`([^`]*)`/gim, "<code>$1</code>")

    // Links
    .replace(
      /\[([^\]]*)\]$$([^$$]*)\)/gim,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )

    // Line breaks
    .replace(/\n\n/gim, "</p><p>")
    .replace(/\n/gim, "<br>")

    // Lists
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)/gim, "<ul>$1</ul>")

    // Blockquotes
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

  // Wrap in paragraphs
  if (!html.startsWith("<")) {
    html = "<p>" + html + "</p>";
  }

  return html;
}
