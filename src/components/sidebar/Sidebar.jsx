import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { 
      icon: "/images/img_sidashboardduotone.svg", 
      label: "Dashboard", 
      path: "/dashboard", 
      active: true 
    },
    { 
      icon: "/images/img_clarityeventline.svg", 
      label: "Event Detail", 
      path: "/event-details" 
    },
    { 
      icon: "/images/img_streamlinebagrupee.svg", 
      label: "Live Revenue", 
      path: "/live-revenue" 
    },
    { 
      icon: "/images/img_ionticketoutline.svg", 
      label: "Ticketing", 
      path: "/ticketing" 
    },
    { 
      icon: "/images/img_heroiconsdocumentcurrencyrupee.svg", 
      label: "Outreach", 
      path: "/outreach" 
    },
    { 
      icon: "/images/img_tablermessage.svg", 
      label: "Notifications", 
      path: "/notifications" 
    },
    { 
      icon: "/images/img_fluentlearningapp20regular.svg", 
      label: "Published Event", 
      path: "/published-event" 
    },
    { 
      icon: "/images/img_stashinvoice.svg", 
      label: "Billing & Invoice", 
      path: "/billing" 
    },
    { 
      icon: "/images/img_materialsymbolslightdesignservices.svg", 
      label: "Design Services", 
      path: "/design-services" 
    },
    { 
      icon: "/images/img_quillchat.svg", 
      label: "Support", 
      path: "/support" 
    },
  ];

  return (
    <nav className="flex flex-col py-8 px-4 h-full w-full">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-3 px-4 py-3 my-1 rounded-lg transition-colors font-semibold text-base
            ${isActive(item.path)
              ? 'bg-gradient-to-r from-[#22e6ce] to-[#3479ff] text-white shadow-lg'
              : 'text-gray-300 hover:bg-[#232323] hover:text-white'}
          `}
        >
          <img src={item.icon} alt={item.label} className="w-6 h-6" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
