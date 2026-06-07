import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/date";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article>
      <Link
        href="/"
        className="text-sm text-neon-pink transition-[text-shadow] hover:[text-shadow:0_0_8px_rgba(255,43,214,0.6)]"
      >
        ← cd ..
      </Link>

      <header className="mt-8">
        <time className="text-sm text-neon-green">{formatDate(post.date)}</time>
        <h1 className="glow-cyan mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <hr className="neon-rule mt-6" />
      </header>

      <div
        className="prose prose-invert prose-neon mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <hr className="neon-rule mt-12 opacity-60" />
      <Link
        href="/"
        className="mt-6 inline-block text-sm text-neon-purple hover:underline"
      >
        ← 목록으로 돌아가기
      </Link>
    </article>
  );
}
