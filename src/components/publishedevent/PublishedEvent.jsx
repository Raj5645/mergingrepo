import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const themeBlue = "bg-gradient-to-r from-[#22e6ce] to-[#3479ff]";

const PublishedEvent = () => {
  return (
    <div className="min-h-screen flex  pt-[85px] bg-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-black">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Header/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col mx-auto p-8" style={{ width: 1198, height: 722, background: "rgba(255,255,255,0.05)", borderRadius: 24 }}>
            {/* Top Left Title */}
            <div className="absolute left-8 top-8 font-bold uppercase" style={{ fontSize: 28.11, width: 300 }}>PUBLISHED EVENT</div>
            {/* Bottom Left Share Button */}
            <div className="absolute left-8 bottom-8">
              <button className={`${themeBlue} w-[142px] h-[31px] rounded-lg font-bold text-sm flex items-center justify-center`}>SHARE EVENT LINK</button>
            </div>
            {/* Centered iPhone Box */}
            <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
              <div className="bg-[#232323] rounded-[40px] border-4 border-gray-700 shadow-2xl flex flex-col items-center" style={{ width: 300, height: 650, position: 'relative' }}>
                {/* iPhone notch */}
                <div className="absolute left-1/2 top-0" style={{ transform: 'translateX(-50%)', width: 120, height: 18, background: '#111', borderRadius: '0 0 16px 16px', marginTop: -4 }} />
                {/* Cirkle App Header */}
                <div className="w-full flex items-center justify-between px-6 py-4 bg-[#171717] rounded-t-[36px]" style={{ height: 60 }}>
                  <span className="font-bold text-lg tracking-wide">CIRKLE</span>
                  <img src="/images/img_profile.png" alt="profile" className="w-8 h-8 rounded-full" />
                </div>
                {/* Event Banner */}
                <div className="w-[260px] h-[140px] rounded-2xl bg-gradient-to-r from-[#3479ff] to-[#22e6ce] my-4 flex items-center justify-center">
                  <span className="font-bold text-xl">Event Banner</span>
                </div>
                {/* Event Details */}
                <div className="w-[260px] flex flex-col gap-2">
                  <span className="font-bold text-lg">Live Concert Night</span>
                  <span className="text-xs text-gray-400">Sat, 24 May • 7:00 PM</span>
                  <span className="text-xs text-gray-400">Cirkle Arena, Mumbai</span>
                </div>
                {/* Book Button */}
                <button className={`${themeBlue} w-[260px] h-[44px] rounded-xl font-bold text-base mt-6 mb-2`}>BOOK NOW</button>
                {/* About Section */}
                <div className="w-[260px] mt-2">
                  <span className="font-bold text-sm">About</span>
                  <p className="text-xs text-gray-300 mt-1">Experience an electrifying night of music, lights, and fun at the Cirkle Live Concert Night. Join us for an unforgettable event!</p>
                </div>
                {/* Footer (like BookMyShow) */}
                <div className="absolute bottom-0 left-0 w-full flex items-center justify-center pb-4">
                  <span className="text-xs text-gray-500">Powered by Cirkle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedEvent;
