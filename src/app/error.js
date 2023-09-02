import Link from "next/link";

const Error = () => {
  return (
    <div className='my-20 flex flex-col items-center justify-center'>
      <h1 className='my-20 text-xl md:text-4xl'>404 - Page Not Found</h1>
      <Link href='/' passHref>
        <button className='rounded-md bg-app-greyish-blue p-2 px-4 hover:bg-app-pure-white hover:text-app-dark-blue'>
          Go home
        </button>
      </Link>
    </div>
  )
}

export default Error