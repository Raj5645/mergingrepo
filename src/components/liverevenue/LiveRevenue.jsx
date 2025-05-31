import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/header2';

import { X, Calendar } from 'lucide-react';

const LiveRevenue = () => {
  const [activeTab, setActiveTab] = useState('Ticketing');
  const [selectedModal, setSelectedModal] = useState(null);
  const [dateRange, setDateRange] = useState({
    from: '2024-01-01',
    to: '2024-12-31',
  });

  // Chart refs for RFID Sales dashboard
  const topSellingProductsRef = useRef(null);
  const topSellingCategoriesRef = useRef(null);
  const topSellingArtistsRef = useRef(null);

  // Stats data for RFID Sales dashboard
  const statsData = [
    {
      id: 'active-listeners',
      icon: '🎵',
      value: '₹ 4,423,560',
      label: 'Active Listeners',
      bgColor: '#f59e0b',
      details: {
        title: 'Active Listeners Details',
        metrics: [
          { label: 'Total Active Users', value: '45,230' },
          { label: 'Peak Concurrent', value: '12,450' },
          { label: 'Average Session', value: '24 mins' },
          { label: 'Growth Rate', value: '+12.5%' },
        ],
      },
    },
    {
      id: 'total-sales',
      icon: '🎯',
      value: '₹ 8,033,498',
      label: 'Total Sales',
      bgColor: '#ef4444',
      details: {
        title: 'Total Sales Breakdown',
        metrics: [
          { label: 'Concert Tickets', value: '₹ 5,200,000' },
          { label: 'Merchandise', value: '₹ 1,800,000' },
          { label: 'Digital Sales', value: '₹ 1,033,498' },
          { label: 'Commission Rate', value: '15%' },
        ],
      },
    },
    {
      id: 'revenue',
      icon: '💰',
      value: '₹ 243,536',
      label: 'Revenue',
      bgColor: '#3b82f6',
      details: {
        title: 'Revenue Analysis',
        metrics: [
          { label: 'Monthly Revenue', value: '₹ 243,536' },
          { label: 'Quarterly Growth', value: '+18.2%' },
          { label: 'Profit Margin', value: '32%' },
          { label: 'Net Income', value: '₹ 77,931' },
        ],
      },
    },
    {
      id: 'total-orders',
      icon: '📦',
      value: '₹ 128,340',
      label: 'Total Orders',
      bgColor: '#10b981',
      details: {
        title: 'Orders Overview',
        metrics: [
          { label: 'Total Orders', value: '1,284' },
          { label: 'Completed Orders', value: '1,201' },
          { label: 'Pending Orders', value: '83' },
          { label: 'Average Order Value', value: '₹ 6,280' },
        ],
      },
    },
    {
      id: 'events',
      icon: '🎪',
      value: '₹ 100',
      label: 'Events',
      bgColor: '#8b5cf6',
      details: {
        title: 'Events Statistics',
        metrics: [
          { label: 'Total Events', value: '24' },
          { label: 'Upcoming Events', value: '8' },
          { label: 'Sold Out Events', value: '6' },
          { label: 'Average Attendance', value: '2,450' },
        ],
      },
    },
    {
      id: 'artists',
      icon: '🎤',
      value: '25',
      label: 'Artists',
      bgColor: '#06b6d4',
      details: {
        title: 'Artist Analytics',
        metrics: [
          { label: 'Active Artists', value: '25' },
          { label: 'New This Month', value: '3' },
          { label: 'Top Performer', value: 'DJ Shadow' },
          { label: 'Average Rating', value: '4.8/5' },
        ],
      },
    },
  ];

  // Chart data for RFID Sales dashboard
  const chartData = {
    topSellingProducts: {
      labels: ['Live Shows', 'Digital Albums', 'Merchandise', 'VIP Packages', 'Streaming'],
      data: [35, 25, 20, 15, 5],
      colors: ['#f59e0b', '#ef4444', '#3b82f6', '#10b981', '#8b5cf6'],
    },
    topSellingCategories: {
      labels: ['Electronic', 'Hip Hop', 'Rock', 'Pop', 'Jazz'],
      data: [40, 25, 20, 10, 5],
      colors: ['#06b6d4', '#f59e0b', '#ef4444', '#10b981', '#8b5cf6'],
    },
    topSellingArtists: {
      labels: ['DJ Shadow', 'MC Thunder', 'Rock Band X', 'Pop Star Y', 'Jazz Ensemble'],
      data: [30, 25, 20, 15, 10],
      colors: ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6'],
    },
  };

  // Create pie chart function
  const createPieChart = (canvasRef, data, title) => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    const canvas = canvasRef.current;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;

    let currentAngle = -Math.PI / 2;
    const total = data.data.reduce((sum, value) => sum + value, 0);

    // Draw pie slices
    data.data.forEach((value, index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = data.colors[index];
      ctx.fill();

      currentAngle += sliceAngle;
    });

    // Draw center circle for donut effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = '#1a1a1a';
    ctx.fill();
  };

  useEffect(() => {
    if (activeTab === 'RFID Sales') {
      // Create charts when RFID Sales tab is active
      setTimeout(() => {
        createPieChart(topSellingProductsRef, chartData.topSellingProducts, 'Top Selling Products');
        createPieChart(
          topSellingCategoriesRef,
          chartData.topSellingCategories,
          'Top Selling Categories'
        );
        createPieChart(topSellingArtistsRef, chartData.topSellingArtists, 'Top Selling Artists');
      }, 100);
    }
  }, [activeTab]);

  const openModal = (statId) => {
    const stat = statsData.find((s) => s.id === statId);
    setSelectedModal(stat);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  const navigate = (path) => {
    // Mock navigate function
    console.log('Navigating to:', path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b pt-[85px] from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      <Sidebar/>
      <div className="flex flex-col p-8 w-full max-w-6xl mx-auto">
        <Header/>
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-bold text-white">Live Revenue</div>
          <div className="flex gap-4">
            <button
              className={`px-8 py-2 rounded-lg font-bold text-base border ${activeTab === 'Ticketing' ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-transparent text-gray-300 bg-[#232323] hover:bg-[#3479ff] hover:text-white'}`}
              onClick={() => {
                setActiveTab('Ticketing');
                navigate('/liverevenue');
              }}
            >
              Ticketing
            </button>
            <button
              className={`px-8 py-2 rounded-lg font-bold text-base border ${activeTab === 'RFID Sales' ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-transparent text-gray-300 bg-[#232323] hover:bg-[#3479ff] hover:text-white'}`}
              onClick={() => {
                setActiveTab('RFID Sales');
                navigate('/liverevenue/rfid');
              }}
            >
              RFID Sales
            </button>
          </div>
        </div>

        {/* Ticketing Tab Content - EXACTLY THE SAME AS ORIGINAL */}
        {activeTab === 'Ticketing' && (
          <div className="flex gap-12 items-start">
            {/* Donut Chart and Revenue */}
            <div className="flex flex-col items-center justify-center w-[420px] relative">
              <div className="relative w-[260px] h-[260px] flex items-center justify-center">
                <svg width="220" height="220" viewBox="0 0 220 220" className="block mx-auto">
                  <circle cx="110" cy="110" r="90" stroke="#232323" strokeWidth="30" fill="none" />
                  <circle
                    cx="110"
                    cy="110"
                    r="90"
                    stroke="#FF4DB8"
                    strokeWidth="30"
                    fill="none"
                    strokeDasharray="565"
                    strokeDashoffset="120"
                  />
                </svg>
                {/* Revenue label (left) */}
                <div className="absolute left-[-70px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="bg-[#232323] text-white px-4 py-1 rounded-lg text-base font-bold mb-1 shadow">
                    Revenue
                  </span>
                  <span className="text-[#FFDF8C] text-xl font-bold">2000k</span>
                </div>
                {/* Platform label (right) */}
                <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="bg-[#232323] text-white px-4 py-1 rounded-lg text-base font-bold mb-1 shadow">
                    Platform
                  </span>
                  <span className="text-[#FFDF8C] text-xl font-bold">0000</span>
                </div>
              </div>
              <div className="mt-8 bg-[#232323] rounded-lg px-12 py-4 text-center w-[220px] mx-auto">
                <span className="text-4xl font-bold text-[#22e6ce]">5008</span>
                <div className="text-lg font-semibold text-white">Box Office</div>
              </div>
            </div>
            {/* Table */}
            <div className="flex-1">
              <div className="text-2xl font-bold mb-4">Ticketing</div>
              <div className="bg-[#232323] rounded-xl p-4">
                <div className="flex font-bold text-gray-400 mb-2">
                  <div className="w-1/5">Platform</div>
                  <div className="w-1/5">Category</div>
                  <div className="w-1/5">No. of Tickets</div>
                  <div className="w-1/5">Revenue</div>
                  <div className="w-1/5">Percentage</div>
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center mb-2 bg-[#232323] rounded-lg py-2 px-2">
                    <div className="w-1/5">Platform {i}</div>
                    <div className="w-1/5">Cat {i}</div>
                    <div className="w-1/5">{i}</div>
                    <div className="w-1/5">00,00,000</div>
                    <div className="w-1/5">100 %</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RFID Sales Tab Content - COMPREHENSIVE ANALYTICS DASHBOARD */}
        {activeTab === 'RFID Sales' && (
          <div className="space-y-6">
            {/* Header with Date Range */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">RFID Sales Overview</h1>
                <p className="text-gray-400">Track your music events and sales performance</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    value={dateRange.from}
                    onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                    className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm"
                  />
                  <span className="text-gray-400">to</span>
                  <input
                    type="date"
                    value={dateRange.to}
                    onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                    className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm"
                  />
                  <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded text-sm font-medium transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statsData.map((stat) => (
                <div
                  key={stat.id}
                  onClick={() => openModal(stat.id)}
                  className="bg-gray-900 rounded-lg p-6 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                      style={{ backgroundColor: stat.bgColor }}
                    >
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Click for details</span>
                    <button className="text-cyan-400 text-xs hover:text-cyan-300 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Selling Products */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                <div className="flex items-center justify-center">
                  <canvas
                    ref={topSellingProductsRef}
                    width={250}
                    height={250}
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  {chartData.topSellingProducts.labels.map((label, index) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: chartData.topSellingProducts.colors[index] }}
                        />
                        <span className="text-gray-300">{label}</span>
                      </div>
                      <span className="text-white">
                        {chartData.topSellingProducts.data[index]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Selling Categories */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Top Selling Categories</h3>
                <div className="flex items-center justify-center">
                  <canvas
                    ref={topSellingCategoriesRef}
                    width={250}
                    height={250}
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  {chartData.topSellingCategories.labels.map((label, index) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: chartData.topSellingCategories.colors[index] }}
                        />
                        <span className="text-gray-300">{label}</span>
                      </div>
                      <span className="text-white">
                        {chartData.topSellingCategories.data[index]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Selling Artists - Full Width */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Top Selling Artists</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex items-center justify-center">
                  <canvas
                    ref={topSellingArtistsRef}
                    width={250}
                    height={250}
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="space-y-3">
                  {chartData.topSellingArtists.labels.map((label, index) => (
                    <div
                      key={label}
                      className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: chartData.topSellingArtists.colors[index] }}
                        />
                        <span className="text-gray-300">{label}</span>
                      </div>
                      <span className="text-white font-semibold">
                        {chartData.topSellingArtists.data[index]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for RFID Sales */}
      {selectedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{selectedModal.details.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {selectedModal.details.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0"
                >
                  <span className="text-gray-300">{metric.label}</span>
                  <span className="text-white font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex space-x-3">
              <button
                onClick={closeModal}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
              <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-medium transition-colors">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveRevenue;
