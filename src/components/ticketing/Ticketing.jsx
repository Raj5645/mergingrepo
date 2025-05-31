<<<<<<< HEAD
import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const initialRows = [
  { category: "VIP", description: "Front row seats", count: 50, price: 2000 },
  { category: "Regular", description: "Middle row", count: 100, price: 1000 },
  { category: "Economy", description: "Back row", count: 150, price: 500 },
];
const platforms = ["bookmyshow", "district", "skillboxes", "sortmyscene"];

class Ticketing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: initialRows,
      selectedPlatforms: [],
      ticketTotal: 0,
      layoutFile: null,
    };
  }

  handleInput = (idx, field, value) => {
    this.setState((prevState) => ({
      rows: prevState.rows.map((row, i) => i === idx ? { ...row, [field]: value } : row),
    }));
  };

  handleDelete = (idx) => {
    this.setState((prevState) => ({
      rows: prevState.rows.filter((_, i) => i !== idx),
    }));
  };

  handleAdd = () => {
    this.setState((prevState) => ({
      rows: [
        ...prevState.rows,
        { category: "", description: "", count: "", price: "" },
      ],
    }));
  };

  handlePlatform = (platform) => {
    this.setState((prevState) => ({
      selectedPlatforms: prevState.selectedPlatforms.includes(platform)
        ? prevState.selectedPlatforms.filter(p => p !== platform)
        : [...prevState.selectedPlatforms, platform],
    }));
  };

  render() {
    const { rows, selectedPlatforms, ticketTotal, layoutFile } = this.state;

    return (
      <div className="min-h-screen flex bg-gradient-to-b from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
        {/* Sidebar */}
        <div className="w-[220px] min-h-screen bg-[#171717]">
          <Sidebar />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <Header />
          {/* Title */}
          <div className="font-bold text-2xl uppercase mb-2" style={{ width: "311px", height: "29px" }}>CREATE TICKETS</div>
          {/* Ticket Category Section */}
          <div style={{ marginTop: "75px" }}>
            <div className="font-bold text-lg mb-1" style={{ width: "187px", height: "32px" }}>Ticket Category</div>
            <div className="text-base text-gray-300 mb-4" style={{ width: "226px", height: "22px" }}>Define the category of Ticket</div>
            {/* Table - now wider and all columns/inputs/buttons scale accordingly */}
            <table className="text-white mb-6 border-separate border-spacing-0 w-[1000px] font-['Inter','Poppins',sans-serif]" style={{ fontSize: '1rem' }}>
              <thead>
                <tr style={{ height: "44px", background: "#232323" }}>
                  <th className="px-2 border-b border-r border-gray-600 w-[60px]">S.no</th>
                  <th className="px-2 border-b border-r border-gray-600 w-[200px]">Category Name</th>
                  <th className="px-2 border-b border-r border-gray-600 w-[300px]">Description</th>
                  <th className="px-2 border-b border-r border-gray-600 w-[150px]">Ticket Count</th>
                  <th className="px-2 border-b border-r border-gray-600 w-[150px]">Price</th>
                  <th className="border-b border-gray-600 w-[60px]"></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} style={{ height: "44px", background: idx === 0 ? "#232323" : "transparent" }}>
                    <td className="text-center border-b border-r border-gray-700 w-[60px]">{idx + 1}</td>
                    <td className="text-center border-b border-r border-gray-700 w-[200px]">
                      {idx === 0 ? row.category : <input className="bg-transparent border-b border-gray-500 text-white w-full text-center" value={row.category} onChange={e => this.handleInput(idx, "category", e.target.value)} />}
                    </td>
                    <td className="text-center border-b border-r border-gray-700 w-[300px]">
                      {idx === 0 ? row.description : <input className="bg-transparent border-b border-gray-500 text-white w-full text-center" value={row.description} onChange={e => this.handleInput(idx, "description", e.target.value)} />}
                    </td>
                    <td className="text-center border-b border-r border-gray-700 w-[150px]">
                      {idx === 0 ? row.count : <input type="number" className="bg-transparent border-b border-gray-500 text-white w-full text-center" value={row.count} onChange={e => this.handleInput(idx, "count", e.target.value)} />}
                    </td>
                    <td className="text-center border-b border-gray-700 w-[150px]">
                      {idx === 0 ? row.price : <input type="number" className="bg-transparent border-b border-gray-500 text-white w-full text-center" value={row.price} onChange={e => this.handleInput(idx, "price", e.target.value)} />}
                    </td>
                    <td className="text-center border-b border-gray-700 w-[60px]">
                      {idx > 0 && (
                        <button onClick={() => this.handleDelete(idx)} style={{ width: 32, height: 34 }} className="bg-red-600 rounded flex items-center justify-center ml-2">
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z" fill="#fff"/></svg>
                        </button>
                      )}
                      {idx === rows.length - 1 && (
                        <button onClick={this.handleAdd} style={{ width: 32, height: 34 }} className="bg-blue-600 rounded flex items-center justify-center ml-2">
                          <span className="text-white text-xl font-bold">+</span>
=======
import React, { useState, useRef } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";

const platforms = ["Book my Show", "District", "Sort my Scene", "Skill Box"];

export default function Ticketing() {
  const [rows, setRows] = useState([
    { category: "", description: "", count: "", price: "" },
    { category: "", description: "", count: "", price: "" }
  ]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [uploadName, setUploadName] = useState("");
  const layoutInputRef = useRef(null);

  const handleInput = (idx, field, value) => {
    if (field === "count" || field === "price") {
      value = value.replace(/[^0-9]/g, "");
    }
    setRows(rows.map((row, i) => (i === idx ? { ...row, [field]: value } : row)));
  };

  const handleDelete = (idx) => {
    setRows(rows.filter((_, i) => i !== idx));
  };

  const handleAdd = () => {
    setRows([...rows, { category: "", description: "", count: "", price: "" }]);
  };

  const handlePlatform = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const handleUpload = (e) => {
    setUploadName(e.target.files?.[0]?.name || "");
  };

  return (
    <div className="min-h-screen flex bg-black text-white font-[Ruda,sans-serif] pt-[85px]">
      <div className="w-[220px] min-h-screen bg-black">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col items-center p-8">
        <Header />
        <div
          className="relative flex flex-col mx-auto p-8"
          style={{
            width: "1198px",
            minHeight: "742px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "24px"
          }}
        >
          <h1 className="text-2xl font-bold mb-6">Create Tickets</h1>

          {/* Ticket Category */}
          <div className="font-bold text-lg mb-1">
            Ticket Category{" "}
            <span className="inline-block align-middle">
              <svg width="16" height="16" fill="none">
                <path
                  d="M4 12L12 4M12 4H4m8 0v8"
                  stroke="#888"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <div className="text-sm text-[#9C9C9C] mb-4">Define all type of category</div>

          {/* Table */}
          <div className="overflow-visible mb-6">
            <table
              className="border-separate"
              style={{
                width: "766.39px",
                minWidth: "766.39px",
                borderSpacing: "0 8px"
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#353535",
                    width: "766.39px",
                    height: "36px"
                  }}
                >
                  <th className="rounded-tl-lg px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">S. no.</th>
                  <th className="px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">Category Name</th>
                  <th className="px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">Description</th>
                  <th className="px-2 py-2 text-xs font-semibold text-white border-r border-[#9C9C9C]">Ticket Count</th>
                  <th className="px-2 py-2 text-xs font-semibold text-white">Price</th>
                  <th className="rounded-tr-lg px-2 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? null : rows.map((row, i) => (
                  <tr key={i} className="align-middle">
                    <td
                      className={`px-2 py-1 text-center text-white font-medium align-middle ${
                        i === 0 ? "rounded-bl-lg" : ""
                      }`}
                      style={{
                        background: "#000",
                        border: "1px solid #9D9D9D",
                        borderRight: "1px solid #9D9D9D"
                      }}
                    >
                      {i + 1}.
                    </td>
                    <td
                      className="px-2 py-1 align-middle"
                      style={{
                        background: "#000",
                        border: "1px solid #9D9D9D",
                        borderLeft: "none",
                        borderRight: "1px solid #9D9D9D"
                      }}
                    >
                      <input
                        placeholder="Name"
                        className="w-full placeholder-[#9C9C9C] bg-transparent border-none text-white text-center outline-none align-middle"
                        value={row.category}
                        onChange={e => handleInput(i, "category", e.target.value)}
                      />
                    </td>
                    <td
                      className="px-2 py-1 align-middle"
                      style={{
                        background: "#000",
                        border: "1px solid #9D9D9D",
                        borderLeft: "none",
                        borderRight: "1px solid #9D9D9D"
                      }}
                    >
                      <input
                        placeholder="Write here..."
                        className="w-full placeholder-[#9C9C9C] bg-transparent border-none text-white text-center outline-none align-middle"
                        value={row.description}
                        onChange={e => handleInput(i, "description", e.target.value)}
                      />
                    </td>
                    <td
                      className="px-2 py-1 align-middle"
                      style={{
                        background: "#000",
                        border: "1px solid #9D9D9D",
                        borderLeft: "none",
                        borderRight: "1px solid #9D9D9D"
                      }}
                    >
                      <input
                        type="text"
                        placeholder="1000"
                        className="w-full placeholder-[#9C9C9C] bg-transparent border-none text-white text-center outline-none align-middle"
                        value={row.count}
                        onChange={e => handleInput(i, "count", e.target.value)}
                      />
                    </td>
                    <td
                      className={`px-2 py-1 align-middle ${
                        i === rows.length - 1 ? "rounded-br-lg" : ""
                      }`}
                      style={{
                        background: "#000",
                        border: "1px solid #9D9D9D",
                        borderLeft: "none",
                        borderRight: "1px solid #9D9D9D"
                      }}
                    >
                      <input
                        type="text"
                        placeholder="1000"
                        className="w-full placeholder-[#9C9C9C] bg-transparent border-none text-white text-center outline-none align-middle"
                        value={row.price}
                        onChange={e => handleInput(i, "price", e.target.value)}
                      />
                    </td>
                    <td className="px-2 py-1 flex items-center gap-2 justify-center align-middle">
                      <button
                        onClick={() => handleDelete(i)}
                        className="w-8 h-8 rounded flex items-center justify-center bg-red-500 hover:bg-red-600"
                        tabIndex={-1}
                        aria-label="Delete"
                      >
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <path stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      {i === rows.length - 1 && (
                        <button
                          onClick={handleAdd}
                          className="w-8 h-8 rounded flex items-center justify-center bg-[#353535] hover:bg-[#464646] text-white"
                          tabIndex={-1}
                          aria-label="Add"
                        >
                          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
                          </svg>
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
<<<<<<< HEAD
          </div>
          {/* Number of Tickets */}
          <div style={{ marginTop: "70px" }}>
            <div className="font-bold text-lg mb-2">NUMBER OF TICKETS</div>
            <input type="number" className="w-[612px] h-[56px] rounded-lg bg-white bg-opacity-10 text-white p-4 border border-gray-600" value={ticketTotal} onChange={e => this.setState({ ticketTotal: e.target.value })} />
          </div>
          {/* Platforms */}
          <div style={{ marginTop: "70px" }}>
            <div className="font-bold text-lg mb-2">Platforms</div>
            <div className="flex gap-4 mb-4">
              {platforms.map(platform => (
                <button
                  key={platform}
                  onClick={() => this.handlePlatform(platform)}
                  className={`px-6 py-2 rounded-full border-2 font-semibold ${selectedPlatforms.includes(platform) ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-500 text-gray-300 bg-transparent'}`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
          {/* Event Layout/Seating Plan */}
          <div style={{ marginTop: "70px" }}>
            <div className="font-bold text-lg mb-2">EVENT LAYOUT/SEATING PLAN</div>
            <input type="file" className="w-[612px] h-[56px] rounded-lg bg-white bg-opacity-10 text-white p-4 border border-gray-600" onChange={e => this.setState({ layoutFile: e.target.files[0] })} />
          </div>
        </div>
      </div>
    );
  }
}

export default Ticketing;
=======

            {rows.length === 0 && (
              <div className="flex justify-center mt-2">
                <button
                  className="w-8 h-8 rounded flex items-center justify-center bg-[#353535] hover:bg-[#464646] text-white"
                  onClick={handleAdd}
                  aria-label="Add"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Total Tickets */}
          <div className="mt-8 mb-6">
            <div className="font-bold text-lg mb-2">
              Total Tickets{" "}
              <span className="inline-block align-middle">
                <svg width="16" height="16" fill="none">
                  <path d="M4 12L12 4M12 4H4m8 0v8" stroke="#888" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <input
              type="text"
              placeholder="Number"
              className="w-[300px] h-12 rounded-lg bg-transparent text-white px-4 border border-[#9C9C9C] outline-none placeholder-[#464646]"
              readOnly
              value={rows.reduce((sum, row) => sum + Number(row.count || 0), 0)}
            />
          </div>

          {/* Platforms */}
          <div className="mb-6">
            <div className="font-bold text-lg mb-2">Platforms</div>
            <div className="flex gap-6 flex-wrap">
              {platforms.map((platform) => (
                <label key={platform} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedPlatforms.includes(platform)}
                    onChange={() => handlePlatform(platform)}
                    className="accent-[#9C9C9C]"
                  />
                  <span>{platform}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Upload Layout */}
          <div className="mb-6">
            <div className="font-bold text-lg mb-2">Upload Layout File</div>
            <input
              type="file"
              ref={layoutInputRef}
              onChange={handleUpload}
              className="hidden"
            />
            <button
              onClick={() => layoutInputRef.current?.click()}
              className="px-4 py-2 border border-[#9C9C9C] rounded-lg text-white hover:bg-[#222]"
            >
              Upload Layout
            </button>
            {uploadName && (
              <div className="mt-2 text-sm text-[#9C9C9C]">Uploaded: {uploadName}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
