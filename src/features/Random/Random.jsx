import React, { useEffect } from "react";

const Random = () => {
  const fetchData = async () => {
    try {
      const response = await appAPI.fetchData();
      console.log("Response data:", response);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Random</div>;
};

export default Random;
