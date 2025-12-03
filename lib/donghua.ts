const BASE_URL = "https://www.sankavollerei.com/anime/donghua";

export interface Donghua {
  title: string;
  slug: string;
  thumbnail?: string;
  episode?: string;
  status?: string;
  rating?: string;
}

export async function fetchDonghuaHome(page: number = 1) {
  const response = await fetch(`${BASE_URL}/home/${page}`);
  return response.json();
}

export async function fetchDonghuaOngoing(page: number = 1) {
  const response = await fetch(`${BASE_URL}/ongoing/${page}`);
  return response.json();
}

export async function fetchDonghuaCompleted(page: number = 1) {
  const response = await fetch(`${BASE_URL}/completed/${page}`);
  return response.json();
}

export async function fetchDonghuaLatest(page: number = 1) {
  const response = await fetch(`${BASE_URL}/latest/${page}`);
  return response.json();
}

export async function fetchDonghuaSchedule() {
  const response = await fetch(`${BASE_URL}/schedule`);
  return response.json();
}

export async function fetchDonghuaByLetter(letter: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/az-list/${letter}/${page}`);
  return response.json();
}

export async function searchDonghua(keyword: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/search/${encodeURIComponent(keyword)}/${page}`);
  return response.json();
}

export async function fetchDonghuaDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/detail/${slug}`);
  return response.json();
}

export async function fetchDonghuaEpisode(slug: string) {
  const response = await fetch(`${BASE_URL}/episode/${slug}`);
  return response.json();
}

export async function fetchDonghuaGenres() {
  const response = await fetch(`${BASE_URL}/genres`);
  return response.json();
}

export async function fetchDonghuaByGenre(slug: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/genres/${slug}/${page}`);
  return response.json();
}

export async function fetchDonghuaBySeasons(year?: number) {
  const url = year ? `${BASE_URL}/seasons/${year}` : `${BASE_URL}/seasons`;
  const response = await fetch(url);
  return response.json();
}
