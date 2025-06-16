
import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, BarChart3, PenTool, CheckCircle } from 'lucide-react';
import AIWritingAnimation from './AIWritingAnimation';

const StickyScrollFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Search,
      title: "Discover Perfect Grants",
      description: "AI-powered matching finds grants that fit your mission with 90%+ accuracy. Our intelligent algorithm analyzes your organization's profile, mission, and past projects to identify the most suitable funding opportunities.",
      mockupContent: (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Grant Discovery</h3>
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium">3 Matches Found</div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4 relative">
              <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">92% Match</div>
              <h4 className="font-semibold text-gray-800 mb-2">Environmental Education Initiative Grant</h4>
              <p className="text-sm text-gray-600 mb-3">Supporting organizations focused on environmental education and community outreach programs.</p>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>$50,000 - $150,000</span>
                <span>Due: March 15, 2024</span>
              </div>
              <div className="flex gap-1">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Environmental</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Education</span>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4 relative">
              <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">87% Match</div>
              <h4 className="font-semibold text-gray-800 mb-2">Community Health & Wellness Fund</h4>
              <p className="text-sm text-gray-600 mb-3">Grants for nonprofits working to improve community health outcomes.</p>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>$25,000 - $75,000</span>
                <span>Due: April 1, 2024</span>
              </div>
              <div className="flex gap-1">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Health</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Community</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: FileText,
      title: "Get Detailed Insights",
      description: "See why each grant is a perfect match with AI-generated compatibility scores and detailed analysis. Understanding the 'why' behind each recommendation helps you make informed decisions.",
      mockupContent: (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">Environmental Education Initiative</h3>
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-auto">92% Match</div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-3">Why This Grant Fits</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Environmental Focus Alignment</p>
                    <p className="text-xs text-gray-600">Your environmental education programs directly match this funder's core priorities and mission statement</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Community Impact Track Record</p>
                    <p className="text-xs text-gray-600">Your organization's proven history of reaching 2,000+ community members demonstrates scalable impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Geographic Overlap</p>
                    <p className="text-xs text-gray-600">Your service area aligns perfectly with their target funding regions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Budget Range Match</p>
                    <p className="text-xs text-gray-600">Your project scope fits within their $50K-$150K funding range</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2 text-sm">Compatibility Score</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Mission Alignment</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Program Fit</span>
                      <span className="font-semibold text-green-600">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Geographic</span>
                      <span className="font-semibold text-blue-600">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2 text-sm">Key Requirements</h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">501(c)(3) Status ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">3+ Years Operating ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Environmental Focus ✓</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-700">Board Diversity (~)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: PenTool,
      title: "AI-Powered Writing",
      description: "Draft compelling proposals 10x faster with intelligent writing assistance. Our AI understands grant requirements and helps you craft winning narratives that resonate with funders.",
      mockupContent: <AIWritingAnimation />
    },
    {
      icon: BarChart3,
      title: "Track Everything",
      description: "Never miss a deadline with smart application management and progress tracking. Stay organized with automated reminders, milestone tracking, and comprehensive reporting.",
      mockupContent: (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Application Dashboard</h3>
            <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium">2 Urgent Deadlines</div>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Environmental Education Initiative</h4>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Due in 3 days</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">$50,000 - $150,000 • March 15, 2024</p>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">Continue</button>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Youth Development Program</h4>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Submitted</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">$10,000 - $40,000 • Submitted March 1, 2024</p>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <button className="bg-gray-500 text-white px-3 py-1 rounded text-sm">View Status</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: CheckCircle,
      title: "Manage Reports",
      description: "Stay compliant with automated progress reports and milestone tracking. Automated report generation ensures you never miss a compliance deadline.",
      mockupContent: (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Grant Reporting</h3>
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium">All Up to Date</div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Environmental Education Initiative</h4>
                <span className="text-green-600 font-semibold text-sm">✓ Submitted</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Q1 Progress Report</span>
                  <span className="text-green-600">Submitted Feb 28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students Reached: 425 / 400</span>
                  <span className="text-green-600">106% of Goal</span>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">Community Health & Wellness</h4>
                <span className="text-blue-600 font-semibold text-sm">Due Mar 15</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mid-term Report</span>
                  <span className="text-blue-600">In Progress</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
            </div>
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
    <section className="py-20 bg-gradient-to-b from-brand-light-green/10 to-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-green mb-6">
            Everything You Need to Win Grants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to reporting — our platform handles every step of your grant journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Features */}
          <div className="space-y-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  ref={(el) => featureRefs.current[index] = el}
                  className={`transition-all duration-500 ${
                    activeFeature === index ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-brand-primary-green text-white shadow-lg' 
                        : 'bg-brand-light-green/20 text-brand-dark-green'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-brand-dark-green mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Sticky mockup */}
          <div className="lg:sticky lg:top-24">
            <div className="relative">
              <div className="bg-gray-100 rounded-t-xl p-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="ml-3 bg-white rounded px-3 py-1 text-xs text-gray-500 font-mono">
                    app.fundsprout.com
                  </div>
                </div>
              </div>
              
              <div className="min-h-[600px] rounded-b-xl overflow-hidden relative">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === activeFeature 
                        ? 'opacity-100 transform translate-x-0' 
                        : index < activeFeature 
                          ? 'opacity-0 transform -translate-x-4' 
                          : 'opacity-0 transform translate-x-4'
                    }`}
                  >
                    {feature.mockupContent}
                  </div>
                ))}
              </div>
              
              <div className="absolute -top-2 -right-2 bg-brand-orange-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
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
