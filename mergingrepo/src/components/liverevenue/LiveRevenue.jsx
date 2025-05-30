import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import { useNavigate } from 'react-router-dom';

const LiveRevenue = () => {
  const [activeTab, setActiveTab] = useState('Ticketing');
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
        <div className="flex flex-col p-8 w-full max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="text-3xl font-bold text-white">Live Revenue</div>
            <div className="flex gap-4">
              <button
                className={`px-8 py-2 rounded-lg font-bold text-base border ${activeTab === 'Ticketing' ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-transparent text-gray-300 bg-[#232323] hover:bg-[#3479ff] hover:text-white'}`}
                onClick={() => { setActiveTab('Ticketing'); navigate('/liverevenue'); }}
              >
                Ticketing
              </button>
              <button
                className={`px-8 py-2 rounded-lg font-bold text-base border ${activeTab === 'RFID Sales' ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-transparent text-gray-300 bg-[#232323] hover:bg-[#3479ff] hover:text-white'}`}
                onClick={() => { setActiveTab('RFID Sales'); navigate('/liverevenue/rfid'); }}
              >
                RFID Sales
              </button>
            </div>
          </div>
          {/* Ticketing Tab Content */}
          {activeTab === 'Ticketing' && (
            <div className="flex gap-12 items-start">
              {/* Donut Chart and Revenue */}
              <div className="flex flex-col items-center justify-center w-[420px] relative">
                <div className="relative w-[260px] h-[260px] flex items-center justify-center">
                  <svg width="220" height="220" viewBox="0 0 220 220" className="block mx-auto">
                    <circle cx="110" cy="110" r="90" stroke="#232323" strokeWidth="30" fill="none" />
                    <circle cx="110" cy="110" r="90" stroke="#FF4DB8" strokeWidth="30" fill="none" strokeDasharray="565" strokeDashoffset="120" />
                  </svg>
                  {/* Revenue label (left) */}
                  <div className="absolute left-[-70px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="bg-[#232323] text-white px-4 py-1 rounded-lg text-base font-bold mb-1 shadow">Revenue</span>
                    <span className="text-[#FFDF8C] text-xl font-bold">2000k</span>
                  </div>
                  {/* Platform label (right) */}
                  <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="bg-[#232323] text-white px-4 py-1 rounded-lg text-base font-bold mb-1 shadow">Platform</span>
                    <span className="text-[#FFDF8C] text-xl font-bold">0000</span>
                  </div>
                </div>
                <div className="mt-8 bg-[#232323] rounded-lg px-12 py-4 text-center w-[220px] mx-auto">
                  <span className="text-4xl font-bold text-[#22e6ce]">5008</span>
                  <div className="text-lg font-semibold text-white">Box Office</div>
                </div>
              </div>
              {/* Table */}
              <div className="flex-1">
                <div className="text-2xl font-bold mb-4">Ticketing</div>
                <div className="bg-[#232323] rounded-xl p-4">
                  <div className="flex font-bold text-gray-400 mb-2">
                    <div className="w-1/5">Platform</div>
                    <div className="w-1/5">Category</div>
                    <div className="w-1/5">No. of Tickets</div>
                    <div className="w-1/5">Revenue</div>
                    <div className="w-1/5">Percentage</div>
                  </div>
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex items-center mb-2 bg-[#232323] rounded-lg py-2 px-2">
                      <div className="w-1/5">Platform {i}</div>
                      <div className="w-1/5">Cat {i}</div>
                      <div className="w-1/5">{i}</div>
                      <div className="w-1/5">00,00,000</div>
                      <div className="w-1/5">100 %</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveRevenue;
