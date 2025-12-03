const BASE_URL = "https://www.sankavollerei.com";

export interface Comic {
  title: string;
  slug: string;
  thumbnail?: string;
  type?: string;
  rating?: string;
  chapters?: string;
}

export async function fetchUnlimitedComics() {
  const response = await fetch(`${BASE_URL}/comic/unlimited`);
  return response.json();
}

export async function fetchScrollComics() {
  const response = await fetch(`${BASE_URL}/comic/scroll`);
  return response.json();
}

export async function fetchRealtimeComics() {
  const response = await fetch(`${BASE_URL}/comic/realtime`);
  return response.json();
}

export async function fetchLatestComics() {
  const response = await fetch(`${BASE_URL}/comic/terbaru`);
  return response.json();
}

export async function fetchPopularComics() {
  const response = await fetch(`${BASE_URL}/comic/populer`);
  return response.json();
}

export async function searchComics(query: string) {
  const response = await fetch(`${BASE_URL}/comic/search?q=${encodeURIComponent(query)}`);
  return response.json();
}

export async function fetchComicDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/comic/comic/${slug}`);
  return response.json();
}

export async function fetchChapter(slug: string) {
  const response = await fetch(`${BASE_URL}/comic/chapter/${slug}`);
  return response.json();
}

export async function fetchTrendingComics() {
  const response = await fetch(`${BASE_URL}/comic/trending`);
  return response.json();
}

export async function fetchComicsByType(type: string) {
  const response = await fetch(`${BASE_URL}/comic/type/${type}`);
  return response.json();
}

export async function fetchHomepageData() {
  const response = await fetch(`${BASE_URL}/comic/homepage`);
  return response.json();
}

export async function fetchChapterNavigation(slug: string) {
  const response = await fetch(`${BASE_URL}/comic/chapter/${slug}/navigation`);
  return response.json();
}

export async function fetchComicGenres() {
  const response = await fetch(`${BASE_URL}/comic/genres`);
  return response.json();
}

export async function fetchRandomComics() {
  const response = await fetch(`${BASE_URL}/comic/random`);
  return response.json();
}

export async function fetchInfiniteComics() {
  const response = await fetch(`${BASE_URL}/comic/infinite`);
  return response.json();
}

export async function browseComics() {
  const response = await fetch(`${BASE_URL}/comic/browse`);
  return response.json();
}

export async function fetchComicsByGenre(genre: string) {
  const response = await fetch(`${BASE_URL}/comic/genre/${genre}`);
  return response.json();
}

export async function advancedSearchComics(params: Record<string, string>) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/comic/advanced-search?${query}`);
  return response.json();
}

export async function fetchRecommendations() {
  const response = await fetch(`${BASE_URL}/comic/recommendations`);
  return response.json();
}

export async function fetchColoredComics(page: number = 1) {
  const response = await fetch(`${BASE_URL}/comic/berwarna/${page}`);
  return response.json();
}

export async function fetchLibrary(page: number = 1) {
  const response = await fetch(`${BASE_URL}/comic/pustaka/${page}`);
  return response.json();
}

export async function fetchStats() {
  const response = await fetch(`${BASE_URL}/comic/stats`);
  return response.json();
}

export async function fetchFullStats() {
  const response = await fetch(`${BASE_URL}/comic/fullstats`);
  return response.json();
}
