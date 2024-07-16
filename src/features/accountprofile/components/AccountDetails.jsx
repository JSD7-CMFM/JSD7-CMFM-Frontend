import React, { useEffect, useState } from "react";
import appAPI from "../../../apis/users.js";
import CircularProgress from "@mui/material/CircularProgress";
import { getId } from "../../../utils/localStorage.js";
import { toast } from "react-toastify";

const AccountDetails = ({ setActiveSection, setUserGlobal }) => {
  const [user, setUser] = useState(null);
  const userId = getId();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await appAPI.getUser(userId);
        setUser(response.data);
      } catch (error) {
        toast.error("Error fetching user:", error);
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
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div id="acc-info" className="px-7">
      <div className="flex">
        <div className="flex w-full">
          <h2 className="mt-7 p-1 text justify-inline text-[18px] font-semibold w-[100px]">
            Name :
          </h2>
          <h2 className="mt-7 mb-7 p-1 border-b-2 bg-slate-100 rounded-md  w-4/5 text-center">
            {user.data.firstName} {user.data.lastName}
          </h2>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-full">
          <h2 className="w-[100px] p-1 text justify-inline text-[18px] font-semibold">
            Email :{" "}
          </h2>
          <h2 className="mb-7 p-1 border-b-2 bg-slate-100 rounded-md  w-4/5 text-center">
            {user.data.email}
          </h2>
        </div>
      </div>
      <div className="flex">
        <div className="flex w-full">
          <h2 className="w-[100px] p-1 text justify-inline text-[18px] font-semibold">
            Phone :
          </h2>
          <h2 className="mb-7 p-1 border-b-2 bg-slate-100 rounded-md  w-4/5 text-center">
            {user.data.phoneNumber}
          </h2>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="border-b-2 rounded-md bg-[#AAD8EE] px-4 ml-10 p-2 hover:cursor-pointer hover:opacity-45"
          onClick={() => setActiveSection("acc-edit")}
        >
          Edit Information
        </button>
      </div>
      <div>
        <p className="mt-10">Want to update your password?</p>
        <button
          className="underline cursor-pointer"
          onClick={() => setActiveSection("acc-edit")}
        >
          Reset my password
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
