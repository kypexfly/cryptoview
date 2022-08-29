import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useAuthContext } from './hooks/useAuthContext'
// pages
import Home from './pages/Home'
import Asset from './pages/Asset'
import Coins from './pages/Coins'
import News from './pages/News'
import About from './pages/About'
import Converter from './pages/Converter'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'

// eslint-disable-next-line space-before-function-paren
function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assets" element={<Coins />} />
            <Route path="/assets/:coinid" element={<Asset />} />
            <Route path="/news" element={user ? <News /> : <Navigate to='/login' />} />
            <Route path="/about" element={<About />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/signup" element={!user ? <SignUp /> : <Navigate to='/' />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path="/users/:userid" element={<UserProfile />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
