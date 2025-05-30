import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';

const allServices1 = [
  { icon: '/images/img_heroiconsdocumentcurrencyrupee.svg', color: 'bg-[#2B1A18]', title: 'BOX Office', desc: 'Lorem ipsum lorem ipsum', iconColor: 'text-[#FF4B4B]' },
  { icon: '/images/img_glyphs_icons_tags_ticket.svg', color: 'bg-[#23282B]', title: 'Ticketing', desc: 'Sell tickets on our platform', iconColor: 'text-[#4B7BFF]' },
  { icon: '/images/img_materialsymbolslightdesignservices.svg', color: 'bg-[#2B2418]', title: 'Advertise', desc: 'Get our team for advertisement', iconColor: 'text-[#B28B2B]' },
  { icon: '/images/img_rectangle_464_121x60.png', color: 'bg-[#1B2B18]', title: 'Content', desc: 'Creatives for advertisements', iconColor: 'text-[#4BB25B]' },
  { icon: '/images/img_riexpandleftfill.svg', color: 'bg-[#2B182B]', title: 'Cashless RFID', desc: 'Lorem ipsum lorem ipsum', iconColor: 'text-[#B24BA8]' },
  { icon: '/images/img_fluentlearningapp20regular.svg', color: 'bg-[#24182B]', title: 'Manpower', desc: 'On ground team support for event', iconColor: 'text-[#7B4BB2]' },
];
const allServices2 = [
  { icon: '/images/img_glyphs_icons_tags_ticket.svg', color: 'bg-[#23282B]', title: 'Ticketing', desc: 'Sell tickets on our platform', iconColor: 'text-[#4B7BFF]' },
  { icon: '/images/img_rectangle_464_121x60.png', color: 'bg-[#1B2B18]', title: 'Content', desc: 'Creatives for advertisements', iconColor: 'text-[#4BB25B]' },
];

const Services = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#171717] to-black text-white font-['Inter','Poppins',sans-serif]">
      {/* Sidebar */}
      <div className="w-[220px] min-h-screen bg-[#171717]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex flex-col p-8 w-full max-w-7xl mx-auto">
          <div className="text-3xl font-bold text-white mb-8">Services</div>
          <div className="mb-8">
            <div className="text-lg font-bold text-white mb-4">All Services</div>
            <div className="grid grid-cols-5 gap-6">
              {allServices1.map((service, idx) => (
                <div key={idx} className={`rounded-2xl p-6 flex flex-col items-center ${service.color} shadow-lg`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.iconColor}`} style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <img src={service.icon} alt={service.title} className="w-8 h-8" />
                  </div>
                  <div className="font-bold text-lg mb-1 text-white text-center">{service.title}</div>
                  <div className="text-gray-400 text-sm text-center">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold text-white">All Services</div>
            <button className="text-[#22e6ce] flex items-center gap-2 font-bold" onClick={() => alert('Add Service Clicked!')}><span className="text-xl">＋</span> Add Service</button>
          </div>
          <div className="grid grid-cols-5 gap-6">
            {allServices2.map((service, idx) => (
              <div key={idx} className={`rounded-2xl p-6 flex flex-col items-center ${service.color} shadow-lg`}>
                <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.iconColor}`} style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <img src={service.icon} alt={service.title} className="w-8 h-8" />
                </div>
                <div className="font-bold text-lg mb-1 text-white text-center">{service.title}</div>
                <div className="text-gray-400 text-sm text-center">{service.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;