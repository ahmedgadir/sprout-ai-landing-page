import React from 'react';
import { CheckCircle, X, ArrowRight, Search, FileText, BarChart3, Users, Clock, Zap } from 'lucide-react';

const UnificationSection = () => {
  const scatteredTools = [
    { name: "Grant Databases", icon: Search, color: "bg-red-100 text-red-600", issues: "Incomplete listings, manual search" },
    { name: "Word Processors", icon: FileText, color: "bg-orange-100 text-orange-600", issues: "Template chaos, version control" },
    { name: "Spreadsheets", icon: BarChart3, color: "bg-yellow-100 text-yellow-600", issues: "Manual tracking, human error" },
    { name: "Email/Slack", icon: Users, color: "bg-purple-100 text-purple-600", issues: "Scattered communication" },
    { name: "Calendar Apps", icon: Clock, color: "bg-pink-100 text-pink-600", issues: "Missed deadlines, no automation" }
  ];

  const benefits = [
    "80% less manual work - Save 12+ hours/week",
    "60% more opportunities found with AI",
    "2-3x higher approval rates",
    "Complete workflow automation"
  ];

  const problems = [
    "Spend 15+ hours/week on manual tasks",
    "Miss 40% of relevant opportunities",
    "Low success rates (10-20%)",
    "Constant context switching"
  ];

  return (
    <section id="fundsprout-solution" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4 sm:mb-6">
            <Zap className="w-4 h-4 mr-2" />
            The Transformation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
            From Chaos to Clarity
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Stop juggling dozens of disconnected tools. Fundsprout unifies your entire grant workflow into one intelligent platform.
          </p>
        </div>

        {/* Main Comparison */}
        <div className="relative bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Before: Scattered Tools */}
            <div className="space-y-6 h-full flex flex-col">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4">
                  <X className="w-4 h-4 mr-1" />
                  Traditional Approach
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scattered Tools</h3>
                <p className="text-gray-600 mb-6">Multiple disconnected platforms creating chaos</p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
                {scatteredTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm h-full flex flex-col">
                      <div className={`w-8 h-8 rounded-lg ${tool.color} flex items-center justify-center mb-2`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{tool.name}</h4>
                      <p className="text-xs text-gray-500 leading-tight flex-grow">{tool.issues}</p>
                    </div>
                  );
                })}
              </div>

              {/* Problems */}
              <div className="bg-red-50 rounded-lg p-4 border border-red-200 mt-auto">
                <h4 className="font-semibold text-red-800 mb-3 text-sm">Common Problems:</h4>
                <ul className="space-y-1">
                  {problems.map((problem, index) => (
                    <li key={index} className="flex items-start text-sm text-red-700">
                      <X className="w-3 h-3 mt-0.5 mr-2 flex-shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Transformation Arrow */}
            <div className="flex justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10 order-2 lg:order-none">
              <div className="bg-white rounded-full p-2 shadow-lg border-2 border-teal-500 lg:rotate-0 rotate-90">
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </div>
            </div>

            {/* After: FundSprout Solution */}
            <div className="space-y-6 h-full flex flex-col lg:order-none order-3">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  FundSprout Solution
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Unified Platform</h3>
                <p className="text-gray-600 mb-6">All tools integrated seamlessly in one place</p>
              </div>

              {/* Unified Platform */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl p-6 text-white shadow-lg flex-grow flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-1">FundSprout AI</h4>
                  <p className="text-teal-100 text-sm">One platform for everything</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <Search className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-medium">AI Discovery</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <FileText className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-medium">Smart Writing</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <BarChart3 className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-medium">Auto Tracking</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <Users className="w-4 h-4 mx-auto mb-1" />
                    <span className="text-xs font-medium">Collaboration</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-200 mt-auto">
                <h4 className="font-semibold text-green-800 mb-3 text-sm">Proven Results:</h4>
                <ul className="space-y-1">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-green-700">
                      <CheckCircle className="w-3 h-3 mt-0.5 mr-2 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: benefit.replace(/(\d+%|\d+x|\d+\+)/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default UnificationSection; 