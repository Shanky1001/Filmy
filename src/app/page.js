import Router from 'next/router'
import "./nprogress.css";

export default function Home() {
  
  NProgress.configure({ showSpinner: false })
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}
