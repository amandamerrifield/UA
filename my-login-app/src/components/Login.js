import React from 'react';
import './Login.css';  // Import the specific CSS for this component

function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form id="login-form">
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
