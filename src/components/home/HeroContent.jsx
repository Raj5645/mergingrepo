// // Import React and useState for state management
// import React, { useState } from 'react';
// // Import useNavigate for navigation (not used here but imported)
// import { useNavigate } from 'react-router-dom';
// // Import LoginPage component for login overlay
// import LoginPage from '../auth/login';

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
//       {showLogin && <LoginPage />}
//     </>
//   );
// };

// // Export HeroContent as default
// export default HeroContent;




import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const HeroContent = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Shared background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/img_mask_group.png"
          alt="Cirkle Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717] to-[#000000] opacity-90"></div>
      </div>
      {/* Logo and tagline */}
      <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="w-[334px] h-[147px] mb-6" />
      <h1 className="text-[38px] font-semibold text-white font-ruda text-center mb-10">
        Beyond Tickets. Built for Impact.
      </h1>
      {/* Tabs */}
      <div className="flex mb-6">
  <button
    className={`px-8 py-4 rounded-t-lg text-lg font-semibold ${activeTab === 'login' ? 'bg-[#232323] text-white' : 'bg-[#191919] text-gray-400'}`}
    onClick={() => setActiveTab('login')}
  >
    Login
  </button>
  <button
    className={`px-8 py-4 rounded-t-lg text-lg font-semibold ${activeTab === 'signup' ? 'bg-[#232323] text-white' : 'bg-[#191919] text-gray-400'}`}
    onClick={() => setActiveTab('signup')}
  >
    Signup
  </button>
</div>
      {/* Forms */}
      {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default HeroContent;