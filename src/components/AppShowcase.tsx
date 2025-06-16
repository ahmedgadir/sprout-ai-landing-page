
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, FileText, BarChart3, PenTool, CheckCircle } from 'lucide-react';

const AppShowcase = () => {
  const steps = [
    {
      id: 1,
      title: "Discover Perfect Grants",
      description: "AI-powered matching finds grants that fit your mission with 90%+ accuracy",
      icon: Search,
      mockup: "/lovable-uploads/db43e363-91d3-4655-9420-f2788221e98a.png",
      highlight: "3 grants found matching your criteria"
    },
    {
      id: 2,
      title: "Get Detailed Insights",
      description: "See why each grant is a perfect match with AI-generated compatibility scores",
      icon: FileText,
      mockup: "/lovable-uploads/db43e363-91d3-4655-9420-f2788221e98a.png",
      highlight: "92% fit • Excellent Match"
    },
    {
      id: 3,
      title: "Track Everything",
      description: "Never miss a deadline with smart application management and progress tracking",
      icon: BarChart3,
      mockup: "/lovable-uploads/eb00a0a3-3a6f-488c-964f-07dcb8452c36.png",
      highlight: "5 applications • 2 urgent deadlines"
    },
    {
      id: 4,
      title: "AI-Powered Writing",
      description: "Draft compelling proposals 10x faster with intelligent writing assistance",
      icon: PenTool,
      mockup: "/lovable-uploads/0f617494-003f-4e90-a7b3-4a2f8109c968.png",
      highlight: "570/800 words • AI Suggestions"
    },
    {
      id: 5,
      title: "Manage Reports",
      description: "Stay compliant with automated progress reports and milestone tracking",
      icon: CheckCircle,
      mockup: "/lovable-uploads/51ccd4ff-c48d-421a-aa89-f6454abee1f7.png",
      highlight: "All reports up to date"
    }
  ];

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

        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-primary-green rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-brand-primary-green font-semibold text-lg">
                      Step {step.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark-green">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-brand-light-green/50 rounded-lg p-4 border-l-4 border-brand-primary-green">
                    <p className="text-brand-dark-green font-medium">
                      ✨ {step.highlight}
                    </p>
                  </div>
                  
                  {index === 0 && (
                    <Button className="bg-brand-primary-green hover:bg-brand-dark-green text-white font-semibold px-6 py-3 group">
                      Try It Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>

                {/* Mockup Side */}
                <div className="flex-1">
                  <div className="relative">
                    {/* Browser Frame */}
                    <div className="bg-gray-100 rounded-t-xl p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-500">
                          app.fundsprout.com
                        </div>
                      </div>
                    </div>
                    
                    {/* App Screenshot */}
                    <div className="bg-white rounded-b-xl shadow-2xl overflow-hidden">
                      <img 
                        src={step.mockup}
                        alt={`${step.title} interface`}
                        className="w-full h-auto"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-brand-orange-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Step {step.id}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
