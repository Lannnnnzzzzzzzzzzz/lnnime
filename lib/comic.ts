const BASE_URL = "https://www.sankavollerei.com/comic";

export interface Comic {
  title: string;
  slug: string;
  thumbnail?: string;
  type?: string;
  rating?: string;
  chapters?: string;
}

export async function fetchUnlimitedComics() {
  const response = await fetch(`${BASE_URL}/unlimited`);
  return response.json();
}

export async function fetchScrollComics() {
  const response = await fetch(`${BASE_URL}/scroll`);
  return response.json();
}

export async function fetchRealtimeComics() {
  const response = await fetch(`${BASE_URL}/realtime`);
  return response.json();
}

export async function fetchLatestComics() {
  const response = await fetch(`${BASE_URL}/terbaru`);
  return response.json();
}

export async function fetchPopularComics() {
  const response = await fetch(`${BASE_URL}/populer`);
  return response.json();
}

export async function searchComics(query: string) {
  const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
  return response.json();
}

export async function fetchComicDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/comic/${slug}`);
  return response.json();
}

export async function fetchChapter(slug: string) {
  const response = await fetch(`${BASE_URL}/chapter/${slug}`);
  return response.json();
}

export async function fetchTrendingComics() {
  const response = await fetch(`${BASE_URL}/trending`);
  return response.json();
}

export async function fetchComicsByType(type: string) {
  const response = await fetch(`${BASE_URL}/type/${type}`);
  return response.json();
}

export async function fetchHomepageData() {
  const response = await fetch(`${BASE_URL}/homepage`);
  return response.json();
}

export async function fetchChapterNavigation(slug: string) {
  const response = await fetch(`${BASE_URL}/chapter/${slug}/navigation`);
  return response.json();
}

export async function fetchComicGenres() {
  const response = await fetch(`${BASE_URL}/genres`);
  return response.json();
}

export async function fetchRandomComics() {
  const response = await fetch(`${BASE_URL}/random`);
  return response.json();
}

export async function fetchInfiniteComics() {
  const response = await fetch(`${BASE_URL}/infinite`);
  return response.json();
}

export async function browseComics() {
  const response = await fetch(`${BASE_URL}/browse`);
  return response.json();
}

export async function fetchComicsByGenre(genre: string) {
  const response = await fetch(`${BASE_URL}/genre/${genre}`);
  return response.json();
}

export async function advancedSearchComics(params: Record<string, string>) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}/advanced-search?${query}`);
  return response.json();
}

export async function fetchRecommendations() {
  const response = await fetch(`${BASE_URL}/recommendations`);
  return response.json();
}

export async function fetchColoredComics(page: number = 1) {
  const response = await fetch(`${BASE_URL}/berwarna/${page}`);
  return response.json();
}

export async function fetchLibrary(page: number = 1) {
  const response = await fetch(`${BASE_URL}/pustaka/${page}`);
  return response.json();
}

export async function fetchStats() {
  const response = await fetch(`${BASE_URL}/stats`);
  return response.json();
}

export async function fetchFullStats() {
  const response = await fetch(`${BASE_URL}/fullstats`);
  return response.json();
}
