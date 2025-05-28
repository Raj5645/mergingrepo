// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../common/header2';

// const CreateEvent = () => {
//   const [form, setForm] = useState({
//     title: '',
//     date: '',
//     location: '',
//     price: '',
//     description: '',
//   });

//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newEvent = {
//       id: Date.now().toString(),
//       title: form.title,
//       date: form.date,
//       location: form.location,
//       price: form.price,
//       description: form.description,
//       image: '/images/default.png',
//       status: 'Draft',
//       lastEdited: new Date().toLocaleString(),
//     };
//     setSuccess(true);

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

//     navigate('/events', { state: { newEvent } });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
//       <Header />
//       <main className="container mx-auto px-4 py-6 flex flex-col items-center">
//         <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
//         <form
//           onSubmit={handleSubmit}
//           className="bg-[#232323] rounded-lg p-8 shadow-lg w-full max-w-xl"
//         >
//           <div className="mb-4">
//             <label className="block mb-1 font-medium" htmlFor="title">Event Title</label>
//             <input
//               id="title"
//               name="title"
//               type="text"
//               value={form.title}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-[#191919] text-white"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium" htmlFor="date">Date</label>
//             <input
//               id="date"
//               name="date"
//               type="date"
//               value={form.date}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-[#191919] text-white"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium" htmlFor="location">Location</label>
//             <input
//               id="location"
//               name="location"
//               type="text"
//               value={form.location}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-[#191919] text-white"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium" htmlFor="price">Price</label>
//             <input
//               id="price"
//               name="price"
//               type="text"
//               value={form.price}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-[#191919] text-white"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block mb-1 font-medium" htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               className="w-full p-2 rounded bg-[#191919] text-white"
//               rows={4}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg px-6 py-2.5 text-lg font-bold text-white"
//           >
//             Create Event
//           </button>
//           {success && (
//             <div className="mt-4 text-green-400 font-semibold text-center">
//               Event created successfully!
//             </div>
//           )}
//         </form>
//       </main>
//     </div>
//   );
// };

// export default CreateEvent;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: '',
    location: '',
    startDate: '',
    endDate: '',
    eventType: '',
    eventCategory: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const fileInputRef = useRef(null);
  const locationInputRef = useRef(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const autocompleteRef = useRef(null);

  useEffect(() => {
    const el = autocompleteRef.current;
    if (!el) return;

    const handler = (event) => {
      // event.target.value is the address string
      // event.target.gmpxPlace is the full place object
      setForm((prev) => ({
        ...prev,
        location: event.target.value,
      }));
    };

    el.addEventListener('gmpx-placeautocomplete-placechange', handler);

    return () => {
      el.removeEventListener('gmpx-placeautocomplete-placechange', handler);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setThumbnail(imgURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...form,
      thumbnail,
      id: Date.now().toString(),
      status: 'Draft',
      lastEdited: new Date().toLocaleString(),
    };
    setSuccess(true);
    navigate('/events', { state: { newEvent } });
  };

  return (
    <div className="min-h-screen bg-black text-[#717480] flex flex-col items-center px-4 py-6 relative">
      <div className="w-full max-w-3xl bg-[#1c1c1c] p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-[#717480] hover:text-white"
          onClick={() => navigate('/events')}
        >
          <FaTimes size={20} />
        </button>

        <h1 className="text-white text-3xl font-bold mb-6">Create New Event</h1>

        {/* Event Type */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Choose Event Type</label>
          <div className="flex gap-6">
            {['On-Ground Event', 'Online Event', 'Hybrid Event'].map((type) => (
              <label key={type} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="eventType"
                  value={type}
                  onChange={handleChange}
                  className="accent-[#717480]"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Event Name & Location */}
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label className="block mb-1 font-medium">Event Name</label>
            <input
              type="text"
              name="title"
              placeholder="Name"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 rounded border border-white bg-[#1E1E1E] text-[#717480] placeholder-[#464646]"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-1 font-medium">Event Location</label>
           <div className="w-full">
  <gmpx-place-autocomplete
    ref={autocompleteRef}
    id="event-location"
    country="IN"
    placeholder="Start typing city..."
    style={{
      width: '100%',
      height: '40px',
      border: '1px solid white',
      borderRadius: '6px',
      backgroundColor: '#1E1E1E',
      color: '#717480',
      padding: '8px 12px',
      fontSize: '16px',
      boxSizing: 'border-box',
    }}
  />
</div>


            {/* <input
  type="text"
  name="location"
  placeholder="Start typing city..."
  ref={locationInputRef}
  value={form.location}
  onChange={handleChange}
  className="w-full p-2 rounded border border-white bg-[#1E1E1E] text-[#717480] placeholder-[#464646]"
/> */}
          </div>
        </div>

        {/* Start & End Date */}
        <div className="mb-4 flex gap-4">
          {['startDate', 'endDate'].map((field) => (
            <div key={field} className="w-1/2 relative">
              <label className="block mb-1 font-medium">
                {field === 'startDate' ? 'Start Date' : 'End Date'}
              </label>
              <input
                type="date"
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full p-2 pr-10 rounded border border-white bg-white text-black placeholder-[#464646] appearance-none"
              />
              <FaCalendarAlt
                className="absolute top-9 right-3 text-black pointer-events-none"
                size={18}
              />
            </div>
          ))}
        </div>

        {/* Upload Thumbnail */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Upload Thumbnail</label>
          <div
            className="w-full h-24 rounded-lg border border-white overflow-hidden flex items-center justify-center text-white font-bold text-xl cursor-pointer bg-[#1E1E1E]"
            onClick={() => fileInputRef.current.click()}
          >
            {thumbnail ? (
              <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
            ) : (
              'ENTERTAINMENT'
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleThumbnailUpload}
            />
          </div>
        </div>

        {/* Event Category */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Type of event</label>
          <div className="flex flex-wrap gap-4">
            {['Concert', 'Festival', 'Meetup', 'Open Mic', 'Campus Event', 'EDM'].map(
              (category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="eventCategory"
                    value={category}
                    onChange={handleChange}
                    className="accent-[#717480]"
                  />
                  <span>{category}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start pl-4">
          <button
            type="submit"
            onClick={handleSubmit}
            style={{ width: '240px', height: '55.98px' }}
            className="bg-[#72ABF6] rounded-lg text-white font-bold text-lg"
          >
            Create Event
          </button>
        </div>

        {success && (
          <p className="mt-4 text-green-400 text-center font-medium">Event created successfully!</p>
        )}
      </div>
    </div>
  );
};

export default CreateEvent;
