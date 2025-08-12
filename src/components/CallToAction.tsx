import React from 'react';
import { Calendar, MessageCircle, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="request-demo" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-wise-bright-green to-wise-forest-green">
              Grant Success?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join leading organizations already experiencing the future of grant management.
          </p>
        </div>

        {/* Demo Request */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-all duration-300 group shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-wise-forest-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Request a Demo</h3>
              <p className="text-base sm:text-lg text-gray-600">See Fundsprout transform your grant process</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Personalized Walkthrough</h4>
                  <p className="text-sm text-gray-600">30-minute tailored demo of key features</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Live AI Matching</h4>
                  <p className="text-sm text-gray-600">See our AI find perfect grants in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Live Grant Writer Review</h4>
                  <p className="text-sm text-gray-600">Expert review of your AI-drafted proposals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Expert Q&A</h4>
                  <p className="text-sm text-gray-600">Direct access to our grant specialists</p>
                </div>
              </div>
            </div>
            
            <a
              href="https://calendly.com/abdulgadir-fundsprout/fundsprout-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-wise-forest-green hover:bg-wise-bright-green text-white hover:text-wise-forest-green px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl"
            >
              Schedule Your Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              No commitment required • Available within 24 hours
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CallToAction; 