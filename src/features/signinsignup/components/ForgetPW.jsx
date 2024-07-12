import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailPattern.test(newEmail));
    };

    const handleSubmit = () => {
        if (isValid) {
            alert(`Password reset email sent to: ${email}`);
        } else {
            alert('Please enter a valid email address');
        }
    };

    return (
        <div className="flex flex-col md:items-center bg-[#F0EB76] p-10">
            <h2 className="text-center text-4xl pb-4">Password reset</h2>
            <p className="text-center">We will send you an email to reset your password</p>
            <form className="pt-12 flex flex-col md:w-[473px]" onSubmit={e => e.preventDefault()}>
                <input
                    type="email"
                    placeholder="Email address*"
                    className={`mt-5 p-1 pl-4 rounded border ${isValid ? 'border-gray-300' : 'border-red-500'}`}
                    value={email}
                    onChange={handleEmailChange}
                />
                {!isValid && <h4 className="text-red-500 text-[12px] text-center">Please enter a valid email address</h4>}
                <div className="mt-14 text-center">
                    <button onClick={handleSubmit} className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300">
                        SUBMIT
                    </button>
                </div>
                <Link to="/login" className="underline text-[12px] text-center pt-4">
                    Cancel
                </Link>
            </form>
        </div>
    );
}

export default ForgetPassword;
