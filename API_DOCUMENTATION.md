# Aichiow API Documentation

## Overview
Aichiow mengintegrasikan 3 API utama untuk konten anime, donghua, dan comic/manga/manhwa.

## Base URLs

- **Anime (Otakudesu)**: `https://www.sankavollerei.com/anime`
- **Donghua**: `https://www.sankavollerei.com/anime/donghua`
- **Comic**: `https://www.sankavollerei.com/comic`

## Internal API Routes

Semua external API di-proxy melalui Next.js API routes untuk keamanan dan caching.

### 1. Otakudesu API (Anime)

**Base Route**: `/api/otakudesu/[...slug]`

#### Endpoints:

##### Home Page
```
GET /api/otakudesu/home
```
Response: Data halaman utama dengan anime terbaru

##### Schedule
```
GET /api/otakudesu/schedule
```
Response: Jadwal rilis anime per hari

##### Anime Detail
```
GET /api/otakudesu/anime/:slug
```
Example: `/api/otakudesu/anime/akamoto-day-part-2-sub-indo`

##### Complete Anime
```
GET /api/otakudesu/complete-anime/:page
```
Example: `/api/otakudesu/complete-anime/2`

##### Ongoing Anime
```
GET /api/otakudesu/ongoing-anime?page=1
```

##### Genres List
```
GET /api/otakudesu/genre
```

##### Anime by Genre
```
GET /api/otakudesu/genre/:slug?page=1
```
Example: `/api/otakudesu/genre/action?page=1`

##### Episode Detail
```
GET /api/otakudesu/episode/:slug
```
Example: `/api/otakudesu/episode/mebsn-episode-1-sub-indo`

##### Search
```
GET /api/otakudesu/search/:keyword
```
Example: `/api/otakudesu/search/boruto`

##### Batch Download
```
GET /api/otakudesu/batch/:slug
```

##### Stream Server
```
GET /api/otakudesu/server/:serverId
```
Example: `/api/otakudesu/server/187226-0-720p`

##### All Anime
```
GET /api/otakudesu/unlimited
```

---

### 2. Donghua API

**Base Route**: `/api/donghua/[...slug]`

#### Endpoints:

##### Home
```
GET /api/donghua/home/:page?
```
Example: `/api/donghua/home/1`

##### Ongoing
```
GET /api/donghua/ongoing/:page?
```

##### Completed
```
GET /api/donghua/completed/:page?
```

##### Latest
```
GET /api/donghua/latest/:page?
```

##### Schedule
```
GET /api/donghua/schedule
```

##### A-Z List
```
GET /api/donghua/az-list/:slug/:page?
```

##### Search
```
GET /api/donghua/search/:keyword/:page?
```
Example: `/api/donghua/search/Little Fairy Yao`

##### Detail
```
GET /api/donghua/detail/:slug
```
Example: `/api/donghua/detail/little-fairy-yao`

##### Episode
```
GET /api/donghua/episode/:slug
```

##### Genres
```
GET /api/donghua/genres
```

##### By Genre
```
GET /api/donghua/genres/:slug/:page?
```
Example: `/api/donghua/genres/action/1`

##### By Season/Year
```
GET /api/donghua/seasons/:year?
```
Example: `/api/donghua/seasons/2023`

---

### 3. Comic API (Manga/Manhwa/Manhua)

**Base Route**: `/api/comic/[...slug]`

#### Endpoints:

##### Unlimited Data
```
GET /api/comic/unlimited
```
Akses maksimum ke 6,297+ komik

##### Infinite Scroll
```
GET /api/comic/scroll
```

##### Real-time Data
```
GET /api/comic/realtime
```

##### Latest Comics
```
GET /api/comic/terbaru
```

##### Popular Comics
```
GET /api/comic/populer
```

##### Search
```
GET /api/comic/search?q=naruto
```

##### Comic Detail
```
GET /api/comic/comic/:slug
```

##### Read Chapter
```
GET /api/comic/chapter/:slug
```

##### Trending
```
GET /api/comic/trending
```

##### Full Statistics
```
GET /api/comic/fullstats
```

##### Filter by Type
```
GET /api/comic/type/:type
```
Types: manga, manhwa, manhua

##### Homepage Data
```
GET /api/comic/homepage
```

##### Chapter Navigation
```
GET /api/comic/chapter/:slug/navigation
```

##### Genres List
```
GET /api/comic/genres
```

##### Random Comics
```
GET /api/comic/random
```

##### Infinite Load
```
GET /api/comic/infinite
```

##### Browse Comics
```
GET /api/comic/browse
```

##### By Genre
```
GET /api/comic/genre/:genre
```

##### Advanced Search
```
GET /api/comic/advanced-search
```

##### Recommendations
```
GET /api/comic/recommendations
```

##### Colored Comics
```
GET /api/comic/berwarna/:page
```

##### Library
```
GET /api/comic/pustaka/:page
```

##### Statistics
```
GET /api/comic/stats
```

---

## Usage Examples

### JavaScript/TypeScript

#### Fetch Anime Home
```typescript
const response = await fetch('/api/otakudesu/home');
const data = await response.json();
```

#### Search Donghua
```typescript
const response = await fetch('/api/donghua/search/Little Fairy Yao/1');
const data = await response.json();
```

#### Get Comic Detail
```typescript
const response = await fetch('/api/comic/comic/naruto');
const data = await response.json();
```

### Using Library Functions

```typescript
import { fetchHome, searchAnime } from '@/lib/otakudesu';
import { fetchDonghuaHome, searchDonghua } from '@/lib/donghua';
import { fetchLatestComics, searchComics } from '@/lib/comic';

// Anime
const animeHome = await fetchHome();
const searchResults = await searchAnime('naruto');

// Donghua
const donghuaHome = await fetchDonghuaHome(1);
const donghuaResults = await searchDonghua('fairy', 1);

// Comic
const latestComics = await fetchLatestComics();
const comicResults = await searchComics('one piece');
```

---

## Error Handling

All APIs return consistent error format:

```json
{
  "error": "Error message",
  "message": "Detailed error description"
}
```

### Common Error Codes

- `400`: Bad Request - Invalid parameters
- `404`: Not Found - Resource doesn't exist
- `405`: Method Not Allowed - Wrong HTTP method
- `500`: Internal Server Error - API or server error

---

## Rate Limiting

External APIs may have rate limits. Recommendations:
- Implement client-side caching
- Use SWR or React Query for data fetching
- Add retry logic with exponential backoff

---

## Notes

- All API routes are serverless functions
- Responses are proxied through Next.js
- No CORS issues when calling from same domain
- External API availability may vary
- Some endpoints may return different data structures

---

## Support

For issues or questions:
- Check external API documentation
- Review server logs for errors
- Test endpoints directly in browser/Postman
