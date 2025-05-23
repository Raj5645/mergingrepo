import React from 'react';
import PropTypes from 'prop-types';
import Tag from './ui/Tag';

const Card = ({ 
  image, 
  date, 
  title, 
  price, 
  location, 
  status, 
  lastEdited,
  onEdit,
  onDelete
}) => {
  return (
    <div className="relative w-full rounded-[23px] border border-[#393939] overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[324px] object-cover" 
        />
        
        <div className="absolute top-8 right-8 flex space-x-2">
          <button 
            onClick={onEdit}
            className="w-8 h-8 flex items-center justify-center rounded bg-transparent"
          >
            <img src="/images/img_button.svg" alt="Edit" />
          </button>
          
          <button 
            onClick={onDelete}
            className="w-8 h-8 flex items-center justify-center rounded bg-[#222222d3]"
          >
            <img src="/images/img_vector.svg" alt="Delete" />
          </button>
        </div>
        
        {status && (
          <div className="absolute bottom-4 right-4">
            <Tag variant={status.toLowerCase()} className="px-3 py-0.5 text-xs font-semibold">
              {status}
            </Tag>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <div className="bg-[#313131] rounded px-2 py-1 text-center">
            <p className="text-xs text-[#949494]">{date.day}</p>
            <p className="text-xl font-black text-white">{date.date}</p>
            <p className="text-xs font-semibold text-[#949494]">{date.month}</p>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            
            <div className="flex items-center mb-1">
              <img src="/images/img_glyphs_icons_tags_ticket.svg" alt="Price" className="w-5 h-5 mr-1" />
              <p className="text-base text-white">{price}</p>
            </div>
            
            <div className="flex items-center">
              <img src="/images/img_tdesignlocationfilled.svg" alt="Location" className="w-4 h-4 mr-1" />
              <p className="text-base text-white">{location}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#013c35] flex items-center justify-center mr-2">
            <span className="text-xs font-extrabold text-[#666666]">I</span>
          </div>
          <p className="text-sm text-[#414141]">{lastEdited}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  status: PropTypes.string,
  lastEdited: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Card;