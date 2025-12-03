"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Loader2, Play, Calendar } from "lucide-react";

export default function DonghuaPage() {
  const [ongoing, setOngoing] = useState<any[]>([]);
  const [latest, setLatest] = useState<any[]>([]);
  const [schedule, setSchedule] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [ongoingRes, latestRes, scheduleRes] = await Promise.all([
        fetch("/api/donghua/ongoing/1"),
        fetch("/api/donghua/latest/1"),
        fetch("/api/donghua/schedule"),
      ]);

      const [ongoingData, latestData, scheduleData] = await Promise.all([
        ongoingRes.json(),
        latestRes.json(),
        scheduleRes.json(),
      ]);

      setOngoing(ongoingData.data || []);
      setLatest(latestData.data || []);
      setSchedule(scheduleData.data || null);
    } catch (error) {
      console.error("Failed to load donghua data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setSearching(true);
      const res = await fetch(`/api/donghua/search/${encodeURIComponent(searchQuery)}/1`);
      const data = await res.json();
      setSearchResults(data.data || []);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setSearching(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-white animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Donghua - Chinese Animation | Aichiow</title>
        <meta name="description" content="Watch Chinese anime (Donghua) with subtitles" />
      </Head>

      <main className="min-h-screen bg-neutral-950 text-white pb-20">
        <div className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-950" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold mb-4"
            >
              Donghua Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              Discover amazing Chinese animation
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSearch}
              className="max-w-2xl mx-auto flex gap-3"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search donghua..."
                className="flex-1 px-6 py-4 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition"
              />
              <button
                type="submit"
                disabled={searching}
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition disabled:opacity-50"
              >
                {searching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              </button>
            </motion.form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {searchResults.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Search Results</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {searchResults.map((item, idx) => (
                  <DonghuaCard key={idx} item={item} />
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Currently Airing</h2>
              <Link href="/donghua/ongoing" className="text-gray-400 hover:text-white transition">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {ongoing.slice(0, 12).map((item, idx) => (
                <DonghuaCard key={idx} item={item} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Latest Episodes</h2>
              <Link href="/donghua/latest" className="text-gray-400 hover:text-white transition">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {latest.slice(0, 12).map((item, idx) => (
                <DonghuaCard key={idx} item={item} />
              ))}
            </div>
          </section>

          {schedule && (
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Release Schedule
              </h2>
              <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(schedule).map(([day, items]: [string, any]) => (
                    <div key={day} className="space-y-2">
                      <h3 className="font-semibold text-white/80">{day}</h3>
                      {Array.isArray(items) && items.map((item: any, idx: number) => (
                        <Link
                          key={idx}
                          href={`/donghua/${item.slug}`}
                          className="block text-sm text-gray-400 hover:text-white transition"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

function DonghuaCard({ item }: { item: any }) {
  return (
    <Link href={`/donghua/${item.slug}`} className="group block">
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition">
        {item.thumbnail && (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/50">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-sm font-semibold text-white line-clamp-2">
            {item.title}
          </h3>
          {item.episode && (
            <p className="text-xs text-gray-400 mt-1">{item.episode}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
