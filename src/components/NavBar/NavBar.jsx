"use client"
import Link from "next/link"
import Image from "next/image";
import { AppLogo, IconNavHome, IconNavMovie, IconNavTv } from "@/icons";

const NavBar = () => {
  return (
    <div>
      <nav className='sticky top-0 z-50 flex items-center justify-between bg-app-semi-dark-blue p-5 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-5/6 lg:flex-col lg:py-9'>
        <Link href='/' passHref>
          <AppLogo />
        </Link>
        <div className='flex w-1/2 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5'>
          <Link href='/'>
            <IconNavHome />
          </Link>
          <Link href='/movie'>
            <IconNavMovie />
          </Link>
          <Link href='/tv'>
            <IconNavTv />
          </Link>
        </div>
        <a href="https://github.com/Shanky1001" target="_blank" rel="noreferrer">
          <div className='flex items-center justify-center rounded-full bg-cyan-200 p-px'>
            <Image
              className='rounded-full'
              src={"https://avatars.githubusercontent.com/u/108118506?v=4"}
              alt='user avatar'
              height={25}
              width={25}
              unoptimized
            />
          </div>
        </a>
      </nav>
    </div>
  )
}

export default NavBar