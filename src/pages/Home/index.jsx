import React from 'react';
import Header from '../../components/common/Header';
import EventBackground from './EventBackground';
import HeroContent from './HeroContent';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-black text-white">
      <Header />
      <main className="relative">
        <EventBackground />
        <HeroContent />
      </main>
    </div>
  );
};

export default HomePage;