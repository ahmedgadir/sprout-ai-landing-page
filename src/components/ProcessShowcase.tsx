import React, { useState } from 'react';
import { Search, Target, Brain, Database, Play, Pause } from 'lucide-react';
import grantDiscoveryDashboard from '@/assets/grant-discovery-dashboard.jpg';

const ProcessShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: Database,
      title: "Comprehensive Scanning",
      description: "AI analyzes 10,000+ grants daily from federal, state, and foundation sources"
    },
    {
      icon: Brain,
      title: "Intelligent Matching",
      description: "Proprietary algorithms match grants to your organization's profile and mission"
    },
    {
      icon: Target,
      title: "High-Fit Identification",
      description: "Only grants with 85%+ compatibility scores make it to your dashboard"
    }
  ];

  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPlaying, features.length]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Intelligent Grant Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Watch our AI scan thousands of grants to find the perfect matches for your organization.
          </p>
          
          {/* Playback Control */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={togglePlayback}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isPlaying ? 'Pause Demo' : 'Play Demo'}</span>
            </button>
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center space-x-4 mb-12">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                {React.createElement(features[activeStep].icon, { className: "w-8 h-8 text-blue-600" })}
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {features[activeStep].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {features[activeStep].description}
                </p>
                
                {/* Process Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">10K+</div>
                    <div className="text-sm text-gray-600">Grants Scanned Daily</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                    <div className="text-2xl font-bold text-green-600">85%+</div>
                    <div className="text-sm text-gray-600">Match Accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup Side */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                  <img
                    src={grantDiscoveryDashboard}
                    alt="AI Grant Discovery Dashboard"
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-blue-100">
                <div className="text-sm text-gray-600">Success Rate</div>
                <div className="text-2xl font-bold text-green-600">94%</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-purple-100">
                <div className="text-sm text-gray-600">Time Saved</div>
                <div className="text-2xl font-bold text-purple-600">85%</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-12 space-x-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  index === activeStep
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase;