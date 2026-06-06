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
    default: "My Blog",
    template: "%s · My Blog",
  },
  description: "Next.js와 마크다운으로 만든 개인 블로그",
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
        <header className="border-b border-black/10 dark:border-white/15">
          <div className="mx-auto w-full max-w-2xl px-4 py-5">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              My Blog
            </Link>
          </div>
        </header>

        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
          {children}
        </main>

        <footer className="border-t border-black/10 dark:border-white/15">
          <div className="mx-auto w-full max-w-2xl px-4 py-6 text-sm text-black/50 dark:text-white/50">
            © 2026 My Blog. Built with Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}
