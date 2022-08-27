import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
        <div className="container">
            <div className="boxed">
                <h1>Login</h1>
                <hr />

                <form id="signup-form">
                    <label><i className="fa-solid fa-user"></i> Username</label>
                    <input
                    onChange={e => setEmail(e.target.value)}
                    placeholder="enter a username"
                    autoComplete="off"
                    type="text" />

                    <label><i className="fa-solid fa-key"></i> Password</label>
                    <input
                    onChange={e => setPassword(e.target.value)}
                    placeholder="enter a strong password"
                    autoComplete="off"
                    type="password" />

                    <button type="button" className="btn-link" onClick={e => handleSubmit}>
                        Login now
                    </button>
                </form>

                <p>Not registered yet? <Link to="/signup">Sign up now</Link></p>
            </div>
        </div>
  )
}

export default Login
