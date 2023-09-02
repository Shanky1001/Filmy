
import Image from 'next/image';
import { renderYear, renderCategoryIcon, renderCategoryText } from '@/utils';

const Card = ({ id, category, rating, src, title, year }) => {
    return (
        <div
            className='card-hover-animation mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer'
            onClick={handleClick}>
            <CardImage src={src} alt={title} />
            <CardInfo
                id={id}
                category={category}
                rating={rating}
                title={title}
                year={year}
            />
        </div>
    )
}

export default Card

export const CardImage = ({ isTrending = false, src, alt }) => {
    return (
        <div className='relative w-full rounded-lg'>
            <div
                className={
                    isTrending
                        ? 'relative h-[140px] w-[240px] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-app-dark-blue after:opacity-50 after:content-[""] sm:h-[230px] sm:w-[470px]'
                        : 'relative h-[133px] md:h-[140px] lg:h-[174px]'
                }>
                <Image
                    className='rounded-lg'
                    width={30}
                    height={30}
                    src={src}
                    alt={alt}
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                    //   blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    //     shimmer(240, 140)
                    //   )}`}
                    unoptimized
                />
            </div>
        </div>
    )
}

export const CardInfo = ({ category,
    isTrending = false,
    rating,
    title,
    year }) => {
    return (
        <div
            className={
                isTrending
                    ? 'absolute left-4 bottom-4 z-40 h-fit w-fit truncate text-ellipsis'
                    : null
            }
        >
            <div
                className={
                    isTrending
                        ? 'mt-2 mb-1 flex text-[11px] font-light text-app-pure-white md:text-[15px]'
                        : 'mt-2 mb-1 flex text-[11px] font-light text-app-grey md:text-[13px]'
                }
            >
                <p>{renderYear(year)}</p>
                <div
                    className={
                        isTrending
                            ? 'flex items-center px-[8px] before:content-["•"]'
                            : 'flex items-center px-[6px] before:content-["•"]'
                    }
                >
                    {renderCategoryIcon(category)}
                    <p className={isTrending ? 'pl-[6px] pr-[6px]' : 'pl-1 pr-1'}>
                        {renderCategoryText(category)}
                    </p>
                </div>
            </div>
            <h2
                className={
                    isTrending
                        ? 'md:heading-sm text-ellips w-[200px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[420px] md:h-6'
                        : 'md:heading-xs text-ellips w-[150px] truncate text-sm font-bold capitalize text-app-pure-white sm:w-[180px] md:w-[200px] lg:w-[268px]'
                }
            >
                {title}
            </h2>
        </div>
    )
}