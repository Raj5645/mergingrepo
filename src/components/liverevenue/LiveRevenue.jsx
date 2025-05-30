import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";
import { PieChart } from "react-minimal-pie-chart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const ChartCard = ({ title, labels, data, colors, onClick }) => {
  const chartData = {
    labels,
    datasets: [{
      data,
      backgroundColor: colors,
      borderWidth: 0,
      borderRadius: 4,
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#fff" } },
      y: { grid: { color: "#ffffff20" }, ticks: { color: "#fff" } }
    }
  };

  return (
    <div
      className="bg-[#1E1E1E] p-4 rounded-lg cursor-pointer hover:bg-[#2a2a2a]"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

const InfoCard = ({ title, subtitle, color, details, onClick }) => (
  <div
    className={`bg-[#1E1E1E] p-4 rounded-lg border-l-4 ${color} cursor-pointer hover:bg-[#2a2a2a]`}
    onClick={onClick}
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-gray-400">{subtitle}</p>
    <ul className="mt-2 text-sm text-gray-300 space-y-1">
      {details.map((d, i) => <li key={i}>{d}</li>)}
    </ul>
  </div>
);

const rfidCards = [
  {
    title: "$4,423,860",
    subtitle: "TOTAL REVENUE",
    color: "border-cyan-400",
    details: ["Cash Sales: $2,120,000", "Card Sales: $2,303,860"]
  },
  {
    title: "261,914",
    subtitle: "TOTAL TRANSACTIONS",
    color: "border-purple-400",
    details: ["Successful: 258,914", "Failed: 3,000"]
  },
  {
    title: "$16,420",
    subtitle: "AVG. DAILY SALES",
    color: "border-green-400",
    details: ["Peak Day: $42,300", "Low Day: $8,150"]
  },
  {
    title: "94.2%",
    subtitle: "SUCCESS RATE",
    color: "border-yellow-400",
    details: ["Retries: 12,314", "Abandoned: 4,220"]
  },
  {
    title: "$8.42",
    subtitle: "AVG. TICKET SIZE",
    color: "border-pink-400",
    details: ["Food: $12.40", "Beverage: $6.80"]
  },
  {
    title: "2.4m",
    subtitle: "TOTAL CUSTOMERS",
    color: "border-blue-400",
    details: ["New: 842k", "Returning: 1.58m"]
  }
];

// Dummy ticketing and pie data placeholders (define your actual data)
const pieData = [
  { title: "Direct", value: 55, color: "#E38627" },
  { title: "Referral", value: 15, color: "#C13C37" },
  { title: "Social", value: 30, color: "#6A2135" },
];

const ticketData = [
  { platform: "Online", category: "VIP", tickets: 1500, revenue: "$150,000", percentage: "45%" },
  { platform: "Offline", category: "Regular", tickets: 2000, revenue: "$100,000", percentage: "30%" },
  { platform: "Mobile", category: "Economy", tickets: 1200, revenue: "$80,000", percentage: "25%" },
];

export default function LiveRevenue() {
  const [activeTab, setActiveTab] = useState("ticketing");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Open modal handler
  const openModal = (title, details) => {
    setModalContent({ title, details });
    setModalOpen(true);
  };

  // Modal component
  const Modal = ({ title, details, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-[#1E1E1E] p-6 rounded-lg max-w-lg w-full text-white relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl font-bold hover:text-red-500"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="space-y-2 text-gray-300">
          {details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white">
      <div className="w-[220px] bg-[#171717]">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <div className="p-6 lg:p-10 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold uppercase">Live Revenue</h1>
            <div className="flex gap-4">
              {["ticketing", "rfid"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm ${
                    activeTab === tab
                      ? "bg-[#0ff] text-black font-semibold"
                      : "bg-white bg-opacity-10 text-white"
                  }`}
                >
                  {tab === "ticketing" ? "Ticketing" : "RFID Sales"}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "ticketing" ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#1c1c1c] rounded-xl p-6 relative h-[280px] flex flex-col justify-center items-center">
                  <PieChart
                    data={pieData}
                    lineWidth={30}
                    paddingAngle={2}
                    rounded
                    style={{ height: "180px" }}
                  />
                  <div className="absolute top-12 left-10 bg-yellow-600 px-3 py-1 rounded-md text-sm">
                    Revenue <b>2000k</b>
                  </div>
                  <div className="absolute bottom-12 right-10 bg-pink-600 px-3 py-1 rounded-md text-sm">
                    Platform <b>0000</b>
                  </div>
                </div>
                <div className="bg-[#1c1c1c] rounded-xl p-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="pb-2 text-left">Platform</th>
                        <th className="pb-2 text-left">Category</th>
                        <th className="pb-2 text-left">No. of Tickets</th>
                        <th className="pb-2 text-left">Revenue</th>
                        <th className="pb-2 text-left">Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ticketData.map((item, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2">{item.platform}</td>
                          <td className="py-2">{item.category}</td>
                          <td className="py-2">{item.tickets}</td>
                          <td className="py-2">{item.revenue}</td>
                          <td className="py-2">{item.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* RFID Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
                <ChartCard
                  title="Top 5 Selling Products"
                  labels={["Beer", "Burger", "Whiskey", "Water", "Cocktail"]}
                  data={[350, 250, 100, 70, 50]}
                  colors={["#FFB800", "#FF4EB5", "#40F8FF", "#44FDCB", "#AE44FD"]}
                  onClick={() => openModal("Top 5 Selling Products", [
                    "Beer: 350 units",
                    "Burger: 250 units",
                    "Whiskey: 100 units",
                    "Water: 70 units",
                    "Cocktail: 50 units"
                  ])}
                />
                <ChartCard
                  title="Top 5 Selling Categories"
                  labels={["Drinks", "Food", "Snacks", "Water", "Mixers"]}
                  data={[400, 300, 150, 80, 60]}
                  colors={["#FFB800", "#FF4EB5", "#40F8FF", "#44FDCB", "#AE44FD"]}
                  onClick={() => openModal("Top 5 Selling Categories", [
                    "Drinks: 400 units",
                    "Food: 300 units",
                    "Snacks: 150 units",
                    "Water: 80 units",
                    "Mixers: 60 units"
                  ])}
                />
                <ChartCard
                  title="Top 5 Selling Counters"
                  labels={["Counter 1", "Counter 2", "Counter 3", "Counter 4", "Counter 5"]}
                  data={[300, 260, 180, 150, 120]}
                  colors={["#FFB800", "#FF4EB5", "#40F8FF", "#44FDCB", "#AE44FD"]}
                  onClick={() => openModal("Top 5 Selling Counters", [
                    "Counter 1: 300 units",
                    "Counter 2: 260 units",
                    "Counter 3: 180 units",
                    "Counter 4: 150 units",
                    "Counter 5: 120 units"
                  ])}
                />
              </div>

              {/* RFID Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-10">
                {rfidCards.map((card, index) => (
                  <InfoCard
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    color={card.color}
                    details={card.details}
                    onClick={() => openModal(card.subtitle, card.details)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {modalOpen && modalContent && (
        <Modal
          title={modalContent.title}
          details={modalContent.details}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
