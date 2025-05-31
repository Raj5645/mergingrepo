import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const Outreach = () => {
  const [selectedTab, setSelectedTab] = useState("AD BUDGET");
  const navigate = useNavigate();
  const [adInputs, setAdInputs] = useState({
    google: '', meta: '', youtube: '', platform: '',
    pamphellete: '', hoardings: '', promoters: '', communities: '', corporates: '', booths: '',
    influencers: '', brands: ''
  });

  const handleInput = (field, value) => setAdInputs({ ...adInputs, [field]: value });

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    if (tab === "AD BUDGET") navigate("/outreach");
    else if (tab === "CREATIVES") navigate("/outreach/creatives");
    else if (tab === "AD performance") navigate("/outreach/ad-performance");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col mx-auto p-8" style={{ width: "1198px", background: "rgba(255,255,255,0.05)", borderRadius: "24px" }}>
            {/* Top Row */}
            <div className="flex justify-between items-center mb-6">
              <div className="font-bold uppercase" style={{ fontSize: "29px", width: "160px" }}>Outreach</div>
              <div className="flex gap-4">
                {["AD BUDGET", "CREATIVES", "AD performance"].map(tab => (
                  <button
                    key={tab}
                    className={`w-[190px] h-[40px] rounded-lg font-bold uppercase text-base transition-all ${selectedTab === tab ? 'border border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'bg-[#232323] text-gray-300 hover:bg-[#3479ff] hover:text-white'}`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab === 'AD BUDGET' ? <span className="text-[#22e6ce]">AD Budget</span> : tab === 'CREATIVES' ? 'Creatives' : 'AD Performance'}
                  </button>
                ))}
              </div>
            </div>
            {/* Add Fund and Budget Boxes */}
            <div className="flex items-center gap-6 mb-6">
              <button className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] w-[199px] h-[49px] flex items-center justify-center font-bold rounded-lg text-lg">+ Add Fund</button>
              <div className="flex gap-4 ml-auto">
                <div className="w-[155.85px] h-[80px] flex flex-col items-center justify-center rounded-lg bg-[#171717] border border-[#3479ff]">
                  <span className="font-bold text-xl mb-1 text-[#22e6ce]">₹2603</span>
                  <span className="text-xs font-bold text-[#22e6ce]">AD Budget</span>
                </div>
                <div className="w-[155.85px] h-[80px] flex flex-col items-center justify-center rounded-lg bg-[#171717] border border-[#3479ff]">
                  <span className="font-bold text-xl mb-1 text-[#22e6ce]">₹1508</span>
                  <span className="text-xs font-bold text-[#22e6ce]">Total Spend</span>
                </div>
                <div className="w-[155.85px] h-[80px] flex flex-col items-center justify-center rounded-lg bg-[#171717] border border-[#3479ff]">
                  <span className="font-bold text-xl mb-1 text-[#22e6ce]">₹1095</span>
                  <span className="text-xs font-bold text-[#22e6ce]">Total Left</span>
                </div>
              </div>
            </div>
            {/* Main Budget Section */}
            <div className="w-full bg-[#232323] bg-opacity-80 rounded-xl p-6 flex flex-col gap-8 mb-6 border border-[#22e6ce]">
              {/* ATL Section */}
              <div className="mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="font-bold text-lg w-[60px] text-[#22e6ce]">ATL</div>
                  <div className="h-[1px] bg-[#22e6ce] flex-1 opacity-30" />
                </div>
                <div className="flex gap-4">
                  { [
                    { label: 'Google ADs', field: 'google' },
                    { label: 'Meta ADs', field: 'meta' },
                    { label: 'Youtube ADs', field: 'youtube' },
                    { label: 'In-Platform Promotion', field: 'platform' },
                  ].map(({ label, field }) => (
                    <div key={label} className="flex flex-col items-center w-[251px]">
                      <span className="font-bold text-xs mb-1 text-gray-300">{label}</span>
                      <input type="number" className="w-full h-[52px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600 text-center" value={adInputs[field]} onChange={e => handleInput(field, e.target.value)} placeholder="₹00.00" />
                    </div>
                  ))}
                </div>
                {/* File upload bar for ATL */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[180px] text-xs text-gray-400">Upload ATL Plan</div>
                  <input type="file" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#22e6ce] file:text-white hover:file:bg-[#3479ff]" />
                </div>
              </div>
              {/* BTL Section */}
              <div className="mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="font-bold text-lg w-[60px] text-[#22e6ce]">BTL</div>
                  <div className="h-[1px] bg-[#22e6ce] flex-1 opacity-30" />
                </div>
                <div className="flex flex-wrap gap-4">
                  { [
                    { label: 'Pamphlete', field: 'pamphellete' },
                    { label: 'Hoardings', field: 'hoardings' },
                    { label: 'Promoters', field: 'promoters' },
                    { label: 'Communities', field: 'communities' },
                    { label: 'Corporates', field: 'corporates' },
                    { label: 'Ticketing booths', field: 'booths' },
                  ].map(({ label, field }) => (
                    <div key={label} className="flex flex-col items-center w-[252px] mb-2">
                      <span className="font-bold text-xs mb-1 text-gray-300">{label}</span>
                      <input type="number" className="w-full h-[52px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600 text-center" value={adInputs[field]} onChange={e => handleInput(field, e.target.value)} placeholder="₹00.00" />
                    </div>
                  ))}
                </div>
                {/* File upload bar for BTL */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[180px] text-xs text-gray-400">Upload BTL Plan</div>
                  <input type="file" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#22e6ce] file:text-white hover:file:bg-[#3479ff]" />
                </div>
              </div>
              {/* COLLABS Section */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="font-bold text-lg w-[90px] text-[#22e6ce]">Collabs</div>
                  <div className="h-[1px] bg-[#22e6ce] flex-1 opacity-30" />
                </div>
                <div className="flex gap-4">
                  { [
                    { label: 'Influencers', field: 'influencers' },
                    { label: 'Brands', field: 'brands' },
                  ].map(({ label, field }) => (
                    <div key={label} className="flex flex-col items-center w-[252px]">
                      <span className="font-bold text-xs mb-1 text-gray-300">{label}</span>
                      <input type="number" className="w-full h-[52px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600 text-center" value={adInputs[field]} onChange={e => handleInput(field, e.target.value)} placeholder="₹00.00" />
                    </div>
                  ))}
                </div>
                {/* File upload bar for Collabs */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-[180px] text-xs text-gray-400">Upload Collabs Plan</div>
                  <input type="file" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#22e6ce] file:text-white hover:file:bg-[#3479ff]" />
                </div>
              </div>
            </div>
            {/* Confirm Button Row */}
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

export default Outreach;
