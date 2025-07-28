import React from 'react';
import { FileText, BarChart, Trophy, Lightbulb, Zap, Star } from 'lucide-react';

const GrantApplicationSection = () => {
  const applicationSteps = [
    {
      icon: FileText,
      title: "Your Information First",
      description: "We start with the detailed information you've provided about your organization, ensuring every application is authentically yours and accurately represents your mission and capabilities.",
      color: "text-emerald-600"
    },
    {
      icon: BarChart,
      title: "Compelling Statistics Research",
      description: "Our team identifies and gathers the most persuasive statistics and data points that support your case, drawing from credible sources to strengthen your narrative.",
      color: "text-cyan-600"
    },
    {
      icon: Trophy,
      title: "Success Pattern Analysis",
      description: "We analyze what similar organizations have done to win grants like yours, identifying proven strategies and approaches that have led to funding success.",
      color: "text-violet-600"
    },
    {
      icon: Lightbulb,
      title: "RFP Intelligence Extraction",
      description: "Our AI extracts all key requirements, sections, and criteria from complex grant RFPs, so you're never stuck parsing through dense documents to understand what's needed.",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
            <Zap className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Craft Winning Grant Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic approach combines your unique story with data-driven insights and proven success patterns 
            to create compelling grant applications that stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {applicationSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <Star className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">What Makes Our Applications Different</h3>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              We don't use generic templates. Every application is crafted specifically for your organization, 
              using your authentic voice and backed by strategic insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold">3x</div>
                <div className="text-sm text-emerald-100">Higher success rate</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm text-emerald-100">Faster application completion</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-emerald-100">Authentic to your organization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrantApplicationSection;