'use client'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBookOpen,
  FaBook,
  FaUsers,
  FaPlayCircle,
  FaTv,
  FaFeatherAlt,
  FaChevronDown
} from 'react-icons/fa'

export default function LandingPage() {
  const [heroTextIndex, setHeroTextIndex] = useState(0)
  const [lang, setLang] = useState<'EN' | 'ID'>('EN')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const heroTexts = {
    EN: [
      'Your gateway to anime, manga, manhwa, and light novels — discover the stories you love, anytime, anywhere.',
      'Where recommendations, reading, and community meet. Trending lists, new releases, and an immersive reading experience.',
      'Dive into endless imagination from classics to the freshest chapters you can’t miss.'
    ],
    ID: [
      'Gerbangmu ke anime, manga, manhwa, dan light novel — temukan cerita yang kamu sukai, kapan saja, di mana saja.',
      'Tempat rekomendasi, membaca, dan komunitas berkumpul. Daftar tren, rilisan baru, dan pengalaman membaca yang imersif.',
      'Menyelam dalam imajinasi tanpa batas dari klasik hingga chapter terbaru yang wajib kamu baca.'
    ]
  }

  useEffect(() => {
    setHeroTextIndex(Math.floor(Math.random() * heroTexts[lang].length))
  }, [lang])

  const BackgroundDots = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0, 0.03, 0],
            y: [0, -30, 0],
            x: [0, 15, -15]
          }}
          transition={{ repeat: Infinity, duration: 12 + i, delay: i * 0.7 }}
          className="absolute bg-white rounded-full blur-3xl"
          style={{
            width: 180 + i * 10,
            height: 180 + i * 10,
            left: `${i * 10}%`,
            top: `${10 + i * 8}%`
          }}
        />
      ))}
    </div>
  )

  const features = [
    {
      id: 'anime',
      title: 'Anime',
      href: '/home',
      desc:
        lang === 'EN'
          ? 'Trailers, schedules, and trending recommendations for every anime fan.'
          : 'Trailer, jadwal, dan rekomendasi tren untuk setiap penggemar anime.',
      icon: <FaTv className="w-8 h-8" />
    },
    {
      id: 'manga',
      title: 'Manga',
      href: '/manga',
      desc:
        lang === 'EN'
          ? 'Integrated reader, latest chapters, and a comprehensive collection.'
          : 'Reader terintegrasi, chapter terbaru, dan koleksi lengkap.',
      icon: <FaBook className="w-8 h-8" />
    },
    {
      id: 'manhwa',
      title: 'Manhwa',
      href: '/manhwa',
      desc:
        lang === 'EN'
          ? 'Popular Korean content with organized chapters and smart recommendations.'
          : 'Konten Korea populer dengan chapter rapi dan rekomendasi pintar.',
      icon: <FaBookOpen className="w-8 h-8" />
    },
    {
      id: 'donghua',
      title: 'Donghua',
      href: '/donghua',
      desc:
        lang === 'EN'
          ? 'Chinese animation with subtitles, latest episodes, and recommendations.'
          : 'Animasi China dengan subtitle, episode terbaru, dan rekomendasi.',
      icon: <FaFeatherAlt className="w-8 h-8" />
    }
  ]

  const faqs = [
    {
      q: lang === 'EN' ? 'Is Aichiow free to use?' : 'Apakah Aichiow gratis digunakan?',
      a: lang === 'EN'
        ? 'Yes, Aichiow is completely free. Some advanced features may require login.'
        : 'Ya, Aichiow sepenuhnya gratis. Beberapa fitur lanjutan mungkin memerlukan login.'
    },
    {
      q: lang === 'EN' ? 'Do I need an account?' : 'Apakah saya perlu akun?',
      a: lang === 'EN'
        ? 'You can explore most content without an account, but login unlocks favorites, history, and community features.'
        : 'Kamu bisa menjelajah sebagian besar konten tanpa akun, tapi login membuka fitur favorit, riwayat, dan komunitas.'
    },
    {
      q: lang === 'EN' ? 'What sources are used?' : 'Sumber apa yang digunakan?',
      a: lang === 'EN'
        ? 'We integrate AniList for anime data and MangaDex for manga. More sources will be added soon.'
        : 'Kami mengintegrasikan AniList untuk data anime dan MangaDex untuk manga. Sumber lain segera ditambahkan.'
    }
  ]

  return (
    <>
      <Head>
        <title>Aichiow Anime, Manga, Manhwa & Light Novel Hub</title>
        <meta
          name="description"
          content="Aichiow your gateway to anime, manga, manhwa, and light novels."
        />
      </Head>

      <main className="relative min-h-screen bg-black text-white overflow-hidden">
        <BackgroundDots />

        <div className="relative z-20 w-full max-w-[100rem] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-16 lg:py-20">
          <div className="flex items-center justify-between gap-4 mb-10">
            <Link href="/home" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Aichiow"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="leading-tight">
                <div className="font-extrabold text-xl sm:text-2xl tracking-tight">
                  AICHIOW
                </div>
                <div className="text-xs sm:text-sm text-gray-400 -mt-1">
                  All you need, right here.
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-3 sm:gap-5">
              <nav className="hidden md:flex gap-4 text-sm text-gray-300">
                <Link href="/home" className="hover:text-white">ANIME</Link>
                <Link href="/manga" className="hover:text-white">MANGA</Link>
                <Link href="/manhwa" className="hover:text-white">MANHWA</Link>
                <Link href="/light-novel" className="hover:text-white">LIGHT NOVEL</Link>
                <Link href="/explore" className="hover:text-white">EXPLORE</Link>
                <Link href="/profile" className="hover:text-white">PROFILE</Link>
              </nav>

              <motion.button
                onClick={() => setLang(lang === 'EN' ? 'ID' : 'EN')}
                whileTap={{ scale: 0.9 }}
                className="relative w-20 h-9 flex items-center bg-white/10 rounded-full px-1 cursor-pointer overflow-hidden border border-white/20"
              >
                <motion.div
                  layout
                  className="absolute top-1 left-1 w-7 h-7 rounded-full bg-white shadow-lg"
                  animate={{ x: lang === 'EN' ? 0 : 40 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
                <span className="flex-1 text-center text-xs">EN</span>
                <span className="flex-1 text-center text-xs">ID</span>
              </motion.button>
            </div>
          </div>

          <section className="text-center py-10 sm:py-14">
            <motion.h1
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-2 pb-2 leading-[1.1] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              {lang === 'EN'
                ? 'The Ultimate Hub for Anime, Manga, Manhwa & Light Novels'
                : 'Pusat Utama untuk Anime, Manga, Manhwa & Light Novel'}
            </motion.h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={heroTextIndex + lang}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="mt-6 max-w-2xl mx-auto text-gray-300 px-2 sm:px-4 text-base sm:text-lg leading-relaxed"
              >
                {heroTexts[lang][heroTextIndex]}
              </motion.p>
            </AnimatePresence>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/explore"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 hover:scale-[1.02] transform transition w-full sm:w-auto justify-center"
              >
                <FaPlayCircle className="w-5 h-5" />
                <span className="font-semibold">
                  {lang === 'EN' ? 'Explore Now' : 'Jelajahi Sekarang'}
                </span>
              </Link>

              <Link
                href="/community"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/20 text-sm hover:bg-white/5 hover:border-white/30 transition w-full sm:w-auto justify-center"
              >
                <FaUsers className="w-4 h-4" />
                <span>{lang === 'EN' ? 'Community' : 'Komunitas'}</span>
              </Link>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-6">
              {lang === 'EN' ? 'What Aichiow Offers' : 'Apa yang Aichiow Tawarkan'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, idx) => (
                <Link key={f.id} href={f.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="group relative rounded-xl p-6 min-h-[180px] flex flex-col bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-white text-black">
                        {f.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{f.title}</div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-300 line-clamp-3 flex-1">{f.desc}</div>

                    <div className="mt-4 text-xs text-gray-400 group-hover:text-white transition">
                      {lang === 'EN' ? 'Learn more →' : 'Selengkapnya →'}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-6">
              {lang === 'EN'
                ? 'Meet Aichixia – Your AI Assistant'
                : 'Kenalan dengan Aichixia – Asisten AI Kamu'}
            </h3>
            <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="space-y-4 text-sm">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="px-4 py-2 rounded-lg bg-white text-black font-medium">
                    {lang === 'EN'
                      ? 'Hi Aichixia, recommend me a new anime this season!'
                      : 'Hai Aichixia, rekomendasiin anime baru musim ini dong!'}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-3 justify-end"
                >
                  <div className="px-4 py-2 rounded-lg bg-white/10 text-gray-200">
                    {lang === 'EN'
                      ? 'Sure! How about Sousou no Frieren? It’s trending this season with amazing reviews.'
                      : 'Tentu! Gimana kalau Sousou no Frieren? Lagi trending musim ini dengan ulasan keren.'}
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 flex justify-center">
                <Link
                  href="/aichixia"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 hover:scale-[1.02] transform transition"
                >
                  {lang === 'EN' ? 'Chat with Aichixia' : 'Ngobrol dengan Aichixia'}
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-6">
              {lang === 'EN'
                ? 'Frequently Asked Questions'
                : 'Pertanyaan yang Sering Diajukan'}
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((f, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{
                    backgroundColor:
                      openFAQ === i ? 'rgba(255,255,255,0.05)' : 'transparent'
                  }}
                  className="rounded-lg border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-4 text-left hover:text-white transition"
                  >
                    <span className="font-medium">{f.q}</span>
                    <motion.span
                      animate={{ rotate: openFAQ === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFAQ === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 text-gray-300 text-sm leading-relaxed"
                      >
                        {f.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </section>

          <footer className="mt-20 text-sm text-gray-400">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>© {new Date().getFullYear()} Aichiow Plus. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </footer>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      </main>
    </>
  )
}
