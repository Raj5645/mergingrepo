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
};

export default Notifications;
