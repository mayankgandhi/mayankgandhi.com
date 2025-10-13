import { marked } from "marked";
import fm from "front-matter";

// Import all markdown files using Vite's glob import
const postModules = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

export async function getPosts() {
  const posts = Object.entries(postModules).map(([filepath, content]) => {
    // Extract filename from filepath
    const filename = filepath.split("/").pop();
    const slug = filename.replace(/\.md$/, "");

    // Parse frontmatter
    const { attributes, body } = fm(content);

    return {
      slug,
      title: attributes.title,
      date: attributes.date,
      description: attributes.description || "",
      content: body
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
  // Find the matching post file
  const postPath = Object.keys(postModules).find(path =>
    path.endsWith(`${slug}.md`)
  );

  if (!postPath) {
    throw new Error(`Post not found: ${slug}`);
  }

  const content = postModules[postPath];
  const { attributes, body } = fm(content);
  const html = marked(body);

  return {
    slug,
    title: attributes.title,
    date: attributes.date,
    description: attributes.description || "",
    html
  };
}
