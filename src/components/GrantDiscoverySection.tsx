import React from 'react';
import { Search, Database, Users, Brain, Target, CheckCircle } from 'lucide-react';

const GrantDiscoverySection = () => {
  const discoverySteps = [
    {
      icon: Database,
      title: "Comprehensive Data Scouring",
      description: "We continuously scan thousands of data points across the internet, monitoring federal databases, foundation websites, and grant portals to ensure no opportunity is missed.",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Expert Human Verification",
      description: "Our dedicated team of grant specialists reviews each opportunity to verify accuracy, completeness, and relevance, ensuring you only see high-quality matches.",
      color: "text-purple-600"
    },
    {
      icon: Brain,
      title: "Proprietary AI Matching",
      description: "Our advanced AI analyzes your organizational profile, mission, and past successes to identify grants with the highest probability of success for your specific needs.",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Receive curated grant recommendations that align perfectly with your organization's goals, capacity, and track record, saving you countless hours of searching.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Streamline Grant Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finding the right grants shouldn't be like searching for a needle in a haystack. 
            Our systematic approach ensures you discover every relevant opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {discoverySteps.map((step, index) => (
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

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">The Result</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Data sources monitored daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy in grant matching</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-600">Time saved on grant discovery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrantDiscoverySection;