import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container">
            <div className="boxed">
                <h1>Login</h1>
                <hr/>

                <LoginForm />

                <p>Not registered yet? <Link to="/signup">Sign up now</Link></p>
            </div>
        </div>
    );
}

export default Login;