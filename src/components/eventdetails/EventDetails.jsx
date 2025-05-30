import React, { useState, useEffect } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";

const eventTypes = [
  "Concert",
  "Standup",
  "Campus Festival",
  "Open Mic",
  "EDM",
  "Meetup",
];

const locationSuggestions = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

const EventDetails = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [eventName, setEventName] = useState("LIVE AND LOUD");
  const [eventMode, setEventMode] = useState("On Ground");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [venue, setVenue] = useState("");
  const [artist, setArtist] = useState("");
  const [spotify, setSpotify] = useState("");
  const [gap, setGap] = useState("");

  useEffect(() => {
    if (startTime && endTime) {
      const [sh, sm] = startTime.split(":").map(Number);
      const [eh, em] = endTime.split(":").map(Number);
      let diff = (eh * 60 + em) - (sh * 60 + sm);
      if (diff < 0) diff += 24 * 60;
      setGap(`${Math.floor(diff / 60)}h ${diff % 60}m`);
    } else {
      setGap("");
    }
  }, [startTime, endTime]);

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-inter">
      {/* Sidebar */}
      <div className="w-[220px] bg-[#171717]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-col items-center bg-[#1a1a1a] text-white font-inter h-full overflow-auto p-8">
          <div className="w-full max-w-[1200px] bg-white bg-opacity-5 rounded-2xl p-6 space-y-6">
            {/* Title & Mode Selection */}
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold uppercase">{eventName}</h1>
              <div className="flex items-center space-x-4">
                {["On Ground", "Online", "Hybrid"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setEventMode(mode)}
                    className={`px-4 py-2 rounded-full border-2 ${
                      eventMode === mode
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-500 text-gray-300 bg-transparent"
                    } font-semibold`}
                  >
                    {mode}
                  </button>
                ))}
                <button className="bg-blue-600 rounded-lg text-white font-bold px-6 py-2 shadow-lg">
                  PUBLISH EVENT
                </button>
              </div>
            </div>

            {/* Event Image */}
            <div className="relative w-full h-48">
              <img
                src="/images/img_rectangle_464.png"
                alt="Event"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-xl">
                <span className="font-extrabold text-4xl uppercase text-white tracking-widest">
                  ENTERTAINMENT
                </span>
              </div>
            </div>

            {/* About Event */}
            <div>
              <h2 className="font-bold text-lg mb-2">ABOUT EVENT</h2>
              <textarea
                className="w-full rounded-lg bg-white bg-opacity-10 text-white p-4 resize-none border border-gray-600"
                rows={3}
                placeholder="Describe your event..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="font-bold">Event Date</label>
                  <input
                    type="date"
                    className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="font-bold">Event Timing</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                    <span className="text-white">to</span>
                    <input
                      type="time"
                      className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                  {gap && (
                    <p className="text-sm text-gray-300 mt-1">Duration: {gap}</p>
                  )}
                </div>
                <div>
                  <label className="font-bold">Venue</label>
                  <input
                    type="text"
                    className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                    placeholder="Venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    list="venue-suggestions"
                  />
                  <datalist id="venue-suggestions">
                    {locationSuggestions.map((location) => (
                      <option key={location} value={location} />
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="font-bold">Upload Itinerary</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* Type of Event */}
            <div>
              <h2 className="font-bold text-lg mb-2 uppercase">TYPE OF EVENT</h2>
              <div className="flex flex-wrap gap-4">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-6 py-2 rounded-full border-2 font-semibold ${
                      selectedType === type
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-500 text-gray-300 bg-transparent"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Artist & Documents */}
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="font-bold">Artist</label>
                <input
                  type="text"
                  className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                  placeholder="Artist Name"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </div>
              <div>
                <label className="font-bold">Artist's Spotify</label>
                <input
                  type="url"
                  className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                  placeholder="Spotify Link"
                  value={spotify}
                  onChange={(e) => setSpotify(e.target.value)}
                />
              </div>
              <div>
                <label className="font-bold">Upload T&C</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                />
              </div>
              <div>
                <label className="font-bold">Upload Itinerary</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full h-12 rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
