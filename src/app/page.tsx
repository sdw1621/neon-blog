import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/date";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">글 목록</h1>

      {posts.length === 0 ? (
        <p className="mt-6 text-black/60 dark:text-white/60">
          아직 작성된 글이 없습니다.
        </p>
      ) : (
        <ul className="mt-8 flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <Link href={`/posts/${post.slug}`} className="group block">
                  <time className="text-sm text-black/50 dark:text-white/50">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-black/70 dark:text-white/70">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
