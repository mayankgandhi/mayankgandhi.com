import fs from "fs";
import path from "path";
import { marked } from "marked";
import fm from "front-matter";

const postsPath = path.join(process.cwd(), "app", "posts");

export async function getPosts() {
  const dir = await fs.promises.readdir(postsPath);

  const posts = await Promise.all(
    dir
      .filter(filename => filename.endsWith(".md"))
      .map(async filename => {
        const file = await fs.promises.readFile(
          path.join(postsPath, filename),
          "utf-8"
        );
        const { attributes, body } = fm(file);

        return {
          slug: filename.replace(/\.md$/, ""),
          title: attributes.title,
          date: attributes.date,
          description: attributes.description || "",
          content: body
        };
      })
  );

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPost(slug) {
  const file = await fs.promises.readFile(
    path.join(postsPath, `${slug}.md`),
    "utf-8"
  );

  const { attributes, body } = fm(file);
  const html = marked(body);

  return {
    slug,
    title: attributes.title,
    date: attributes.date,
    description: attributes.description || "",
    html
  };
}
