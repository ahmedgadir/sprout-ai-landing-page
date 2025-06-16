
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-brand-orange-accent rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
      </div>
      <span className="text-xl font-semibold font-inter">
        <span className="text-brand-dark-green">fund</span>
        <span className="text-brand-primary-green">sprout</span>
      </span>
    </div>
  );
};

export default Logo;
