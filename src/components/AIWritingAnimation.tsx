
import React, { useState, useEffect } from 'react';
import { Lightbulb, Clock } from 'lucide-react';

const AIWritingAnimation = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  
  const paragraphs = [
    "Our organization is dedicated to fostering environmental awareness and education within underserved communities.",
    "Through innovative programming and community partnerships, we have successfully reached over 2,000 students and families in the past three years.",
    "The proposed Environmental Education Initiative represents a strategic expansion of our proven curriculum, designed to reach an additional 500 students annually.",
    "Recent assessments demonstrate that participating students show an 85% improvement in environmental knowledge scores and a 73% increase in pro-environmental behaviors at home."
  ];

  useEffect(() => {
    const targetText = paragraphs[currentParagraph];
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setCurrentText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Move to next paragraph after a pause
        setTimeout(() => {
          if (currentParagraph < paragraphs.length - 1) {
            setCurrentParagraph(prev => prev + 1);
            setCurrentText('');
          } else {
            // Reset to beginning
            setTimeout(() => {
              setCurrentParagraph(0);
              setCurrentText('');
            }, 2000);
          }
        }, 1500);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentParagraph]);

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 h-full overflow-hidden">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">✨</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">AI Writing Assistant</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-700 font-medium">Writing...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">AI is writing your project summary...</span>
          </div>
          <p className="text-sm text-blue-700">Based on your organization profile and grant requirements</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Project Summary</h3>
          
          <div className="space-y-4 text-gray-800 leading-relaxed">
            {paragraphs.slice(0, currentParagraph).map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
            
            <p className="mb-4">
              {currentText}
              <span className="w-2 h-5 bg-blue-500 animate-pulse inline-block align-middle ml-1"></span>
            </p>
            
            {currentParagraph < paragraphs.length - 1 && (
              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 mb-4">
                <p className="text-gray-600 leading-relaxed italic">
                  [AI continuing to write based on grant requirements and organizational data...]
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-green-800">Writing Progress</span>
            <span className="text-sm font-semibold text-green-600">
              {Math.min(currentParagraph * 25 + (currentText.length / paragraphs[currentParagraph]?.length || 0) * 25, 100).toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-green-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300" 
              style={{
                width: `${Math.min(currentParagraph * 25 + (currentText.length / (paragraphs[currentParagraph]?.length || 1)) * 25, 100)}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWritingAnimation;
