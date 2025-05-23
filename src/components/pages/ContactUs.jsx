import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';

const ContactUs = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
    <Header />
    <div className="flex">
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-2">For any queries, please email us at <a href="mailto:support@cirkle.com" className="text-[#3479ff] underline">support@cirkle.com</a></p>
        <p>Or call us at <span className="text-[#3479ff]">+91-12345-67890</span></p>
      </div>
    </div>
  </div>
);

export default ContactUs;
