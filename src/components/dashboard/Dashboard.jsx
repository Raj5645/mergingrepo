import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Star, Ticket, Eye, DollarSign, ThumbsUp } from 'lucide-react';
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const Dashboard = () => {
  // Sample data for charts
  const ticketData = [
    { name: 'Week 1', today: 3000, yesterday: 2000 },
    { name: 'Week 2', today: 4500, yesterday: 3200 },
    { name: 'Week 3', today: 5200, yesterday: 4100 },
    { name: 'Week 4', today: 6800, yesterday: 5500 },
    { name: 'Week 5', today: 6200, yesterday: 5800 },
    { name: 'Week 6', today: 7200, yesterday: 6500 }
  ];

  const platformData = [
    { name: 'Week 1', online: 2500, ios: 1800 },
    { name: 'Week 2', online: 3200, ios: 2100 },
    { name: 'Week 3', online: 4100, ios: 2800 },
    { name: 'Week 4', online: 3800, ios: 2200 }
  ];

  const registrationData = [
    { name: 'Week 1', value: 7200 },
    { name: 'Week 2', value: 6800 },
    { name: 'Week 3', value: 5200 },
    { name: 'Week 4', value: 6500 },
    { name: 'Week 5', value: 7800 },
    { name: 'Week 6', value: 7200 }
  ];

  const customerGrowthData = [
    { name: 'New', value: 20000, color: '#00D4FF' },
    { name: 'Returning', value: 20000, color: '#FF8C42' }
  ];

  const StatCard = ({ icon: Icon, title, value, subtitle, bgColor }) => (
    <div className="bg-black rounded-xl p-4 shadow-sm flex flex-col border border-gray-800">
      <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center mb-3`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="text-gray-400 text-xs mb-1">{title}</div>
      <div className="text-white text-xl font-bold mb-1">{value}</div>
      {subtitle && <div className="text-gray-500 text-xs">{subtitle}</div>}
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-inter">
      {/* Sidebar */}
      <div className="w-[220px] bg-[#171717]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 bg-[#1a1a1a] text-white font-inter overflow-auto p-6">
          {/* Event Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Live and Loud</h1>
            <div className="text-gray-400">
              <span className="text-sm">Event on: 23/05/25</span>
            </div>
          </div>

          {/* Top Section: 5 Stats + Registration Trend */}
          <div className="grid grid-cols-6 gap-4 mb-8">
            {/* 5 Stats Cards */}
            <StatCard
              icon={Star}
              title="Revenue"
              value="84,950"
              bgColor="bg-yellow-500"
            />
            <StatCard
              icon={Ticket}
              title="Tickets Sold"
              value="6,241"
              bgColor="bg-red-500"
            />
            <StatCard
              icon={Eye}
              title="Views"
              value="1,380"
              bgColor="bg-blue-500"
            />
            <StatCard
              icon={DollarSign}
              title="Ad Spends"
              value="6,256"
              bgColor="bg-green-500"
            />
            <StatCard
              icon={ThumbsUp}
              title="Interested"
              value="5000"
              bgColor="bg-purple-500"
            />

            {/* Registration Trend */}
            <div className="bg-black rounded-xl p-4 shadow-sm border border-gray-800">
              <h3 className="text-sm font-semibold text-white mb-2">Registration Trend</h3>
              <div className="h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={registrationData}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#00D4FF" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Bottom Section: 3 Charts */}
          <div className="grid grid-cols-3 gap-6">
            {/* Tickets Sold Chart - Bottom Left */}
            <div className="bg-black rounded-xl p-6 shadow-sm border border-gray-800">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-1">20 Tickets Sold</h3>
                <p className="text-gray-400 text-sm">vs 15 yesterday</p>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={ticketData}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    />
                    <YAxis hide />
                    <Line 
                      type="monotone" 
                      dataKey="today" 
                      stroke="#00D4FF" 
                      strokeWidth={3}
                      dot={{ fill: '#00D4FF', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="yesterday" 
                      stroke="#9CA3AF" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Today</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Yesterday</span>
                </div>
              </div>
            </div>

            {/* Platform Stats - Bottom Middle */}
            <div className="bg-black rounded-xl p-6 shadow-sm border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Different Platform Stats</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={platformData} barCategoryGap="20%">
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    />
                    <YAxis hide />
                    <Bar dataKey="online" fill="#00D4FF" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="ios" fill="#FF8C42" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm">iOS</span>
                </div>
              </div>
            </div>

            {/* Customer Growth - Bottom Right */}
            <div className="bg-black rounded-xl p-6 shadow-sm border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">Customer Growth</h3>
              <p className="text-gray-400 text-sm mb-4">40k vs last month</p>
              <div className="relative h-40 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={customerGrowthData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={70}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {customerGrowthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-xs text-gray-400">New</div>
                  <div className="text-lg font-bold text-cyan-400">20k</div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-400">Returning</span>
                  <span className="text-white font-semibold">20k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
