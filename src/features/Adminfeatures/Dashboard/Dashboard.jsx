import React from "react";
import Stat from "./Stat"
import ChartComponent from "./ChartComponent";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="flex-1 p-10 space-y-10">
        <Stat />
        <div className="space-y-10">
          <ChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
