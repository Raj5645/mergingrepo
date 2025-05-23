import React from 'react';
import PropTypes from 'prop-types';

const EventFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'past', label: 'Past' },
    { id: 'draft', label: 'Draft' },
    { id: 'cancelled', label: 'Cancelled' },
    { id: 'deleted', label: 'Deleted' },
  ];

  return (
    <div className="flex space-x-3 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
            px-4 py-2 rounded-md text-base font-medium shadow-[0px_0px_12px_rgba(0,0,0,0.06)]
            ${activeFilter === filter.id 
              ? 'text-[#3479ff] border border-transparent' 
              : 'bg-[#191919] text-[#949494]'
            }
          `}
          style={activeFilter === filter.id ? {
            borderImage: 'linear-gradient(132deg, #3479ff 0%, #22e6ce 100%)',
            borderImageSlice: 1
          } : {}}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

EventFilters.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default EventFilters;