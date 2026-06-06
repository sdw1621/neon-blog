---
title: "Next.js로 블로그를 만든 이유"
date: "2026-06-04"
excerpt: "정적 생성, SEO, 간편한 배포까지 — Next.js가 개인 블로그에 잘 맞는 이유를 정리했습니다."
---

# Next.js로 블로그를 만든 이유

개인 블로그를 만들 때 선택지는 많지만, 이 블로그는 **Next.js**를 골랐습니다.
이유는 크게 세 가지입니다.

## 1. 정적 생성 (SSG)

글은 자주 바뀌지 않습니다. Next.js의 `generateStaticParams`를 쓰면
빌드 시점에 모든 글을 미리 HTML로 만들어 둘 수 있어 매우 빠릅니다.

## 2. SEO에 유리

서버에서 완성된 HTML을 내려주기 때문에 검색 엔진이 내용을 잘 읽어갑니다.
글마다 `generateMetadata`로 제목과 설명을 지정할 수 있습니다.

## 3. 배포가 간단

Vercel에 연결하면 `git push`만으로 배포가 됩니다.

```ts
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}
```

작고 빠른 블로그에 잘 어울리는 선택이었습니다.
