
import React from 'react';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-light-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-orange-accent/10 text-brand-orange-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-brand-orange-accent rounded-full mr-2"></span>
            See FundSprout in Action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-green mb-6">
            Watch How Easy Grant Success Can Be
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            See how FundSprout transforms the grant application process from overwhelming to effortless
          </p>
        </div>

        {/* App Preview */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="bg-gray-100 rounded-t-2xl p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="ml-4 bg-white rounded px-4 py-2 text-sm text-gray-500 font-mono">
                app.fundsprout.com
              </div>
            </div>
          </div>
          
          <div className="relative bg-white rounded-b-2xl shadow-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/0f617494-003f-4e90-a7b3-4a2f8109c968.png"
              alt="FundSprout App Dashboard showing grant discovery interface"
              className="w-full h-auto"
            />
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
              <div className="text-sm font-semibold">3 New Matches!</div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4 transform -rotate-2">
              <div className="text-sm text-gray-600">Success Rate</div>
              <div className="text-2xl font-bold text-green-600">92%</div>
            </div>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="relative bg-gradient-to-r from-brand-primary-green to-brand-dark-green rounded-2xl p-12 text-white text-center">
          <div className="absolute top-6 left-6 text-6xl text-white/20 font-serif">"</div>
          <div className="absolute bottom-6 right-6 text-6xl text-white/20 font-serif rotate-180">"</div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-light mb-8 leading-relaxed">
              FundSprout completely changed how we approach grant funding. We went from spending weeks searching for opportunities to having perfect matches delivered to us instantly. Our success rate has tripled, and we've secured over $300K in funding this year alone.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">AA</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-semibold">Ahmed Ali</div>
                <div className="text-brand-light-green text-lg">Executive Director, Injaz Toronto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
