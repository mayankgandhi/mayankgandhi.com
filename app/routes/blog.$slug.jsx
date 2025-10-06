import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { getPost } from "../utils/posts.server";

export const loader = async ({ params }) => {
  const post = await getPost(params.slug);
  return json(post);
};

export default function BlogPost() {
  const post = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#e0f2fe", padding: "clamp(20px, 5vw, 40px) 16px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "#475569",
              textDecoration: "none",
              fontSize: "clamp(13px, 2vw, 14px)",
              marginBottom: "16px"
            }}
          >
            ← Back to Home
          </Link>
          <h1 style={{ margin: "0", fontSize: "clamp(28px, 6vw, 42px)", fontWeight: "700", color: "#1e293b" }}>
            {post.title}
          </h1>
          <p style={{ margin: "12px 0 0 0", fontSize: "clamp(14px, 2vw, 16px)", color: "#64748b" }}>
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(20px, 4vw, 40px) 16px" }}>
        <article
          style={{ backgroundColor: "white", padding: "clamp(24px, 5vw, 48px)", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    </div>
  );
}
