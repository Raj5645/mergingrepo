import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { 
      icon: "/images/img_sidashboardduotone.svg", 
      label: "Dashboard", 
      path: "/eventdashboard" 
    },
    { 
      icon: "/images/img_clarityeventline.svg", 
      label: "EventDetails", 
      path: "/eventdetails" 
    },
    { 
      icon: "/images/img_streamlinebagrupee.svg", 
      label: "Live Revenue", 
      path: "/liverevenue" 
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
      path: "/publishedevent" 
    },
    { 
      icon: "/images/img_materialsymbolslightdesignservices.svg", 
      label: "Services", 
      path: "/services" 
    },
    { 
      icon: "/images/img_stashinvoice.svg", 
      label: "Billing", 
      path: "/billing" 
    },
    { 
      icon: "/images/img_materialsymbolslightdesignservices.svg", 
      label: "Support", 
      path: "/support" 
    }
  ];

  const activeClass = 'bg-gradient-to-r from-[#3479ff] to-[#22e6ce] text-white';
  const inactiveClass = 'bg-[#191919] text-[#949494]';

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <div className="mx-auto my-8 w-[166px] h-[calc(100vh-64px)] bg-[#171717] rounded-2xl shadow-lg flex flex-col justify-start" style={{minWidth:'166px'}}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-[14px] font-[900] text-white font-['Ruda']">Live and Loud</h2>
          <img src="/images/img_riexpandleftfill.svg" alt="Collapse" className="w-[14px] h-[14px]" />
        </div>
        
        <div className="flex flex-col space-y-2">
          <ul className="sidebar-list mt-24">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    isActive ? activeClass : inactiveClass
                  }
                >
                  <div className="flex items-center p-2 rounded-[6px] h-[31px]">
                    <img src={item.icon} alt={item.label} className="w-[18px] h-[18px]" />
                    <span className={`ml-2 text-[14px] font-medium font-['Ruda'] ${
                      isActive(item.path) ? 'text-white' : 'text-[#949494]'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;