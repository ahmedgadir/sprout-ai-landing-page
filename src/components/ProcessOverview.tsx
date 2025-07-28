import React from 'react';
import { Search, Brain, FileText, CheckCircle, ArrowRight, Database, Target, BarChart, Trophy } from 'lucide-react';

const ProcessOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From discovery to application, we handle the complexity so you can focus on your mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Discovery Process */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grant Discovery</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:bg-white hover:p-4 hover:rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">AI-Powered Scanning</h4>
                  <p className="text-gray-600 text-sm">10,000+ data sources monitored daily</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white hover:p-4 hover:rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Smart Matching</h4>
                  <p className="text-gray-600 text-sm">Proprietary AI matches your profile</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white hover:p-4 hover:rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Human Verification</h4>
                  <p className="text-gray-600 text-sm">Expert team ensures accuracy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grant Applications</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:bg-white hover:p-4 hover:rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <FileText className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Your Authentic Story</h4>
                  <p className="text-gray-600 text-sm">Built from your organization's data</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white hover:p-4 hover:rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors">
                  <BarChart className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Compelling Research</h4>
                  <p className="text-gray-600 text-sm">Statistics that strengthen your case</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:bg-white hover:p-4 hover:rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-violet-100 transition-colors">
                  <Trophy className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Success Patterns</h4>
                  <p className="text-gray-600 text-sm">Learn from winning applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">The Results Speak for Themselves</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-blue-100">Higher Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-blue-100">Faster Applications</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Match Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;