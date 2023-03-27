import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

import SearchAssets from './SearchAssets'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
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
            <NavLink to="/">
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <NavLink to="/assets" >
              <i className="fa-solid fa-ranking-star"></i>
            </NavLink>
            <NavLink to="/news" >
              <i className="fa-solid fa-newspaper"></i>
            </NavLink>
            <NavLink to="/converter" >
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </NavLink>
            <NavLink to="/about" >
              <i className="fa-solid fa-users"></i>
            </NavLink>
            <>
              {user && (
                <Link to='/' onClick={handleClick}>Logout</Link>
              )}
              {!user && (
                <>
                  <NavLink to="/login" >Login</NavLink>
                  <NavLink to="/signup" >Sign Up</NavLink>
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
