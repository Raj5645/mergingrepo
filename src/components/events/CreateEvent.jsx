import React, { useState } from 'react';
import Header from '../../common/Header';

const CreateEvent = () => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    location: '',
    price: '',
    description: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send form data to your backend or state management
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
      <Header />
      <main className="container mx-auto px-4 py-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-[#232323] rounded-lg p-8 shadow-lg w-full max-w-xl"
        >
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="title">Event Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#191919] text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#191919] text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#191919] text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium" htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="text"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#191919] text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#191919] text-white"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#22e6ce] to-[#3479ff] rounded-lg px-6 py-2.5 text-lg font-bold text-white"
          >
            Create Event
          </button>
          {success && (
            <div className="mt-4 text-green-400 font-semibold text-center">
              Event created successfully!
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default CreateEvent;
