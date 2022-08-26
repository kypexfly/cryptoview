import { Link } from "react-router-dom";

const handleSubmit = async (e) => {
    e.preventDefault()
}

const SignUp = () => {
    return (
        <div className="container">
            <div className="boxed">
                <h1>Sign Up</h1>
                <hr />


                <form id="signup-form">
                    <label><i className="fa-solid fa-user"></i> Username</label>
                    <input placeholder="enter a username" autoComplete="off" type="text" />

                    <label><i className="fa-solid fa-envelope"></i> Email</label>
                    <input placeholder="enter an email address" type="email" />

                    <label><i className="fa-solid fa-key"></i> Password</label>
                    <input placeholder="enter a strong password" autoComplete="off" type="password" />

                    <button type="button" className="btn-link" onClick={e => handleSubmit}>
                        Register now
                    </button>
                </form>


                <p>Already have an account? <Link to="/login">Login now</Link></p>
            </div>
        </div>
    );
}

export default SignUp;