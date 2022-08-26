import { Link } from "react-router-dom";

const handleSubmit = async (e) => {
    e.preventDefault()
}

const Login = () => {
    return (
        <div className="container">
            <div className="boxed">
                <h1>Login</h1>
                <hr />



                <form id="signup-form">
                    <label><i className="fa-solid fa-user"></i> Username</label>
                    <input placeholder="enter a username" autoComplete="off" type="text" />

                    <label><i className="fa-solid fa-key"></i> Password</label>
                    <input placeholder="enter a strong password" autoComplete="off" type="password" />

                    <button type="button" className="btn-link" onClick={e => handleSubmit}>
                        Login now
                    </button>
                </form>


                <p>Not registered yet? <Link to="/signup">Sign up now</Link></p>
            </div>
        </div>
    );
}

export default Login;