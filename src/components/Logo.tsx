
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-8 h-8">
        {/* Main container - sprout pot/base */}
        <div className="absolute bottom-0 w-8 h-4 bg-brand-orange-accent rounded-lg flex items-end justify-center">
          {/* Stem */}
          <div className="w-1 h-6 bg-brand-primary-green rounded-full"></div>
        </div>
        {/* Flower petals */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="relative w-4 h-4">
            {/* Center of flower */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full z-10"></div>
            {/* Petals */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
            {/* Diagonal petals */}
            <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
            <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
        {/* Small leaves */}
        <div className="absolute top-3 left-0 w-2 h-1 bg-brand-primary-green rounded-full transform rotate-45"></div>
        <div className="absolute top-3 right-0 w-2 h-1 bg-brand-primary-green rounded-full transform -rotate-45"></div>
      </div>
      <span className="text-xl font-semibold font-inter">
        <span className="text-brand-dark-green">fund</span>
        <span className="text-brand-primary-green">sprout</span>
      </span>
    </div>
  );
};

export default Logo;
