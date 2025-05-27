// Import React library
import React from 'react';
// Import Header component
import Header from '../common/Header';
// Import EventBackground component
import EventBackground from './EventBackground';
// Import HeroContent component
import HeroContent from './HeroContent';

// HomePage component definition
const HomePage = () => {
  // Render the home page layout
  return (
    <div className="min-h-screen bg-gradient-to-b pt-[85px] from-[#171717] to-black text-white"> {/* Main container with background gradient */}
      <Header /> {/* Top navigation/header */}
      <main className="relative"> {/* Main content area */}
        <EventBackground /> {/* Event background images */}
        <HeroContent /> {/* Hero section with logo, tagline, and Get Started button */}
      </main>
    </div>
  );
};

// Export HomePage as default
export default HomePage;