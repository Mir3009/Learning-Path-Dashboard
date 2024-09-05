import React from 'react';
import './LoginPage.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Sign up</h2>
                <form>
                    <input type="text" placeholder="User name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign up</button>
                </form>
                <p>Already have an account? <a href="#" onClick={() => window.location.href='/login'}>Login</a></p>
            </div>
        </div>
    );
}

export default Login;
