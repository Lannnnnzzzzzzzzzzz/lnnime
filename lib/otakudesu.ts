const BASE_URL = "https://www.sankavollerei.com/anime";

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
  const response = await fetch(`${BASE_URL}/home`);
  return response.json();
}

export async function fetchSchedule() {
  const response = await fetch(`${BASE_URL}/schedule`);
  return response.json();
}

export async function fetchAnimeDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/anime/${slug}`);
  return response.json();
}

export async function fetchCompleteAnime(page: number = 1) {
  const response = await fetch(`${BASE_URL}/complete-anime/${page}`);
  return response.json();
}

export async function fetchOngoingAnime(page: number = 1) {
  const response = await fetch(`${BASE_URL}/ongoing-anime?page=${page}`);
  return response.json();
}

export async function fetchGenres() {
  const response = await fetch(`${BASE_URL}/genre`);
  return response.json();
}

export async function fetchAnimeByGenre(slug: string, page: number = 1) {
  const response = await fetch(`${BASE_URL}/genre/${slug}?page=${page}`);
  return response.json();
}

export async function fetchEpisodeDetail(slug: string) {
  const response = await fetch(`${BASE_URL}/episode/${slug}`);
  return response.json();
}

export async function searchAnime(keyword: string) {
  const response = await fetch(`${BASE_URL}/search/${encodeURIComponent(keyword)}`);
  return response.json();
}

export async function fetchBatch(slug: string) {
  const response = await fetch(`${BASE_URL}/batch/${slug}`);
  return response.json();
}

export async function fetchStreamServer(serverId: string) {
  const response = await fetch(`${BASE_URL}/server/${serverId}`);
  return response.json();
}

export async function fetchAllAnime() {
  const response = await fetch(`${BASE_URL}/unlimited`);
  return response.json();
}
