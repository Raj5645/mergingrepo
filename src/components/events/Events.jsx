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


  // useEffect(()=>{

  //   const getEvents = async () =>{

  //     try {
  //       const response = await fetch("");

  //       if(!response.ok)
  //       {
  //          console.log("response got failed")
  //          return ;
  //       }

  //       const data = await response.json();
  //       if(!data)
  //       {
  //         console.log(data);
  //         return ;
  //       }
  //       setEvents(data);
  //     } catch (error) {
  //       console.log("error of fetching events from backend", error);
  //     }

  //   }

  //   getEvents();

  // },[events]);


useEffect(() => {
  const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
  setEvents(storedEvents);
}, []);


  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('events')) || [];

  if (location.state?.newEvent) {
    console.log("step-1");
    const updated = [...stored, location.state.newEvent];
    setEvents(updated);
    localStorage.setItem('events', JSON.stringify(updated));
  } else {
    console.log("step-2")
    setEvents(stored);
  }
  console.log("after creating event then Event component renders");
}, [location.state]);



  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCreateEvent = () => {
    navigate('/createevent');
  };

  const handleEventClick = (eventId) => {
    // const token = localStorage.getItem('token');
    // const token =
    //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNzQ3OTk5NjUyLCJleHAiOjE3NDgwMDMyNTJ9.M5pnSEm6bQzYMAq6uF0D4OsUBPLwU3RGfhozM65RhiufUbwmo9VyREKGmtkzNepGTwiji0p_SEydtzX5hbl88A';
    // console.log('token in event api is:', token);

    // const eventData = {
    //   id: 0,
    //   name: 'test2305',
    //   startDate: '2025-06-23',
    //   endDate: '2025-06-26',
    //   timings: 'test1',
    //   venue: 'Mumbai',
    //   thumbnail: 'image',
    // };

    // const authCheck = async () => {
    //   try {
    //     const response = await fetch('/api/event/save', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(eventData),
    //     });

    //     if (response.status === 201) {
    //       const data = await response.json();
    //       console.log('Authorized data:', data);
    //       // Use the authorized data
    //       navigate('/eventdemo');
    //     } else { 
    //       // Unauthorized access
    //       console.log('Unauthorized access');
    //       // localStorage.removeItem('token');
    //       // window.location.href = '/';
    //     }
    //   } catch (error) {
    //     console.error('Error fetching data in authcheck', error);
    //   }
    // };

    // authCheck();

    // navigate('/eventdemo');
    navigate("/dashboard");
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000]">
      <Header />
      <main className="container mx-auto px-4 py-6">
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
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-[#949494] mb-1">{event.location}</p>
                  <p className="text-sm text-[#949494] mb-1">
                    {event.date.day}, {event.date.date} {event.date.month}
                  </p>
                  <p className="text-base text-[#22e6ce] font-semibold">{event.price}</p>
                  <p className="text-xs text-[#949494] mt-2">{event.lastEdited}</p>
                </div>
              </button>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Events;
