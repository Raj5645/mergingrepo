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
      <div className="min-h-screen flex bg-gradient-to-b pt-[85px] from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
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
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
