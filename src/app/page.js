"use client";
import SearchBar from "@/components/SearchBar/SearchBar";
import Collections from "@/components/Collections/Collections";
import { pathToSearchAll } from "@/utils";
import TrendingCard from "@/components/TrendingCard/TrendingCard";

export default function Home() {
  const limitNormal = 6
  const limitTrending = 10
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
     <SearchBar searchPath={pathToSearchAll} />
     <Collections
        isHomePage
        isTrending
        Component={TrendingCard}
        endpoint='/api/movie/trending/1'
        href='/movie/trending/1'
        limit={limitTrending}
        title='Trending'
      />
      <Collections
        isHomePage
        endpoint='/api/movie/popular/1'
        href='/movie/popular/1'
        limit={limitNormal}
        title='Popular'
      />
      <Collections
        isHomePage
        endpoint='/api/movie/now/1'
        href='/movie/now/1'
        limit={limitNormal}
        title='Now playing'
      />
      <Collections
        isHomePage
        endpoint='/api/movie/upcoming/1'
        href='/movie/upcoming/1'
        limit={limitNormal}
        title='Upcoming'
      />
      <Collections
        isHomePage
        endpoint='/api/movie/top/1'
        href='/movie/top/1'
        limit={limitNormal}
        title='Top rated'
      />

      {/* Collection of different groups of tv series */}
      <Collections
        isHomePage
        isTrending
        Component={TrendingCard}
        endpoint='/api/tv/trending/1'
        href='/tv/trending/1'
        limit={limitTrending}
        media_type='tv'
        title='Trending'
        type='tv series'
      />
      <Collections
        isHomePage
        endpoint='/api/tv/popular/1'
        href='/tv/popular/1'
        limit={limitNormal}
        media_type='tv'
        title='Popular'
        type='tv series'
      />
      <Collections
        isHomePage
        endpoint='/api/tv/airing/1'
        href='/tv/airing/1'
        limit={limitNormal}
        media_type='tv'
        title='Airing today'
        type='tv series'
      />
      <Collections
        isHomePage
        endpoint='/api/tv/onair/1'
        href='/tv/onair/1'
        limit={limitNormal}
        media_type='tv'
        title='On air'
        type='tv series'
      />
      <Collections
        isHomePage
        endpoint='/api/tv/top/1'
        href='/tv/top/1'
        limit={limitNormal}
        media_type='tv'
        title='Top rated'
        type='tv series'
      />
    </section>
  )
}
