import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="bg-dark text-white py-5">
            <div className="container text-center">
                <h2 className="mb-4"> Enter your Email</h2>
                <p className="lead mb-4">Get exclusive offers and updates straight to your inbox.</p>
                <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className="form-control w-50 me-2"
                        placeholder="Enter your email"
                        aria-label="Email"
                    />
                    <button type="submit" className="btn btn-light">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Footer;
