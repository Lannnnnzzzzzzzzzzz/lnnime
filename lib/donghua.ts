const BASE_URL = "https://www.sankavollerei.com";

export interface Donghua {
  title: string;
  slug: string;
  thumbnail?: string;
  episode?: string;
  status?: string;
  rating?: string;
}

export async function fetchDonghuaHome(page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/donghua/home/${page}`);
  return response.json();
}

export async function fetchDonghuaOngoing(page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/donghua/ongoing/${page}`);
  return response.json();
}

export async function fetchDonghuaCompleted(page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/donghua/completed/${page}`);
  return response.json();
}

export async function fetchDonghuaLatest(page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/donghua/latest/${page}`);
  return response.json();
}

export async function fetchDonghuaSchedule() {
  const response = await fetch(`${BASE_URL}/anime/donghua/schedule`);
  return response.json();
}

export async function fetchDonghuaByLetter(letter: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/donghua/az-list/${letter}/${page}`);
  return response.json();
}

export async function searchDonghua(keyword: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/donghua/search/${encodeURIComponent(keyword)}/${page}`);
  return response.json();
}

export async function fetchDonghuaDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/anime/donghua/detail/${slug}`);
  return response.json();
}

export async function fetchDonghuaEpisode(slug: string) {
  const response = await fetch(`${BASE_URL}/anime/donghua/episode/${slug}`);
  return response.json();
}

export async function fetchDonghuaGenres() {
  const response = await fetch(`${BASE_URL}/anime/donghua/genres`);
  return response.json();
}

export async function fetchDonghuaByGenre(slug: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/donghua/genres/${slug}/${page}`);
  return response.json();
}

export async function fetchDonghuaBySeasons(year?: number) {
  const url = year ? `${BASE_URL}/anime/donghua/seasons/${year}` : `${BASE_URL}/anime/donghua/seasons`;
  const response = await fetch(url);
  return response.json();
}
