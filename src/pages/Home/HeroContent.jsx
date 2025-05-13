import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroContent = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/events');
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
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