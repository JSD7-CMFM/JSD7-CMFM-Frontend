import React from 'react';

function LoginForm() {
    return (
        <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center">
            <h2 className="text-center text-4xl md:text-2xl">Welcome Back</h2>
            <form className="pt-12 flex flex-col md:w-[473px]">
                <input type="email" placeholder="Email address*" className="mt-5 p-1 pl-4 rounded border border-gray-300" />
                <input type="password" placeholder="Password*" className="mt-5 p-1 pl-4 rounded border border-gray-300" />
                <a href="#" className="underline text-[12px] text-right pt-1">Forgot Password?</a>
                <div className="mt-14 text-center">
                    <a href="#" className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300 mr-5">LOGIN</a>
                    <a href="#" className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300">SIGN UP</a>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
