"use client"
import React from 'react';
import { useRouter } from 'next/navigation'

export const IconCategoryMovies = ({ className = "" }) => {
    return (
        <svg
            className={className}
            width='1em'
            height='1em'
            viewBox='0 0 12 12'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z'
                fill='#FFF'
                opacity='.75'
            />
        </svg>
    )
}


export const IconCategoryTV = ({ className = "" }) => {
    return (
        <svg
            className={className}
            width='1em'
            height='1em'
            viewBox='0 0 12 12'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z'
                fill='#FFF'
                opacity='.75'
            />
        </svg>
    )
}

export const IconSearch = ({ className = "" }) => {
    return <svg
        className={className}
        fill='currentColor'
        width='1em'
        height='1em'
        viewBox='0 0 32 32'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z' />
    </svg>
}

export const AppLogo = () => {
    return <svg
        className='h-[20px] w-[25px] lg:h-[25.6px] lg:w-[32px]'
        width='1em'
        height='1em'
        viewBox='0 0 33 27'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z'
            fill='#FC4747'
        />
    </svg>
}

export const IconNavHome = () => {
    const router = useRouter();
    return <svg
        className={router.pathname == '/' ? 'active-link' : 'icon-nav'}
        fill='currentColor'
        width='1em'
        height='1em'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z' />
    </svg>
}

export const IconNavMovie = () => {
    const router = useRouter();
    return <svg
        className={router.pathname == '/movie' ? 'active-link' : 'icon-nav'}
        fill='currentColor'
        width='1em'
        height='1em'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z' />
    </svg>
}

export const IconNavTv = () => {
    const router = useRouter();
    return <svg
        className={router.pathname == '/tv' ? 'active-link' : 'icon-nav'}
        fill='currentColor'
        width='1em'
        height='1em'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path d='M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z' />
    </svg>
}