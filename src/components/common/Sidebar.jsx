<<<<<<< HEAD
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
=======
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   const menuItems = [
//     { 
//       icon: "/images/img_sidashboardduotone.svg", 
//       label: "Dashboard", 
//       path: "/dashboard" 
//     },
//     { 
//       icon: "/images/img_clarityeventline.svg", 
//       label: "EventDetails", 
//       path: "/eventdetails" 
//     },
//     { 
//       icon: "/images/img_streamlinebagrupee.svg", 
//       label: "Live Revenue", 
//       path: "/liverevenue" 
//     },
//     { 
//       icon: "/images/img_ionticketoutline.svg", 
//       label: "Ticketing", 
//       path: "/ticketing" 
//     },
//     { 
//       icon: "/images/img_heroiconsdocumentcurrencyrupee.svg", 
//       label: "Outreach", 
//       path: "/outreach" 
//     },
//     { 
//       icon: "/images/img_tablermessage.svg", 
//       label: "Notifications", 
//       path: "/notifications" 
//     },
//     { 
//       icon: "/images/img_fluentlearningapp20regular.svg", 
//       label: "Published Event", 
//       path: "/publishedevent" 
//     },
//     { 
//       icon: "/images/img_stashinvoice.svg", 
//       label: "Billing", 
//       path: "/billing" 
//     },
//     { 
//       icon: "/images/img_materialsymbolslightdesignservices.svg", 
//       label: "Support", 
//       path: "/support" 
//     }
//   ];

//   return (
//     <div className="bg-[#171717] w-[165px] h-full rounded-[12px] p-4 flex flex-col">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-[14px] font-[900] text-white font-['Ruda']">Live and Loud</h2>
//         <img src="/images/img_riexpandleftfill.svg" alt="Collapse" className="w-[14px] h-[14px]" />
//       </div>
      
//       <div className="flex flex-col space-y-2">
//         {menuItems.map((item, index) => (
//           <Link 
//             key={index} 
//             to={item.path}
//             className={`flex items-center p-2 rounded-[6px] h-[31px] ${
//               isActive(item.path) 
//                 ? 'bg-gradient-to-r from-[#3479ff] to-[#22e6ce]' 
//                 : 'bg-[#191919] shadow-[0px_0px_12px_#0000000f]'
//             }`}
//           >
//             <img src={item.icon} alt={item.label} className="w-[18px] h-[18px]" />
//             <span className={`ml-2 text-[14px] font-medium font-['Ruda'] ${
//               isActive(item.path) ? 'text-white' : 'text-[#949494]'
//             }`}>
//               {item.label}
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;










import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import expandarrow from "/images/expandarrow.png";
import shrinkarrow from "/images/shrinkarrow.png";

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: "/images/img_sidashboardduotone.svg", label: "Dashboard", path: "/dashboard" },
    { icon: "/images/img_clarityeventline.svg", label: "Event Detail", path: "/eventdetails" },
    { icon: "/images/img_streamlinebagrupee.svg", label: "Live Revenue", path: "/liverevenue" },
    { icon: "/images/img_ionticketoutline.svg", label: "Create Ticket", path: "/ticketing" },
    { icon: "/images/img_heroiconsdocumentcurrencyrupee.svg", label: "Outreach", path: "/outreach" },
    { icon: "/images/img_tablermessage.svg", label: "Notifications", path: "/notifications" },
    { icon: "/images/img_fluentlearningapp20regular.svg", label: "Published Event", path: "/publishedevent" },
    { icon: "/images/img_stashinvoice.svg", label: "Billing & Invoice", path: "/billing" },
    { icon: "/images/img_materialsymbolslightdesignservices.svg", label: "Services", path: "/service" },
    { icon: "/images/query.png", label: "Query", path: "/query" }
  ];

  // Handle click on menu item
  const handleMenuItemClick = () => {
    if (isMobile) {
      setCollapsed(true); // Collapse sidebar on mobile when a menu item is clicked
    }
  };

  return (
    <div
      className={`fixed top-[109px] left-[21px] ${collapsed ? 'w-[58px] h-[440.11px]' : 'w-[165.96px] h-[440.11px]'} bg-[#171717] rounded-[12px] px-[10px] py-4 flex flex-col z-50 transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        {!collapsed && (
          <h2 className="text-[14px] font-black text-white font-['Ruda']">Live and Loud</h2>
        )}
        <button onClick={() => setCollapsed(!collapsed)}>
          <img
            src={collapsed ? expandarrow : shrinkarrow}
            alt="Toggle"
            className="w-[14px] h-[14px]"
          />
        </button>
      </div>

      <div className="flex flex-col space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={handleMenuItemClick}
            className={`flex items-center ${collapsed ? 'justify-center' : 'pl-[8px]'} py-[5px] ${collapsed ? 'w-[38px]' : 'w-[142.96px]'} h-[31px] rounded-[6px] transition-all duration-200 ${
              isActive(item.path)
                ? 'bg-gradient-to-r from-[#3479ff] to-[#22e6ce]'
                : 'bg-[#191919] shadow-[0_0_12px_rgba(0,0,0,0.06)]'
            }`}
          >
            <img src={item.icon} alt={item.label} className="w-[18px] h-[18px]" />
            {!collapsed && (
              <span
                className={`ml-2 text-[14px] font-medium font-['Ruda'] ${
                  isActive(item.path) ? 'text-white' : 'text-[#949494]'
                }`}
              >
                {item.label}
              </span>
            )}
          </Link>
        ))}
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> bc439efc369267bbdd6368316badf2c4fce519c3
