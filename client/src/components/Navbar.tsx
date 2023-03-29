import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import SearchAssets from './SearchAssets'

import { faGem } from '@fortawesome/free-regular-svg-icons'
import {
  faArrowRightArrowLeft,
  faHouse,
  faNewspaper,
  faRankingStar,
  faUsers,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface NavOptions {
  name: string
  path: string
  icon: IconDefinition
}
const navOptions: NavOptions[] = [
  {
    name: 'Home',
    path: '/',
    icon: faHouse,
  },
  {
    name: 'Cryptocurrencies',
    path: '/assets',
    icon: faRankingStar,
  },
  {
    name: 'News',
    path: '/news',
    icon: faNewspaper,
  },
  {
    name: 'Tools',
    path: '/converter',
    icon: faArrowRightArrowLeft,
  },
  {
    name: 'About',
    path: '/about',
    icon: faUsers,
  },
]

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header className='border-b border-[#3e3e3e] bg-[#27272b] shadow-lg shadow-gray-900'>
      <div className='container mx-auto flex flex-wrap justify-between gap-2 py-2'>
        <div id='logo'>
          <Link to='/'>
            <FontAwesomeIcon icon={faGem} className='mr-1 text-[lime]' /> Crypto
            <span className='text-gray-500'>View</span>
          </Link>
        </div>

        <nav className='flex grow flex-wrap items-center gap-3'>
          {navOptions.map((option) => (
            <NavLink
              key={option.path}
              to={option.path}
              className='flex grow items-center justify-center gap-1 border-b-2 border-transparent 
              p-1 text-gray-500 transition-colors hover:text-white hover:transition-colors lg:grow-0'
            >
              <FontAwesomeIcon icon={option.icon} />
              <span className='hidden lg:block'>{option.name}</span>
            </NavLink>
          ))}

          {user && (
            <Link
              to='/'
              onClick={handleClick}
              className='flex items-center gap-1 border-b-2 
              border-transparent p-0.5 px-3 text-gray-500 transition-colors hover:text-white hover:transition-colors'
            >
              Logout
            </Link>
          )}
          {!user && (
            <>
              <NavLink
                to='/signup'
                className='flex items-center gap-1 border-b-2 
              border-transparent p-0.5 px-3 text-gray-500 transition-colors hover:text-white hover:transition-colors'
              >
                Sign Up
              </NavLink>
              <NavLink
                to='/login'
                className='flex items-center gap-1 border-b-2 
              border-transparent p-0.5 px-3 text-gray-500 transition-colors hover:text-white hover:transition-colors'
              >
                Login
              </NavLink>
            </>
          )}
        </nav>

        <SearchAssets />
      </div>
    </header>
  )
}

export default Navbar
