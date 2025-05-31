import React from "react";
import Sidebar from "../common/Sidebar";
<<<<<<< HEAD
import Header from "../common/Header";

const PublishedEvent = () => {
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
          <div className="text-3xl font-bold text-white mb-8">Published Event</div>
          <div className="flex justify-center items-center">
            <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#232323] bg-black" style={{ width: 340, height: 700 }}>
              {/* Mobile mockup */}
              <div className="w-full h-[200px] bg-black">
                <img src="/images/img_rectangle_464.png" alt="Event Banner" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#101010] flex flex-col px-4 pt-4 pb-2" style={{ minHeight: 500 }}>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-bold text-lg text-white">Concert Name</div>
                    <div className="text-xs text-gray-400">Music | Food | Alcohol</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="text-xs text-gray-300">4.9k</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                  <img src="/images/img_ionticketoutline.svg" alt="calendar" className="w-4 h-4" />
                  Sat, 22 March, 2025 | 6 PM onwards
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
                  <img src="/images/img_tdesignlocationfilled.svg" alt="location" className="w-4 h-4" />
                  Venue name
                </div>
                <div className="mb-2">
                  <div className="font-bold text-sm text-white mb-1">Artists</div>
                  <div className="flex gap-2">
                    <img src="/images/img_mask_group.png" alt="artist1" className="w-10 h-10 rounded-full object-cover" />
                    <img src="/images/img_mask_group_40x92.png" alt="artist2" className="w-10 h-10 rounded-full object-cover" />
                  </div>
                </div>
                <div className="mb-2">
                  <div className="font-bold text-sm text-white mb-1">About</div>
                  <div className="text-xs text-gray-300 line-clamp-3">Lorem ipsum dolor sit amet consectetur. Et cras volutpat scelerisque neque enim accumsan. Sed ac volutpat velit id scelerisque neque enim accumsan. Non mi massa, viverra integer iaculis felis aliquet ut. Aliquet sed a. <a href="#" className="text-[#22e6ce] underline">Read More</a></div>
                </div>
                <div className="flex-1"></div>
                <div className="flex items-center justify-between bg-yellow-400 px-4 py-3 rounded-b-[28px] mt-4">
                  <div className="text-black font-bold">₹2000</div>
                  <button className="bg-black text-yellow-400 font-bold px-6 py-2 rounded-lg">Buy Tickets</button>
=======
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
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <button className="mt-8 bg-[#22e6ce] text-white font-bold px-6 py-2 rounded-lg" onClick={() => {navigator.clipboard.writeText(window.location.href); alert('Event link copied!')}}>Share Event Link</button>
=======
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
        </div>
      </div>
    </div>
  );
};

export default PublishedEvent;
