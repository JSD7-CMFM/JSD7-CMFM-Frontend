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
        const response = await appAPI.getUser(getId);
        console.log("Response data:", response);
        b;
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
      <div>
        <h2>Email</h2>
        <p className="mb-7">{user.data.email}</p>
      </div>
      <div>
        <p>Want to update your password?</p>
        <p className="underline">Reset my password</p>
      </div>
    </div>
  );
};

export default AccountDetails;
