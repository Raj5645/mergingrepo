import React from "react";
import Sidebar from "../common/Sidebar";
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
                </div>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-[#22e6ce] text-white font-bold px-6 py-2 rounded-lg" onClick={() => {navigator.clipboard.writeText(window.location.href); alert('Event link copied!')}}>Share Event Link</button>
        </div>
      </div>
    </div>
  );
};

export default PublishedEvent;