import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const LiveRevenueTopUpModal = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col p-8 w-full max-w-5xl mx-auto">
          <div className="border-2 border-blue-500 rounded-2xl p-8 bg-[#191919]">
            <div className="flex justify-between items-center mb-6">
              <div className="text-2xl font-bold text-white">Live and Loud | Delhi</div>
              <div className="text-lg font-bold text-yellow-400">₹4,423,860</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-[#232323] p-6 rounded-lg shadow-lg flex flex-col gap-2">
                  <div className="font-bold mb-2">Priya Adawale</div>
                  <div>Qty Of Machines: 1</div>
                  <div>Topup amount: <span className="font-bold">₹2,751</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRevenueTopUpModal;
