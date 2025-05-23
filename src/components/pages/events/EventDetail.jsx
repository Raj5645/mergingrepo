import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../common/Header';

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Mock event data (replace with API call or context in real implementation)
  const event = {
    id: eventId,
    title: 'Live and Loud',
    date: '23/06/25',
    location: 'Bangalore',
    price: '₹1000 - ₹9000',
    description: 'This is a detailed description of the event.',
    image: '/images/img_image_9.png',
  };

  const handleOpenFolder = () => {
    navigate(`/events/${eventId}/folder`);
  };

  const handleOpenRepository = () => {
    navigate(`/events/${eventId}/repository`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="bg-[#191919] rounded-lg p-6 shadow-lg">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-[300px] object-cover rounded-md mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <p className="text-lg mb-2">Date: {event.date}</p>
          <p className="text-lg mb-2">Location: {event.location}</p>
          <p className="text-lg mb-2">Price: {event.price}</p>
          <p className="text-md text-[#949494]">{event.description}</p>
          <button 
            onClick={handleOpenFolder}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white font-bold rounded-lg"
          >
            Open Folder
          </button>
          <button 
            onClick={handleOpenRepository}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-[#3980ed] to-[#04ffff] text-white font-bold rounded-lg"
          >
            Open Repository
          </button>
          <div className="mt-8 p-4 bg-[#232323] rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Event Actions</h2>
            <p className="mb-2">You can add any custom content here that should appear after clicking an event.</p>
            <button
              className="px-4 py-2 bg-gradient-to-r from-[#ff9800] to-[#ff5722] rounded text-white font-bold"
              onClick={() => alert('Custom Action!')}
            >
              Custom Action
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
