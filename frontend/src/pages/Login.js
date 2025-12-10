import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to your account</p>
                <form>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="admin@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <button type="submit" className="btn-full">Login</button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <Link to="/register">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;