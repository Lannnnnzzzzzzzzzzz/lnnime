const BASE_URL = "https://www.sankavollerei.com";

export interface OtakudesuAnime {
  title: string;
  slug: string;
  thumbnail?: string;
  episode?: string;
  status?: string;
  rating?: string;
  genres?: string[];
}

export interface AnimeDetail {
  title: string;
  slug: string;
  thumbnail: string;
  synopsis: string;
  status: string;
  rating: string;
  genres: string[];
  episodes: Array<{
    episode: string;
    slug: string;
    date: string;
  }>;
  batch?: {
    slug: string;
  };
}

export interface EpisodeDetail {
  title: string;
  episode: string;
  servers: Array<{
    name: string;
    serverId: string;
    quality: string;
  }>;
  download: Array<{
    quality: string;
    links: Array<{
      server: string;
      url: string;
    }>;
  }>;
  prevEpisode?: string;
  nextEpisode?: string;
}

export async function fetchHome() {
  const response = await fetch(`${BASE_URL}/anime/home`);
  return response.json();
}

export async function fetchSchedule() {
  const response = await fetch(`${BASE_URL}/anime/schedule`);
  return response.json();
}

export async function fetchAnimeDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/anime/anime/${slug}`);
  return response.json();
}

export async function fetchCompleteAnime(page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/complete-anime/${page}`);
  return response.json();
}

export async function fetchOngoingAnime(page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/ongoing-anime?page=${page}`);
  return response.json();
}

export async function fetchGenres() {
  const response = await fetch(`${BASE_URL}/anime/genre`);
  return response.json();
}

export async function fetchAnimeByGenre(slug: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/anime/genre/${slug}?page=${page}`);
  return response.json();
}

export async function fetchEpisodeDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/anime/episode/${slug}`);
  return response.json();
}

export async function searchAnime(keyword: string) {
  const response = await fetch(`${BASE_URL}/anime/search/${encodeURIComponent(keyword)}`);
  return response.json();
}

export async function fetchBatch(slug: string) {
  const response = await fetch(`${BASE_URL}/anime/batch/${slug}`);
  return response.json();
}

export async function fetchStreamServer(serverId: string) {
  const response = await fetch(`${BASE_URL}/anime/server/${serverId}`);
  return response.json();
}

export async function fetchAllAnime() {
  const response = await fetch(`${BASE_URL}/anime/unlimited`);
  return response.json();
}
