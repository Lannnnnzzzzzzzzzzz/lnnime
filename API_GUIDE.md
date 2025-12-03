# Aichiow API Integration Guide

## Base URL
**Main API Base**: `https://www.sankavollerei.com`

All endpoints are accessed through this single base URL with different path prefixes.

---

## 1. Anime API (Otakudesu)

### Internal API Routes
All anime endpoints are proxied through: `/api/otakudesu/[...slug]`

### Available Endpoints

#### Home Page
```
GET /api/otakudesu/home
External: https://www.sankavollerei.com/anime/home
```

#### Schedule
```
GET /api/otakudesu/schedule
External: https://www.sankavollerei.com/anime/schedule
```

#### Anime Detail
```
GET /api/otakudesu/anime/:slug
Example: /api/otakudesu/anime/akamoto-day-part-2-sub-indo
External: https://www.sankavollerei.com/anime/anime/:slug
```

#### Complete Anime (Paginated)
```
GET /api/otakudesu/complete-anime/:page
Example: /api/otakudesu/complete-anime/2
```

#### Ongoing Anime
```
GET /api/otakudesu/ongoing-anime?page=1
```

#### Genres List
```
GET /api/otakudesu/genre
```

#### Anime by Genre
```
GET /api/otakudesu/genre/:slug?page=1
Example: /api/otakudesu/genre/action?page=1
```

#### Episode Detail & Streaming
```
GET /api/otakudesu/episode/:slug
Example: /api/otakudesu/episode/mebsn-episode-1-sub-indo
```

#### Search
```
GET /api/otakudesu/search/:keyword
Example: /api/otakudesu/search/boruto
```

#### Batch Download
```
GET /api/otakudesu/batch/:slug
```

#### Stream Server URL
```
GET /api/otakudesu/server/:serverId
Example: /api/otakudesu/server/187226-0-720p
```

#### All Anime
```
GET /api/otakudesu/unlimited
```

---

## 2. Donghua API

### Internal API Routes
All donghua endpoints are proxied through: `/api/donghua/[...slug]`

### Available Endpoints

#### Home
```
GET /api/donghua/home/:page
Example: /api/donghua/home/1
External: https://www.sankavollerei.com/anime/donghua/home/1
```

#### Ongoing
```
GET /api/donghua/ongoing/:page
```

#### Completed
```
GET /api/donghua/completed/:page
```

#### Latest Episodes
```
GET /api/donghua/latest/:page
```

#### Schedule
```
GET /api/donghua/schedule
```

#### A-Z List
```
GET /api/donghua/az-list/:letter/:page
Example: /api/donghua/az-list/a/1
```

#### Search
```
GET /api/donghua/search/:keyword/:page
Example: /api/donghua/search/Little Fairy Yao/1
```

#### Detail
```
GET /api/donghua/detail/:slug
Example: /api/donghua/detail/little-fairy-yao
```

#### Episode Streaming
```
GET /api/donghua/episode/:slug
Example: /api/donghua/episode/little-fairy-yao-episode-03-subtitle-indonesia
```

#### Genres List
```
GET /api/donghua/genres
```

#### By Genre
```
GET /api/donghua/genres/:slug/:page
Example: /api/donghua/genres/action/1
```

#### By Season/Year
```
GET /api/donghua/seasons/:year?
Example: /api/donghua/seasons/2023
```

---

## 3. Comic API (Manga/Manhwa/Manhua)

### Internal API Routes
All comic endpoints are proxied through: `/api/comic/[...slug]`

### Available Endpoints

#### Unlimited Data (6000+ comics)
```
GET /api/comic/unlimited
External: https://www.sankavollerei.com/comic/unlimited
```

#### Infinite Scroll
```
GET /api/comic/scroll
```

#### Real-time Data
```
GET /api/comic/realtime
```

#### Latest Comics
```
GET /api/comic/terbaru
```

#### Popular Comics
```
GET /api/comic/populer
```

#### Search
```
GET /api/comic/search?q=naruto
```

#### Comic Detail
```
GET /api/comic/comic/:slug
Example: /api/comic/comic/naruto
```

#### Read Chapter
```
GET /api/comic/chapter/:slug
```

#### Trending Comics
```
GET /api/comic/trending
```

#### Filter by Type
```
GET /api/comic/type/:type
Types: manga, manhwa, manhua
Example: /api/comic/type/manhwa
```

