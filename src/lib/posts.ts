import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import fm from 'front-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content?: string;
  html?: string;
}

interface PostAttributes {
  title: string;
  date: string;
  description?: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function getPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { attributes, body } = fm<PostAttributes>(fileContents);

      return {
        slug,
        title: attributes.title,
        date: attributes.date,
        description: attributes.description || '',
        content: body,
      };
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { attributes, body } = fm<PostAttributes>(fileContents);
  const html = await marked(body);

  return {
    slug,
    title: attributes.title,
    date: attributes.date,
    description: attributes.description || '',
    html,
  };
}
