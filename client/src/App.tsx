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

function App() {
  const { user } = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className='pages flex min-h-[70vh] grow'>
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
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
