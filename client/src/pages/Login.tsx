import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../components'
import { useLogin } from '../hooks/useLogin'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  useEffect(() => {
    document.title = 'Login - CryptoView'
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div className='bg-sp-green'>
      <div className='container mx-auto flex h-full flex-col items-center justify-center px-2 py-6'>
        <div className='mx-auto w-full max-w-md rounded-md border border-[#3e3e3e] bg-[#27272b] p-8'>
          <Heading className='text-center'>Login</Heading>

          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <label>
              <FontAwesomeIcon icon={faUser} /> Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='enter an email'
              autoComplete='off'
              type='email'
            />

            <label>
              <FontAwesomeIcon icon={faKey} /> Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder='enter a strong password'
              autoComplete='off'
              type='password'
            />

            <div className='my-6 text-center'>
              <button disabled={isLoading} className='btn-link'>
                Login
              </button>
              {error && <div className='error'>{error}</div>}
            </div>
          </form>

          <p>
            Not registered yet? <Link to='/signup'>Sign up now</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
