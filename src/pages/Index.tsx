import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import GrantDiscoverySection from '@/components/GrantDiscoverySection';
import GrantApplicationSection from '@/components/GrantApplicationSection';
import StickyScrollFeatures from '@/components/StickyScrollFeatures';
import UnificationSection from '@/components/UnificationSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <Hero />
      <AppShowcase />
      <GrantDiscoverySection />
      <GrantApplicationSection />
      <StickyScrollFeatures />
      <UnificationSection />
      <CallToAction />
    </div>
  );
};

export default Index;
