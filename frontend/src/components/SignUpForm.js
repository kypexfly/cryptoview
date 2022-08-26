const SignUpForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (
        <form id="signup-form">
            <label><i className="fa-solid fa-user"></i> Username</label>
            <input placeholder="insert your nickname / username" autocomplete="off" type="text" />

            <label><i className="fa-solid fa-envelope"></i> Email</label>
            <input placeholder="enter an email address" autocomplete="off" type="email" />

            <label><i className="fa-solid fa-key"></i> Password</label>
            <input placeholder="insert a strong password" autocomplete="off" type="password" />

            <button type="button" className="btn-link" onClick={e => handleSubmit}>
                Register now
            </button>
        </form>
    );
}

export default SignUpForm;