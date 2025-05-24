import React, { useState } from "react";
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const eventTypes = [
  "Concert",
  "Standup",
  "Campus Festival",
  "Open Mic",
  "EDM",
  "Meetup",
];

const EventDetails = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [eventName, setEventName] = useState("LIVE AND LOUD"); // Example event name
  const [eventMode, setEventMode] = useState("On Ground");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [venue, setVenue] = useState("");
  const [artist, setArtist] = useState("");
  const [spotify, setSpotify] = useState("");
  const [gap, setGap] = useState("");

  // Calculate gap between times
  React.useEffect(() => {
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


  // useEffect(()=>{

  //   const getData = async () =>{

  //     try {
  //       const response = await fetch("",{
  //         method:"GET",
  //         headers:{
  //           "Content-Type": "apllication/json";
  //         },
  //         body: JSON.stringify();
  //       });

  //       if(!response.ok)
  //       {
  //          console.log("in metrics response  not fetched");
  //          return ;
  //       }


  //     } catch (error) {
  //       console.log("error in metricsection is:", error);
  //     }
  // getData();

  //   }


  // },[]);





  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <Header />
        <div className="relative flex flex-col mx-auto p-8" style={{ width: "1198px", height: "742px", background: "rgba(255,255,255,0.05)", borderRadius: "24px" }}>
          {/* Top Row */}
          <div className="flex justify-between items-start mb-4">
            <div className="font-bold uppercase" style={{ fontSize: "28.89px", width: "280px" }}>{eventName}</div>
            <div className="flex items-center gap-6">
              {/* Dot Selectors */}
              <div className="flex items-center gap-4 mr-8">
                {["On Ground", "Online", "Hybrid"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setEventMode(mode)}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full border-2 ${eventMode === mode ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-500 text-gray-300 bg-transparent'} font-semibold`}
                  >
                    <span className={`w-3 h-3 rounded-full ${eventMode === mode ? 'bg-white' : 'bg-gray-500'}`}></span>
                    {mode}
                  </button>
                ))}
              </div>
              {/* Publish Event Button */}
              <button style={{ width: "168px", height: "41px" }} className="bg-blue-600 rounded-lg text-white font-bold flex items-center justify-center shadow-lg">PUBLISH EVENT</button>
            </div>
          </div>
          {/* Event Image Box */}
          <div className="relative mb-4" style={{ width: "1148px", height: "168px" }}>
            <img src="/images/img_rectangle_464.png" alt="Event" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-extrabold text-4xl uppercase text-white bg-black bg-opacity-40 px-8 py-2 rounded-xl tracking-widest">ENTERTAINMENT</span>
            </div>
          </div>
          {/* About Event */}
          <div className="flex flex-col mb-2">
            <div className="font-bold text-lg mb-1">ABOUT EVENT (Describe your event)</div>
          </div>
          {/* Description Input */}
          <textarea
            className="w-full rounded-lg bg-white bg-opacity-10 text-white p-4 mb-4 resize-none border border-gray-600"
            style={{ width: "1140px", height: "65.71px" }}
            placeholder="Describe your event..."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          {/* Event Details Row */}
          <div className="mb-4" style={{ width: "1140px", height: "109px" }}>
            <div className="flex gap-4 mb-2" style={{ height: "35px" }}>
              <div className="w-1/4 font-bold">Event Detail</div>
              <div className="w-1/4 font-bold">Event Timing</div>
              <div className="w-1/4 font-bold">Venue</div>
              <div className="w-1/4 font-bold">Upload Itinerary</div>
            </div>
            <div className="flex gap-4">
              {/* Event Detail (Date Picker) */}
              <input type="date" className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" value={date} onChange={e => setDate(e.target.value)} />
              {/* Event Timing (Clock) */}
              <div className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white flex flex-col justify-center items-center p-2 border border-gray-600 overflow-hidden">
                <div className="flex flex-col w-full items-center justify-center">
                  <div className="flex items-center gap-2 w-full justify-center">
                    <span>Start:</span>
                    <input type="time" className="bg-transparent text-white border-b border-gray-400 w-[80px]" value={startTime} onChange={e => setStartTime(e.target.value)} />
                    <span>End:</span>
                    <input type="time" className="bg-transparent text-white border-b border-gray-400 w-[80px]" value={endTime} onChange={e => setEndTime(e.target.value)} />
                  </div>
                  {gap && <span className="mt-1 text-xs text-gray-300">Gap: {gap}</span>}
                </div>
              </div>
              {/* Venue (Location Suggestions) */}
              <input type="text" className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" placeholder="Venue" value={venue} onChange={e => setVenue(e.target.value)} list="venue-suggestions" />
              <datalist id="venue-suggestions">
                <option value="Delhi" />
                <option value="Mumbai" />
                <option value="Bangalore" />
                <option value="Chennai" />
                <option value="Kolkata" />
              </datalist>
              {/* Upload Itinerary (Documents) */}
              <input type="file" accept=".pdf,.doc,.docx" className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" />
            </div>
          </div>
          {/* Type of Event */}
          <div className="flex flex-col mb-2">
            <div className="font-bold text-lg mb-1 uppercase">TYPE OF EVENT</div>
            <div className="flex gap-4 mb-4">
              {eventTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-full border-2 font-semibold ${selectedType === type ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-500 text-gray-300 bg-transparent'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          {/* Artist & Docs Row */}
          <div className="mb-4" style={{ width: "1140px", height: "109px" }}>
            <div className="flex gap-4 mb-2" style={{ height: "35px" }}>
              <div className="w-1/4 font-bold">Artist</div>
              <div className="w-1/4 font-bold">Artist's Spotify</div>
              <div className="w-1/4 font-bold">Upload T&C</div>
              <div className="w-1/4 font-bold">Upload Itinerary</div>
            </div>
            <div className="flex gap-4">
              {/* Artist Name */}
              <input type="text" className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" placeholder="Artist Name" value={artist} onChange={e => setArtist(e.target.value)} />
              {/* Spotify Link */}
              <input type="url" className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" placeholder="Spotify Link" value={spotify} onChange={e => setSpotify(e.target.value)} />
              {/* Upload T&C */}
              <input type="file" accept=".pdf,.doc,.docx" className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" />
              {/* Upload Itinerary */}
              <input type="file" accept=".pdf,.doc,.docx" className="w-[288px] h-[58px] rounded-lg bg-white bg-opacity-10 text-white p-2 border border-gray-600" />
            </div>
          </div>
          {/* Add Inter font from Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
