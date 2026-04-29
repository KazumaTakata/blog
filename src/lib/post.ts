export function readingMinutes(body: string | undefined): number {
  if (!body) return 1;
  const cjk = (body.match(/[぀-ヿ㐀-䶿一-鿿＀-￯]/gu) || []).length;
  const latin = body
    .replace(/[぀-ヿ㐀-䶿一-鿿＀-￯]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(cjk / 600 + latin / 200));
  return minutes;
}

export function primaryTag(tags?: string[]): string {
  if (!tags || tags.length === 0) return 'note';
  const t = tags[0].toLowerCase();
  return t.replace(/\s+/g, '-').slice(0, 12);
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function wordCount(body: string | undefined): number {
  if (!body) return 0;
  const cjk = (body.match(/[぀-ヿ㐀-䶿一-鿿＀-￯]/gu) || []).length;
  const latin = body
    .replace(/[぀-ヿ㐀-䶿一-鿿＀-￯]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return cjk + latin;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
