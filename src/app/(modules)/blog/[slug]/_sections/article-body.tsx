export default function ArticleBody({ html }: { html: string }) {
  return (
    <div
      className="article-content"
      // Sample content is trusted, hand-authored HTML. When headless WordPress
      // is connected, sanitize this HTML (e.g. isomorphic-dompurify) before render.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
