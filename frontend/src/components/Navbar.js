import { Link, useLocation } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

import SearchAssets from './SearchAssets'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  const useActiveNav = (loc) => {
    const location = useLocation()
    if (location.pathname === loc) {
      return 'active'
    }
  }

  return (
    <header>
      <div id="navbar">
        <div className="navcont">
          <div id="logo">
            <Link to="/"><i className="fa-regular fa-gem"></i> &nbsp; CryptoView</Link>
          </div>

          <SearchAssets />

          <div className="nav">
            <Link to="/assets" className={useActiveNav('/assets')}>
              <i className="fa-solid fa-ranking-star"></i>
            </Link>
            <Link to="/news" className={useActiveNav('/news')}>
              <i className="fa-solid fa-newspaper"></i>
            </Link>
            <Link to="/converter" className={useActiveNav('/converter')}>
              <i className="fa-solid fa-calculator"></i>
            </Link>
            <Link to="/about" className={useActiveNav('/about')}>
              <i className="fa-solid fa-circle-info"></i>
            </Link>
            <>
              {user && (
                <Link to='/' onClick={handleClick}>Logout</Link>
              )}
              {!user && (
                <>
                  <Link to="/login" className={useActiveNav('/login')}>
                    Login
                    {/* <i className="fa-solid fa-user"></i> */}
                  </Link>
                  <Link to="/signup" className={useActiveNav('/signup')}>
                    Sign Up
                    {/* <i className="fa-solid fa-arrow-right-to-bracket"></i> */}
                  </Link>
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
