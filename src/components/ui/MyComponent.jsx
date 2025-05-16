import React from 'react';

const MyComponent = ({ text }) => (
  <div className="p-4 bg-[#232323] rounded-lg text-white">
    <h2 className="text-xl font-bold mb-2">{text}</h2>
    <p>This is a reusable UI component.</p>
  </div>
);

export default MyComponent;
