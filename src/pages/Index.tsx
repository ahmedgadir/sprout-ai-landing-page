import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import StickyScrollFeatures from '@/components/StickyScrollFeatures';
import ProcessShowcase from '@/components/ProcessShowcase';
import UnificationSection from '@/components/UnificationSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <Hero />
      <AppShowcase />
      <ProcessShowcase />
      <StickyScrollFeatures />
      <UnificationSection />
      <CallToAction />
    </div>
  );
};

export default Index;
