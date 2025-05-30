// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from '../../common/Header';

// const EventInfo = () => {
//   const { eventId } = useParams();
//   const navigate = useNavigate();

//   // Mock event data (replace with API call or context in real implementation)
//   const event = {
//     id: eventId,
//     title: 'Live and Loud',
//     date: '23/06/25',
//     location: 'Bangalore',
//     price: '₹1000 - ₹9000',
//     description: 'This is a detailed description of the event.',
//     image: '/images/img_image_9.png',
//   };

//   const handleOpenFolder = () => {
//     navigate(`/events/${eventId}/folder`);
//   };

//   const handleOpenRepository = () => {
//     navigate(`/events/${eventId}/repository`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
//       <Header />
//       <main className="container mx-auto px-4 py-6">
//         <div className="bg-[#191919] rounded-lg p-6 shadow-lg">
//           <img 
//             src={event.image} 
//             alt={event.title} 
//             className="w-full h-[300px] object-cover rounded-md mb-6"
//           />
//           <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
//           <p className="text-lg mb-2">Date: {event.date}</p>
//           <p className="text-lg mb-2">Location: {event.location}</p>
//           <p className="text-lg mb-2">Price: {event.price}</p>
//           <p className="text-md text-[#949494]">{event.description}</p>
//           <button 
//             onClick={handleOpenFolder}
//             className="mt-4 px-6 py-2 bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white font-bold rounded-lg"
//           >
//             Open Folder
//           </button>
//           <button 
//             onClick={handleOpenRepository}
//             className="mt-4 px-6 py-2 bg-gradient-to-r from-[#3980ed] to-[#04ffff] text-white font-bold rounded-lg"
//           >
//             Open Repository
//           </button>
//           <div className="mt-8 p-4 bg-[#232323] rounded-lg">
//             <h2 className="text-2xl font-bold mb-2">Event Actions</h2>
//             <p className="mb-2">You can add any custom content here that should appear after clicking an event.</p>
//             <button
//               className="px-4 py-2 bg-gradient-to-r from-[#ff9800] to-[#ff5722] rounded text-white font-bold"
//               onClick={() => alert('Custom Action!')}
//             >
//               Custom Action
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default EventInfo;


import React, { useState } from 'react';

const EventInfo = ({ eventName }) => {
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState({ start: '', end: '' });
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [artistName, setArtistName] = useState('');
  const [spotifyLink, setSpotifyLink] = useState('');

  const handleTimeChange = (field, value) => {
    setEventTime({ ...eventTime, [field]: value });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
        style={{ width: '1198px', height: '742px' }}
      ></div>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold uppercase" style={{ width: '280px', height: '28.89px' }}>
            {eventName}
          </h1>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            style={{ width: '168px', height: '41px' }}
          >
            Publish Event
          </button>
        </div>
        <div className="flex space-x-4 mb-6">
          <button className="text-white">On Ground</button>
          <button className="text-white">Online</button>
          <button className="text-white">Hybrid</button>
        </div>
        <div className="mb-6">
          <div
            className="w-full h-42 bg-cover bg-center flex items-center justify-center text-white font-bold text-2xl"
            style={{ width: '1148px', height: '168px', backgroundImage: 'url(/path-to-event-image.jpg)' }}
          >
            ENTERTAINMENT
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-bold">About Event</h2>
          <textarea
            className="w-full p-2 rounded bg-[#191919] text-white"
            style={{ width: '1140px', height: '65.71px' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-4 gap-4" style={{ width: '1140px', height: '109px' }}>
            <div>
              <label>Date</label>
              <input
                type="date"
                className="w-full p-2 rounded bg-[#191919] text-white"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>
            <div>
              <label>Event Timing</label>
              <div className="flex space-x-2">
                <input
                  type="time"
                  className="w-full p-2 rounded bg-[#191919] text-white"
                  value={eventTime.start}
                  onChange={(e) => handleTimeChange('start', e.target.value)}
                />
                <input
                  type="time"
                  className="w-full p-2 rounded bg-[#191919] text-white"
                  value={eventTime.end}
                  onChange={(e) => handleTimeChange('end', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label>Venue</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-[#191919] text-white"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label>Upload Itinerary</label>
              <input type="file" className="w-full p-2 rounded bg-[#191919] text-white" />
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold">Type of Event</h2>
        <div className="flex space-x-4 mb-6">
          {['Concert', 'Standup', 'Campus Festival', 'Open Mic', 'EDM', 'Meetup'].map((typeOption) => (
            <button
              key={typeOption}
              className={p-2 rounded ${type === typeOption ? 'bg-blue-500' : 'bg-[#191919]'} text-white}
              onClick={() => setType(typeOption)}
            >
              {typeOption}
            </button>
          ))}
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-4 gap-4" style={{ width: '1140px', height: '109px' }}>
            <div>
              <label>Artist</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-[#191919] text-white"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
              />
            </div>
            <div>
              <label>Artist's Spotify</label>
              <input
                type="url"
                className="w-full p-2 rounded bg-[#191919] text-white"
                value={spotifyLink}
                onChange={(e) => setSpotifyLink(e.target.value)}
              />
            </div>
            <div>
              <label>Upload T&amp;C</label>
              <input type="file" className="w-full p-2 rounded bg-[#191919] text-white" />
            </div>
            <div>
              <label>Upload Itinerary</label>
              <input type="file" className="w-full p-2 rounded bg-[#191919] text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
