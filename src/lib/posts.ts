import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function getPostFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md"));
}

function readPostMeta(fileName: string): PostMeta {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
  };
}

/** 모든 글의 메타데이터를 날짜 내림차순(최신순)으로 반환합니다. */
export function getAllPosts(): PostMeta[] {
  return getPostFileNames()
    .map(readPostMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** 정적 경로 생성을 위한 slug 목록을 반환합니다. */
export function getAllSlugs(): string[] {
  return getPostFileNames().map((name) => name.replace(/\.md$/, ""));
}

/** 단일 글의 메타데이터와 HTML로 변환된 본문을 반환합니다. 없으면 null. */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    date: typeof data.date === "string" ? data.date : "",
    excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
    contentHtml,
  };
}
