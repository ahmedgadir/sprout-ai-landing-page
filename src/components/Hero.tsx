
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-brand-light-green/30 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green mb-6 leading-tight font-inter animate-[fade-in_0.8s_ease-out] [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          <span className="block animate-[fade-in_0.8s_ease-out] [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">Find More Grants.</span>
          <span className="block animate-[fade-in_0.8s_ease-out] [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">Write Them Faster.</span>
          <span className="block text-brand-primary-green animate-[fade-in_0.8s_ease-out] [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">Do Work You Love.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-inter font-light animate-[fade-in_0.8s_ease-out] [animation-delay:1.0s] opacity-0 [animation-fill-mode:forwards]">
          Automate matching, AI-draft proposals, and track deadlines.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-[fade-in_0.8s_ease-out] [animation-delay:1.2s] opacity-0 [animation-fill-mode:forwards]">
          <Button 
            className="bg-brand-primary-green hover:bg-brand-dark-green text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            size="lg"
          >
            Sign Up For Early Access
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-2 border-brand-primary-green text-brand-primary-green hover:bg-brand-light-green/50 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 group"
            size="lg"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            How Our Product Works
          </Button>
        </div>
        
        <div className="text-sm text-gray-500 font-inter animate-[fade-in_0.8s_ease-out] [animation-delay:1.4s] opacity-0 [animation-fill-mode:forwards]">
          <span className="font-medium">Join 20+ nonprofits already piloting FundSprout</span>
          {" — "}
          <span className="text-brand-primary-green font-semibold">limited spots available</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
