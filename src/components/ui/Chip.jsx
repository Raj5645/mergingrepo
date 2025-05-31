import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-[#013c35] text-[#666666]',
    primary: 'bg-[#3479ff] text-white',
    secondary: 'bg-[#191919] text-[#949494]',
  };
  
  const sizes = {
    small: 'w-4 h-4 text-xs',
    medium: 'w-6 h-6 text-sm',
    large: 'w-8 h-8 text-base',
  };
  
  const chipClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <div className={chipClasses} {...props}>
      {children}
    </div>
  );
};

Chip.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Chip;