import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const HeroContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const handleGetStarted = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  return (
    // Absolute and high z-index to ensure overlap
    <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col md:flex-row font-ruda pt-[78px]">
      {/* Left Side (Hero Content) */}
      <div
        className={`flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out px-4 ${
          showForm ? 'md:w-1/2 md:pl-8' : 'w-full'
        }`}
      >
        <img
          src="/images/img_mask_group.png"
          alt="Cirkle Logo"
          className="w-[180px] md:w-[280px] h-[80px] md:h-[120px] mb-2"
        />
        <div className="text-[#22e6ce] text-base md:text-lg font-medium mb-1">
          An ecosystem for events
        </div>
        <h1 className="text-[22px] md:text-[32px] font-semibold text-white mb-8">
          Beyond Tickets. Built for Impact.
        </h1>
        {!showForm && (
          <button
            onClick={handleGetStarted}
            className="flex items-center px-8 md:px-10 py-3 md:py-4 rounded-xl bg-gradient-to-r from-[#3479ff] to-[#22e6ce] text-white font-semibold text-lg md:text-xl shadow-md transition hover:scale-105 focus:outline-none"
          >
            <span className="mr-4">Get Started</span>
            <svg
              className="w-7 h-5 md:w-8 md:h-6"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 32 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="12" x2="24" y2="12" />
              <polyline points="16,4 24,12 16,20" />
            </svg>
          </button>
        )}

        {/* Mobile: Show form below hero content */}
        {showForm && (
          <div className="w-full flex justify-center mt-8 md:hidden">
            <div className="relative w-full max-w-md p-6 bg-white/10 border border-white/30 rounded-xl shadow-lg mx-2">
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
                onClick={handleClose}
              >
                ×
              </button>
              {activeTab === 'login' ? (
                <LoginForm setActiveTab={setActiveTab} />
              ) : (
                <SignupForm setActiveTab={setActiveTab} />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop: Show form on right side with smooth transition */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showForm
            ? 'md:w-1/2 md:translate-x-0'
            : 'md:w-0 md:translate-x-full md:overflow-hidden'
        } w-full hidden md:flex md:items-center md:justify-center`}
      >
        {showForm && (
          <div className="relative w-full max-w-md p-6 bg-white/10 border border-white/30 rounded-xl shadow-lg mx-2">
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
              onClick={handleClose}
            >
              ×
            </button>
            {activeTab === 'login' ? (
              <LoginForm setActiveTab={setActiveTab} />
            ) : (
              <SignupForm setActiveTab={setActiveTab} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
