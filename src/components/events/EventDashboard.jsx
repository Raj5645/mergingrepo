// import React, { useState } from 'react';
// import Header from '../common/Header';
// import { Link } from 'react-router-dom';

// const sidebarItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Dashboard', path: '/dashboard' },
//   { label: 'Events', path: '/events' },
//   { label: 'Services', path: '/services' },
//   { label: 'Portfolio', path: '/portfolio' },
//   { label: 'Join Us', path: '/join-us' },
//   { label: 'Contact Us', path: '/contact-us' },
// ];

// const analytics = [
//   { label: 'Revenue', value: '₹5,80,000', color: 'from-[#22e6ce] to-[#3479ff]' },
//   { label: 'Tickets Sold', value: '1400', color: 'from-[#3980ed] to-[#04ffff]' },
//   { label: 'Views', value: '5228', color: 'from-[#232323] to-[#191919]' },
//   { label: 'Ad Spends', value: '₹25,000', color: 'from-[#22e6ce] to-[#3980ed]' },
//   { label: 'Likes', value: (
//       <span>
//         287 <span role="img" aria-label="thumbs up">👍</span>
//       </span>
//     ), color: 'from-[#3479ff] to-[#22e6ce]' },
// ];

// const platformData = [
//   { platform: 'BookMyShow', value: 600, color: '#22e6ce' },
//   { platform: 'Paytm', value: 400, color: '#3980ed' },
//   { platform: 'Insider', value: 250, color: '#04ffff' },
//   { platform: 'Offline', value: 150, color: '#3479ff' },
// ];

// const pieData = [
//   { label: 'New', value: 60, color: '#22e6ce' },
//   { label: 'Returning', value: 30, color: '#3980ed' },
//   { label: 'Churned', value: 10, color: '#3479ff' },
// ];

// const EventDashboard = () => {
//   const [growthType, setGrowthType] = useState('monthly');

