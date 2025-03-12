import React from 'react';
import './formComponent.css';
const FormComponent = () => {
    return (
        <div className="form-container">
            <h1 className="form-title">REGISTRATION</h1>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" className="input-field" placeholder="First Name" required maxLength="25" />
                
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" className="input-field" placeholder="Last Name" required maxLength="25" />
                
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="input-field" placeholder="Email" required />
                
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" name="phoneNumber" type="tel" className="input-field" placeholder="Phone Number" required />
                
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" className="input-field" placeholder="Password" required />
                
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" className="input-field" placeholder="Confirm Password" required />
                
                <button type="submit" className="submit-button">SUBMIT</button>
            </form>
        </div>
    );
}

export default FormComponent;