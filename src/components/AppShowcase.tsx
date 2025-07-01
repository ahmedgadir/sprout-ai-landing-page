import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Search, PenTool, FileText, Play, Pause, ChevronRight, Star, Zap, Target, Clock } from 'lucide-react';

const AppShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features = [
    {
      id: 1,
      title: "Dashboard Overview",
      subtitle: "Complete visibility into your grant pipeline",
      description: "Get a bird's-eye view of all your grant activities, deadlines, and opportunities in one unified dashboard.",
      icon: BarChart3,
      image: "/lovable-uploads/Dashboard.png",
      stats: "Track 50+ grants simultaneously",
      color: "blue",
      gradient: "from-blue-600 to-purple-600",
      benefits: [
        "Real-time pipeline tracking",
        "Automated deadline alerts", 
        "Team collaboration tools",
        "Performance analytics"
      ]
    },
    {
      id: 2,
      title: "Smart Grant Discovery",
      subtitle: "AI finds perfect matches for your mission",
      description: "Our AI analyzes thousands of grants daily to surface the most relevant opportunities for your organization.",
      icon: Search,
      image: "/lovable-uploads/DiscoverGrants.png",
      stats: "92% matching accuracy",
      color: "green",
      gradient: "from-green-600 to-emerald-600",
      benefits: [
        "AI-powered opportunity matching",
        "Advanced filtering & search",
        "Eligibility pre-screening",
        "Competitive landscape analysis"
      ]
    },
    {
      id: 3,
      title: "AI Writing Assistant",
      subtitle: "Write winning proposals 10x faster",
      description: "Transform your grant writing process with AI that understands your organization and creates compelling narratives.",
      icon: PenTool,
      image: "/lovable-uploads/Writing.png",
      stats: "10x faster writing",
      color: "orange",
      gradient: "from-orange-600 to-red-600",
      benefits: [
        "Intelligent content suggestions",
        "Real-time writing feedback",
        "Template library access",
        "Collaboration workflows"
      ]
    },
    {
      id: 4,
      title: "Compliance & Reporting",
      subtitle: "Never miss a deadline or requirement",
      description: "Automated compliance tracking and reporting keeps you on track with funder requirements and deadlines.",
      icon: FileText,
      image: "/lovable-uploads/Compliance.png",
      stats: "100% compliance rate",
      color: "purple",
      gradient: "from-purple-600 to-pink-600",
      benefits: [
        "Automated report generation",
        "Deadline tracking & alerts",
        "Compliance monitoring",
        "Funder communication logs"
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, features.length]);

  const toggleAutoPlay = () => setIsAutoPlay(!isAutoPlay);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        icon: "bg-blue-100 text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200", 
        text: "text-green-700",
        icon: "bg-green-100 text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700", 
        icon: "bg-orange-100 text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
        icon: "bg-purple-100 text-purple-600", 
        button: "bg-purple-600 hover:bg-purple-700"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="demo" className="relative overflow-hidden bg-gradient-to-b from-white via-wise-background-neutral/20 to-white">
      <div className="relative py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-wise-forest-green/10 text-wise-forest-green px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
              <Zap className="w-4 h-4" />
              See Fundsprout in Action
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms]">
              From Grant Discovery to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wise-bright-green to-wise-forest-green">
                Funding Success
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              Watch how Fundsprout transforms the entire grant lifecycle—from finding opportunities to submitting winning proposals to staying compliant.
            </p>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, value: "92%", label: "Match Accuracy" },
                { icon: Zap, value: "10x", label: "Faster Writing" },
                { icon: Clock, value: "15hr", label: "Weekly Savings" },
                { icon: Star, value: "100%", label: "Compliance" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-wise-forest-green/10 rounded-2xl mb-4 group-hover:bg-wise-forest-green/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-wise-forest-green" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Controls Section */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Experience Fundsprout Live
                </h3>
                <p className="text-gray-600">Explore each feature at your own pace</p>
              </div>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <button
                  onClick={toggleAutoPlay}
                  className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-sm border border-gray-200"
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-sm font-medium">{isAutoPlay ? 'Pause' : 'Play'} Tour</span>
                </button>
                <div className="text-sm text-gray-500">
                  {activeStep + 1} of {features.length}
                </div>
              </div>
            </div>

            {/* Feature Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => {
                const isActive = index === activeStep;
                const colors = getColorClasses(feature.color);
                const Icon = feature.icon;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveStep(index)}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] ${
                      isActive 
                        ? `${colors.bg} ${colors.border} shadow-lg scale-[1.02]` 
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                      isActive ? colors.icon : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h4 className={`font-bold text-lg mb-2 ${isActive ? colors.text : 'text-gray-900'}`}>
                      {feature.title}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {feature.subtitle}
                    </p>
                    
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      isActive ? `${colors.bg} ${colors.text}` : 'bg-gray-100 text-gray-600'
                    }`}>
                      {feature.stats}
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${feature.gradient} rounded-full border-2 border-white`}></div>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Demo Display */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                
                {/* Feature Details */}
                <div className="lg:col-span-2">
                  {features.map((feature, index) => {
                    const isActive = index === activeStep;
                    const colors = getColorClasses(feature.color);
                    
                    return (
                      <div
                        key={feature.id}
                        className={`transition-all duration-500 ${
                          isActive ? 'opacity-100 block' : 'opacity-0 hidden'
                        }`}
                      >
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 ${colors.bg} ${colors.text}`}>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                          Step {feature.id}
                        </div>
                
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0`}></div>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Screenshot Display */}
                <div className="lg:col-span-3">
                  <div className="relative">
                    {/* Screenshot Container */}
                    <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                      <div className="relative aspect-[16/10]">
                        {features.map((feature, index) => (
                          <div
                            key={feature.id}
                            className={`absolute inset-0 transition-all duration-700 ease-out ${
                              index === activeStep 
                                ? 'opacity-100 transform scale-100' 
                                : 'opacity-0 transform scale-95'
                            }`}
                          >
                            <img
                              src={feature.image}
                              alt={`${feature.title} interface`}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                            
                            {/* Overlay gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent`}></div>
                            
                            {/* Feature badge */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                                <span className="text-sm font-semibold text-gray-800">{feature.title}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex justify-center mt-6">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                        {features.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === activeStep ? 'bg-wise-forest-green w-6' : 'bg-gray-400 hover:bg-gray-500'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-wise-forest-green to-wise-bright-green rounded-3xl p-8 lg:p-12 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Grant Process?
              </h3>
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Join organizations transforming grant success with Fundsprout.
              </p>
              <div className="text-center">
                <a 
                  href="https://calendly.com/abdulgadir-fundsprout/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-wise-forest-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Your Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;