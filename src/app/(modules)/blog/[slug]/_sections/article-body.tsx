import DOMPurify from "isomorphic-dompurify";

export default function ArticleBody({ html }: { html: string }) {
  // Sanitize before render: once headless WordPress is connected, `html` is
  // externally-authored (content.rendered) and must not be trusted. Runs on
  // the server at render time (this is a server component).
  const clean = DOMPurify.sanitize(html);

  return (
    <div
      className="article-content"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
