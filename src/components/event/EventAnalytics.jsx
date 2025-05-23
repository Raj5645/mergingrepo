import React from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { title: 'Revenue', value: '₹5,80,000' },
  { title: 'Tickets Sold', value: '1400' },
  { title: 'Views', value: '5228' },
  { title: 'Ad Spends', value: '₹25,000' },
  { title: 'Likes', value: '287', icon: '👍' },
];

const EventAnalytics = ({ event }) => {
  const navigate = useNavigate();
  // Use event prop if available, fallback to default
  const eventName = event?.title || 'Live and Loud';
  const eventDate = event?.date
    ? `${event.date.day}, ${event.date.date} ${event.date.month} 2025`
    : '16 May 2025';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[220px] min-h-screen bg-[#171717]">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col p-8">
          {/* Event Name and Date */}
          <div className="flex justify-between items-end mb-8" style={{ minHeight: '61.1px' }}>
            <div>
              <h1 className="text-3xl font-bold font-ruda mb-2">{eventName}</h1>
              <p className="text-lg text-[#949494] font-ruda">Event Date: {eventDate}</p>
            </div>
            {/* Live Revenue Button */}
            <button
              className="px-6 py-2 bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white font-bold rounded-xl shadow-lg ml-4"
              onClick={() => navigate('/live-revenue')}
            >
              Live Revenue
            </button>
          </div>
          {/* Metrics + Ad Spends in a single row */}
          <div className="flex flex-row space-x-6 mb-8 items-end justify-start">
            {/* Revenue */}
            <div
              className="flex flex-col justify-center items-center bg-[#232323] bg-opacity-80 rounded-2xl shadow-lg cursor-pointer"
              style={{ width: '146.8px', height: '142.34px', minWidth: '146.8px', minHeight: '142.34px' }}
              onClick={() => navigate('/live-revenue')}
            >
              <span className="text-lg font-bold font-ruda mb-2 tracking-wide">Revenue</span>
              <span className="text-2xl font-extrabold font-ruda flex items-center">₹5,80,000</span>
            </div>
            {/* Tickets Sold */}
            <div
              className="flex flex-col justify-center items-center bg-[#232323] bg-opacity-80 rounded-2xl shadow-lg cursor-pointer"
              style={{ width: '146.8px', height: '142.34px', minWidth: '146.8px', minHeight: '142.34px' }}
              onClick={() => navigate('/live-revenue')}
            >
              <span className="text-lg font-bold font-ruda mb-2 tracking-wide">Tickets Sold</span>
              <span className="text-2xl font-extrabold font-ruda flex items-center">1400</span>
            </div>
            {/* Views */}
            <div className="flex flex-col justify-center items-center bg-[#232323] bg-opacity-80 rounded-2xl shadow-lg" style={{ width: '146.8px', height: '142.34px', minWidth: '146.8px', minHeight: '142.34px' }}>
              <span className="text-lg font-bold font-ruda mb-2 tracking-wide">Views</span>
              <span className="text-2xl font-extrabold font-ruda flex items-center">5228</span>
            </div>
            {/* Likes */}
            <div className="flex flex-col justify-center items-center bg-[#232323] bg-opacity-80 rounded-2xl shadow-lg" style={{ width: '146.8px', height: '142.34px', minWidth: '146.8px', minHeight: '142.34px' }}>
              <span className="text-lg font-bold font-ruda mb-2 tracking-wide">Likes</span>
              <span className="text-2xl font-extrabold font-ruda flex items-center">287 <span className="ml-2">👍</span></span>
            </div>
            {/* Ad Spends (with graph, larger and top-aligned with event name) */}
            <div className="flex flex-col justify-between items-center bg-[#232323] bg-opacity-80 rounded-2xl shadow-lg p-4" style={{ minWidth: '371px', minHeight: '204px', height: '204px', alignSelf: 'flex-start', marginTop: '-61px' }}>
              <span className="text-lg font-bold font-ruda mb-2 tracking-wide">AD SPENDS</span>
              <span className="text-2xl font-extrabold font-ruda flex items-center mb-2">₹25,000</span>
              <img src="/images/img_stories.png" alt="Ad Spends Graph" className="w-full h-[90px] object-contain" />
            </div>
          </div>
          {/* Analytics Graphs Section */}
          <div className="flex flex-row space-x-6 mt-2">
            {/* Tickets Sold Graph */}
            <div className="w-[370px] min-h-[394px] bg-[#232323] bg-opacity-80 rounded-2xl p-6 flex flex-col items-center">
              <span className="text-white font-bold text-lg mb-4 tracking-widest">TICKETS SOLD</span>
              <img src="/images/img_stories.png" alt="Tickets Sold Graph" className="w-full h-[250px] object-contain" />
            </div>
            {/* Tickets Sold on Different Platforms */}
            <div className="w-[370px] min-h-[394px] bg-[#232323] bg-opacity-80 rounded-2xl p-6 flex flex-col items-center">
              <span className="text-white font-bold text-lg mb-4 tracking-widest text-center">TICKETS SOLD ON DIFFERENT PLATFORM</span>
              <img src="/images/img_1.png" alt="Tickets Platform Bar Graph" className="w-full h-[250px] object-contain" />
            </div>
            {/* Customer Growth Pie Chart */}
            <div className="w-[370px] min-h-[394px] bg-[#232323] bg-opacity-80 rounded-2xl p-6 flex flex-col items-center">
              <span className="text-white font-bold text-lg mb-4 tracking-widest">CUSTOMER GROWTH</span>
              {/* Sorting Tabs */}
              <div className="flex space-x-2 mb-4">
                <button className="px-4 py-1 rounded bg-[#3479ff] text-white font-bold">Day</button>
                <button className="px-4 py-1 rounded bg-[#232323] text-white font-bold">Month</button>
                <button className="px-4 py-1 rounded bg-[#232323] text-white font-bold">Year</button>
              </div>
              <img src="/images/img_stories_120x202.png" alt="Customer Growth Pie Chart" className="w-full h-[200px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAnalytics;
