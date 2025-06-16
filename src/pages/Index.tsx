
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import StickyScrollFeatures from '@/components/StickyScrollFeatures';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <Hero />
      <AppShowcase />
      <StickyScrollFeatures />
    </div>
  );
};

export default Index;
