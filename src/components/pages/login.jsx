// Import React and useState from react for state management
import React, { useState } from 'react';
// Import useNavigate from react-router-dom for navigation
import { useNavigate } from 'react-router-dom';

// Function to validate email using a simple regex
const validateEmail = (email) => {
  // Returns true if email is valid, false otherwise
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// LoginPage component definition
const LoginPage = () => {
  // State for email input
  const [email, setEmail] = useState('');
  // State for password input
  const [password, setPassword] = useState('');
  // State for email validation error message
  const [emailError, setEmailError] = useState('');
  // Hook for navigation
  const navigate = useNavigate();

  // Handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email state
    // Validate email and set error if invalid
    if (!validateEmail(e.target.value)) {
      setEmailError('Enter a valid email');
    } else {
      setEmailError('');
    }
  };

  // Handler for password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update password state
  };

  // Handler for login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    // If email is invalid, show error and do not proceed
    if (!validateEmail(email)) {
      setEmailError('Enter a valid email');
      return;
    }
    // If valid, navigate to /events page
    navigate('/events');
  };

  // Render the login overlay
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      {/* Home page event background as background only, no logo/text */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {/* Reuse the event background images from homepage */}
        {/* You may want to extract this as a component if reused elsewhere */}
        <img src="/images/img_rectangle_464.png" className="absolute left-[23px] top-0 w-[258px] h-[201px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_121x258.png" className="absolute left-[293px] top-0 w-[258px] h-[121px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_201x258.png" className="absolute left-[566px] top-0 w-[258px] h-[201px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_121x258.png" className="absolute left-[836px] top-0 w-[258px] h-[121px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_1.png" className="absolute left-[1109px] top-0 w-[258px] h-[201px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_121x60.png" className="absolute left-[1379px] top-0 w-[60px] h-[121px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_5.png" className="absolute left-[293px] top-[137px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_6.png" className="absolute left-[836px] top-[137px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_203x60.png" className="absolute left-[1379px] top-[137px] w-[60px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_203x258.png" className="absolute left-[23px] top-[217px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_3.png" className="absolute left-[566px] top-[217px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_4.png" className="absolute left-[1109px] top-[217px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_10.png" className="absolute left-[293px] top-[358px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_11.png" className="absolute left-[836px] top-[358px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_12.png" className="absolute left-[1379px] top-[358px] w-[60px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_7.png" className="absolute left-[23px] top-[438px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_8.png" className="absolute left-[566px] top-[438px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_9.png" className="absolute left-[1109px] top-[438px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_15.png" className="absolute left-[293px] top-[573px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_16.png" className="absolute left-[836px] top-[573px] w-[258px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_17.png" className="absolute left-[1379px] top-[573px] w-[60px] h-[203px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_145x258.png" className="absolute left-[23px] top-[653px] w-[258px] h-[145px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_13.png" className="absolute left-[566px] top-[653px] w-[258px] h-[145px] rounded-[6px] object-cover" alt="Event" />
        <img src="/images/img_rectangle_464_14.png" className="absolute left-[1109px] top-[653px] w-[258px] h-[145px] rounded-[6px] object-cover" alt="Event" />
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
      </div>
      {/* Login content above background */}
      <div className="relative z-10 flex w-full h-full items-center justify-center">
        {/* Left side: logo and text, centered between page start and login box */}
        <div className="flex flex-col justify-center items-center w-1/2 h-[703px]">
          <div className="flex flex-col items-center justify-center h-[703px] w-full">
            {/* Cirkle logo */}
            <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="w-[220px] h-auto mb-4" />
            {/* Tagline */}
            <h1 className="text-[32px] font-semibold text-white font-ruda text-center leading-tight">
              Beyond Tickets.<br />Built for Impact.
            </h1>
          </div>
        </div>
        {/* Right side: login box, centered */}
        <div className="flex flex-col justify-start items-start w-[496px] h-[703px] bg-white bg-opacity-10 rounded-[32px] p-12 backdrop-blur-md">
          {/* Login heading */}
          <span className="text-white font-bold text-2xl tracking-widest mb-8">LOGIN</span>
          {/* Login form */}
          <form className="w-full" onSubmit={handleLogin}>
            {/* Email label */}
            <label className="text-white text-base font-semibold mb-2 block">Email</label>
            {/* Email input */}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-[414.92px] h-[44.92px] rounded-lg bg-[#232323] text-white px-4 mb-1 border-none outline-none focus:ring-2 focus:ring-[#22e6ce]"
              placeholder="Enter your email"
              required
            />
            {/* Email error message */}
            {emailError && <div className="text-red-400 text-xs mb-2">{emailError}</div>}
            {/* Password label */}
            <label className="text-white text-base font-semibold mb-2 block mt-4">Password</label>
            {/* Password input */}
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-[414.92px] h-[44.92px] rounded-lg bg-[#232323] text-white px-4 mb-6 border-none outline-none focus:ring-2 focus:ring-[#22e6ce]"
              placeholder="Enter your password"
              required
            />
            {/* Login button */}
            <button
              type="submit"
              className="w-[414.92px] h-[44.92px] bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg text-white font-bold text-lg flex items-center justify-center mb-8 mt-2"
            >
              LOGIN
            </button>
          </form>
          {/* Social login buttons */}
          <div className="flex flex-row gap-4 w-full justify-center mt-2">
            {/* Google login button */}
            <button className="w-[124px] h-[44.64px] bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
              <img src="/images/google.svg" alt="Google" className="w-5 h-5 mr-2" /> Google
            </button>
            {/* Apple login button */}
            <button className="w-[124px] h-[44.64px] bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
              <img src="/images/apple.svg" alt="Apple" className="w-5 h-5 mr-2" /> Apple
            </button>
            {/* Phone login button */}
            <button className="w-[124px] h-[44.64px] bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
              <img src="/images/phone.svg" alt="Phone" className="w-5 h-5 mr-2" /> Phone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the LoginPage component as default
export default LoginPage;
