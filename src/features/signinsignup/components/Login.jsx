import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
    const user = { email: "admin@admin.com", password: 'admin' };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailPattern.test(newEmail));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === user.email && password === user.password) {
            navigate('/');
        } else {
            setLoginError(true);
        }
    };

    return (
        <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center">
            <h2 className="text-center text-4xl md:text-2xl">Welcome Back</h2>
            <form className="pt-12 flex flex-col md:w-[473px]" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address*"
                    className={`mt-5 p-1 pl-4 rounded border ${isEmailValid ? 'border-gray-300' : 'border-red-500'}`}
                    value={email}
                    onChange={handleEmailChange}
                />
                {!isEmailValid && <h4 className="text-red-500 text-[12px] text-center">Please enter a valid email address</h4>}
                <input
                    type="password"
                    placeholder="Password*"
                    className="mt-5 p-1 pl-4 rounded border border-gray-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a href="/forget" className="underline text-[12px] text-right pt-1">Forgot Password?</a>
                <div className="mt-14 text-center">
                    <button className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300 mr-5">LOGIN</button>
                    <Link to="/register" className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300">SIGN UP</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
