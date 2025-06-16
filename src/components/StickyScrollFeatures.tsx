
import React, { useEffect, useState, useRef } from 'react';
import { Search, FileText, BarChart3, PenTool, CheckCircle, Target, Clock, Users, DollarSign } from 'lucide-react';

const StickyScrollFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      id: 1,
      icon: Search,
      title: "Smart Grant Discovery",
      description: "Our AI analyzes thousands of grants daily, matching them to your organization's mission, capacity, and track record. No more endless searching through databases.",
      benefits: [
        "90%+ accuracy in grant matching",
        "Personalized recommendations based on your profile",
        "Real-time updates on new opportunities",
        "Custom filters for your specific needs"
      ],
      mockup: (
        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Grant Discovery</h3>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">12 New Matches</div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Environmental Education Grant</h4>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">95% Match</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">$50,000 - $150,000 • Due March 15, 2024</p>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Environmental</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Education</span>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Community Health Initiative</h4>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">88% Match</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">$25,000 - $75,000 • Due April 1, 2024</p>
              <div className="flex gap-2">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Health</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Community</span>
              </div>
            </div>
            
            <div className="border border-purple-200 bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Arts Education Fund</h4>
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-semibold">82% Match</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">$10,000 - $40,000 • Due March 30, 2024</p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Arts</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Education</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      icon: Target,
      title: "Intelligent Compatibility Analysis",
      description: "Get detailed insights into why each grant is perfect for your organization. Our AI breaks down compatibility across mission, geography, capacity, and more.",
      benefits: [
        "Detailed compatibility scoring across 8+ factors",
        "Clear explanations for every recommendation",
        "Risk assessment and application difficulty rating",
        "Strategic guidance for improving your profile"
      ],
      mockup: (
        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-800">Environmental Education Grant</h3>
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-auto">95% Match</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Mission Alignment</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Geographic Match</span>
                  <span className="font-semibold text-green-600">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Capacity Match</span>
                  <span className="font-semibold text-yellow-600">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-yellow-500 h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Track Record</span>
                  <span className="font-semibold text-green-600">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Why This Grant Fits</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p>• Your environmental programs directly align with funder priorities</p>
                <p>• Strong geographic overlap in target communities (90%)</p>
                <p>• Proven track record in similar grant management</p>
                <p>• Organization capacity meets 75% of ideal requirements</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: PenTool,
      title: "AI-Powered Application Writing",
      description: "Transform your grant writing process with intelligent assistance. Our AI helps draft compelling narratives, ensures you hit all requirements, and maintains your authentic voice.",
      benefits: [
        "Draft applications 10x faster with AI assistance",
        "Real-time requirement checking and suggestions",
        "Maintain your organization's unique voice and style",
        "Built-in collaboration tools for team review"
      ],
      mockup: (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Project Narrative</h3>
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-700 font-medium">AI Writing...</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="prose max-w-none">
              <p className="text-gray-800 leading-relaxed mb-4">
                Our organization has been at the forefront of environmental education for over a decade, 
                serving underserved communities with innovative, hands-on learning experiences that bridge 
                the gap between classroom theory and real-world environmental stewardship.
              </p>
              
              <div className="bg-blue-100 border-l-4 border-blue-500 p-3 mb-4">
                <p className="text-gray-800 leading-relaxed">
                  The proposed initiative will expand our proven curriculum to reach an additional 
                  <span className="bg-yellow-200 px-1 animate-pulse">500 students annually across five elementary schools</span>
                  <span className="w-1 h-4 bg-blue-500 animate-pulse inline-block align-middle ml-1"></span>
                </p>
              </div>
              
              <p className="text-gray-800 leading-relaxed mb-4">
                Through strategic partnerships with local environmental organizations and hands-on 
                learning activities, we create sustainable change that extends beyond the classroom 
                into families and communities.
              </p>
            </div>
            
            <div className="mt-6 flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Progress:</span> 847 / 1,200 words
              </div>
              <div className="text-sm text-green-600 font-medium">
                ✓ 6/8 requirements met
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      icon: BarChart3,
      title: "Application Management & Tracking",
      description: "Never miss a deadline or lose track of your applications. Our comprehensive dashboard keeps everything organized and ensures you stay on top of every opportunity.",
      benefits: [
        "Centralized dashboard for all applications",
        "Automated deadline reminders and alerts",
        "Progress tracking with milestone management",
        "Team collaboration and assignment features"
      ],
      mockup: (
        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Application Dashboard</h3>
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">3 Due This Week</div>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Environmental Education Initiative</h4>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Due in 2 days</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-orange-500 bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Community Health Grant</h4>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Due in 5 days</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Arts Education Fund</h4>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Submitted</span>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Status</span>
                    <span>Under Review</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">Active Applications</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Submitted</div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">$425K</div>
              <div className="text-sm text-gray-600">Total Requested</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      icon: CheckCircle,
      title: "Compliance & Reporting",
      description: "Stay compliant with automated progress reporting, milestone tracking, and deadline management. Never miss a report or lose funding due to administrative oversight.",
      benefits: [
        "Automated report generation and scheduling",
        "Milestone tracking with progress indicators",
        "Compliance monitoring and alerts",
        "Financial tracking and budget management"
      ],
      mockup: (
        <div className="bg-white rounded-xl shadow-lg p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Compliance Dashboard</h3>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">All Up to Date</div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Environmental Education Grant</h4>
                <span className="text-green-600 font-semibold text-sm">✓ Current</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Q1 Report:</span>
                  <span className="text-green-600 font-medium ml-2">Submitted</span>
                </div>
                <div>
                  <span className="text-gray-600">Budget Used:</span>
                  <span className="text-gray-800 font-medium ml-2">68%</span>
                </div>
                <div>
                  <span className="text-gray-600">Next Report:</span>
                  <span className="text-blue-600 font-medium ml-2">Jun 30</span>
                </div>
                <div>
                  <span className="text-gray-600">Milestones:</span>
                  <span className="text-green-600 font-medium ml-2">3/4 Complete</span>
                </div>
              </div>
            </div>
            
            <div className="border border-orange-200 bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Community Health Initiative</h4>
                <span className="text-orange-600 font-semibold text-sm">Due in 15 days</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Mid-term Report:</span>
                  <span className="text-orange-600 font-medium ml-2">In Progress</span>
                </div>
                <div>
                  <span className="text-gray-600">Budget Used:</span>
                  <span className="text-gray-800 font-medium ml-2">45%</span>
                </div>
                <div>
                  <span className="text-gray-600">Participants:</span>
                  <span className="text-blue-600 font-medium ml-2">180/250</span>
                </div>
                <div>
                  <span className="text-gray-600">Milestones:</span>
                  <span className="text-green-600 font-medium ml-2">2/3 Complete</span>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Arts Education Fund</h4>
                <span className="text-gray-600 font-semibold text-sm">Annual Report Due Dec 31</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Status:</span>
                  <span className="text-green-600 font-medium ml-2">On Track</span>
                </div>
                <div>
                  <span className="text-gray-600">Budget Used:</span>
                  <span className="text-gray-800 font-medium ml-2">32%</span>
                </div>
                <div>
                  <span className="text-gray-600">Students Served:</span>
                  <span className="text-blue-600 font-medium ml-2">85/100</span>
                </div>
                <div>
                  <span className="text-gray-600">Milestones:</span>
                  <span className="text-green-600 font-medium ml-2">1/2 Complete</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">Compliance Overview</span>
              <span className="text-green-600 font-semibold">100% Compliant</span>
            </div>
            <p className="text-sm text-gray-600">All reports submitted on time • No outstanding requirements</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if we're in the sticky scroll section
      if (scrollPosition >= containerTop - windowHeight / 2 && 
          scrollPosition <= containerTop + containerHeight - windowHeight / 2) {
        
        featureRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const center = windowHeight / 2;
            
            if (rect.top <= center && rect.bottom >= center) {
              setActiveFeature(index);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-brand-light-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-green mb-6">
            Everything You Need to Win More Grants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to compliance — FundSprout handles every step of your grant process
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Feature descriptions */}
          <div className="space-y-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className={`transition-all duration-500 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeFeature === index 
                        ? 'bg-brand-primary-green text-white' 
                        : 'bg-brand-light-green text-brand-primary-green'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark-green">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Right side - Sticky mockup area */}
          <div className="lg:sticky lg:top-24">
            <div className="relative h-[600px] bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    activeFeature === index
                      ? 'opacity-100 translate-x-0'
                      : index < activeFeature
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  {feature.mockup}
                </div>
              ))}
              
              {/* Feature indicator */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                {activeFeature + 1} / {features.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollFeatures;
