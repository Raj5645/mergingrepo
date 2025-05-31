import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import { useNavigate } from 'react-router-dom';

const LiveRevenueRFID = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col p-8 w-full max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="text-3xl font-bold text-white">Live and Loud | Delhi</div>
            <div className="flex gap-4">
              <button
                className={`px-8 py-2 rounded-lg font-bold text-base border ${false ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-transparent text-gray-300 bg-[#232323] hover:bg-[#3479ff] hover:text-white'}`}
                onClick={() => navigate('/liverevenue')}
              >
                Ticketing
              </button>
              <button
                className={`px-8 py-2 rounded-lg font-bold text-base border border-[#22e6ce] text-[#22e6ce] bg-[#232323]'`}
                onClick={() => navigate('/liverevenue/rfid')}
              >
                RFID Sales
              </button>
            </div>
          </div>
          {/* Date pickers and search */}
          <div className="flex gap-4 mb-6">
            <div>
              <div className="text-sm mb-1">From Date & Time</div>
              <input type="datetime-local" className="bg-[#232323] text-white rounded-lg px-4 py-2 border border-gray-600" value={fromDate} onChange={e => setFromDate(e.target.value)} />
            </div>
            <div>
              <div className="text-sm mb-1">To Date & Time</div>
              <input type="datetime-local" className="bg-[#232323] text-white rounded-lg px-4 py-2 border border-gray-600" value={toDate} onChange={e => setToDate(e.target.value)} />
            </div>
            <button className="bg-[#22e6ce] text-white font-bold px-8 py-2 rounded-lg text-lg mt-6">Search</button>
          </div>
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-[#232323] p-6 rounded-lg shadow-lg flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#FFDF8C] flex items-center justify-center text-black font-bold">₹</div>
                  <div className="text-lg font-bold">4,423,860</div>
                </div>
                <div className="text-sm text-gray-400">Top Up (Card)</div>
                <button className="ml-auto text-[#22e6ce] underline text-xs" onClick={() => navigate('/liverevenue/rfid/topup')}>View All</button>
              </div>
            ))}
          </div>
          {/* Donut Charts */}
          <div className="grid grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-[#232323] p-6 rounded-lg shadow-lg flex flex-col items-center">
                <div className="text-lg font-bold mb-2">Top 5 Selling Products</div>
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" stroke="#232323" strokeWidth="20" fill="none" />
                  <circle cx="60" cy="60" r="50" stroke="#FF4DB8" strokeWidth="20" fill="none" strokeDasharray="314" strokeDashoffset="60" />
                </svg>
                <div className="mt-4 text-sm text-gray-400">B40</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRevenueRFID;
