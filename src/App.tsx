import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import { Footer, Navbar } from './components'
import { useAuthContext } from './hooks/useAuthContext'
// pages
import { Asset, Coins, Converter, Home, Login, News, SignUp } from './pages'
// const Home = lazy(() => import('./pages/Home'))
// const Asset = lazy(() => import('./pages/Asset'))
// const Coins = lazy(() => import('./pages/Coins'))
// const News = lazy(() => import('./pages/News'))
// const Converter = lazy(() => import('./pages/Converter'))
// const SignUp = lazy(() => import('./pages/SignUp'))
// const Login = lazy(() => import('./pages/Login'))

TopBarProgress.config({
  barColors: {
    '0': 'indigo',
    '1.0': 'lime',
  },
})

const CustomRoutes = ({ children }) => {
  const [progress, setProgress] = useState(false)
  const [prevLoc, setPrevLoc] = useState('')
  const location = useLocation()

  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(true)
    if (location.pathname === prevLoc) {
      setPrevLoc('')
    }
  }, [location])

  useEffect(() => {
    setProgress(false)
  }, [prevLoc])

  return (
    <>
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  )
}

function App() {
  const { user } = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className='pages flex min-h-[70vh] grow'>
          <Suspense>
            <CustomRoutes>
              <Route path='/' element={<Home />} />
              <Route path='/assets' element={<Coins />} />
              <Route path='/assets/:coinid' element={<Asset />} />
              <Route path='/news' element={<News />} />
              <Route path='/converter' element={<Converter />} />
              <Route path='/signup' element={!user ? <SignUp /> : <Navigate to='/' />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            </CustomRoutes>
          </Suspense>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
