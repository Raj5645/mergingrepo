import React, { useState } from "react";

// Pencil SVG icon (inline, so no extra dependencies)
const PencilIcon = () => (
  <svg
    className="inline-block align-middle ml-1"
    width="16"
    height="16"
    fill="none"
    stroke="#717480"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      d="M16.862 3.487a2.06 2.06 0 0 1 2.916 2.914l-11.1 11.1-3.88.965.965-3.88 11.099-11.099z"
      strokeLinejoin="round"
    />
  </svg>
);

const fontRuda = "font-ruda";

const AdBudget = () => {
  const [adInputs, setAdInputs] = useState({
    google: '', meta: '', youtube: '', platform: '',
    pamphlete: '', hoardings: '', promoters: '', communities: '', corporates: '', booths: '',
    influencers: '', brands: ''
  });

  const handleInput = (field, value) =>
    setAdInputs({ ...adInputs, [field]: value });

  return (
    <div className={`w-full ${fontRuda}`}>
      {/* Add Funds & Budget Boxes */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
        <button
          className="flex items-center justify-center w-full md:w-[160px] h-[44px] bg-gradient-to-r from-[#3479FF] to-[#22E6CE] rounded-lg font-bold text-white text-base md:text-lg transition"
        >
          <span className="mr-2">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="6" fill="url(#addfund-gradient)" />
              <defs>
                <linearGradient id="addfund-gradient" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3479FF" />
                  <stop offset="1" stopColor="#22E6CE" />
                </linearGradient>
              </defs>
              <path d="M12 7v10M7 12h10" stroke="#1C2536" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          Add Fund
        </button>
        <div className="flex-1 flex flex-col">
          <div className="w-full rounded-lg flex flex-col md:flex-row items-stretch justify-end p-0 md:p-0 relative min-h-[80px]">
            <div className="flex flex-row gap-2 md:gap-4 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto justify-end">
              {/* Budget Boxes */}
              {[
                { value: "₹2603", label: "AD Budget" },
                { value: "₹1508", label: "Total Spend" },
                { value: "₹1095", label: "Total Left" },
              ].map((box) => (
                <div
                  key={box.label}
                  className="flex-1 md:flex-none w-full md:w-[140px] h-[60px] md:h-[80px] flex flex-col items-center justify-center rounded-lg bg-[#1C2536] mx-0"
                >
                  <span className="font-bold text-xl mb-0.5
                    bg-gradient-to-r from-[#3479FF] to-[#22E6CE] bg-clip-text text-transparent inline-block"
                  >
                    {box.value}
                  </span>
                  <span className="text-xs font-semibold text-[#fff] uppercase tracking-wide">{box.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Budget Section */}
      <div className="w-full bg-[#1A1A1A] rounded-xl p-4 md:p-6 flex flex-col gap-6">
        {/* ATL Row */}
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6 w-full">
          <div className="font-bold text-base md:text-lg w-full md:w-[60px] mb-2 md:mb-0 text-[#fff] flex items-center">
            ATL <PencilIcon />
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Google ADs", field: "google" },
              { label: "Meta ADs", field: "meta" },
              { label: "Youtube ADs", field: "youtube" },
              { label: "In-Platform Promotion", field: "platform" },
            ].map(({ label, field }) => (
              <div key={field} className="flex flex-col">
                <label className="font-medium text-xs mb-1 text-[#717480] tracking-wide">{label}</label>
                <input
                  type="number"
                  inputMode="decimal"
                  className="w-full h-[44px] md:h-[44px] rounded-lg bg-transparent border border-[#7D7D7D] text-[#717480] px-3 text-base placeholder:text-[#717480] focus:outline-none focus:border-[#22e6ce] transition font-ruda 
                  [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="₹00.00"
                  value={adInputs[field]}
                  onChange={e => handleInput(field, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* BTL Row */}
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6 w-full">
          <div className="font-bold text-base md:text-lg w-full md:w-[60px] mb-2 md:mb-0 text-[#fff] flex items-center">
            BTL <PencilIcon />
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Pamphlete", field: "pamphlete" },
              { label: "Hoardings", field: "hoardings" },
              { label: "Promoters", field: "promoters" },
              { label: "Communities", field: "communities" },
              { label: "Corporates", field: "corporates" },
              { label: "Ticketing booths", field: "booths" },
            ].map(({ label, field }) => (
              <div key={field} className="flex flex-col">
                <label className="font-medium text-xs mb-1 text-[#717480] tracking-wide">{label}</label>
                <input
                  type="number"
                  inputMode="decimal"
                  className="w-full h-[44px] md:h-[44px] rounded-lg bg-transparent border border-[#7D7D7D] text-[#717480] px-3 text-base placeholder:text-[#717480] focus:outline-none focus:border-[#22e6ce] transition font-ruda 
                  [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="₹00.00"
                  value={adInputs[field]}
                  onChange={e => handleInput(field, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Collabs Row */}
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6 w-full">
          <div className="font-bold text-base md:text-lg w-full md:w-[90px] mb-2 md:mb-0 text-[#fff] flex items-center">
            Collabs <PencilIcon />
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { label: "Influencers", field: "influencers" },
              { label: "Brands", field: "brands" },
            ].map(({ label, field }) => (
              <div key={field} className="flex flex-col">
                <label className="font-medium text-xs mb-1 text-[#717480] tracking-wide">{label}</label>
                <input
                  type="number"
                  inputMode="decimal"
                  className="w-full h-[44px] md:h-[44px] rounded-lg bg-transparent border border-[#7D7D7D] text-[#717480] px-3 text-base placeholder:text-[#717480] focus:outline-none focus:border-[#22e6ce] transition font-ruda 
                  [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="₹00.00"
                  value={adInputs[field]}
                  onChange={e => handleInput(field, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Confirm Button */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-gradient-to-r from-[#3479FF] to-[#22E6CE] w-full sm:w-[120px] h-[40px] rounded-lg font-bold text-base md:text-lg text-white transition font-ruda"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBudget;
