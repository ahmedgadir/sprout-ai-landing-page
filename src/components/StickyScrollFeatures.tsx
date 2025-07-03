import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, FileSearch, Calculator, Play, Pause, ChevronRight, PenTool, Target } from 'lucide-react';

const StickyScrollFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const features = [
    {
      id: 1,
      title: "Personalized AI Knowledge",
      subtitle: "AI that truly understands your organization",
      description: "Our AI learns about your organization, programs, and impact areas to provide personalized recommendations. It knows your mission, history, and strengths better than most team members.",
      icon: Target,
      image: "/feature_images/KnowsAboutYou.png",
      color: "teal",
      gradient: "from-teal-600 to-cyan-600",
      stats: "Learns continuously",
      benefits: [
        "Organization-specific insights",
        "Mission-aligned opportunities",
        "Historical performance analysis",
        "Personalized writing suggestions"
      ]
    },
    {
      id: 2,
      title: "Smart Research & Citations",
      subtitle: "Evidence-based writing with automatic citations",
      description: "Access millions of credible research sources and generate properly formatted citations automatically. Strengthen your proposals with compelling statistics and evidence that funders trust.",
      icon: FileSearch,
      image: "/feature_images/Citations.png",
      color: "green",
      gradient: "from-green-600 to-emerald-600", 
      stats: "1M+ research sources",
      benefits: [
        "Automatic citation formatting",
        "Real-time fact verification", 
        "Credible source recommendations",
        "Impact statistics integration"
      ]
    },
    {
      id: 3,
      title: "AI Enhanced Writing Assistant",
      subtitle: "Professional grant writing that impresses funders",
      description: "Transform your ideas into compelling, funder-ready narratives. Our AI helps craft persuasive proposals with proper structure, tone, and language that resonates with grant reviewers.",
      icon: PenTool,
      image: "/feature_images/ai-enhanced-writing.png?v=2",
      color: "blue",
      gradient: "from-blue-600 to-indigo-600",
      stats: "98% approval rate",
      benefits: [
        "AI-powered narrative development",
        "Funder-specific tone adaptation", 
        "Real-time writing suggestions",
        "Professional formatting templates"
      ]
    },
    {
      id: 4,
      title: "Professional Logic Model Builder",
      subtitle: "Visual theory of change diagrams funders love",
      description: "Create publication-ready logic models that clearly demonstrate your program's impact pathway. AI suggests improvements based on evaluation best practices and funder preferences.",
      icon: Brain,
      image: "/feature_images/logic-model.png?v=2",
      color: "indigo",
      gradient: "from-indigo-600 to-purple-600",
      stats: "Professional diagrams",
      benefits: [
        "Drag-and-drop logic modeling",
        "AI impact pathway suggestions",
        "Printable PDF generation", 
        "Theory of change validation"
      ]
    },
    {
      id: 5,
      title: "Smart Budget & KPI Tracking",
      subtitle: "Financial management that impresses funders",
      description: "Build compliant budgets and track performance metrics with real-time variance analysis. Generate reports that demonstrate fiscal responsibility and program effectiveness.",
      icon: Calculator,
      image: "/feature_images/expense-and-kpi-grid.png?v=2",
      color: "orange",
      gradient: "from-orange-600 to-red-600",
      stats: "100% compliance",
      benefits: [
        "Automated budget calculations",
        "Real-time expense tracking",
        "Variance analysis reporting",
        "KPI performance dashboards"
      ]
    },
    {
      id: 6,
      title: "Collaborative Team Workspace",
      subtitle: "Real-time collaboration with your entire team",
      description: "Work together seamlessly with built-in commenting, document sharing, and activity feeds. Keep everyone aligned on proposal development and deadlines with powerful team features.",
      icon: Users,
      image: "/feature_images/Collaboration.png",
      color: "purple",
      gradient: "from-purple-600 to-violet-600",
      stats: "Real-time sync",
      benefits: [
        "Live document collaboration",
        "Team activity notifications",
        "Comment and review workflows",
        "Deadline tracking for teams"
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

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
        button: "bg-blue-600 hover:bg-blue-700",
        tab: "bg-blue-600 text-white",
        tabHover: "hover:bg-blue-100 hover:text-blue-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200", 
        text: "text-green-700",
        icon: "bg-green-100 text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        tab: "bg-green-600 text-white",
        tabHover: "hover:bg-green-100 hover:text-green-700"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
        icon: "bg-purple-100 text-purple-600", 
        button: "bg-purple-600 hover:bg-purple-700",
        tab: "bg-purple-600 text-white",
        tabHover: "hover:bg-purple-100 hover:text-purple-700"
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-700",
        icon: "bg-indigo-100 text-indigo-600", 
        button: "bg-indigo-600 hover:bg-indigo-700",
        tab: "bg-indigo-600 text-white",
        tabHover: "hover:bg-indigo-100 hover:text-indigo-700"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700", 
        icon: "bg-orange-100 text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        tab: "bg-orange-600 text-white",
        tabHover: "hover:bg-orange-100 hover:text-orange-700"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        text: "text-teal-700", 
        icon: "bg-teal-100 text-teal-600",
        button: "bg-teal-600 hover:bg-teal-700",
        tab: "bg-teal-600 text-white",
        tabHover: "hover:bg-teal-100 hover:text-teal-700"
      }
    };
    return colors[color as keyof typeof colors];
  };

  const currentFeature = features[activeFeature];
  const colors = getColorClasses(currentFeature.color);

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-b from-white to-wise-background-neutral/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-wise-forest-green/10 text-wise-forest-green px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Brain className="w-4 h-4" />
            Fundsprout is AI purpose-built for grant writing
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wise-bright-green to-wise-forest-green">
              Everything You Need to Win Grants
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From AI writing assistance to budget tracking, our platform handles every aspect of successful grant applications.
          </p>
        </div>

        {/* Feature Demo Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          
          {/* Header with Auto-play Control */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Built by Grant Writers, For Grant Writers
              </h3>
              <p className="text-gray-600">
                Not generic AI — purpose-built on winning proposals and funder expertise
              </p>
            </div>
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-lg transition-colors shadow-sm border border-gray-200"
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm font-medium">{isAutoPlay ? 'Pause' : 'Play'} Tour</span>
            </button>
          </div>

          {/* Horizontal Tab Navigation */}
          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature, index) => {
                const isActive = index === activeFeature;
                const featureColors = getColorClasses(feature.color);
                const Icon = feature.icon;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive 
                        ? `${featureColors.tab} shadow-lg scale-105` 
                        : `bg-white text-gray-600 ${featureColors.tabHover} border border-gray-200`
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm whitespace-nowrap">{feature.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Two-Column Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl p-8 shadow-sm">
            
            {/* Left: Feature Content */}
            <div className="space-y-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentFeature.gradient}`}></div>
                Feature {currentFeature.id}
              </div>

              <div>
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {currentFeature.title}
                </h4>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {currentFeature.description}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                <div className="space-y-3">
                  {currentFeature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentFeature.gradient}`}></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>


            </div>
            
            {/* Right: Feature Screenshot */}
            <div className="relative">
              {/* Screenshot Container */}
              <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="relative h-[400px] lg:h-[450px]">
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`absolute inset-0 transition-all duration-500 ease-out ${
                        index === activeFeature 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-95'
                      }`}
                    >
                      <img
                        src={feature.image}
                        alt={`${feature.title} interface`}
                        className="w-full h-full object-contain object-center"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial */}
        <div className="mt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "It's uncanny how well Fundsprout knows our organization. The AI understands our programs better than most board members and identifies opportunities that perfectly match our mission."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-wise-forest-green rounded-full flex items-center justify-center text-white font-bold">
                AA
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Ahmed Ali</div>
                <div className="text-gray-600">Executive Director, Injaz Toronto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollFeatures;