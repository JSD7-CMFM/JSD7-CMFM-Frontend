import React from 'react';

function ForgetPassword() {
    return (
        <div className="flex flex-col md:items-center bg-[#F0EB76] p-10">
            <h2 className="text-center text-4xl pb-4">Password reset</h2>
            <p className="text-center">We will send you an email to reset your password</p>
            <form className="pt-12 flex flex-col md:w-[473px]">
                <input type="email" placeholder="Email address*" className="mt-5 p-1 pl-4 rounded border border-gray-300" />
                <div className="mt-14 text-center">
                    <a href="#" className="py-[8px] px-6 bg-white hover:border-black rounded-lg border border-gray-300">SUBMIT</a>
                </div>
                <a href="#" className="underline text-[12px] text-center pt-4">Cancel</a>
            </form>
        </div>
    );
}

export default ForgetPassword;