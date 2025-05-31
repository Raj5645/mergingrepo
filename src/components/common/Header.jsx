import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full h-[74px] bg-[#171717] flex items-center justify-between px-6 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/img_mask_group_40x92.png"
            alt="Cirkle Logo"
            className="h-[40px] w-[92px]"
            onError={e => { e.target.src = '/images/img_mask_group.png'; }}
          />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Hamburger Menu - Visible only on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#171717] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-600">
            <h2 className="text-white text-xl font-medium">Menu</h2>
            <button
              onClick={closeMenu}
              className="text-white text-2xl hover:text-gray-300"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-4">
            <div className="space-y-4">
              <Link to="/" onClick={closeMenu}>
                <div className="block py-3 text-[#949494] text-lg font-medium hover:text-white transition-colors">
                  Home
                </div>
              </Link>
              <Link to="/services" onClick={closeMenu}>
                <div className="block py-3 text-[#949494] text-lg font-medium hover:text-white transition-colors">
                  Services
                </div>
              </Link>
              <Link to="/portfolio" onClick={closeMenu}>
                <div className="block py-3 text-[#949494] text-lg font-medium hover:text-white transition-colors">
                  Portfolio
                </div>
              </Link>
              <Link to="/join-us" onClick={closeMenu}>
                <div className="block py-3 text-[#949494] text-lg font-medium hover:text-white transition-colors">
                  Join Us
                </div>
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                <div className="inline-block mt-4 px-6 py-3 rounded-[12px] bg-gradient-to-r from-[#3980ed] to-[#04ffff] text-white text-lg font-medium">
                  Contact Us
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
