import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="w-full h-[74px] bg-[#171717] flex items-center justify-between px-6 z-10">
    <div className="flex items-center">
      <img
        src="/images/img_mask_group_40x92.png"
        alt="Cirkle Logo"
        className="h-[40px] w-[92px]"
        onError={e => { e.target.src = '/images/img_mask_group.png'; }}
      />
    </div>
    <div className="flex items-center space-x-4">
      <Link to="/">
        <div className="px-4 py-2 rounded-[12px] bg-[#191919] shadow-[0px_0px_12px_rgba(0,0,0,0.06)]">
          <span className="text-[20px] font-medium text-[#949494] font-sans">Home</span>
        </div>
      </Link>
      <Link to="/services">
        <div className="px-4 py-2 rounded-[12px] bg-[#191919] shadow-[0px_0px_12px_rgba(0,0,0,0.06)]">
          <span className="text-[20px] font-medium text-[#949494] font-sans">Services</span>
        </div>
      </Link>
      <Link to="/portfolio">
        <div className="px-4 py-2 rounded-[12px] bg-[#191919] shadow-[0px_0px_12px_rgba(0,0,0,0.06)]">
          <span className="text-[20px] font-medium text-[#949494] font-sans">Portfolio</span>
        </div>
      </Link>
      <Link to="/join-us">
        <div className="px-4 py-2 rounded-[12px] bg-[#191919] shadow-[0px_0px_12px_rgba(0,0,0,0.06)]">
          <span className="text-[20px] font-medium text-[#949494] font-sans">Join Us</span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="px-4 py-2 rounded-[12px] bg-gradient-to-r from-[#3980ed] to-[#04ffff] shadow-[0px_0px_12px_rgba(0,0,0,0.06)]">
          <span className="text-[20px] font-medium text-white font-sans">Contact Us</span>
        </div>
      </Link>
    </div>
  </header>
);

export default Header;