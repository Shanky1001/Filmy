"use client"
import React from 'react'
import Heading from '../Common/Heading';
import Card from '../Common/Card';
import { renderResults, sliceArray } from '@/utils';

const Collections = ({ Component = Card,
  endpoint,
  href,
  isHomePage,
  isTrending = false,
  limit = 8,
  media_type = 'movie',
  title,
  type = 'movie' }) => {
  return (
    <section
      className={
        isTrending
          ? 'mb-6 h-full w-full overflow-hidden md:mb-10 lg:overflow-visible'
          : 'mb-6 md:mb-10'
      }>
      <Heading
        title={title}
        href={href}
        isHomePage={isHomePage}
        isTrending={isTrending}
        media_type={type}
      />
      <section
        className={
          isTrending
            ? 'h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2'
            : 'card-collection-wrapper'
        }>
        {renderResults(
          sliceArray(data.results || [], limit),
          Component,
          media_type
        )}
      </section>
    </section>
  )
}

export default Collections