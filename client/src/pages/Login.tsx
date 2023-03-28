import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

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
    <div className='container'>
      <div className='boxed'>
        <h1>Login</h1>
        <hr />

        <form id='signup-form' onSubmit={handleSubmit}>
          <label>
            <i className='fa-solid fa-user'></i> Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='enter an email'
            autoComplete='off'
            type='email'
          />

          <label>
            <i className='fa-solid fa-key'></i> Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='enter a strong password'
            autoComplete='off'
            type='password'
          />

          <div className='center'>
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
  )
}

export default Login
