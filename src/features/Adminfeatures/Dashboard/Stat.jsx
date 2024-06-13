// src/components/Stat.js
import React from 'react';

const Stat = () => {
  return (
    <div>
      <h1 className="text-black text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-black text-xl font-bold mb-2">Users</h2>
          <p className="text-gray-600">Number of users: 1400</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-black text-xl font-bold mb-2">Sales</h2>
          <p className="text-gray-600">Total sales: $3200</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-black text-xl font-bold mb-2">Performance</h2>
          <p className="text-gray-600">Performance: 85%</p>
        </div>
      </div>
    </div>
  );
}

export default Stat;
