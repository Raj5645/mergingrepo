<<<<<<< HEAD
import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import { useNavigate } from 'react-router-dom';

const LiveRevenue = () => {
  const [activeTab, setActiveTab] = useState('Ticketing');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col p-8 w-full max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="text-3xl font-bold text-white">Live Revenue</div>
            <div className="flex gap-4">
              <button
                className={`px-8 py-2 rounded-lg font-bold text-base border ${activeTab === 'Ticketing' ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-transparent text-gray-300 bg-[#232323] hover:bg-[#3479ff] hover:text-white'}`}
                onClick={() => { setActiveTab('Ticketing'); navigate('/liverevenue'); }}
              >
                Ticketing
              </button>
              <button
                className={`px-8 py-2 rounded-lg font-bold text-base border ${activeTab === 'RFID Sales' ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-transparent text-gray-300 bg-[#232323] hover:bg-[#3479ff] hover:text-white'}`}
                onClick={() => { setActiveTab('RFID Sales'); navigate('/liverevenue/rfid'); }}
              >
                RFID Sales
              </button>
            </div>
          </div>
          {/* Ticketing Tab Content */}
          {activeTab === 'Ticketing' && (
            <div className="flex gap-12 items-start">
              {/* Donut Chart and Revenue */}
              <div className="flex flex-col items-center justify-center w-[420px] relative">
                <div className="relative w-[260px] h-[260px] flex items-center justify-center">
                  <svg width="220" height="220" viewBox="0 0 220 220" className="block mx-auto">
                    <circle cx="110" cy="110" r="90" stroke="#232323" strokeWidth="30" fill="none" />
                    <circle cx="110" cy="110" r="90" stroke="#FF4DB8" strokeWidth="30" fill="none" strokeDasharray="565" strokeDashoffset="120" />
                  </svg>
                  {/* Revenue label (left) */}
                  <div className="absolute left-[-70px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="bg-[#232323] text-white px-4 py-1 rounded-lg text-base font-bold mb-1 shadow">Revenue</span>
                    <span className="text-[#FFDF8C] text-xl font-bold">2000k</span>
                  </div>
                  {/* Platform label (right) */}
                  <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <span className="bg-[#232323] text-white px-4 py-1 rounded-lg text-base font-bold mb-1 shadow">Platform</span>
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
                  {[1,2,3,4,5].map(i => (
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
        </div>
      </div>
    </div>
  );
};
=======
import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const ticketData = [
  { label: "bookmyshow", value: 5816, color: "#FF6A00" }, // orange
  { label: "district", value: 4322, color: "#FF3D3D" }, // red
  { label: "sortmyscene", value: 684, color: "#FFB347" }, // light orange
  { label: "Agrim Narang", value: 522, color: "#FF8C42" }, // orange
  { label: "BME", value: 700, color: "#FF4E00" }, // orange-red
  { label: "Sort my Entries", value: 259, color: "#FF7F50" }, // coral
];
const totalTickets = ticketData.reduce((sum, t) => sum + t.value, 0);

class LiveRevenue extends React.Component {

  // useEffect(()=>{

  //   const getData = async () =>{

  //     try {
  //       const response = await fetch("",{
  //         method:"GET",
  //         headers:{
  //           "Content-Type": "apllication/json";
  //         },
  //         body: JSON.stringify();
  //       });

  //       if(!response.ok)
  //       {
  //          console.log("in metrics response  not fetched");
  //          return ;
  //       }


  //     } catch (error) {
  //       console.log("error in metricsection is:", error);
  //     }
  // getData();

  //   }


  // },[]);




  render() {
    return (
      <div className="min-h-screen flex bg-black pt-[85px] text-white font-['Inter','Poppins',sans-serif]">
        {/* Sidebar */}
        <div className="w-[220px] min-h-screen bg-black">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <Header />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative flex flex-col mx-auto p-8"
              style={{ width: "1198px", height: "722px", background: "rgba(255,255,255,0.05)", borderRadius: "24px" }}
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-4">
                <div className="font-bold text-2xl uppercase">LIVE REVENUE</div>
                <div className="flex gap-[10px]">
                  <div style={{ width: "201px", height: "40px" }} className="bg-white bg-opacity-10 rounded-lg flex items-center justify-center"></div>
                  <div style={{ width: "201px", height: "40px" }} className="bg-white bg-opacity-10 rounded-lg flex items-center justify-center"></div>
                </div>
              </div>
              {/* Ticketing and Pre Sales */}
              <div className="flex flex-col mb-2">
                <div className="font-bold text-lg mb-1" style={{ width: "111px", height: "32px" }}>TICKETING</div>
                <div className="font-normal text-base mb-4" style={{ width: "80px", height: "22px" }}>pre sales</div>
              </div>
              {/* Centered Transparent Box */}
              <div className="flex flex-row gap-8 mb-4" style={{ width: "909.28px", height: "384.21px", background: "rgba(255,255,255,0.08)", borderRadius: "18px", alignSelf: "center" }}>
                {/* Pie Chart Box */}
                <div style={{ width: "424px", height: "333px" }} className="flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <PieChart
                      data={ticketData}
                      lineWidth={30}
                      paddingAngle={2}
                      rounded
                      animate
                      style={{ height: 220, width: 220 }}
                      background="#232323"
                    />
                    {/* Hollow center with ticket count */}
                    <div className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center" style={{ transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
                      <span className="font-bold text-2xl leading-tight text-white text-center" style={{lineHeight:'1.2'}}>{totalTickets}</span>
                      <span className="font-bold text-xs text-white text-center uppercase">TICKETS<br/>SOLD</span>
                    </div>
                  </div>
                </div>
                {/* Table Box */}
                <div style={{ width: "424px", height: "333px" }} className="flex flex-col items-center justify-center">
                  <table className="w-full text-left border-separate" style={{ borderSpacing: 0 }}>
                    <thead>
                      <tr>
                        <th className="font-bold border-b border-gray-500 pb-2">Label</th>
                        <th className="font-bold border-b border-gray-500 pb-2">Value</th>
                        <th className="font-bold border-b border-gray-500 pb-2">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ticketData.map((row, idx) => (
                        <tr key={row.label} className="bg-transparent">
                          <td className="border-b border-gray-700 py-2" style={{color: row.color}}>{row.label}</td>
                          <td className="border-b border-gray-700 py-2">{row.value}</td>
                          <td className="border-b border-gray-700 py-2">{((row.value / totalTickets) * 100).toFixed(1)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Bottom Left Box */}
              <div className="absolute left-8 bottom-8 flex" style={{ width: "399.88px", height: "118.18px" }}>
                <div className="flex-1 flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-l-lg mr-1">
                  <div className="font-bold">ongroun</div>
                  <div>ticket sales</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center bg-white bg-opacity-10 rounded-r-lg ml-1">
                  <div className="font-bold text-2xl">11963</div>
                </div>
              </div>
            </div>
          </div>
          {/* Add Inter font from Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </div>
      </div>
    );
  }
}
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3

export default LiveRevenue;
