import React from "react";

const ExploreSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#171717] to-black text-white">
      {/* Centered Transparent Box */}
      <div className="flex flex-1 items-center justify-center">
        <div
          className="relative flex flex-row items-stretch justify-between mx-auto"
          style={{ width: "897.43px", height: "156px", background: "rgba(255,255,255,0.05)", borderRadius: "24px" }}
        >
          {/* Left Content */}
          <div className="flex flex-col justify-start p-8 w-2/3">
            <div className="font-bold text-lg mb-2">EXPLORE THE SOLUTIONS</div>
            <div className="font-normal text-base">lorem ipsum dimpsum</div>
          </div>
          {/* Right Side Small Boxes */}
          <div className="flex flex-col justify-center gap-4 p-4 w-1/3">
            <div
              className="bg-white bg-opacity-10 rounded-lg flex items-center justify-center"
              style={{ width: "223.4px", height: "46.12px" }}
            ></div>
            <div
              className="bg-white bg-opacity-10 rounded-lg flex items-center justify-center"
              style={{ width: "223.4px", height: "46.12px" }}
            ></div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-[#171717] py-8 flex flex-col items-center">
        {/* Cirkle Logo */}
        <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="h-12 mb-4" />
        {/* Quick Links */}
        <div className="text-center mb-4">
          <div className="font-bold text-lg mb-2">Quick Links</div>
          <div className="flex flex-wrap justify-center gap-6 text-base">
            <a href="/" className="hover:underline">Home</a>
            <a href="/events" className="hover:underline">Events</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
            <a href="/login" className="hover:underline">Login</a>
          </div>
        </div>
        {/* Description */}
        <div className="text-center max-w-2xl mx-auto mb-2 text-sm text-gray-300">
          Cirkle goes beyond ticketing to help organizers create smooth, scalable, and successful events. With real insights and NFC-powered tracking, we bring structure and stability to every event experience.
        </div>
        {/* Rights */}
        <div className="text-center text-xs text-gray-400">All rights reserved by razex</div>
      </footer>
    </div>
  );
};

export default ExploreSolutions;
