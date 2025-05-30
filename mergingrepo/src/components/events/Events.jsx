import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/header2';
import Sidebar from '../common/Sidebar';

const Events = ({ mode }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState('');
  const [ticketCategories, setTicketCategories] = useState([
    { name: '', description: '', count: 1000, price: 1000 },
    { name: '', description: '', count: 1000, price: 1000 },
  ]);
  const [totalTickets, setTotalTickets] = useState('');
  const [platforms, setPlatforms] = useState({
    'Book my Show': false,
    'District': false,
    'Sort my Scene': false,
    'Skill Box': false,
  });
  const [layoutFile, setLayoutFile] = useState(null);
  const fileInputRef = useRef(null);
  const layoutInputRef = useRef(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Mock event data
  const events = [
    {
      id: '1',
      image: '/images/img_image_9.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Live',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
    {
      id: '2',
      image: '/images/img_image.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Past',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
    {
      id: '3',
      image: '/images/img_image_10.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Draft',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
    {
      id: '4',
      image: '/images/img_image_10_422x324.png',
      date: {
        day: 'Sat',
        date: '16',
        month: 'May',
      },
      title: 'Live and Loud',
      price: '₹1000 - ₹9000',
      location: 'Bangalore',
      status: 'Live',
      lastEdited: 'last edited : 07/04/25 ; 20:35:08',
    },
  ];

  const modes = [
    { label: 'Online', color: 'bg-green-500' },
    { label: 'Offline', color: 'bg-blue-500' },
    { label: 'Hybrid', color: 'bg-yellow-500' },
  ];

  const eventTypes = ['Concert', 'Festival', 'Meetup', 'Open Mic', 'Campus Event', 'EDM'];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCreateEvent = () => {
    navigate('/events/create');
  };

  const handleEventClick = (eventId) => {
    navigate('/dashboard', { state: { eventId } });
  };

  const handleEventDetailClick = () => {
    navigate('/eventdetails');
  };

  // Slide to the 4th event (index 3)
  const handleSlideToFourth = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelectorAll('.event-card')[3];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const handleFileBarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCategoryChange = (idx, field, value) => {
    setTicketCategories(prev => prev.map((cat, i) => i === idx ? { ...cat, [field]: value } : cat));
  };

  const handleAddCategory = () => {
    setTicketCategories(prev => [...prev, { name: '', description: '', count: 1000, price: 1000 }]);
  };

  const handleRemoveCategory = (idx) => {
    setTicketCategories(prev => prev.filter((_, i) => i !== idx));
  };

  const handlePlatformChange = (platform) => {
    setPlatforms(prev => ({ ...prev, [platform]: !prev[platform] }));
  };

  const handleLayoutBarClick = () => {
    if (layoutInputRef.current) layoutInputRef.current.click();
  };

  const handleLayoutFileChange = (e) => {
    setLayoutFile(e.target.files[0]);
  };

  // Render event details form if mode is 'event-details', else render ticketing UI
  if (mode === 'event-details') {
    return (
      <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-[#000000]">
        <div className="w-[220px] min-h-screen bg-[#171717]">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="container mx-auto px-4 py-6">
            <div className="flex flex-col bg-[#191919] rounded-2xl p-8 w-full max-w-5xl mx-auto mt-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl font-bold text-white uppercase tracking-wide">Live and Loud</div>
                <button className="bg-[#22e6ce] hover:bg-[#3479ff] text-white font-bold px-8 py-2 rounded-lg text-lg transition">
                  Confirm
                </button>
              </div>
              {/* Mode selection buttons aligned left */}
              <div className="flex items-center space-x-6 mb-6">
                {modes.map((mode) => (
                  <button
                    key={mode.label}
                    onClick={() => setSelectedMode(mode.label)}
                    className={`flex items-center px-4 py-2 border rounded-full text-lg font-semibold ${
                      selectedMode === mode.label ? 'border-[#22e6ce] text-[#22e6ce] bg-[#232323]' : 'border-gray-500 text-gray-300 bg-transparent'
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full mr-2 ${
                        selectedMode === mode.label ? mode.color : 'bg-gray-500'
                      }`}
                    ></span>
                    {mode.label}
                  </button>
                ))}
              </div>
              {/* Banner Image */}
              <div className="relative mb-6 w-full h-40 rounded-xl overflow-hidden">
                <img src="/images/img_rectangle_464.png" alt="Event Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-extrabold text-4xl uppercase text-white bg-black bg-opacity-40 px-8 py-2 rounded-xl tracking-widest">
                    ENTERTAINMENT
                  </span>
                </div>
              </div>
              {/* About the event */}
              <div className="mb-4">
                <div className="font-bold text-lg mb-1">About the event</div>
                <input className="w-full rounded-lg bg-[#232323] text-white p-3 border border-gray-600 mb-2" placeholder="write here..." />
              </div>
              {/* Event Details Row */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="font-bold mb-1">Start Date</div>
                  <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600" placeholder="ddmmyyyy" />
                </div>
                <div>
                  <div className="font-bold mb-1">End Date</div>
                  <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600" placeholder="ddmmyyyy" />
                </div>
                <div>
                  <div className="font-bold mb-1">Start Time</div>
                  <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600" placeholder="hh:mm:ss" />
                </div>
                <div>
                  <div className="font-bold mb-1">End Time</div>
                  <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600" placeholder="hh:mm:ss" />
                </div>
              </div>
              {/* Location */}
              <div className="mb-4">
                <div className="font-bold text-lg mb-1">Location</div>
                <input className="w-full rounded-lg bg-[#232323] text-white p-3 border border-gray-600" placeholder="" />
              </div>
              {/* Type of event */}
              <div className="mb-4">
                <div className="font-bold text-lg mb-1">Type of event</div>
                <div className="flex flex-wrap gap-4">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedEventType(type)}
                      className={`px-6 py-2 rounded-full border-2 font-semibold ${
                        selectedEventType === type
                          ? 'border-[#22e6ce] bg-[#22e6ce] text-white'
                          : 'border-gray-500 text-gray-300 bg-transparent'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              {/* Artist and Docs Row */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="font-bold mb-1">Artist Name</div>
                  <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600" placeholder="" />
                </div>
                <div>
                  <div className="font-bold mb-1">Artist spottif link</div>
                  <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600" placeholder="" />
                </div>
                <div>
                  <div className="font-bold mb-1">Artist Instagram Profile</div>
                  <input className="w-full rounded-lg bg-[#232323] text-white p-2 border border-gray-600" placeholder="" />
                </div>
              </div>
              {/* Upload Docs Row */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="font-bold mb-1">Upload Itenary</div>
                  <div className="w-full rounded-lg bg-[#232323] text-white p-2 border border-dashed border-[#22e6ce] flex items-center cursor-pointer">
                    <span className="flex-1">Itenary.doc</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-1">Upload T&C</div>
                  <div className="w-full rounded-lg bg-[#232323] text-white p-2 border border-dashed border-[#22e6ce] flex items-center cursor-pointer">
                    <span className="flex-1">Upload doc</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-1">Upload highlights</div>
                  <div className="w-full rounded-lg bg-[#232323] text-white p-2 border border-dashed border-[#22e6ce] flex items-center cursor-pointer">
                    <span className="flex-1">Upload doc</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-[#000000]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="container mx-auto px-4 py-6">
          <div className="flex flex-col bg-[#191919] rounded-2xl p-8 w-full max-w-5xl mx-auto mt-6 shadow-lg">
            <div className="text-3xl font-bold text-white mb-6">Create Tickets</div>
            <div className="mb-4">
              <div className="font-bold text-lg mb-1 flex items-center gap-2">
                Ticket Category
                <span className="text-[#22e6ce] cursor-pointer">✎</span>
              </div>
              <div className="text-gray-400 mb-2">Define all type of category</div>
              <div className="overflow-x-auto">
                <table className="w-full text-left mb-2">
                  <thead>
                    <tr className="text-gray-300 bg-[#232323]">
                      <th className="px-2 py-2">S. no.</th>
                      <th className="px-2 py-2">Category Nam</th>
                      <th className="px-2 py-2">Description</th>
                      <th className="px-2 py-2">Ticket count</th>
                      <th className="px-2 py-2">Price of ticket</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketCategories.map((cat, idx) => (
                      <tr key={idx} className="bg-[#232323] border-b border-[#232323]">
                        <td className="px-2 py-2 text-white">{idx + 1}.</td>
                        <td className="px-2 py-2">
                          <input
                            className="bg-transparent text-white border-b border-gray-600 w-24"
                            value={cat.name}
                            onChange={e => handleCategoryChange(idx, 'name', e.target.value)}
                            placeholder="Name"
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            className="bg-transparent text-white border-b border-gray-600 w-32"
                            value={cat.description}
                            onChange={e => handleCategoryChange(idx, 'description', e.target.value)}
                            placeholder="Write here..."
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            className="bg-transparent text-white border-b border-gray-600 w-16"
                            value={cat.count}
                            onChange={e => handleCategoryChange(idx, 'count', e.target.value)}
                          />
                        </td>
                        <td className="px-2 py-2">
                          <input
                            className="bg-transparent text-white border-b border-gray-600 w-16"
                            value={cat.price}
                            onChange={e => handleCategoryChange(idx, 'price', e.target.value)}
                          />
                        </td>
                        <td className="px-2 py-2 flex gap-2">
                          <button
                            className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1"
                            onClick={() => handleRemoveCategory(idx)}
                          >
                            🗑️
                          </button>
                          {idx === ticketCategories.length - 1 && (
                            <button
                              className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1"
                              onClick={handleAddCategory}
                            >
                              ＋
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-lg mb-1 flex items-center gap-2">
                Total Tickets
                <span className="text-[#22e6ce] cursor-pointer">✎</span>
              </div>
              <input
                className="w-full rounded-lg bg-[#232323] text-white p-3 border border-gray-600"
                placeholder="Number"
                value={totalTickets}
                onChange={e => setTotalTickets(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="font-bold text-lg mb-2">Platforms</div>
              <div className="flex gap-8 flex-wrap">
                {Object.keys(platforms).map(platform => (
                  <label
                    key={platform}
                    className="flex items-center gap-2 text-gray-300 text-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={platforms[platform]}
                      onChange={() => handlePlatformChange(platform)}
                      className="accent-[#22e6ce] w-5 h-5"
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <div className="font-bold text-lg mb-1 flex items-center gap-2">
                Event Layout/ Sitting Plan
                <span className="text-[#22e6ce] cursor-pointer">✎</span>
              </div>
              <div
                className="w-full rounded-lg bg-[#232323] text-white p-3 border border-dashed border-[#22e6ce] flex items-center cursor-pointer"
                onClick={handleLayoutBarClick}
              >
                <span className="flex-1">{layoutFile ? layoutFile.name : 'Upload doc'}</span>
                <input
                  type="file"
                  ref={layoutInputRef}
                  className="hidden"
                  onChange={handleLayoutFileChange}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-[#22e6ce] hover:bg-[#3479ff] text-white font-bold px-8 py-2 rounded-lg text-lg transition">
                Confirm Tickets
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;
