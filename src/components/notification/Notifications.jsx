<<<<<<< HEAD
import React, { useState } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const notificationData = [
	{
		section: 'Registrations',
		items: [
			{
				title: 'Event Ticket Confirmation',
				desc: 'Send this email once the ticket is confirmed.',
			},
		],
	},
	{
		section: 'Cancellations',
		items: [
			{
				title: 'Ticket Cancellation',
				desc: 'Send this email once the ticket is cancelled.',
			},
		],
	},
	{
		section: 'Payment Failed',
		items: [
			{
				title: 'Payment Failed!',
				desc: 'Send this email when payment fails.',
			},
		],
	},
	{
		section: 'Event Reminder',
		items: [
			{
				title: 'Event Reminder',
				desc: 'Send this email in case of any updates or just reminder.',
			},
		],
	},
];

const tabs = ['Attendees', 'Sponsors', 'Organiser'];

const Notifications = () => {
	const [activeTab, setActiveTab] = useState('Attendees');

	return (
		<div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
			{/* Sidebar */}
			<div className="w-[220px] min-h-screen bg-[#171717]">
				<Sidebar />
			</div>
			{/* Main Content */}
			<div className="flex-1 flex flex-col">
				<Header />
				<div className="flex flex-col p-8 w-full max-w-5xl mx-auto">
					<div className="flex justify-between items-center mb-6">
						<div className="text-3xl font-bold text-white">Notifications</div>
						<div className="flex gap-2 bg-[#191919] rounded-lg p-1">
							{tabs.map((tab) => (
								<button
									key={tab}
									className={`px-6 py-2 rounded-lg font-bold text-base ${
										activeTab === tab
											? 'border border-[#22e6ce] text-[#22e6ce] bg-[#232323]'
											: 'text-gray-300 bg-transparent'
									}`}
									onClick={() => setActiveTab(tab)}
								>
									{tab}
								</button>
							))}
						</div>
					</div>
					<div className="bg-[#191919] rounded-2xl p-8 w-full">
						{notificationData.map((section) => (
							<div key={section.section} className="mb-6">
								<div className="text-lg font-bold text-gray-300 mb-2">
									{section.section}
								</div>
								{section.items.map((item, idx) => (
									<div
										key={item.title}
										className="flex items-center justify-between bg-[#232323] rounded-xl p-4 mb-4"
									>
										<div className="flex items-center gap-4">
											<button className="w-10 h-10 flex items-center justify-center bg-[#191919] rounded-full border border-gray-600">
												<svg
													width="18"
													height="18"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													viewBox="0 0 24 24"
												>
													<polygon points="5 3 19 12 5 21 5 3" />
												</svg>
											</button>
											<div>
												<div className="font-bold text-white text-base">
													{item.title}
												</div>
												<div className="text-gray-400 text-sm">
													{item.desc}
												</div>
											</div>
										</div>
										<div className="flex items-center gap-4">
											<img
												src="/images/img_quillchat.svg"
												alt="whatsapp"
												className="w-7 h-7"
											/>
											<img
												src="/images/img_gmail.svg"
												alt="gmail"
												className="w-7 h-7"
											/>
											<img
												src="/images/img_teams.svg"
												alt="teams"
												className="w-7 h-7"
											/>
											<div className="flex items-center gap-1 bg-[#191919] px-2 py-1 rounded-lg border border-gray-700">
												<span className="text-[#22e6ce] font-bold text-xs">
													ON
												</span>
												<svg
													width="16"
													height="16"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													viewBox="0 0 24 24"
												>
													<polyline points="6 9 12 15 18 9" />
												</svg>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
=======
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
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
};

export default Notifications;
