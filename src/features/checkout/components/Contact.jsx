import React from "react";

const Contact = ({ user }) => {
  if (!user) {
    return <div>Loading contact...</div>;
  }
  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-2">Contact</h2>
      <div>
        <h2>Email</h2>
        <h2 className="w-full border border-gray-300 px-4 py-2 mb-2 rounded bg-slate-200">
          {user.data.email}
        </h2>
      </div>
      <div>
        <h2>Name</h2>
        <h2 className="w-full border border-gray-300 px-4 py-2 mb-2 rounded bg-slate-200">
          {user.data.firstName} {user.data.lastName}
        </h2>
      </div>
      <div>
        <h2>Phone Number</h2>
        <h2 className="w-full border border-gray-300 px-4 py-2 mb-2 rounded bg-slate-200">
          {user.data.phoneNumber}
        </h2>
      </div>
    </div>
  );
};

export default Contact;
