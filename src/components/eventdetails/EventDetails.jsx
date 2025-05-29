import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/header2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGoogle,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";

const tabList = ["Attendees", "Sponsors", "Organiser"];

const notificationData = {
  Attendees: [
    {
      section: "Registrations",
      notifications: [{ title: "Event Ticket Confirmation", description: "Send this email once the ticket is confirmed." }]
    },
    {
      section: "Cancellations",
      notifications: [{ title: "Ticket Cancellation", description: "Send this email once the ticket is cancelled." }]
    },
    {
      section: "Payment Failed",
      notifications: [{ title: "Payment Failed!", description: "Send this email when payment fails." }]
    },
    {
      section: "Event Reminder",
      notifications: [{ title: "Event Reminder", description: "Send this email in case of any updates or just reminder." }]
    }
  ],
  Sponsors: [
    {
      section: "Sponsorship Confirmed",
      notifications: [{ title: "Sponsorship Confirmed", description: "Send this email once sponsorship is confirmed." }]
    },
    {
      section: "Sponsorship Invoice",
      notifications: [{ title: "Invoice Sent", description: "Send invoice details to the sponsor." }]
    }
  ],
  Organiser: [
    {
      section: "Setup Reminder",
      notifications: [{ title: "Event Setup Reminder", description: "Remind organisers about event setup." }]
    },
    {
      section: "Staff Allocation",
      notifications: [{ title: "Staff Assigned", description: "Send updates on staff allocation." }]
    },
    {
      section: "Final Checklist",
      notifications: [{ title: "Checklist Sent", description: "Share final checklist before event." }]
    }
  ]
};

const iconList = [
  { icon: faWhatsapp, label: "WhatsApp" },
  { icon: faGoogle, label: "Gmail" },
  { icon: faMicrosoft, label: "Outlook" }
];

const Notifications = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [toggles, setToggles] = useState([]);

  const currentTab = tabList[selectedTab];
  const currentNotifications = notificationData[currentTab];
  const flatNotifications = currentNotifications.flatMap((group) => group.notifications);

  useEffect(() => {
    setToggles(flatNotifications.map(() => [true, true, true]));
  }, [selectedTab]);

  const handleToggle = (notifIdx, toggleIdx) => {
    setToggles((prev) =>
      prev.map((row, i) =>
        i === notifIdx
          ? row.map((val, j) => (j === toggleIdx ? !val : val))
          : row
      )
    );
  };

  // Fill with empty objects to make total 4 cards
  const displayNotifications = [...currentNotifications];
  while (displayNotifications.length < 4) {
    displayNotifications.push(null);
  }

  return (
    <div className="min-h-screen flex bg-[#0b0b0b] text-white font-inter">
      <div className="w-[220px] bg-[#171717]">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-col items-center bg-[#1a1a1a] text-white font-inter h-[100vh] overflow-hidden">
          <div className="w-full max-w-[900px] px-4 py-2 h-full flex flex-col">
            {/* Title & Tabs */}
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg font-semibold">Notifications</h1>
              <div className="flex bg-[#232323] border border-[#3479ff] rounded-md overflow-hidden text-xs">
                {tabList.map((tab, idx) => (
                  <button
                    key={idx}
                    className={`px-3 py-1 font-semibold ${
                      selectedTab === idx
                        ? "bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white"
                        : "text-gray-400 hover:bg-[#2a2a2a]"
                    }`}
                    onClick={() => setSelectedTab(idx)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid gap-3 flex-1" style={{ gridTemplateRows: "repeat(4, 1fr)" }}>
              {displayNotifications.map((group, groupIdx) => {
                if (!group) {
                  return <div key={groupIdx} className="bg-transparent rounded-lg" />;
                }

                const notif = group.notifications[0];
                return (
                  <div key={group.section} className="flex flex-col justify-between bg-[#1f1f1f] rounded-lg px-4 py-3">
                    <div>
                      <h2 className="text-[11px] text-gray-400 font-medium">{group.section}</h2>
                      <div className="text-sm font-medium">{notif.title}</div>
                      <div className="text-[10px] text-gray-400">{notif.description}</div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {iconList.map((item, toggleIdx) => (
                        <button
                          key={toggleIdx}
                          onClick={() => handleToggle(groupIdx, toggleIdx)}
                          className={`w-6 h-6 flex items-center justify-center rounded-full border text-[9px] ${
                            toggles[groupIdx]?.[toggleIdx]
                              ? "bg-gradient-to-r from-[#22e6ce] to-[#3479ff] border-[#22e6ce]"
                              : "bg-[#232323] border-[#555]"
                          }`}
                          title={item.label}
                        >
                          <FontAwesomeIcon icon={item.icon} className="text-[10px]" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
