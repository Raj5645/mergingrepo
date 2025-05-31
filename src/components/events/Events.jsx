<<<<<<< HEAD
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
=======
// import React, { useState, useRef, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../common/header2';
// import EventFilters from './EventFilters';

// const Events = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [events, setEvents] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const scrollRef = useRef(null);
//   const eventProcessed = useRef(false);

//   // useEffect(()=>{

//   //   const getEvents = async () =>{

//   //     try {
//   //       const response = await fetch("");

//   //       if(!response.ok)
//   //       {
//   //          console.log("response got failed")
//   //          return ;
//   //       }

//   //       const data = await response.json();
//   //       if(!data)
//   //       {
//   //         console.log(data);
//   //         return ;
//   //       }
//   //       setEvents(data);
//   //     } catch (error) {
//   //       console.log("error of fetching events from backend", error);
//   //     }

//   //   }

//   //   getEvents();

//   // },[events]);


// // useEffect(() => {
// //   const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
// //   setEvents(storedEvents);
// // }, []);


//   useEffect(() => {
//   const stored = JSON.parse(localStorage.getItem('events')) || [];

//   if (location.state?.newEvent && !eventProcessed.current) {
//     console.log("step-1");
//     const updated = [...stored, location.state.newEvent];
//     setEvents(updated);
//     localStorage.setItem('events', JSON.stringify(updated));
//     eventProcessed.current = true;
//     navigate('/events', { replace: true, state: null });
//   } else {
//     console.log("step-2")
//     setEvents(stored);
//   }
//   console.log("after creating event then Event component renders");
// }, [location,navigate]);



//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter);
//   };

//   const handleCreateEvent = () => {
//     navigate('/createevent');
//   };

//   const handleEventClick = (eventId) => {
//     // const token = localStorage.getItem('token');
//     // const token =
//     //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzQ3OTk5NjUyLCJleHAiOjE3NDgwMDMyNTJ9.M5pnSEm6bQzYMAq6uF0D4OsUBPLwU3RGfhozM65RhiufUbwmo9VyREKGmtkzNepGTwiji0p_SEydtzX5hbl88A';
//     // console.log('token in event api is:', token);

//     // const eventData = {
//     //   id: 0,
//     //   name: 'test2305',
//     //   startDate: '2025-06-23',
//     //   endDate: '2025-06-26',
//     //   timings: 'test1',
//     //   venue: 'Mumbai',
//     //   thumbnail: 'image',
//     // };

//     // const authCheck = async () => {
//     //   try {
//     //     const response = await fetch('/api/event/save', {
//     //       method: 'POST',
//     //       headers: {
//     //         'Content-Type': 'application/json',
//     //         authorization: `Bearer ${token}`,
//     //       },
//     //       body: JSON.stringify(eventData),
//     //     });

//     //     if (response.status === 201) {
//     //       const data = await response.json();
//     //       console.log('Authorized data:', data);
//     //       // Use the authorized data
//     //       navigate('/eventdemo');
//     //     } else { 
//     //       // Unauthorized access
//     //       console.log('Unauthorized access');
//     //       // localStorage.removeItem('token');
//     //       // window.location.href = '/';
//     //     }
//     //   } catch (error) {
//     //     console.error('Error fetching data in authcheck', error);
//     //   }
//     // };

//     // authCheck();

//     // navigate('/eventdemo');
//     navigate("/dashboard");
//   };

