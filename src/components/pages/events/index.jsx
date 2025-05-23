import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import EventFilters from './EventFilters';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleCreateEvent = () => {
    navigate('/events/create');
  };

  const handleEventClick = (eventId) => {
    navigate('/events/analytics');
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
          <EventFilters 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange} 
          />
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
            .filter(event => activeFilter === 'all' || event.status === activeFilter)
            .map(event => (
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
                    borderTopRightRadius: '0.5rem'
                  }}
                  className="bg-[#232323]"
                >
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-sm text-[#949494] mb-1">{event.location}</p>
                  <p className="text-sm text-[#949494] mb-1">{event.date.day}, {event.date.date} {event.date.month}</p>
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