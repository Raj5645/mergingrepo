import React from 'react';
import Header from './Header';

const ContactUs = () => (
  <div className="min-h-screen bg-gradient-to-b from-[#171717] to-[#000000] text-white">
    <Header />
    <div className="flex flex-col items-center justify-center h-full p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">For any queries, please email us at <a href="mailto:support@cirkle.com" className="text-[#3479ff] underline">support@cirkle.com</a></p>
      <p>Or call us at <span className="text-[#3479ff]">+91-12345-67890</span></p>
    </div>
  </div>
);

export default ContactUs;
