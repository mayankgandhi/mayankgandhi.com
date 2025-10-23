import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { memo } from "react";
import { getPost } from "../utils/posts.server";

export const loader = async ({ params }) => {
  const post = await getPost(params.slug);
  return json(post);
};

// Memoized floating shapes
const FloatingShapes = memo(() => (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
    <div style={{
      position: "absolute",
      top: "10%",
      left: "5%",
      width: "300px",
      height: "300px",
      background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(60px)"
    }} />
    <div style={{
      position: "absolute",
      bottom: "10%",
      right: "5%",
      width: "350px",
      height: "350px",
      background: "radial-gradient(circle, rgba(118, 75, 162, 0.12) 0%, transparent 70%)",
      borderRadius: "50%",
      filter: "blur(65px)"
    }} />
  </div>
));

FloatingShapes.displayName = "FloatingShapes";

export default function BlogPost() {
  const post = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", minHeight: "100vh", backgroundColor: "#f8f9fa", position: "relative", overflow: "hidden" }}>
      {/* Animated background grid */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        zIndex: 0,
        pointerEvents: "none"
      }} />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <header style={{
          background: "radial-gradient(ellipse at top, rgba(102, 126, 234, 0.15) 0%, transparent 50%)",
          padding: "clamp(60px, 10vw, 100px) 24px clamp(40px, 8vw, 60px)",
          borderBottom: "1px solid rgba(102, 126, 234, 0.1)"
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(0, 0, 0, 0.6)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.3s ease",
                marginBottom: "32px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 0, 0, 0.1)"
              }}
              className="back-link"
            >
              ← Back to Home
            </Link>
            <h1 style={{
              margin: "0 0 24px 0",
              fontSize: "clamp(32px, 6vw, 52px)",
              fontWeight: "800",
              background: "linear-gradient(135deg, #1a1a2e 0%, #667eea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              lineHeight: "1.2"
            }}>
              {post.title}
            </h1>
            <p style={{
              margin: "0",
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "rgba(0, 0, 0, 0.5)",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
              📅 {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(40px, 8vw, 80px) 24px" }}>
          <article
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              padding: "clamp(32px, 6vw, 64px)",
              borderRadius: "24px",
              border: "1px solid rgba(102, 126, 234, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(20px)",
              color: "rgba(0, 0, 0, 0.8)",
              fontSize: "clamp(16px, 2.5vw, 18px)",
              lineHeight: "1.8"
            }}
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </main>

        {/* Footer */}
        <footer style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(102, 126, 234, 0.1)",
          padding: "60px 24px",
          textAlign: "center",
          marginTop: "80px"
        }}>
          <p style={{
            margin: "0",
            fontSize: "15px",
            color: "rgba(0, 0, 0, 0.4)"
          }}>
            © 2025 Mayank Gandhi · Built with passion & precision
          </p>
        </footer>
      </div>

      {/* CSS */}
      <style>{`
        .back-link:hover {
          background: rgba(0, 0, 0, 0.1);
          color: rgba(0, 0, 0, 0.9);
        }

        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3,
        .markdown-content h4,
        .markdown-content h5,
        .markdown-content h6 {
          color: rgba(0, 0, 0, 0.95);
          font-weight: 700;
          margin-top: 2em;
          margin-bottom: 1em;
          line-height: 1.3;
        }

        .markdown-content h2 {
          font-size: clamp(24px, 4vw, 32px);
          padding-bottom: 0.3em;
          border-bottom: 1px solid rgba(102, 126, 234, 0.2);
        }

        .markdown-content h3 {
          font-size: clamp(20px, 3vw, 24px);
        }

        .markdown-content p {
          margin: 1.5em 0;
        }

        .markdown-content a {
          color: #667eea;
          text-decoration: none;
          transition: color 0.3s ease;
          border-bottom: 1px solid rgba(102, 126, 234, 0.3);
        }

        .markdown-content a:hover {
          color: #764ba2;
          border-bottom-color: #764ba2;
        }

        .markdown-content code {
          background: rgba(102, 126, 234, 0.1);
          padding: 0.2em 0.4em;
          border-radius: 6px;
          font-size: 0.9em;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          color: #667eea;
        }

        .markdown-content pre {
          background: rgba(0, 0, 0, 0.05);
          padding: 1.5em;
          border-radius: 12px;
          overflow-x: auto;
          border: 1px solid rgba(102, 126, 234, 0.2);
          margin: 2em 0;
        }

        .markdown-content pre code {
          background: none;
          padding: 0;
          color: rgba(0, 0, 0, 0.9);
          font-size: 0.95em;
        }

        .markdown-content ul,
        .markdown-content ol {
          padding-left: 2em;
          margin: 1.5em 0;
        }

        .markdown-content li {
          margin: 0.5em 0;
        }

        .markdown-content blockquote {
          border-left: 4px solid #667eea;
          padding-left: 1.5em;
          margin: 2em 0;
          color: rgba(0, 0, 0, 0.7);
          font-style: italic;
        }

        .markdown-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 2em 0;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .markdown-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2em 0;
        }

        .markdown-content th,
        .markdown-content td {
          padding: 0.75em;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .markdown-content th {
          background: rgba(102, 126, 234, 0.1);
          font-weight: 600;
          color: rgba(0, 0, 0, 0.95);
        }

        .markdown-content hr {
          border: none;
          border-top: 1px solid rgba(102, 126, 234, 0.2);
          margin: 3em 0;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
