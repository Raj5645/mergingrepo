// import React from "react";
// import Sidebar from "../common/Sidebar";
// import Header from "../common/header2";

// class Support extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [
//         { from: "team", text: "Hi! How can we help you today?" }
//       ],
//       input: "",
//     };
//   }

//   handleSend = (e) => {
//     e.preventDefault();
//     if (!this.state.input.trim()) return;
//     this.setState((prevState) => ({
//       messages: [...prevState.messages, { from: "user", text: prevState.input }],
//       input: "",
//     }));
//     // Simulate team reply
//     setTimeout(() => {
//       this.setState((prevState) => ({
//         messages: [...prevState.messages, { from: "team", text: "Thank you for reaching out! Our team will get back to you soon." }],
//       }));
//     }, 1200);
//   };

//   render() {
//     return (
//       <div className="min-h-screen flex bg-gradient-to-b pt-[85px] from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
//         {/* Sidebar */}
//         <div className="w-[220px] min-h-screen bg-[#171717]">
//           <Sidebar />
//         </div>
//         {/* Main Content */}
//         <div className="flex-1 flex flex-col items-center justify-center p-8">
//           <Header />
//           <div className="w-full max-w-xl bg-[#232323] bg-opacity-80 rounded-2xl shadow-lg p-8 flex flex-col" style={{ minHeight: 500 }}>
//             <div className="font-bold text-2xl mb-4">Support Chat</div>
//             <div className="flex-1 overflow-y-auto mb-4 space-y-2">
//               {this.state.messages.map((msg, idx) => (
//                 <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
//                   <div className={`px-4 py-2 rounded-lg max-w-[70%] ${msg.from === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"}`}>
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <form onSubmit={this.handleSend} className="flex gap-2 mt-2">
//               <input
//                 className="flex-1 rounded-lg bg-[#191919] text-white p-3 border border-gray-600 focus:outline-none"
//                 placeholder="Type your message..."
//                 value={this.state.input}
//                 onChange={e => this.setState({ input: e.target.value })}
//               />
//               <button type="submit" className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white font-bold px-6 py-2 rounded-lg">abc</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Support;






import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";
import advertiseimg from "./icons/advertise.png";
import boxofficeimg from "./icons/boxoffice.png";
import cashlessimg from "./icons/cashless.png";
import contentimg from "./icons/content.png";
import ticketingimg from "./icons/ticketing.png";
import addserviceimg from "./icons/addservice.png";

const services = [
  { title: "BOX Office", desc: "Lorem ipsum lorem ipsum", icon: boxofficeimg },
  { title: "Ticketing", desc: "Sell tickets on our platform", icon: ticketingimg },
  { title: "Advertise", desc: "Get our team for advertisement", icon: advertiseimg },
  { title: "Content", desc: "Creatives for advertisements", icon: contentimg },
  { title: "Cashless RFID", desc: "Lorem ipsum lorem ipsum", icon: cashlessimg },
  { title: "Manpower", desc: "On ground team support for event", icon: contentimg },
];

const Services = () => {
  const handleServiceClick = (service) => {
    console.log("Clicked on:", service);
  };

  return (
    <div className="min-h-screen flex  pt-[85px] from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative flex flex-col mx-auto p-8"
            style={{
              width: "1198px",
              minHeight: "742px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "24px",
            }}
          >
            <h1 className="text-[28.11px] font-bold mb-4" style={{ width: "310.67px" }}>
              Services
            </h1>
            <h2
              className="text-[#C3C3C3] text-[24px] mb-6"
              style={{ width: "106px" }}
            >
              All Services
            </h2>

            <div className="grid grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#212121] w-[203.19px] h-[175.41px] rounded-[16px] flex flex-col justify-center items-center relative cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <img src={service.icon} alt="icon" className="mb-4 w-10 h-10" />
                  <h3 className="text-lg font-semibold text-center">{service.title}</h3>
                  <p className="text-sm text-center px-2">{service.desc}</p>
                </div>
              ))}
              {/* Add Service Button as a Service Card */}
             
                <img src={addserviceimg} alt="add" className="w-[120px] h-[50px] flex flex-col justify-center items-center" />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
