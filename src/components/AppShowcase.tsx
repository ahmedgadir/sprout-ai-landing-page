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
      <div className="relative py-12 sm:py-16 lg:py-20 xl:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section - Mobile Optimized */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-wise-forest-green/10 text-wise-forest-green px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              See Fundsprout in Action
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              From Grant Discovery to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-wise-bright-green to-wise-forest-green">
                Funding Success
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Watch how Fundsprout transforms the entire grant lifecycle—from finding opportunities to submitting winning proposals to staying compliant.
                </p>
          </div>

          {/* Stats Section - Mobile Optimized */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-12 sm:mb-16 lg:mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-wise-forest-green/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:bg-wise-forest-green/20 transition-colors">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-wise-forest-green" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Controls Section - Mobile Optimized */}
          <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Experience Fundsprout Live
                </h3>
                <p className="text-sm sm:text-base text-gray-600">Explore each feature at your own pace</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={toggleAutoPlay}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-sm border border-gray-200 text-sm"
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="font-medium">{isAutoPlay ? 'Pause' : 'Play'} Tour</span>
                </button>
                <div className="text-xs sm:text-sm text-gray-500">
                  {activeStep + 1} of {features.length}
                </div>
              </div>
            </div>
            
            {/* Feature Navigation - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {features.map((feature, index) => {
                const isActive = index === activeStep;
                const colors = getColorClasses(feature.color);
                const Icon = feature.icon;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveStep(index)}
                    className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] ${
                      isActive 
                        ? `${colors.bg} ${colors.border} shadow-lg scale-[1.02]` 
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mb-3 sm:mb-4 ${
                      isActive ? colors.icon : 'bg-gray-100 text-gray-600'
                    }`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                    <h4 className={`font-bold text-sm sm:text-base lg:text-lg mb-2 ${isActive ? colors.text : 'text-gray-900'} leading-tight`}>
                      {feature.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                      {feature.subtitle}
                    </p>
                    
                    <div className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      isActive ? `${colors.bg} ${colors.text}` : 'bg-gray-100 text-gray-600'
                    }`}>
                      {feature.stats}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Demo Display - Mobile Optimized */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <div className="space-y-8 lg:grid lg:grid-cols-5 lg:gap-12 lg:space-y-0 lg:items-start">
                
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
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 ${colors.bg} ${colors.text}`}>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                          Step {feature.id}
                </div>
                
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                          {feature.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                          {feature.description}
                        </p>
              
                        <div className="space-y-3 sm:space-y-4">
                          <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Key Features:</h4>
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0 mt-2`}></div>
                              <span className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">{benefit}</span>
                </div>
                          ))}
            </div>
                      </div>
                    );
                  })}
                </div>

                {/* Screenshot Display - Mobile Optimized */}
                <div className="lg:col-span-3">
                  <div className="relative">
                    {/* Screenshot Container */}
                    <div className="relative bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                      <div className="relative aspect-[16/10] sm:aspect-[16/10]">
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
                      </div>
                        ))}
                  </div>
                </div>

                    {/* Progress indicator - Mobile Optimized */}
                    <div className="flex justify-center mt-4 sm:mt-6">
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-100 rounded-full px-3 sm:px-4 py-2">
                        {features.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === activeStep ? 'bg-wise-forest-green w-4 sm:w-6' : 'bg-gray-400 hover:bg-gray-500'
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
              
          {/* Bottom CTA Section - Mobile Optimized */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-wise-forest-green to-wise-bright-green rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Ready to Transform Your Grant Process?
              </h3>
              <p className="text-sm sm:text-base lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                Join organizations transforming grant success with Fundsprout.
              </p>
          <div className="text-center">
                <a 
                  href="https://calendly.com/abdulgadir-fundsprout/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-wise-forest-green hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
                >
                  Schedule Your Demo
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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