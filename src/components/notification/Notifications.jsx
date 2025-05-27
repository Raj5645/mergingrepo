import React, { useState } from "react";
import Sidebar from "../common/Sidebar";

const tabList = [
  { label: "Attendees" },
  { label: "Sponsors" },
  { label: "Organisers" }
];

const notificationTypes = [
  {
    heading: "TICKET CONFIRMATION",
    sub: "To be sent once the ticket is confirmed"
  },
  {
    heading: "TICKET CANCELLED",
    sub: "To be sent once the ticket is cancelled"
  },
  {
    heading: "PAYMENT FAILED",
    sub: "To be sent if payment fails"
  },
  {
    heading: "EVENT REMINDER",
    sub: "To be sent as a reminder before the event"
  }
];

const iconPaths = [
  "/images/img_whatsapp.svg",
  "/images/img_gmail.svg",
  "/images/img_message.svg"
];

const Notifications = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [toggles, setToggles] = useState(
    Array(4).fill([true, false, false]) // 4 notification types, 3 toggles each
  );

  const handleToggle = (notifIdx, toggleIdx) => {
    setToggles(toggles.map((row, i) =>
      i === notifIdx ? row.map((val, j) => j === toggleIdx ? !val : val) : row
    ));
  };


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


  return (
    <div className="min-h-screen flex bg-gradient-to-b pt-[85px] from-[#232323] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col mx-auto p-8" style={{ width: 1198, height: 722, background: "rgba(255,255,255,0.05)", borderRadius: 24 }}>
            {/* Top Row */}
            <div className="flex justify-between items-center mb-8" style={{ height: 40 }}>
              <div className="font-bold uppercase" style={{ fontSize: 28.11, width: 210.67 }}>NOTIFICATIONS</div>
              <div className="flex rounded-lg overflow-hidden bg-[#232323] border border-[#3479ff]" style={{ width: 436, height: 40 }}>
                {tabList.map((tab, idx) => (
                  <button
                    key={tab.label}
                    className={`flex-1 font-bold uppercase text-base transition-all ${selectedTab === idx ? 'bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white' : 'text-gray-300 hover:bg-[#3479ff] hover:text-white'}`}
                    style={{ height: 40 }}
                    onClick={() => setSelectedTab(idx)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Notification Settings Box */}
            <div className="mx-auto bg-[#232323] bg-opacity-80 rounded-xl p-6 flex flex-col gap-6" style={{ width: 1114, height: 570 }}>
              {notificationTypes.map((notif, notifIdx) => (
                <div key={notif.heading} className="flex items-center justify-between bg-white bg-opacity-5 rounded-lg px-8 py-6" style={{ height: 570/4 }}>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg mb-1">{notif.heading}</span>
                    <span className="text-sm text-gray-300">{notif.sub}</span>
                  </div>
                  <div className="flex gap-6">
                    {iconPaths.map((icon, toggleIdx) => (
                      <button
                        key={icon}
                        onClick={() => handleToggle(notifIdx, toggleIdx)}
                        className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-colors ${toggles[notifIdx][toggleIdx] ? 'border-[#22e6ce] bg-gradient-to-r from-[#22e6ce] to-[#3479ff]' : 'border-gray-600 bg-[#232323]'}`}
                      >
                        <img src={icon} alt="toggle" className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
