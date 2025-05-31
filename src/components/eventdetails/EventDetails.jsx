import React, { useState, useRef, useEffect, useCallback } from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";

// Pencil SVG Icon
const PencilIcon = ({ className = "w-4 h-4 ml-1" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="#717480" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13.5V17h3.5l7.036-7.036a2.5 2.5 0 10-3.536-3.536L9 13.5z" />
  </svg>
);

const TrashIcon = ({ className = "w-5 h-5" }) => (
  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UploadIcon = ({ className = "w-5 h-5" }) => (
  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0l-6 6m6-6l6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 20H4" />
  </svg>
);

const RefreshIcon = ({ className = "w-5 h-5" }) => (
  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const EventDetails = ({ eventId = null }) => {
  const [formData, setFormData] = useState({
    eventName: "Live and Loud",
    eventMode: "Online",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
    selectedType: null,
    artistName: "",
    artistSpotifyLink: "",
    artistInstagramProfile: "",
    itinerary: null,
    termsAndConditions: null,
    highlights: null,
  });

  const [duration, setDuration] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // For auto-resizing textarea
  const descRef = useRef(null);

  // Static data
  const eventTypes = [
    { id: 1, name: "Concert" },
    { id: 2, name: "Festival" },
    { id: 3, name: "Meetup" },
    { id: 4, name: "Open Mic" },
    { id: 5, name: "Campus Event" },
    { id: 6, name: "EDM" },
  ];

  const locationSuggestions = [
    { id: 1, name: "Delhi" },
    { id: 2, name: "Mumbai" },
    { id: 3, name: "Bangalore" },
    { id: 4, name: "Chennai" },
    { id: 5, name: "Kolkata" },
    { id: 6, name: "Hyderabad" },
    { id: 7, name: "Pune" },
    { id: 8, name: "Ahmedabad" },
  ];

  // Calculate duration
  useEffect(() => {
    if (formData.startTime && formData.endTime) {
      const [sh, sm] = formData.startTime.split(":").map(Number);
      const [eh, em] = formData.endTime.split(":").map(Number);
      let diff = (eh * 60 + em) - (sh * 60 + sm);
      if (diff < 0) diff += 24 * 60;
      setDuration(`${Math.floor(diff / 60)}h ${diff % 60}m`);
    } else {
      setDuration("");
    }
  }, [formData.startTime, formData.endTime]);

  // Auto-resize textarea
  useEffect(() => {
    if (descRef.current) {
      descRef.current.style.height = "auto";
      descRef.current.style.height = descRef.current.scrollHeight + "px";
    }
  }, [formData.description]);

  // Handle input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  }, [errors]);

  // File upload
  const fileInputRefs = {
    itinerary: useRef(null),
    termsAndConditions: useRef(null),
    highlights: useRef(null),
  };

  const handleFileBoxClick = (field) => {
    fileInputRefs[field].current.click();
  };

  const handleFileUpload = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.eventName.trim()) newErrors.eventName = "Event name is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.startTime) newErrors.startTime = "Start time is required";
    if (!formData.endTime) newErrors.endTime = "End time is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.selectedType) newErrors.selectedType = "Event type is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSaving(true);
    try {
      setTimeout(() => {
        setIsSaving(false);
        alert('Event saved successfully!');
      }, 1000);
    } catch (error) {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex bg-black text-white font-[Ruda,sans-serif] pt-[85px]">
        <div className="w-[220px] min-h-screen bg-black hidden md:block">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col items-center p-2 sm:p-4 md:p-8">
          <Header />
          <div className="relative flex flex-col mx-auto p-4 sm:p-8 w-full max-w-[1198px] min-h-[742px] bg-white/5 rounded-[24px]">
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-black text-[#717480] font-[Ruda,sans-serif] pt-[70px] md:pt-[85px]">
      <div className="hidden md:block w-[220px] min-h-screen bg-black">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col items-center p-2 sm:p-4 md:p-8">
        <Header />
        <div className="relative flex flex-col mx-auto p-2 sm:p-4 md:p-8 w-full max-w-[500px] md:max-w-[1198px] min-h-[742px] bg-white/5 rounded-[24px] space-y-4 md:space-y-6">

          {/* Top Bar: Event Name, Edit, Mode Options, Confirm */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full">
              <span className="text-2xl md:text-3xl font-bold uppercase text-white">{formData.eventName}</span>
              <button className="flex items-center" tabIndex={-1}><PencilIcon /></button>
              {/* Mode Options */}
              <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0">
                {["Online", "Offline", "Hybrid"].map((mode) => (
                  <label key={mode} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="eventMode"
                      value={mode}
                      checked={formData.eventMode === mode}
                      onChange={(e) => handleInputChange('eventMode', e.target.value)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 flex items-center justify-center rounded-full border-2 mr-2 transition-all
                        ${formData.eventMode === mode
                          ? "border-[#717480] bg-[#717480]"
                          : "border-[#717480] bg-transparent"}
                      `}
                    >
                      {formData.eventMode === mode && (
                        <span className="w-2.5 h-2.5 bg-white rounded-full block"></span>
                      )}
                    </span>
                    <span className="text-[#717480]">{mode}</span>
                  </label>
                ))}
              </div>
            </div>
            <button 
              onClick={handleSubmit}
              disabled={isSaving}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg text-white font-bold px-4 py-2 md:px-6 md:py-2 shadow-lg transition-colors mt-2 md:mt-0"
            >
              {isSaving ? "SAVING..." : "Confirm"}
            </button>
          </div>

          {/* Responsive Event Image Section */}
          <div className="relative w-full h-32 md:h-48">
            <div className="w-full h-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="font-extrabold text-xl md:text-4xl uppercase text-white tracking-widest">
                  ENTERTAINMENT
                </span>
              </div>
              {/* Side icons */}
              <div className="absolute left-2 top-2 md:left-4 md:top-4 flex flex-col space-y-2 z-10">
                <button className="text-white hover:text-gray-300 transition-colors">
                  <UploadIcon />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors">
                  <RefreshIcon />
                </button>
                <button className="text-white hover:text-gray-300 transition-colors">
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>

          {/* About the event */}
          <div>
            <label className="font-bold text-base md:text-lg mb-2 uppercase text-[#717480] flex items-center gap-1">
              About the event <PencilIcon />
            </label>
            <textarea
              ref={descRef}
              className="w-full min-h-10 max-h-96 rounded-lg bg-white/10 text-white py-2 px-4 border border-white focus:border-white outline-none placeholder-[#383838] resize-none transition-all"
              placeholder="write here..."
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={1}
              style={{overflow: "hidden"}}
            />
          </div>

          {/* Date and Time Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                Start Date <PencilIcon />
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus:border-white outline-none placeholder-[#383838]"
                  placeholder="ddmmyyyy"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#383838]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
              </div>
              {errors.startDate && (
                <p className="text-red-400 text-sm mt-1">{errors.startDate}</p>
              )}
            </div>
            <div>
              <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                End Date <PencilIcon />
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus:border-white outline-none placeholder-[#383838]"
                  placeholder="ddmmyyyy"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#383838]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
              </div>
              {errors.endDate && (
                <p className="text-red-400 text-sm mt-1">{errors.endDate}</p>
              )}
            </div>
            <div>
              <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                Start Time <PencilIcon />
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => handleInputChange('startTime', e.target.value)}
                className="w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus:border-white outline-none placeholder-[#383838]"
                placeholder="hh:mm:ss"
              />
              {errors.startTime && (
                <p className="text-red-400 text-sm mt-1">{errors.startTime}</p>
              )}
            </div>
            <div>
              <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                End Time <PencilIcon />
              </label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => handleInputChange('endTime', e.target.value)}
                className="w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus:border-white outline-none placeholder-[#383838]"
                placeholder="hh:mm:ss"
              />
              {errors.endTime && (
                <p className="text-red-400 text-sm mt-1">{errors.endTime}</p>
              )}
              {duration && (
                <p className="text-sm text-green-400 mt-1">Duration: {duration}</p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
              Location <PencilIcon />
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus:border-white outline-none placeholder-[#383838]"
              placeholder="Location"
              list="location-suggestions"
            />
            <datalist id="location-suggestions">
              {locationSuggestions.map((location) => (
                <option key={location.id} value={location.name} />
              ))}
            </datalist>
            {errors.location && (
              <p className="text-red-400 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          {/* Type of Event */}
          <div>
            <h2 className="font-bold text-base md:text-lg mb-4 uppercase text-[#717480]">Type of event</h2>
            <div className="flex flex-wrap gap-4">
              {eventTypes.map((type) => (
                <label key={type.id} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="selectedType"
                    value={type.id}
                    checked={formData.selectedType === type.id}
                    onChange={(e) => handleInputChange('selectedType', parseInt(e.target.value))}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 flex items-center justify-center rounded-full border-2 mr-2 transition-all
                      ${formData.selectedType === type.id
                        ? "border-[#717480] bg-[#717480]"
                        : "border-[#383838] bg-transparent"}
                    `}
                  >
                    {formData.selectedType === type.id && (
                      <span className="w-2.5 h-2.5 bg-white rounded-full block"></span>
                    )}
                  </span>
                  <span className="text-[#383838]">{type.name}</span>
                </label>
              ))}
            </div>
            {errors.selectedType && (
              <p className="text-red-400 text-sm mt-1">{errors.selectedType}</p>
            )}
          </div>

          {/* Artist & Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[ 
              { label: "Artist Name", field: "artistName", placeholder: "Put comma (,) for multiple artists" },
              { label: "Artist spotify link", field: "artistSpotifyLink", placeholder: "Spotify profile URL" },
              { label: "Artist Instagram Profile", field: "artistInstagramProfile", placeholder: "Instagram profile URL" }
            ].map(({ label, field, placeholder }) => (
              <div key={field}>
                <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                  {label} <PencilIcon />
                </label>
                <input
                  type="text"
                  value={formData[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus:border-white outline-none placeholder-[#383838]"
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1st input: Only Trash (delete) icon */}
            <div>
              <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                Upload Itenary <PencilIcon />
              </label>
              <div
                className="relative w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus-within:border-white outline-none flex items-center cursor-pointer"
                onClick={() => handleFileBoxClick("itinerary")}
                tabIndex={0}
                role="button"
              >
                <input
                  ref={fileInputRefs.itinerary}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload("itinerary", e.target.files[0])}
                />
                <span className="flex-1 truncate text-[#383838]">{formData.itinerary ? formData.itinerary.name : "Itenary.doc"}</span>
                <span className="flex items-center gap-3">
                  <TrashIcon className="w-5 h-5 text-white" />
                </span>
              </div>
            </div>
            {/* 2nd input: Only Upload icon */}
            <div>
              <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                Upload T&C <PencilIcon />
              </label>
              <div
                className="relative w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus-within:border-white outline-none flex items-center cursor-pointer"
                onClick={() => handleFileBoxClick("termsAndConditions")}
                tabIndex={0}
                role="button"
              >
                <input
                  ref={fileInputRefs.termsAndConditions}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload("termsAndConditions", e.target.files[0])}
                />
                <span className="flex-1 truncate text-[#383838]">{formData.termsAndConditions ? formData.termsAndConditions.name : "Upload doc"}</span>
                <span className="flex items-center gap-3">
                  <UploadIcon className="w-5 h-5 text-white" />
                </span>
              </div>
            </div>
            {/* 3rd input: Only Upload icon */}
            <div>
              <label className="font-bold mb-2 block text-[#717480] flex items-center gap-1">
                Upload highlights <PencilIcon />
              </label>
              <div
                className="relative w-full h-12 rounded-lg bg-white/10 text-white p-2 border border-white focus-within:border-white outline-none flex items-center cursor-pointer"
                onClick={() => handleFileBoxClick("highlights")}
                tabIndex={0}
                role="button"
              >
                <input
                  ref={fileInputRefs.highlights}
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png,.mp4"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileUpload("highlights", e.target.files[0])}
                />
                <span className="flex-1 truncate text-[#383838]">{formData.highlights ? formData.highlights.name : "Upload doc"}</span>
                <span className="flex items-center gap-3">
                  <UploadIcon className="w-5 h-5 text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
