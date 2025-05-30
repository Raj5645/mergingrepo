import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const EventDashboard = () => {
  const [customerGrowthData, setCustomerGrowthData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Customer Growth',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCustomerGrowthData((prevData) => ({
        labels: [...prevData.labels, now.toLocaleTimeString()],
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, Math.floor(Math.random() * 100)],
          },
        ],
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  console.log('EventDashboard component rendered');

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col border border-gray-700 p-4">
        <Header />
        <div className="p-8">
          {/* Event Name and Date */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Live and Loud</h1>
            <p className="text-lg text-gray-400">Event on: 23/06/25</p>
          </div>
          {/* Analytics Boxes */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            { [
                { label: 'Revenue', value: '₹84,950' },
                { label: 'Tickets Sold', value: '6,241' },
                { label: 'Views', value: '4,380' },
                { label: 'Interested', value: '6,256' },
                { label: 'Clicks', value: '5,000' },
              ].map((item, index) => (
              <div key={index} className="bg-[#232323] p-4 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-2">{item.label}</h2>
                <p className="text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
          {/* Graphs Section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#232323] p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-2">Registration Trend</h2>
              <div className="h-40 bg-gray-700 rounded-lg"></div>
            </div>
            <div className="bg-[#232323] p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-2">20 Tickets Sold</h2>
              <div className="h-40 bg-gray-700 rounded-lg"></div>
            </div>
            <div className="bg-[#232323] p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-2">Different Platform Stats</h2>
              <div className="h-40 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-[#232323] p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold mb-2">Customer Growth</h2>
              <div className="h-40 bg-gray-700 rounded-lg">
                <Line data={customerGrowthData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDashboard;
