import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Navbar, Footer } from './components'
import { useAuthContext } from './hooks/useAuthContext'
// pages
const Home = lazy(() => import('./pages/Home'))
const Asset = lazy(() => import('./pages/Asset'))
const Coins = lazy(() => import('./pages/Coins'))
const News = lazy(() => import('./pages/News'))
const About = lazy(() => import('./pages/About'))
const Converter = lazy(() => import('./pages/Converter'))
const SignUp = lazy(() => import('./pages/SignUp'))
const Login = lazy(() => import('./pages/Login'))
const UserProfile = lazy(() => import('./pages/UserProfile'))

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
