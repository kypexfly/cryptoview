/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, PriceFeed, Heading, NewsFeed, SearchAssets } from '../components'
import { useAuthContext } from '../hooks/useAuthContext'
import { objectKeysToString } from '../utils/objectKeysToString'

const LoggedOutPannel = () => {
  return (
    <section className='bg-sp-green'>
      <div className='container mx-auto flex h-full flex-col items-center justify-center px-2 py-6 text-center'>
        <h1 className='text-shadow-white mb-3 text-6xl text-white'>Welcome to CryptoView!</h1>

        <p className='py-6'>Sign up to access some interesting features and more!</p>

        <div className='flex flex-wrap justify-center gap-3 py-3'>
          <Link to='/login' className='btn-link'>
            Log in
          </Link>

          <Link to='/signup' className='btn-link'>
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  )
}

const LoggedInPannel = () => {
  const loadLangs = localStorage.getItem('newsLangs')
    ? JSON.parse(localStorage.getItem('newsLangs'))
    : { en: true }

  const regions = objectKeysToString(loadLangs)

  const fetchNews = (page = 1) =>
    fetch(`/.netlify/functions/api/news?page=${page}&regions=${regions ?? 'en'}`).then((res) => res.json())

  const { data: news, isLoading } = useQuery({
    queryKey: ['news', 1, regions],
    queryFn: () => fetchNews(1),
  })

  return (
    <Container>
      <div className='grid gap-5 sm:grid-cols-[3fr_1fr]'>
        <section>
          <Heading as='h2'>My Cryptos</Heading>
          <SearchAssets />
          <PriceFeed />
        </section>
        <section>
          <Heading as='h2'>Latest News</Heading>
          <NewsFeed news={news} isLoading={isLoading} limit={8} />
        </section>
      </div>
    </Container>
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
