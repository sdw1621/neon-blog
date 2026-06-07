# neon-blog

검정 배경과 네온 색상으로 꾸민 **Next.js + 마크다운** 개인 블로그입니다.
글은 모두 `content/posts/`의 `.md` 파일로 관리되며, 빌드 시 정적 페이지로 생성됩니다.

## 기술 스택

- **Next.js (App Router)** + **TypeScript** — 정적 생성(SSG)
- **Tailwind CSS v4** + `@tailwindcss/typography` — 네온 다크 테마
- **마크다운** — `gray-matter`(frontmatter) + `remark` / `remark-gfm`(본문 변환)

## 시작하기

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 새 글 작성하기

`content/posts/` 폴더에 `.md` 파일을 추가하면 자동으로 목록에 반영됩니다.
파일 이름이 그대로 URL slug가 됩니다. (예: `my-post.md` → `/posts/my-post`)

```markdown
---
title: "글 제목"
date: "2026-06-07"
excerpt: "글 목록에 표시될 한 줄 요약"
---

# 글 제목

본문을 마크다운으로 작성합니다.
```

| 필드 | 설명 |
| --- | --- |
| `title` | 글 제목 (목록·상세·브라우저 탭 제목) |
| `date` | 발행일 `YYYY-MM-DD` (목록은 최신순 정렬) |
| `excerpt` | 목록에 보이는 요약 |

## 프로젝트 구조

```
content/posts/          # 마크다운 글 (콘텐츠)
src/lib/posts.ts        # 마크다운 로딩 (getAllPosts / getPostBySlug / getAllSlugs)
src/lib/date.ts         # 날짜 포맷 유틸
src/app/page.tsx        # 글 목록
src/app/posts/[slug]/   # 글 상세
src/app/layout.tsx      # 공통 레이아웃 (헤더/푸터)
src/app/globals.css     # 네온 다크 테마
```

## 빌드 & 배포

```bash
npm run build   # 정적 페이지 생성
npm run start   # 프로덕션 서버 실행
```

[Vercel](https://vercel.com/new)에 이 저장소를 연결하면 `git push`마다 자동 배포됩니다.
