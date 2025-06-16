
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-brand-primary-green transition-colors font-medium">
              Features
            </a>
            <a href="#why-fundsprout" className="text-gray-700 hover:text-brand-primary-green transition-colors font-medium">
              Why FundSprout
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-brand-primary-green transition-colors font-medium">
              Pricing
            </a>
          </div>

          <Button className="bg-brand-primary-green hover:bg-brand-dark-green text-white font-medium px-6 py-2 transition-all duration-200 hover:scale-105">
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
