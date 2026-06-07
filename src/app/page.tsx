import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/date";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="font-mono text-xl">
        <span className="text-neon-green">$</span>{" "}
        <span className="glow-cyan font-bold">posts</span>{" "}
        <span className="text-muted">--all</span>
        <span className="text-muted"> ({posts.length})</span>
      </h1>

      {posts.length === 0 ? (
        <p className="mt-8 text-muted">아직 작성된 글이 없습니다.</p>
      ) : (
        <ul className="mt-10 flex flex-col gap-5">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="neon-card block rounded-lg p-5"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="glow-pink font-bold">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <time className="text-neon-green">
                    {formatDate(post.date)}
                  </time>
                </div>
                <h2 className="glow-cyan mt-3 text-xl font-bold tracking-tight">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fg/80">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block text-xs text-neon-purple">
                  read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
