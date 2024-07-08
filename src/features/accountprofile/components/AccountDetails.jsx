import React, { useEffect, useState } from "react";
import appAPI from "../../../apis/users.js";
import { getId, getToken } from "../../../utils/localStorage.js";

const AccountDetails = ({ setActiveSection, setUserGlobal }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = getId();
        const response = await appAPI.getUser(userId);
        console.log("Response data:", response);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      setUserGlobal(user);
    }
  }, [user, setUserGlobal]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id="acc-info" className="px-7">
      <div className="flex">
        <div className="flex w-full">
          <h2 className="pr-10 w-[50px]">Name</h2>
          <p className="mb-7 border-b-2 bg-slate-100 rounded w-full text-center">
            {user.data.firstName} {user.data.lastName}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-full">
          <h2 className="pr-10 w-[50px]">Email</h2>
          <p className="mb-7 border-b-2 bg-slate-100 rounded w-full text-center">
            {user.data.email}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-full">
          <h2 className="pr-10 w-[50px]">Phone</h2>
          <p className="mb-7 border-b-2 bg-slate-100 rounded w-full text-center">
            {user.data.phoneNumber}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="border-b-2 rounded-sm bg-[#AAD8EE] px-4 ml-10"
          onClick={() => setActiveSection("acc-edit")}
        >
          Edit Information
        </button>
      </div>
      <div>
        <p>Want to update your password?</p>
        <p className="underline">Reset my password</p>
      </div>
    </div>
  );
};

export default AccountDetails;
