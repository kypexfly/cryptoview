import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import SearchAssets from './SearchAssets'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faRankingStar,
  faNewspaper,
  faArrowRightArrowLeft,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div id='navbar'>
        <div className='navcont'>
          <div id='logo'>
            <Link to='/'>
              <FontAwesomeIcon icon={faGem} style={{color: 'lime', marginRight: '5px'}} /> Crypto<span style={{color: 'gray'}}>View</span>
            </Link>
          </div>

          <SearchAssets />

          <div className='nav'>
            <NavLink to='/'>
              <FontAwesomeIcon icon={faHouse} /> Home
            </NavLink>
            <NavLink to='/assets'>
              <FontAwesomeIcon icon={faRankingStar} /> Cryptocurrencies
              {/* Ranking */}
            </NavLink>
            <NavLink to='/news'>
              <FontAwesomeIcon icon={faNewspaper} /> News
            </NavLink>
            <NavLink to='/converter'>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              Tools
            </NavLink>
            <NavLink to='/about'>
              <FontAwesomeIcon icon={faUsers} /> About
            </NavLink>
            <>
              {user && (
                <Link to='/' onClick={handleClick}>
                  Logout
                </Link>
              )}
              {!user && (
                <>
                  <NavLink to='/signup'>Sign Up</NavLink>
                  <NavLink to='/login'>Login</NavLink>
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
