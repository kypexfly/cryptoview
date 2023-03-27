import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Navbar, Footer } from './components'
import { useAuthContext } from './hooks/useAuthContext'
// pages
const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'))
const Asset = lazy(() => import(/* webpackChunkName: "asset" */ './pages/Asset'))
const Coins = lazy(() => import(/* webpackChunkName: "coins" */ './pages/Coins'))
const News = lazy(() => import(/* webpackChunkName: "news" */ './pages/News'))
const About = lazy(() => import(/* webpackChunkName: "about" */ './pages/About'))
const Converter = lazy(() => import(/* webpackChunkName: "converter" */ './pages/Converter'))
const SignUp = lazy(() => import(/* webpackChunkName: "signup" */ './pages/SignUp'))
const Login = lazy(() => import(/* webpackChunkName: "login" */ './pages/Login'))
const UserProfile = lazy(() => import(/* webpackChunkName: "userprofile" */ './pages/UserProfile'))

function App() {
  const { user } = useAuthContext()
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Suspense>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/assets' element={<Coins />} />
              <Route path='/assets/:coinid' element={<Asset />} />
              <Route path='/news' element={<News />} />
              <Route path='/about' element={<About />} />
              <Route path='/converter' element={<Converter />} />
              <Route path='/signup' element={!user ? <SignUp /> : <Navigate to='/' />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/users/:userid' element={<UserProfile />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
