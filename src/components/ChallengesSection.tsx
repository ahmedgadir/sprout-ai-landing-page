import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Clock, Target, Search, Users, DollarSign } from 'lucide-react';

const challenges = [
  {
    icon: Clock,
    title: "Time Drain",
    stat: "40+ hours",
    description: "Average time spent per grant application, pulling teams away from mission-critical work"
  },
  {
    icon: Target,
    title: "Low Success Rates",
    stat: "10-15%",
    description: "Typical grant application success rate due to poor fit and inadequate preparation"
  },
  {
    icon: Search,
    title: "Information Overload",
    stat: "1000s",
    description: "Grant opportunities scattered across multiple databases and websites"
  },
  {
    icon: Users,
    title: "Expertise Gap",
    stat: "73%",
    description: "Of nonprofits lack dedicated grant writing staff or specialized knowledge"
  },
  {
    icon: DollarSign,
    title: "Resource Waste",
    stat: "$50K+",
    description: "Annual cost of unsuccessful applications and missed opportunities"
  },
  {
    icon: AlertTriangle,
    title: "Compliance Risk",
    stat: "65%",
    description: "Of grants have compliance issues that could jeopardize future funding"
  }
];

const ChallengesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Grant Writing Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nonprofits spend countless hours chasing grants with little success. 
            The traditional approach is broken, leading to burnout and missed opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-destructive" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-foreground">{challenge.title}</h3>
                        <span className="text-sm font-bold text-destructive bg-destructive/10 px-2 py-1 rounded">
                          {challenge.stat}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These challenges compound over time, creating a cycle of inefficiency that 
            prevents nonprofits from securing the funding they need to make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;