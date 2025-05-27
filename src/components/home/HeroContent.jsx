// // Import React and useState for state management
// import React, { useState } from 'react';
// // Import useNavigate for navigation (not used here but imported)
// import { useNavigate } from 'react-router-dom';
// // Import LoginPage component for login overlay
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

// // HeroContent component definition
// const HeroContent = () => {
//   // State to control visibility of login overlay
//   const [showLogin, setShowLogin] = useState(false);
//   // Navigation hook (not used in this component)
//   const navigate = useNavigate();

//   // Handler for Get Started button click
//   const handleGetStarted = () => {
//     setShowLogin(true); // Show the login overlay
//   };

//   // Render the hero section and login overlay
//   return (
//     <>
//       {/* Hero section with logo, tagline, and Get Started button */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         {/* Cirkle logo */}
//         <img
//           src="/images/img_mask_group.png"
//           alt="Cirkle Logo"
//           className="w-[334px] h-[147px] mb-6"
//         />
//         {/* Tagline */}
//         <h1 className="text-[38px] font-semibold text-white font-ruda text-center mb-10">
//           Beyond Tickets. Built for Impact.
//         </h1>
//         {/* Get Started button */}
//         <button
//           onClick={handleGetStarted}
//           className="flex items-center px-8 py-4 rounded-[8px] bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white font-bold font-ruda"
//         >
//           <span className="mr-4">Get Started</span>
//           <img src="/images/img_arrow_3.svg" alt="Arrow" className="h-[2px] w-[31px]" />
//         </button>
//       </div>
//       {/* Show login overlay if showLogin is true */}
//       {showLogin && <LoginForm />}
//     </>
//   );
// };

// // Export HeroContent as default
// export default HeroContent;

// import React, { useState } from 'react';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';

// const HeroContent = () => {
//   const [activeTab, setActiveTab] = useState('login');

//   return (
//     <div className="absolute inset-0 flex flex-col items-center justify-center">
//       {/* Shared background */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src="/images/img_mask_group.png"
//           alt="Cirkle Background"
//           className="w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#171717] to-[#000000] opacity-90"></div>
//       </div>
//       {/* Logo and tagline */}
//       <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="w-[334px] h-[147px] mb-6" />
//       <h1 className="text-[38px] font-semibold text-white font-ruda text-center mb-10">
//         Beyond Tickets. Built for Impact.
//       </h1>
//       {/* Tabs */}
//       <div className="flex mb-6">
//   <button
//     className={`px-8 py-4 rounded-t-lg text-lg font-semibold ${activeTab === 'login' ? 'bg-[#232323] text-white' : 'bg-[#191919] text-gray-400'}`}
//     onClick={() => setActiveTab('login')}
//   >
//     Login
//   </button>
//   <button
//     className={`px-8 py-4 rounded-t-lg text-lg font-semibold ${activeTab === 'signup' ? 'bg-[#232323] text-white' : 'bg-[#191919] text-gray-400'}`}
//     onClick={() => setActiveTab('signup')}
//   >
//     Signup
//   </button>
// </div>
//       {/* Forms */}
//       {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
//     </div>
//   );
// };

// export default HeroContent;

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const HeroContent = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const handleGetStarted = () => setShowOverlay(true);
  const handleCloseOverlay = () => setShowOverlay(false);

  return (
    <div className="absolute inset-0 h-screen flex font-ruda pt-[85px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/img_mask_group.png"
          alt="Cirkle Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Left side - Hero content */}
      <div
        className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          showOverlay ? 'w-1/2 pl-8' : 'w-full'
        }`}
      >
        <img
          src="/images/img_mask_group.png"
          alt="Cirkle Logo"
          className="w-[280px] h-[120px] mb-2"
        />
        <div className="text-[#22e6ce] text-lg font-medium mb-1">An ecosystem for events</div>
        <h1 className="text-[32px] font-semibold text-white text-center mb-8">
          Beyond Tickets. Built for Impact.
        </h1>

        {/* Get Started Button */}
        {!showOverlay && (
          <button
            onClick={handleGetStarted}
            className="flex items-center px-10 py-4 rounded-xl bg-gradient-to-r from-[#3479ff] to-[#22e6ce] text-white font-semibold text-xl shadow-md transition hover:scale-105 focus:outline-none"
          >
            <span className="mr-4">Get Started</span>
            <svg
              className="w-8 h-6"
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
      </div>

      {/* Right side - Login/Signup Form */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showOverlay ? 'w-1/2 translate-x-0' : 'w-0 translate-x-full overflow-hidden'
        }`}
      >
        {showOverlay && (
          <div className="h-full flex items-center justify-center p-8">
            {/* Form container with blur and transparency */}
            <div className="relative z-10 w-full max-w-md p-8">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
                onClick={handleCloseOverlay}
              >
                ×
              </button>

              {/* Tab headers */}
              {/* <div className="flex mb-6 border-b border-white/20">
                <button
                  className={`flex-1 pb-3 text-xl font-bold uppercase transition ${
                    activeTab === 'login'
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </button>
                <button
                  className={`flex-1 pb-3 text-xl font-bold uppercase transition ${
                    activeTab === 'signup'
                      ? 'text-white border-b-2 border-white'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setActiveTab('signup')}
                >
                  Sign Up
                </button>
              </div> */}

              {/* Form Content */}
            <div className="relative z-10 w-full max-w-md p-8 bg-transparent border border-white/30 rounded-xl shadow-lg">
  {/* Close button and tabs */}
  {activeTab === 'login' ? (
    <LoginForm setActiveTab={setActiveTab} />
  ) : (
    <SignupForm setActiveTab={setActiveTab} />
  )}
</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
