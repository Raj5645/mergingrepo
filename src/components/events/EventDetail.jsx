import React, { useState, useRef } from 'react';

const EventDetail = () => {
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const modes = [
    { label: 'Online', color: 'bg-green-500' },
    { label: 'Offline', color: 'bg-blue-500' },
    { label: 'Hybrid', color: 'bg-yellow-500' },
  ];

  const handleFileBarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Event Detail</h1>
      <div className="flex items-center space-x-4 mb-8">
        {modes.map((mode) => (
          <button
            key={mode.label}
            onClick={() => setSelectedMode(mode.label)}
            className={`flex items-center px-4 py-2 border rounded-md ${
              selectedMode === mode.label ? 'border-black' : 'border-gray-300'
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full mr-2 ${
                selectedMode === mode.label ? mode.color : 'bg-gray-300'
              }`}
            ></span>
            {mode.label}
          </button>
        ))}
      </div>

      {/* File upload bar (no choose file button, click bar to open dialog) */}
      <div
        className="w-full max-w-md bg-[#232323] text-white rounded-lg px-4 py-3 cursor-pointer border border-dashed border-[#22e6ce] flex items-center"
        onClick={handleFileBarClick}
      >
        <span className="flex-1">
          {selectedFile ? selectedFile.name : 'Click here to select a file'}
        </span>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default EventDetail;
