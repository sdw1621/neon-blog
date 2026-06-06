/** "2026-06-06" → "2026년 6월 6일" 형태로 변환합니다. 형식이 다르면 원본을 그대로 반환합니다. */
export function formatDate(date: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  if (!match) return date;
  const [, year, month, day] = match;
  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}
