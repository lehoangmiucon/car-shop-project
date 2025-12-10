import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Join us to buy your dream car</p>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <button type="submit" className="btn-full">Register</button>
                </form>
                <p className="auth-footer">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;