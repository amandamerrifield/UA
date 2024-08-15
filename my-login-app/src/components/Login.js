import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    };


    return (
        <div className="login-container">
            <h1>Login</h1>
            <form id="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <div className="checkbox-container">
                    <input type="checkbox" id="remember-me" name="remember-me" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>

                <button type="submit">Login</button>

                <a href="#" className="forgot-password">Forgot Password?</a>
            </form>
        </div>
    );
}

export default Login;