//   // Slide to the 4th event (index 3)
//   const handleSlideToFourth = () => {
//     if (scrollRef.current) {
//       const card = scrollRef.current.querySelectorAll('.event-card')[3];
//       if (card) {
//         card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000]">
//       <Header />
//       <main className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center mb-6">
//           <EventFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
//           <button
//             onClick={handleCreateEvent}
//             className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg px-6 py-2.5 text-lg font-bold text-white"
//           >
//             Create Event
//           </button>
//         </div>
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={handleSlideToFourth}
//             className="px-4 py-2 bg-[#232323] text-[#22e6ce] rounded-lg font-semibold shadow hover:bg-[#191919] transition"
//           >
//             Slide to 4th Event
//           </button>
//         </div>
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-[#232323] scrollbar-track-[#171717]"
//           style={{ WebkitOverflowScrolling: 'touch' }}
//         >
//           {events
//             .filter((event) => activeFilter === 'all' || event.status === activeFilter)
//             .map((event) => (
//               <button
//                 key={event.id}
//                 onClick={() => handleEventClick(event.id)}
//                 className="event-card flex-shrink-0 bg-[#191919] rounded-lg p-0 text-left shadow-lg hover:shadow-xl transition-shadow flex flex-col"
//                 style={{ width: '351.48px', height: '583.29px' }}
//               >
//                 <div
//                   style={{
//                     width: '351.48px',
//                     height: '450px',
//                     overflow: 'hidden',
//                     borderTopLeftRadius: '0.5rem',
//                     borderTopRightRadius: '0.5rem',
//                   }}
//                   className="bg-[#232323]"
//                 >
//                   <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="flex-1 flex flex-col justify-between p-4">
//                   <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
//                   <p className="text-sm text-[#949494] mb-1">{event.location}</p>
//                   {/* <p className="text-sm text-[#949494] mb-1">
//                     {event.date.day}, {event.date.date} {event.date.month}
//                   </p> */}
//                   <p className="text-base text-[#22e6ce] font-semibold">{event.price}</p>
//                   <p className="text-xs text-[#949494] mt-2">{event.lastEdited}</p>
//                 </div>
//               </button>
//             ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Events;



import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../common/header2';
import EventFilters from './EventFilters';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef(null);
  const eventProcessed = useRef(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('events')) || [];

    if (location.state?.newEvent && !eventProcessed.current) {
      const updated = [...stored, location.state.newEvent];
      setEvents(updated);
      localStorage.setItem('events', JSON.stringify(updated));
      eventProcessed.current = true;
      navigate('/events', { replace: true, state: null });
    } else {
      setEvents(stored);
    }
  }, [location, navigate]);
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCreateEvent = () => {
<<<<<<< HEAD
    navigate('/events/create');
  };

  const handleEventClick = (eventId) => {
    navigate('/dashboard', { state: { eventId } });
  };

  const handleEventDetailClick = () => {
    navigate('/eventdetails');
  };

  // Slide to the 4th event (index 3)
=======
    navigate('/createevent');
  };

  const handleEventClick = (eventId) => {
    navigate("/dashboard");
  };

>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
  const handleSlideToFourth = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelectorAll('.event-card')[3];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

<<<<<<< HEAD
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
=======
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000]">
      <Header />
      <main className="container mx-auto px-4 pt-[85px] py-6"> {/* Adjusted top padding */}
        <div className="flex justify-between items-center mb-6">
          <EventFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />
          <button
            onClick={handleCreateEvent}
            className="bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg px-6 py-2.5 text-lg font-bold text-white"
          >
            Create Event
          </button>
        </div>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleSlideToFourth}
            className="px-4 py-2 bg-[#232323] text-[#22e6ce] rounded-lg font-semibold shadow hover:bg-[#191919] transition"
          >
            Slide to 4th Event
          </button>
        </div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-[#232323] scrollbar-track-[#171717]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {events
            .filter((event) => activeFilter === 'all' || event.status === activeFilter)
            .map((event) => (
              <button
                key={event.id}
                onClick={() => handleEventClick(event.id)}
                className="event-card flex-shrink-0 bg-[#191919] rounded-lg p-0 text-left shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                style={{ width: '351.48px', height: '583.29px' }}
              >
                <div
                  style={{
                    width: '351.48px',
                    height: '450px',
                    overflow: 'hidden',
                    borderTopLeftRadius: '0.5rem',
                    borderTopRightRadius: '0.5rem',
                  }}
                  className="bg-[#232323]"
                >
                  <img src="https://wallpaperaccess.com/full/7985423.jpg" 
                  alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-[#949494] mb-1">{event.location}</p>
                  <p className="text-base text-[#22e6ce] font-semibold">{event.price}</p>
                  <p className="text-xs text-[#949494] mt-2">{event.lastEdited}</p>
                </div>
              </button>
            ))}
        </div>
      </main>
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
    </div>
  );
};

export default Events;
<<<<<<< HEAD
=======

>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
