/* eslint-disable no-undef */
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CryptoPriceFeed, NewsList } from '../components'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNewsFeed } from '../hooks/useNewsFeed'

const Home = () => {
  const { user } = useAuthContext()
  
  if (user) {
    const { news } = useNewsFeed()
  }

  useEffect(() => {
    document.title = 'CryptoView'
  }, [])

  return (
    <>
      <div id='home' className={!user ? 'landing full' : 'landing'}>
        <div className='container'>
          <div className='landbox'>
            <h1 className='center'>Welcome to CryptoView!</h1>
            <hr />

            {!user ? (
              <>
                <div className='landing-sign center'>
                  <p>Sign up to access some interesting features and more!</p>
                  <Link to='/signup' className='btn-link'>
                    Sign Up
                  </Link>
                  <Link to='/login' className='btn-link'>
                    Login
                  </Link>
                </div>
              </>
            ) : (
              <p>
                Logged as: <strong>{user.email}</strong>!
              </p>
            )}
          </div>
        </div>
      </div>
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

              <div className='feed-list'>
                {!news.results ? (
                  <div className='loading'>
                    <span>
                      <i className='fas fa-sync fa-spin'></i> Loading...
                    </span>
                  </div>
                ) : (
                  news.results.map((anew, index) => <NewsList anew={anew} key={index} />)
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
