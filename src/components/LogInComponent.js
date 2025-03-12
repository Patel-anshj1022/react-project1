import React, { useState } from 'react';
import './LogInComponent.css';

const LogInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your login logic, e.g., API call
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset the form
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <h1 className="login-title">LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    className="input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <button type="submit" className="submit-button">LOGIN</button>
            </form>
        </div>
    );
}

export default LogInComponent;