//   // Pie chart angles
//   const total = pieData.reduce((sum, d) => sum + d.value, 0);
//   let cumulative = 0;
//   const pieSlices = pieData.map((d, i) => {
//     const startAngle = (cumulative / total) * 2 * Math.PI;
//     cumulative += d.value;
//     const endAngle = (cumulative / total) * 2 * Math.PI;
//     const x1 = 50 + 40 * Math.cos(startAngle - Math.PI / 2);
//     const y1 = 50 + 40 * Math.sin(startAngle - Math.PI / 2);
//     const x2 = 50 + 40 * Math.cos(endAngle - Math.PI / 2);
//     const y2 = 50 + 40 * Math.sin(endAngle - Math.PI / 2);
//     const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
//     const pathData = `M50,50 L${x1},${y1} A40,40 0 ${largeArc} 1 ${x2},${y2} Z`;
//     return <path key={i} d={pathData} fill={d.color} />;
//   });

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white flex flex-col">
//       <Header />
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-[200px] bg-[#191919] rounded-[18px] m-6 p-4 flex flex-col space-y-2 h-[calc(100vh-110px)]">
//           {sidebarItems.map(item => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className="px-4 py-2 rounded-[10px] text-[#949494] hover:text-white hover:bg-[#232323] font-medium font-sans transition"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </aside>
//         {/* Main Content */}
//         <main className="flex-1 flex flex-col mt-6 mr-6">
//           {/* Event Name and Date */}
//           <div className="flex items-center mb-4" style={{ marginLeft: '10px', minHeight: '61.1px' }}>
//             <div>
//               <h2 className="text-2xl font-bold font-sans text-white">Live and Loud</h2>
//               <p className="text-lg text-[#22e6ce] font-semibold mt-1">Event Date: 16 May</p>
//             </div>
//           </div>
//           <div className="flex flex-row items-start">
//             {/* Analytics Boxes - shifted down by 61.1px */}
//             <div
//               className="flex"
//               style={{
//                 width: '756.8px',
//                 marginLeft: '10px',
//                 marginRight: '24px',
//                 marginTop: '61.1px'
//               }}
//             >
//               {analytics.map((box, idx) => (
//                 <div
//                   key={box.label}
//                   className={`flex flex-col justify-center items-center rounded-[16px] shadow-lg bg-gradient-to-r ${box.color}`}
//                   style={{
//                     width: '142.34px',
//                     height: '142.34px',
//                     minWidth: '142.34px',
//                     minHeight: '142.34px',
//                     marginRight: idx !== analytics.length - 1 ? '10px' : 0,
//                   }}
//                 >
//                   <span className="text-lg font-semibold font-sans mb-2">{box.label}</span>
//                   <span className="text-2xl font-bold font-sans">{box.value}</span>
//                 </div>
//               ))}
//             </div>
//             {/* Ad Spends Graph Box */}
//             <div
//               className="bg-[#232323] rounded-[16px] shadow-lg flex flex-col items-center justify-start ml-4"
//               style={{
//                 minWidth: '371px',
//                 minHeight: '204px',
//                 width: '371px',
//                 height: '204px',
//                 padding: '24px',
//                 marginTop: '0px'
//               }}
//             >
//               <span className="text-lg font-bold font-sans mb-4 uppercase tracking-wide">AD SPENDS</span>
//               {/* Placeholder for graph */}
//               <div className="w-full h-full flex items-center justify-center">
//                 <svg width="90%" height="100" viewBox="0 0 320 100">
//                   <polyline
//                     fill="none"
//                     stroke="#22e6ce"
//                     strokeWidth="4"
//                     points="0,80 40,60 80,65 120,20 160,40 200,30 240,60 280,20 320,50"
//                   />
//                   <circle cx="0" cy="80" r="4" fill="#22e6ce" />
//                   <circle cx="40" cy="60" r="4" fill="#22e6ce" />
//                   <circle cx="80" cy="65" r="4" fill="#22e6ce" />
//                   <circle cx="120" cy="20" r="4" fill="#22e6ce" />
//                   <circle cx="160" cy="40" r="4" fill="#22e6ce" />
//                   <circle cx="200" cy="30" r="4" fill="#22e6ce" />
//                   <circle cx="240" cy="60" r="4" fill="#22e6ce" />
//                   <circle cx="280" cy="20" r="4" fill="#22e6ce" />
//                   <circle cx="320" cy="50" r="4" fill="#22e6ce" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           {/* Three Large Boxes Below */}
//           <div className="flex flex-row mt-10 gap-8" style={{ marginLeft: '10px' }}>
//             {/* 1. Tickets Sold Graph */}
//             <div className="bg-[#232323] rounded-[16px] shadow-lg flex flex-col items-center p-6"
//               style={{ minWidth: '370px', minHeight: '394px', width: '370px', height: '394px' }}>
//               <span className="text-lg font-bold font-sans mb-4 uppercase tracking-wide">TICKETS SOLD</span>
//               <svg width="90%" height="200" viewBox="0 0 320 200">
//                 <polyline
//                   fill="none"
//                   stroke="#22e6ce"
//                   strokeWidth="4"
//                   points="0,180 40,120 80,130 120,60 160,100 200,80 240,140 280,60 320,110"
//                 />
//                 <circle cx="0" cy="180" r="5" fill="#22e6ce" />
//                 <circle cx="40" cy="120" r="5" fill="#22e6ce" />
//                 <circle cx="80" cy="130" r="5" fill="#22e6ce" />
//                 <circle cx="120" cy="60" r="5" fill="#22e6ce" />
//                 <circle cx="160" cy="100" r="5" fill="#22e6ce" />
//                 <circle cx="200" cy="80" r="5" fill="#22e6ce" />
//                 <circle cx="240" cy="140" r="5" fill="#22e6ce" />
//                 <circle cx="280" cy="60" r="5" fill="#22e6ce" />
//                 <circle cx="320" cy="110" r="5" fill="#22e6ce" />
//               </svg>
//             </div>
//             {/* 2. Tickets Sold on Different Platforms (Bar Graph) */}
//             <div className="bg-[#232323] rounded-[16px] shadow-lg flex flex-col items-center p-6"
//               style={{ minWidth: '370px', minHeight: '394px', width: '370px', height: '394px' }}>
//               <span className="text-lg font-bold font-sans mb-4 uppercase tracking-wide text-center">TICKETS SOLD ON DIFFERENT PLATFORM</span>
//               <svg width="90%" height="200" viewBox="0 0 320 200">
//                 {platformData.map((d, i) => (
//                   <rect
//                     key={d.platform}
//                     x={30 + i * 70}
//                     y={200 - d.value * 0.25}
//                     width="40"
//                     height={d.value * 0.25}
//                     fill={d.color}
//                     rx="8"
//                   />
//                 ))}
//                 {platformData.map((d, i) => (
//                   <text
//                     key={d.platform}
//                     x={50 + i * 70}
//                     y={190}
//                     textAnchor="middle"
//                     fill="#fff"
//                     fontSize="14"
//                   >
//                     {d.platform}
//                   </text>
//                 ))}
//               </svg>
//             </div>
//             {/* 3. Pie Chart of Growth in Customers */}
//             <div className="bg-[#232323] rounded-[16px] shadow-lg flex flex-col items-center p-6"
//               style={{ minWidth: '370px', minHeight: '394px', width: '370px', height: '394px' }}>
//               <div className="flex justify-between items-center w-full mb-4">
//                 <span className="text-lg font-bold font-sans uppercase tracking-wide">GROWTH IN CUSTOMERS</span>
//                 <select
//                   value={growthType}
//                   onChange={e => setGrowthType(e.target.value)}
//                   className="bg-[#191919] text-white rounded px-2 py-1 text-sm"
//                 >
//                   <option value="daily">Day by Day</option>
//                   <option value="monthly">Monthly</option>
//                   <option value="yearly">Yearly</option>
//                 </select>
//               </div>
//               <svg width="160" height="160" viewBox="0 0 100 100">
//                 {pieSlices}
//               </svg>
//               <div className="flex flex-col mt-4 w-full">
//                 {pieData.map((d, i) => (
//                   <div key={i} className="flex items-center mb-1">
//                     <span className="inline-block w-4 h-4 mr-2 rounded" style={{ background: d.color }}></span>
//                     <span className="text-sm">{d.label}: {d.value}%</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {/* Rest of the page */}
//           <div className="flex-1 flex items-center justify-center text-2xl text-[#949494] font-sans">
//             Event Analytics Page Content Here
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default EventDashboard;



