#### Homepage Data
```
GET /api/comic/homepage
```

#### Chapter Navigation
```
GET /api/comic/chapter/:slug/navigation
```

#### Genres List
```
GET /api/comic/genres
```

#### Random Comics
```
GET /api/comic/random
```

#### Infinite Load
```
GET /api/comic/infinite
```

#### Browse with Filters
```
GET /api/comic/browse
```

#### By Genre
```
GET /api/comic/genre/:genre
Example: /api/comic/genre/action
```

#### Advanced Search
```
GET /api/comic/advanced-search?[params]
```

#### Recommendations
```
GET /api/comic/recommendations
```

#### Colored Comics
```
GET /api/comic/berwarna/:page
```

#### Library/Pustaka
```
GET /api/comic/pustaka/:page
```

#### Statistics
```
GET /api/comic/stats
GET /api/comic/fullstats
```

---

## Usage Examples

### Fetching Anime Home
```typescript
// Using internal API
const response = await fetch('/api/otakudesu/home');
const data = await response.json();

// Using library function
import { fetchHome } from '@/lib/otakudesu';
const data = await fetchHome();
```

### Searching Donghua
```typescript
// Using internal API
const response = await fetch('/api/donghua/search/Little Fairy Yao/1');
const data = await response.json();

// Using library function
import { searchDonghua } from '@/lib/donghua';
const results = await searchDonghua('Little Fairy Yao', 1);
```

### Getting Comic Details
```typescript
// Using internal API
const response = await fetch('/api/comic/comic/one-piece');
const data = await response.json();

// Using library function
import { fetchComicDetail } from '@/lib/comic';
const comic = await fetchComicDetail('one-piece');
```

---

## API Architecture

### Proxy Pattern
All external APIs are proxied through Next.js API routes:

```
Client Request → Next.js API Route → External API → Response
```

**Benefits:**
- No CORS issues
- API URL abstraction
- Potential for caching
- Request/response transformation
- Error handling consistency

### Catch-all Routes
Uses dynamic catch-all routes `[...slug]` for maximum flexibility:

```typescript
// pages/api/otakudesu/[...slug].ts
// Handles: /api/otakudesu/home, /api/otakudesu/anime/slug, etc.
```

---

## Error Handling

### Error Response Format
```json
{
  "error": "Error message",
  "message": "Detailed description"
}
```

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request (invalid parameters)
- `404` - Not Found
- `405` - Method Not Allowed
- `500` - Internal Server Error

---

## Best Practices

### 1. Use Library Functions
```typescript
// ✅ Good
import { fetchHome } from '@/lib/otakudesu';
const data = await fetchHome();

// ❌ Avoid
const data = await fetch('https://www.sankavollerei.com/anime/home');
```

### 2. Error Handling
```typescript
try {
  const data = await fetchHome();
} catch (error) {
  console.error('Failed to fetch:', error);
  // Handle error appropriately
}
```

### 3. Use React Query/SWR
```typescript
import { useQuery } from '@tanstack/react-query';
import { fetchHome } from '@/lib/otakudesu';

function Component() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['anime-home'],
    queryFn: fetchHome,
  });
}
```

### 4. Caching
Consider implementing caching strategies:
- Client-side: SWR, React Query
- Server-side: Redis, Memory cache
- CDN: Cloudflare, Vercel Edge

---

## Rate Limiting

External APIs may have rate limits. Implement:
- Request throttling
- Retry logic with exponential backoff
- Caching to reduce requests

---

## Support & Troubleshooting

### Common Issues

**CORS Errors**
- Use internal API routes (`/api/*`)
- Never fetch directly from external API on client

**404 Not Found**
- Check slug/parameter format
- Verify endpoint exists in API

**Slow Responses**
- External API may be slow
- Implement loading states
- Consider caching

---

## API Summary

| Category | Endpoints | Base Path |
|----------|-----------|-----------|
| Anime | 12 endpoints | `/api/otakudesu/*` |
| Donghua | 12 endpoints | `/api/donghua/*` |
| Comic | 26 endpoints | `/api/comic/*` |
| **Total** | **50+ endpoints** | - |

---

**Last Updated**: 2025-12-03
**API Version**: 1.0
**Base URL**: `https://www.sankavollerei.com`
