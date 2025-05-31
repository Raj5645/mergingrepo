<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const OutreachAdPerformance = () => {
  const navigate = useNavigate();

  // This is a static UI matching the third screenshot
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
                <button className="w-[190px] h-[40px] rounded-lg font-bold uppercase text-base bg-[#232323] text-gray-300" onClick={() => navigate('/outreach/creatives')}>Creatives</button>
                <button className="w-[190px] h-[40px] rounded-lg font-bold uppercase text-base bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white shadow-lg">AD Performance</button>
              </div>
            </div>
            {/* AD Performances Section */}
            <div className="font-bold text-lg mb-4">AD Performances</div>
            <div className="flex gap-8">
              {[1, 2].map((card) => (
                <div key={card} className="bg-[#232323] rounded-xl p-4 w-[350px] flex flex-col items-center border border-[#232323]">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img src={card === 1 ? "/images/img_image_9.png" : "/images/img_image_10.png"} alt="Event" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#baff39] text-black font-bold px-3 py-1 rounded">ROI : ₹5,000</div>
                    {card === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-black bg-opacity-60 rounded-full p-4">
                          <svg width="40" height="40" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="font-bold text-xl mb-2">Event Name</div>
                  <div className="grid grid-cols-3 gap-2 w-full text-xs text-gray-300 mb-2">
                    <div>Views : 500</div>
                    <div>Like : 500</div>
                    <div>O : 500</div>
                    <div>Follows : 500</div>
                    <div>Visits : 500</div>
                    <div>Orders : 500</div>
                    <div>Transactions : 500</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachAdPerformance;
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const OutreachAdPerformance = () => {
  const navigate = useNavigate();

  // This is a static UI matching the third screenshot
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
                <button className="w-[190px] h-[40px] rounded-lg font-bold uppercase text-base bg-[#232323] text-gray-300" onClick={() => navigate('/outreach/creatives')}>Creatives</button>
                <button className="w-[190px] h-[40px] rounded-lg font-bold uppercase text-base bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white shadow-lg">AD Performance</button>
              </div>
            </div>
            {/* AD Performances Section */}
            <div className="font-bold text-lg mb-4">AD Performances</div>
            <div className="flex gap-8">
              {[1, 2].map((card) => (
                <div key={card} className="bg-[#232323] rounded-xl p-4 w-[350px] flex flex-col items-center border border-[#232323]">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img src={card === 1 ? "/images/img_image_9.png" : "/images/img_image_10.png"} alt="Event" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#baff39] text-black font-bold px-3 py-1 rounded">ROI : ₹5,000</div>
                    {card === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-black bg-opacity-60 rounded-full p-4">
                          <svg width="40" height="40" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="font-bold text-xl mb-2">Event Name</div>
                  <div className="grid grid-cols-3 gap-2 w-full text-xs text-gray-300 mb-2">
                    <div>Views : 500</div>
                    <div>Like : 500</div>
                    <div>O : 500</div>
                    <div>Follows : 500</div>
                    <div>Visits : 500</div>
                    <div>Orders : 500</div>
                    <div>Transactions : 500</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutreachAdPerformance;
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
