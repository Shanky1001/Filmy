"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconSearch } from '@/icons';

const SearchBar = ({ placeholder = 'Search for movies or TV series',
    searchPath, }) => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    // handle form submit
    const handleSearch = (e) => {
        e.preventDefault();
        if (query.length === 0) {
            return;
        } else {
            router.push(`${searchPath}${query.trim()}?page=1`);
            setQuery('');
        }
    }
    return (
        <form onSubmit={handleSearch} className='flex grow pb-6 md:pb-10 lg:mt-9'>
            <IconSearch className='h-6 w-6 md:h-8 md:w-8' />
            <input
                className='md:heading-md md:placeholder:heading-md mx-4 w-full rounded-none border-b border-app-dark-blue bg-app-dark-blue pb-[8px] text-base font-light caret-app-red placeholder:text-base placeholder:text-app-placeholder focus:border-b focus:border-app-greyish-blue focus:outline-none'
                type='text'
                placeholder={placeholder}
                onChange={e => setQuery(e.target.value)}
                value={query}
            />
            <SearchButton />
        </form>
    )
}

export default SearchBar

export const SearchButton = () => {
    return <button
        type='submit'
        className='text-capitalize flex items-center justify-center rounded-md bg-app-greyish-blue py-2 px-3 text-xs text-app-pure-white hover:bg-app-pure-white hover:text-app-dark-blue'>
        Search
    </button>
}