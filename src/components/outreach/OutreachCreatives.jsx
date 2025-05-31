import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const OutreachCreatives = () => {
  const navigate = useNavigate();
  // This is a static UI matching the second screenshot
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col mx-auto p-8" style={{ width: "1198px", height: "722px", background: "rgba(255,255,255,0.05)", borderRadius: "24px" }}>
            <div className="flex justify-between items-center mb-6">
              <div className="font-bold uppercase" style={{ fontSize: "29px", width: "160px" }}>OUTREACH</div>
              <div className="flex gap-4">
                <button className="w-[190px] h-[40px] rounded-lg font-bold uppercase text-base bg-[#232323] text-gray-300" onClick={() => navigate('/outreach')}>AD BUDGET</button>
                <button className="w-[190px] h-[40px] rounded-lg font-bold uppercase text-base bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white shadow-lg">Creatives</button>
                <button className="w-[190px] h-[40px] rounded-lg font-bold uppercase text-base bg-[#232323] text-gray-300" onClick={() => navigate('/outreach/ad-performance')}>AD Performance</button>
              </div>
            </div>
            {/* Event Creatives Table */}
            <div className="mb-6">
              <div className="font-bold text-lg mb-1">Event Creatives</div>
              <div className="text-gray-400 mb-2">Define all type of creatives you want</div>
              <div className="overflow-x-auto">
                <table className="w-full text-left mb-2">
                  <thead>
                    <tr className="text-gray-300 bg-[#232323]">
                      <th className="px-2 py-2">S. no.</th>
                      <th className="px-2 py-2">Creative Type*</th>
                      <th className="px-2 py-2">Title*</th>
                      <th className="px-2 py-2">Description</th>
                      <th className="px-2 py-2">Upload/Request</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#232323] border-b border-[#232323]">
                      <td className="px-2 py-2 text-white">1.</td>
                      <td className="px-2 py-2">Post (1:1)</td>
                      <td className="px-2 py-2">event title | date | time | venue</td>
                      <td className="px-2 py-2">-</td>
                      <td className="px-2 py-2 flex gap-2"><button className="bg-[#232323] border border-gray-600 text-white rounded px-2 py-1">File.png</button></td>
                      <td className="px-2 py-2 flex gap-2"><button className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1">🗑️</button></td>
                    </tr>
                    <tr className="bg-[#232323] border-b border-[#232323]">
                      <td className="px-2 py-2 text-white">2.</td>
                      <td className="px-2 py-2">Name</td>
                      <td className="px-2 py-2"><input className="bg-transparent text-white border-b border-gray-600 w-32" placeholder="Write here..." /></td>
                      <td className="px-2 py-2"><input className="bg-transparent text-white border-b border-gray-600 w-32" placeholder="1000" /></td>
                      <td className="px-2 py-2 flex gap-2"><button className="bg-[#232323] border border-gray-600 text-white rounded px-2 py-1">Upload</button><button className="bg-[#232323] border border-gray-600 text-white rounded px-2 py-1">Request</button></td>
                      <td className="px-2 py-2 flex gap-2"><button className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1">🗑️</button><button className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1">＋</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Creatives Performance Section */}
            <div className="mb-6">
              <div className="font-bold text-lg mb-1">Creatives Performances</div>
              <div className="grid grid-cols-3 gap-4">
                {['Story(16:9)', 'Teaser(9:16)', 'Post(1:1)'].map((type) => (
                  <div key={type} className="bg-[#232323] rounded-lg p-4 flex flex-col items-center">
                    <div className="font-bold mb-2">{type} <span className="ml-2 text-xs bg-[#3479ff] text-white px-2 py-1 rounded">↗</span></div>
                    <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600 mb-2" placeholder="Event Title | post date" />
                    <div className="flex gap-4">
                      {['Like', 'Share', 'Comment'].map((stat) => (
                        <div key={stat} className="bg-[#3479ff] text-white rounded-lg px-4 py-2 font-bold text-lg text-center">
                          5008<br />{stat}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-[#22e6ce] hover:bg-[#3479ff] text-white font-bold px-8 py-2 rounded-lg text-lg transition">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachCreatives;
