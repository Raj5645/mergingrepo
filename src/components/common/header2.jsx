<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#171717] py-4 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/dashboard">
            <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="h-10" />
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link 
            to="/dashboard" 
            className="px-4 py-2 rounded-xl text-[#22e6ce] font-medium border border-transparent"
            style={{
              borderImage: 'linear-gradient(180deg, #3479ff 0%, #22e6ce 100%)',
              borderImageSlice: 1
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/settings" 
            className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium"
          >
            Settings
          </Link>
          
          <Link 
            to="/contact" 
            className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium"
          >
            Contact Us
          </Link>
          
          <Link to="/profile">
            <img 
              src="/images/img_profile.png" 
              alt="Profile" 
              className="w-11 h-11 rounded-full object-cover" 
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
=======
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
      <header 
        className="bg-[#171717] py-4 px-4 fixed top-0 left-0 right-0 z-50"
        style={{ backdropFilter: 'saturate(180%) blur(5px)' }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/dashboard">
              <img src="/images/img_mask_group.png" alt="Cirkle Logo" className="h-10" />
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/dashboard" 
              className="px-4 py-2 rounded-xl text-[#22e6ce] font-medium border border-transparent"
              style={{
                borderImage: 'linear-gradient(180deg, #3479ff 0%, #22e6ce 100%)',
                borderImageSlice: 1
              }}
            >
              Home
            </Link>
            
            <Link 
              to="/settings" 
              className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium hover:text-white transition-colors"
            >
              Settings
            </Link>
            
            <Link 
              to="/contact" 
              className="px-4 py-2 rounded-xl bg-[#191919] text-[#949494] font-medium hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            
            <Link to="/profile">
              <img 
                src="/images/img_profile.png" 
                alt="Profile" 
                className="w-11 h-11 rounded-full object-cover" 
              />
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
        </div>
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
              <Link to="/dashboard" onClick={closeMenu}>
                <div className="block py-3 text-[#22e6ce] text-lg font-medium">
                  Home
                </div>
              </Link>
              <Link to="/settings" onClick={closeMenu}>
                <div className="block py-3 text-[#949494] text-lg font-medium hover:text-white transition-colors">
                  Settings
                </div>
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                <div className="block py-3 text-[#949494] text-lg font-medium hover:text-white transition-colors">
                  Contact Us
                </div>
              </Link>
              
              {/* Profile Section in Mobile Menu */}
              <div className="pt-4 border-t border-gray-600">
                <Link to="/profile" onClick={closeMenu}>
                  <div className="flex items-center space-x-3 py-3">
                    <img 
                      src="/images/img_profile.png" 
                      alt="Profile" 
                      className="w-10 h-10 rounded-full object-cover" 
                    />
                    <span className="text-[#949494] text-lg font-medium hover:text-white transition-colors">
                      Profile
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
