import React, { useState } from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#demo" className="text-gray-700 hover:text-wise-forest-green transition-colors font-medium">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-wise-forest-green transition-colors font-medium">
              About
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://app.fundsprout.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-wise-forest-green transition-colors font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
            >
              Login
            </a>
            <a
              href="https://calendly.com/abdulgadir-fundsprout/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-wise-forest-green hover:bg-wise-bright-green text-white hover:text-wise-forest-green font-medium px-6 py-2 transition-all duration-200 hover:scale-105">
                Request Demo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-wise-forest-green"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#demo"
                className="block px-3 py-2 text-gray-700 hover:text-wise-forest-green font-medium"
                onClick={() => handleNavClick('demo')}
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-wise-forest-green font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="https://app.fundsprout.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-wise-forest-green font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <div className="pt-2">
                <a
                  href="https://calendly.com/abdulgadir-fundsprout/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-wise-forest-green hover:bg-wise-bright-green text-white hover:text-wise-forest-green font-medium py-2">
                    Request Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
