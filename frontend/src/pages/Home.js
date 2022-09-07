import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    document.title = 'CryptoView'
  }, [])

  return (
    <div id="home">
      <section className="landing">
        <div className="container">
          <div className="landbox">
            <h1>Welcome to CryptoView!</h1>

            {!user
              ? (
                <>
                  <p>Sign up to access some interesting features and more!</p>
                  <div className="landing-sign">
                    <Link to="/signup" className="btn-link">Sign Up</Link>
                    <Link to="/login" className="btn-link">Login</Link>
                  </div>
                </>)
              : (<><p>Logged as: <strong>{user.email}</strong>!</p><p>Enjoy this app!</p></>)
            }

          </div>
        </div>
      </section >
    </div >
  )
}

export default Home
