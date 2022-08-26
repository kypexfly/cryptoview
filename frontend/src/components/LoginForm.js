const LoginBox = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (
        <form id="login-form">
            <label>Username</label>
            <input type="text" />

            <label>Password</label>
            <input type="password" />

            <button type="button" className="btn-link" onClick={e => handleSubmit}>
                Login now
            </button>
        </form>
    );
}

export default LoginBox;