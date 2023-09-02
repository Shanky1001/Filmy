"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import { useRouter } from "next/navigation"
import "./nprogress.css";
import NProgress from 'nprogress'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Filmy',
  description: 'created by shashank rai',
}

export default function RootLayout({ children }) {
  const router = useRouter();

  NProgress.configure({ showSpinner: false })
  router?.events?.on('routeChangeStart', () => NProgress.start())
  router?.events?.on('routeChangeComplete', () => NProgress.done())
  router?.events?.on('routeChangeError', () => NProgress.done())

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='text-app-pure-white lg:flex'>
          <NavBar />
          <main className='mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
