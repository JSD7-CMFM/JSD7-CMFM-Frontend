import React, { useEffect, useState } from "react";
import appAPI from "../../../apis/users.js";
import { getToken } from "../../../utils/localStorage.js";

const AccountDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        const getId = localStorage.getItem("id");
        console.log("Get id:", getId);
        const response = await appAPI.getUser(getId);
        console.log("Response data:", response);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, []);

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
        <div>
          <button className="border-b-2 rounded-sm bg-slate-400 px-4 ml-10">
            Edit
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-full">
          <h2 className="pr-10 w-[50px]">Email</h2>
          <p className="mb-7 border-b-2 bg-slate-100 rounded w-full text-center">
            {user.data.email}
          </p>
        </div>
        <div>
          <button className="border-b-2 rounded-sm bg-slate-400 px-4 ml-10 invisible">
            Edit
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-full">
          <h2 className="pr-10 w-[50px]">Phone</h2>
          <p className="mb-7 border-b-2 bg-slate-100 rounded w-full text-center">
            {user.data.phoneNumber}
          </p>
        </div>
        <div>
          <button className="border-b-2 rounded-sm bg-slate-400 px-4 ml-10">
            Edit
          </button>
        </div>
      </div>
      <div>
        <p>Want to update your password?</p>
        <p className="underline">Reset my password</p>
      </div>
    </div>
  );
};

export default AccountDetails;
