/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CryptoPriceFeed, NewsFeed } from '../components'
import { useAuthContext } from '../hooks/useAuthContext'

const LoggedOutPannel = () => {
  return (
    <section className='welcome'>
      <div className='container mx-auto flex h-full flex-col items-center justify-center px-2 py-6 text-center'>
        <h1 className='text-shadow-white mb-3 text-6xl text-white'>Welcome to CryptoView!</h1>

        <p className='py-6'>Sign up to access some interesting features and more!</p>

        <div className='flex flex-wrap justify-center gap-3 py-3'>
          <Link to='/signup' className='btn-link'>
            Sign Up
          </Link>

          <Link to='/login' className='btn-link'>
            Login
          </Link>
        </div>
      </div>
    </section>
  )
}

const LoggedInPannel = () => {
  const fetchNews = (page = 1) => fetch('/api/news?page=' + page).then((res) => res.json())

  const { data: news, isLoading } = useQuery({
    queryKey: ['news', 1],
    queryFn: () => fetchNews(1),
  })

  return (
    <div className='container'>
      <div className='grid grid-cols-[3fr_1fr] gap-5'>
        <div>
          <div className='something'>
            <h2 className='mb-3 border-b border-[#3e3e3e] pb-3 text-2xl font-bold'>My Cryptos</h2>
            <CryptoPriceFeed />
          </div>
        </div>
        <div>
          <h2 className='mb-3 border-b border-[#3e3e3e] pb-3 text-2xl font-bold'>Latest News</h2>
          <NewsFeed news={news} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    document.title = 'CryptoView'
  }, [])

  return (
    <>
      {!user && <LoggedOutPannel />}
      {user && <LoggedInPannel />}
    </>
  )
}

export default Home
