import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const EventLandingPage = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-8">
          {/* Navigation Tabs */}
          <div className="flex gap-4 mb-6">
            {['All events', 'Live Events', 'Upcoming', 'Past', 'Draft', 'Cancelled', 'Deleted'].map((tab) => (
              <button
                key={tab}
                className="px-4 py-2 rounded-lg bg-[#232323] text-white hover:bg-blue-600"
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Event Cards */}
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((event) => (
              <div key={event} className="bg-[#232323] rounded-lg shadow-lg overflow-hidden" style={{ width: '280px', height: '400px' }}>
                <img
                  src={`/images/img_rectangle_464_${event}.png`}
                  alt="Event"
                  className="w-full h-2/3 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Live and Loud</h3>
                  <p className="text-sm text-gray-400 mb-2">₹1000 - ₹9000</p>
                  <p className="text-sm text-gray-400 mb-2">Bangalore</p>
                  <p className="text-xs text-gray-500">last edited: 07/04/25, 20:35:08</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventLandingPage;
