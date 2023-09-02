"use client";

import { IconCategoryTV, IconCategoryMovies } from "@/icons";
import { v4 as uuidv4 } from 'uuid'

export const pathToSearchAll = '/search/'
export const pathToSearchMovie = '/search/movie/'
export const pathToSearchTV = '/search/tv/'
export const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

export const sliceArray = (arr, limit) => {
  return arr.slice(0, limit)
}

export const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const renderYear = (year) => {
  if (!year) {
    return 'N/A'
  } else {
    return year.substring(0, 4)
  }
}


export const renderCategoryIcon = (category) => {
  if (category === 'movie') {
    return <IconCategoryMovies className='pl-1 text-base' />
  } else {
    return <IconCategoryTV className='pl-1 text-base' />
  }
}

export const renderCategoryText = (category) => {
  if (category === 'movie') {
    return 'Movie'
  } else {
    return 'TV Series'
  }
}

export const renderRating = (rating) => {
  if (rating === true) {
    return '18+'
  } else {
    return 'E'
  }
}

export const renderResults = (array, Component, media_type) => {
  return array.map(item => (
    <Component
      key={item.id || uuidv4()}
      id={item.id}
      category={item.media_type || media_type}
      rating={item.adult}
      src={
        item.backdrop_path
          ? `${TMDB_IMAGE_ENDPOINT}/${item.backdrop_path}`
          : `${TMDB_IMAGE_ENDPOINT}/${item.poster_path}`
      }
      title={
        item.title ? item.title : item.original_name || item.original_title
      }
      year={item.release_date || item.first_air_date}
    />
  ))
}