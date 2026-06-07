import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "my-blog",
    template: "%s · my-blog",
  },
  description: "검정과 네온으로 기록하는 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 backdrop-blur-sm bg-bg/70">
          <div className="mx-auto w-full max-w-3xl px-5 pt-7 pb-4">
            <Link href="/" className="inline-flex items-baseline gap-2 group">
              <span className="glow-pink text-sm">~/</span>
              <span className="glow-cyan text-2xl font-bold tracking-tight">
                my-blog
              </span>
              <span className="glow-green ml-1 animate-pulse text-xl leading-none">
                _
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted">
              <span className="text-neon-green">//</span> 코드와 기록의 공간
            </p>
          </div>
          <hr className="neon-rule mx-auto w-full max-w-3xl" />
        </header>

        <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12">
          {children}
        </main>

        <footer className="mt-8">
          <hr className="neon-rule mx-auto w-full max-w-3xl opacity-60" />
          <div className="mx-auto w-full max-w-3xl px-5 py-6 text-xs text-muted">
            <span className="text-neon-pink">$</span> echo &quot;© 2026 my-blog
            — built with Next.js&quot;
          </div>
        </footer>
      </body>
    </html>
  );
}
