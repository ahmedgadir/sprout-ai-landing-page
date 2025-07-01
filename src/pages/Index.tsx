import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <Hero />
      <AppShowcase />
      <CallToAction />
    </div>
  );
};

export default Index;
