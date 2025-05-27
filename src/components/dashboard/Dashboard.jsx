import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import MetricsSection from './MetricsSection';
import ChartsSection from './ChartsSection';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b pt-[85px] from-[#171717] to-[#000000] text-white">
      <Header />
      
      <div className="flex">
        <div className="w-[186px] p-5">
          <Sidebar />
        </div>
        
        <div className="flex-1 p-4">
          <div className="bg-gradient-to-b from-[#1b1b1b] to-[#0a0a0a] rounded-[18px] p-6 min-h-[720px]">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-[32px] font-[900] text-white font-['Ruda']">Live and Loud</h1>
              <p className="text-[18px] font-medium text-white font-['Ruda']">Event on: 23/06/25</p>
            </div>
            
            <MetricsSection />
            <ChartsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;