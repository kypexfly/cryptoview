import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

const SignUp = () => {
  // const [username, setUsername] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isLoading, error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console(email, password)
    await signup(email, password)
    console(error, isLoading)
  }

  return (
    <div className="container">
      <div className="boxed">
        <h1>Sign Up</h1>
        <hr />

        <form id="signup-form" onSubmit={e => handleSubmit}>
          <label><i className="fa-solid fa-user"></i> Username</label>
          <input placeholder="enter a username"
            onChange={e => setUsername(e.target.value)}
            autoComplete="off"
            type="text" />

          <label><i className="fa-solid fa-envelope"></i> Email</label>
          <input placeholder="enter an email address"
            onChange={e => setEmail(e.target.value)}
            type="email" value={email} />

          <label><i className="fa-solid fa-key"></i> Password</label>
          <input placeholder="enter a strong password"
            onChange={e => setPassword(e.target.value)}
            autoComplete="off"
            type="password" value={password} />

          <button type="button" className="btn-link">
            {isLoading ? (<i className="fas fa-circle-notch fa-spin"></i>) : 'Register now'}
          </button>
          {error && <div className="error">{error}</div>}
        </form>

        <p>Already have an account? <Link to="/login">Login now</Link></p>
      </div>
    </div>
  )
}

export default SignUp
