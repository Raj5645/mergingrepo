import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroContent = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowLogin(true);
  };

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? '' : 'Invalid email');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Invalid email');
      return;
    }
    navigate('/events');
  };

  // This is the shared background for both home and login
  const background = (
    <div className="absolute inset-0 -z-10">
      <img
        src="/images/img_mask_group.png"
        alt="Cirkle Background"
        className="w-full h-full object-cover opacity-30"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] to-[#000000] opacity-90"></div>
    </div>
  );

  if (showLogin) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        {background}
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center w-1/2 h-full">
          <img 
            src="/images/img_mask_group.png" 
            alt="Cirkle Logo" 
            className="w-[334px] h-[147px] mb-6"
          />
          <h1 className="text-[38px] font-semibold text-white font-ruda text-center mb-10">
            Beyond Tickets. Built for Impact.
          </h1>
        </div>
        {/* Right Side - Login Box */}
        <div className="flex items-center justify-center w-1/2 h-full">
          <form
            onSubmit={handleLogin}
            className="bg-[#232323]/90 rounded-[18px] shadow-lg flex flex-col px-10 py-12"
            style={{ width: '496px', height: '703px', minWidth: '496px', minHeight: '703px' }}
          >
            <span className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">LOGIN</span>
            <label className="text-lg text-white font-medium mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="mb-2 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
              style={{ width: '414.92px', height: '44.92px', minWidth: '414.92px', minHeight: '44.92px' }}
              required
            />
            {emailError && <span className="text-red-500 text-xs mb-2">{emailError}</span>}
            <label className="text-lg text-white font-medium mt-4 mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="mb-6 px-4 py-2 rounded-lg bg-[#191919] text-white text-base outline-none"
              style={{ width: '414.92px', height: '44.92px', minWidth: '414.92px', minHeight: '44.92px' }}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg text-white font-bold text-lg mb-8"
              style={{ width: '414.92px', height: '44.92px', minWidth: '414.92px', minHeight: '44.92px' }}
            >
              LOGIN
            </button>
            <div className="flex justify-between mt-2">
              <button
                type="button"
                className="flex items-center justify-center bg-[#191919] rounded-lg text-white text-base font-medium"
                style={{ width: '124px', height: '44.64px', minWidth: '124px', minHeight: '44.64px' }}
              >
                <img src="/images/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-[#191919] rounded-lg text-white text-base font-medium"
                style={{ width: '124px', height: '44.64px', minWidth: '124px', minHeight: '44.64px' }}
              >
                <img src="/images/apple.svg" alt="Apple" className="w-5 h-5 mr-2" />
                Apple
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-[#191919] rounded-lg text-white text-base font-medium"
                style={{ width: '124px', height: '44.64px', minWidth: '124px', minHeight: '44.64px' }}
              >
                <img src="/images/phone.svg" alt="Phone" className="w-5 h-5 mr-2" />
                Phone
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {background}
      <img 
        src="/images/img_mask_group.png" 
        alt="Cirkle Logo" 
        className="w-[334px] h-[147px] mb-6"
      />
      <h1 className="text-[38px] font-semibold text-white font-ruda text-center mb-10">
        Beyond Tickets. Built for Impact.
      </h1>
      <button 
        onClick={handleGetStarted}
        className="flex items-center px-8 py-4 rounded-[8px] bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white font-bold font-ruda"
      >
        <span className="mr-4">Get Started</span>
        <img src="/images/img_arrow_3.svg" alt="Arrow" className="h-[2px] w-[31px]" />
      </button>
    </div>
  );
};

export default HeroContent;