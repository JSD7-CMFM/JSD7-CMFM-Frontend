import React from 'react'

const SignupForm = () => {
    return (
        <div className="flex flex-col md:items-center bg-[#F0EB76] p-10 min-h-[500px] justify-center">
            <h2 className="text-center text-4xl md:text-2xl">You're new around here</h2>
            <form className="pt-12 flex flex-col md:w-[473px] md:pt-6">
                <input type="text" placeholder="First name*" className="mt-5 p-1 pl-4 rounded border border-gray-300" />
                <input type="text" placeholder="Last name*" className="mt-5 p-1 pl-4 rounded border border-gray-300" />
                <input type="email" placeholder="Email address*" className="mt-5 p-1 pl-4 rounded border border-gray-300" />
                <input type="password" placeholder="Password*" className="mt-5 p-1 pl-4 rounded border border-gray-300" />
                <div className="mt-14 text-center">
                    <a href="#" className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300 mr-5">SIGN UP</a>
                    <a href="#" className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300">LOGIN</a>
                </div>
            </form>
        </div>
    )
}

export default SignupForm