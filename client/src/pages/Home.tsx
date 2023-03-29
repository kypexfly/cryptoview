/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CryptoPriceFeed, NewsFeed } from '../components'
import { useAuthContext } from '../hooks/useAuthContext'

const Welcome = () => {
  return (
    <div id='home' className='landing'>
      <div className='container'>
        <div className='landbox'>
          <h1 className='center'>Welcome to CryptoView!</h1>
          <hr />

          <div className='landing-sign center'>
            <p>Sign up to access some interesting features and more!</p>
            <Link to='/signup' className='btn-link'>
              Sign Up
            </Link>
            <Link to='/login' className='btn-link'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  const { user } = useAuthContext()

  const fetchNews = (page = 1) => fetch('/api/news?page=' + page).then((res) => res.json())

  const { data: news, isLoading } = useQuery({
    queryKey: ['news', 1],
    queryFn: () => fetchNews(1),
  })

  useEffect(() => {
    document.title = 'CryptoView'
  }, [])

  return (
    <>
      {!user && <Welcome />}
      {user && (
        <div className='container'>
          <div id='home-loggedin'>
            <div>
              <div className='something'>
                <h2>My Cryptos</h2>
                <hr />
                <CryptoPriceFeed />
              </div>
            </div>
            <div>
              <h2>Latest News</h2>
              <hr />
              <NewsFeed news={news} isLoading={isLoading} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
