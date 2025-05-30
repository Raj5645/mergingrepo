import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded';
  
  const variants = {
    default: 'bg-[#313131] text-white',
    live: 'bg-[#c90000] text-white',
    past: 'bg-[#c90000] text-white',
    draft: 'bg-[#c90000] text-white',
  };
  
  const sizes = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-1.5 text-base',
  };
  
  const tagClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <div className={tagClasses} {...props}>
      {children}
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'live', 'past', 'draft']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Tag;