import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isLoading, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }

  useEffect(() => {
    document.title = 'Sign Up - CryptoView'
  }, [])

  return (
    <div className="container">
      <div className="boxed">
        <h1>Sign Up</h1>
        <hr />

        <form id="signup-form" onSubmit={handleSubmit} autoComplete="off">
          <label><i className="fa-solid fa-envelope"></i> Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="enter an email address"
            autoComplete="off"
            type="email" />

          <label><i className="fa-solid fa-key"></i> Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="enter a strong password"
            autoComplete="off"
            type="password" />

          <div className="center">
            <button disabled={isLoading} className="btn-link">
              Sign up
            </button>
            {error && <div className="error">{error}</div>}
          </div>
        </form>

        <p>Already have an account? <Link to="/login">Login now</Link></p>
      </div>
    </div>
  )
}

export default SignUp
