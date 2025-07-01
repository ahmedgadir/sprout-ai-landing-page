
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] sm:min-h-screen bg-gradient-to-b from-wise-background-neutral to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-0">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-wise-forest-green mb-4 sm:mb-6 leading-tight font-inter">
          <span className="block animate-[slide-in-left_0.8s_ease-out] [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">Find More Grants.</span>
          <span className="block animate-[slide-in-right_0.8s_ease-out] [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">Write Them Faster.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-wise-bright-green to-wise-forest-green animate-[pop-in_0.6s_ease-out] [animation-delay:1.0s] opacity-0 [animation-fill-mode:forwards] transform scale-95">Do Work You Love.</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto font-inter font-light animate-[fade-in-up_0.8s_ease-out] [animation-delay:1.4s] opacity-0 [animation-fill-mode:forwards]">
          Automate matching, AI-draft proposals, and track deadlines.
        </p>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-6 sm:mb-8 animate-[scale-in_0.6s_ease-out] [animation-delay:1.8s] opacity-0 [animation-fill-mode:forwards] transform scale-95">
          <a 
            href="https://calendly.com/abdulgadir-fundsprout/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-wise-forest-green hover:bg-wise-bright-green text-white hover:text-wise-forest-green font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group rounded-md"
          >
            Schedule Demo
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <Button 
            variant="outline" 
            className="w-full sm:w-auto border-2 border-wise-forest-green text-wise-forest-green hover:bg-wise-forest-green hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 group"
            size="lg"
            onClick={() => document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
            See How It Works
          </Button>
        </div>
        
        <div className="text-sm text-gray-500 font-inter animate-[slide-up-fade_0.8s_ease-out] [animation-delay:2.2s] opacity-0 [animation-fill-mode:forwards] transform translate-y-2 text-center">
          <span className="font-medium">Join forward-thinking organizations transforming their grant process</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> — </span>
          <span className="text-wise-forest-green font-semibold">early access available</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
