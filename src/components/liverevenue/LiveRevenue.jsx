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

export default LiveRevenue;
