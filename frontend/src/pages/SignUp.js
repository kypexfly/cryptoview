import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container">
            <div className="boxed">
                <h1>Sign Up</h1>
                <hr/>

                <SignUpForm />

                <p>Already have an account? <Link to="/login">Login now</Link></p>
            </div>
        </div>
    );
}

export default SignUp;