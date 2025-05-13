import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, activeTab, onChange, className = '' }) => {
  const [active, setActive] = useState(activeTab || 0);

  const handleTabClick = (index) => {
    setActive(index);
    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className={`flex space-x-2 ${className}`}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleTabClick(index)}
          className={`
            px-4 py-2 rounded-md cursor-pointer transition-all duration-200 shadow-[0px_0px_12px_rgba(0,0,0,0.06)]
            ${active === index 
              ? 'border border-transparent bg-transparent border-gradient-to-r from-[#3479ff] to-[#22e6ce] text-[#3479ff]' 
              : 'bg-[#191919] text-[#949494]'
            }
          `}
          style={active === index ? {
            borderImage: 'linear-gradient(132deg, #3479ff 0%, #22e6ce 100%)',
            borderImageSlice: 1
          } : {}}
        >
          <span className="text-center font-medium">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
  activeTab: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Tabs;