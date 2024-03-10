// ForgotPassword.js

import React, { useState } from 'react';
import { callApi, successResponse, errorResponse } from './main';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/forgot-password";
            const data = JSON.stringify({ email });
            await callApi("POST", url, data, successResponse, errorResponse);
            setMessage('Instructions to reset your password have been sent to your email.');
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ForgotPassword;
