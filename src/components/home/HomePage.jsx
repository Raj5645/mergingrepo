import React from 'react';
import Header from '../common/Header';

const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#171717] to-black text-white">
    <Header />
    <main className="relative flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold mb-8">Welcome to Cirkle</h1>
      <p className="text-xl">Your event platform, reimagined.</p>
    </main>
  </div>
);

export default HomePage;
