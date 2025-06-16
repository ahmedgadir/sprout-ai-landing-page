
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, FileText, BarChart3, PenTool, CheckCircle } from 'lucide-react';

const AppShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Discover Perfect Grants",
      description: "AI-powered matching finds grants that fit your mission with 90%+ accuracy",
      icon: Search,
      highlight: "3 grants found matching your criteria",
      mockupContent: (
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Grant Discovery</h3>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">3 Matches Found</div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4 relative">
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">92% Match</div>
              <h4 className="font-semibold text-gray-800 mb-2">Environmental Education Initiative Grant</h4>
              <p className="text-sm text-gray-600 mb-3">Supporting organizations focused on environmental education and community outreach programs.</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-green-600 font-medium">Due: March 15, 2024</span>
                <span className="text-gray-500">$50,000 - $150,000</span>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 relative">
              <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">87% Match</div>
              <h4 className="font-semibold text-gray-800 mb-2">Community Health & Wellness Fund</h4>
              <p className="text-sm text-gray-600 mb-3">Grants for nonprofits working to improve community health outcomes through education.</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-600 font-medium">Due: April 1, 2024</span>
                <span className="text-gray-500">$25,000 - $75,000</span>
              </div>
            </div>
            
            <div className="border border-orange-200 bg-orange-50 rounded-lg p-4 relative">
              <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">84% Match</div>
              <h4 className="font-semibold text-gray-800 mb-2">Youth Development Program Grant</h4>
              <p className="text-sm text-gray-600 mb-3">Supporting after-school and summer programs focused on youth development and education.</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-orange-600 font-medium">Due: March 30, 2024</span>
                <span className="text-gray-500">$10,000 - $40,000</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Get Detailed Insights",
      description: "See why each grant is a perfect match with AI-generated compatibility scores",
      icon: FileText,
      highlight: "92% fit • Excellent Match",
      mockupContent: (
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-800">Environmental Education Initiative Grant</h3>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-auto">92% Match</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Why This Grant Fits</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Environmental focus aligns perfectly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Education programs match criteria</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Community outreach component</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Key Requirements</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• 501(c)(3) status required ✓</p>
                    <p>• 2+ years operating history ✓</p>
                    <p>• Environmental program focus ✓</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Compatibility Score</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Mission Alignment</span>
                        <span className="font-medium">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Program Fit</span>
                        <span className="font-medium">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Geographic Match</span>
                        <span className="font-medium">88%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-1">Recommended Action</h5>
                  <p className="text-sm text-green-700">High priority application - strong alignment with funder priorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Track Everything",
      description: "Never miss a deadline with smart application management and progress tracking",
      icon: BarChart3,
      highlight: "5 applications • 2 urgent deadlines",
      mockupContent: (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Application Dashboard</h3>
            <div className="flex gap-2">
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">2 Urgent</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">5 Active</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="border border-red-200 bg-red-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Environmental Education Initiative</h4>
                <span className="text-red-600 font-semibold text-sm">Due in 3 days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 max-w-32">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">85% Complete</span>
                </div>
                <span className="text-sm text-gray-500">$150,000</span>
              </div>
            </div>
            
            <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Community Health & Wellness</h4>
                <span className="text-orange-600 font-semibold text-sm">Due in 5 days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 max-w-32">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">60% Complete</span>
                </div>
                <span className="text-sm text-gray-500">$75,000</span>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Youth Development Program</h4>
                <span className="text-blue-600 font-semibold text-sm">Due in 12 days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 max-w-32">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">30% Complete</span>
                </div>
                <span className="text-sm text-gray-500">$40,000</span>
              </div>
            </div>
            
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Arts Education Foundation</h4>
                <span className="text-green-600 font-semibold text-sm">Submitted ✓</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-full bg-gray-200 rounded-full h-2 max-w-32">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <span className="text-sm text-gray-600">Awaiting Review</span>
                </div>
                <span className="text-sm text-gray-500">$25,000</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Total Pipeline Value</span>
              <span className="text-2xl font-bold text-brand-primary-green">$290K</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "AI-Powered Writing",
      description: "Draft compelling proposals 10x faster with intelligent writing assistance",
      icon: PenTool,
      highlight: "570/800 words • AI Suggestions",
      mockupContent: (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Grant Proposal Editor</h3>
            <div className="flex gap-2">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">570/800 words</div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">AI Active</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-white">
              <h4 className="font-semibold text-gray-700 mb-3">Project Description</h4>
              <div className="text-sm text-gray-600 leading-relaxed space-y-2">
                <p>Our organization seeks funding to expand our environmental education programs, which have successfully reached over 2,500 students in the past year. The proposed initiative will develop comprehensive curriculum modules focused on sustainable practices and climate change awareness.</p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 my-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-400 text-white text-xs px-2 py-1 rounded mt-0.5">AI</div>
                    <div>
                      <p className="text-blue-800 font-medium text-xs mb-1">Suggestion:</p>
                      <p className="text-blue-700 text-sm">Consider adding specific metrics about student engagement or learning outcomes to strengthen this paragraph.</p>
                      <div className="flex gap-2 mt-2">
                        <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Apply</button>
                        <button className="text-xs border border-blue-300 text-blue-600 px-2 py-1 rounded hover:bg-blue-50">Dismiss</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p>Through partnerships with local schools and community centers, we will implement hands-on learning experiences that demonstrate real-world applications of environmental science. Our proven track record includes:</p>
                
                <ul className="ml-4 space-y-1">
                  <li>• 95% student satisfaction rate in current programs</li>
                  <li>• Partnership with 15 local educational institutions</li>
                  <li>• Award recognition from State Environmental Council</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 bg-brand-primary-green text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-dark-green transition-colors">
                Generate Content
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Check Grammar
              </button>
              <button className="flex-1 border border-blue-300 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                AI Review
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Manage Reports",
      description: "Stay compliant with automated progress reports and milestone tracking",
      icon: CheckCircle,
      highlight: "All reports up to date",
      mockupContent: (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Grant Reporting Dashboard</h3>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">All Up to Date</div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Environmental Education Initiative</h4>
                <span className="text-green-600 font-semibold text-sm">✓ Submitted</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Q1 Progress Report</span>
                  <span className="text-green-600">Submitted Feb 28</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students Reached: 425 / 400 (Target)</span>
                  <span className="text-green-600">106% of Goal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Budget Utilization</span>
                  <span className="text-gray-700">$35,750 / $50,000</span>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Community Health & Wellness</h4>
                <span className="text-blue-600 font-semibold text-sm">Due Mar 15</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mid-term Report</span>
                  <span className="text-blue-600">In Progress</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Community Members Served</span>
                  <span className="text-gray-700">180 / 250 (Target)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Arts Education Foundation</h4>
                <span className="text-gray-600 font-semibold text-sm">Next: Jun 30</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Annual Report</span>
                  <span className="text-gray-500">Not Due</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Program Participants</span>
                  <span className="text-gray-700">85 / 100 (Target)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">Compliance Status</span>
              <span className="text-green-600 font-semibold">✓ All Current</span>
            </div>
            <p className="text-sm text-gray-600">Next report due: March 15, 2024 (Community Health & Wellness)</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-light-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-green mb-6">
            See FundSprout in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grant discovery to successful funding — experience the complete journey
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Steps Navigation */}
          <div className="lg:w-1/3 space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <div 
                  key={step.id} 
                  className={`cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'hover:scale-102'}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                    isActive 
                      ? 'border-brand-primary-green bg-brand-light-green/50 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-brand-primary-green/30'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-brand-primary-green' : 'bg-gray-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <span className={`font-semibold text-lg transition-colors ${
                        isActive ? 'text-brand-primary-green' : 'text-gray-500'
                      }`}>
                        Step {step.id}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-3 transition-colors ${
                      isActive ? 'text-brand-dark-green' : 'text-gray-700'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`leading-relaxed transition-colors ${
                      isActive ? 'text-gray-700' : 'text-gray-600'
                    }`}>
                      {step.description}
                    </p>
                    
                    <div className={`mt-4 p-3 rounded-lg border-l-4 transition-all ${
                      isActive 
                        ? 'bg-brand-light-green/50 border-brand-primary-green' 
                        : 'bg-gray-50 border-gray-300'
                    }`}>
                      <p className={`font-medium transition-colors ${
                        isActive ? 'text-brand-dark-green' : 'text-gray-600'
                      }`}>
                        ✨ {step.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Large Screen Display */}
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Browser Frame */}
              <div className="bg-gray-100 rounded-t-xl p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-4 bg-white rounded px-4 py-2 text-sm text-gray-500 font-mono">
                    app.fundsprout.com
                  </div>
                </div>
              </div>
              
              {/* App Content */}
              <div className="bg-white rounded-b-xl shadow-2xl min-h-[500px] relative overflow-hidden">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === activeStep 
                        ? 'opacity-100 transform translate-x-0' 
                        : index < activeStep 
                          ? 'opacity-0 transform -translate-x-full' 
                          : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    {step.mockupContent}
                  </div>
                ))}
              </div>
              
              {/* Step Counter */}
              <div className="absolute -top-4 -right-4 bg-brand-orange-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {activeStep + 1} / {steps.length}
              </div>
            </div>
            
            {/* Progress Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStep 
                      ? 'bg-brand-primary-green scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-8 bg-white rounded-2xl shadow-lg border border-brand-light-green/30">
          <h3 className="text-2xl font-bold text-brand-dark-green mb-4">
            Ready to transform your grant process?
          </h3>
          <p className="text-gray-600 mb-6">
            Join 20+ nonprofits already using FundSprout to find and win more grants
          </p>
          <Button className="bg-brand-primary-green hover:bg-brand-dark-green text-white font-semibold px-8 py-3 text-lg group">
            Get Early Access
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
