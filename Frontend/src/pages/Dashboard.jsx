import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Waste Collected</h3>
          <p className="text-2xl font-bold">120 KG</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Recycled Waste</h3>
          <p className="text-2xl font-bold">85 KG</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Pending Requests</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
