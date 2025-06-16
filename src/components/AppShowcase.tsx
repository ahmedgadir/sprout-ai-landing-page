import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, FileText, BarChart3, PenTool, CheckCircle } from 'lucide-react';

const AppShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Discover Perfect Grants",
      description: "AI-powered matching finds grants that fit your mission with 90%+ accuracy",
      icon: Search,
      highlight: "3 grants found matching your criteria",
      mockupContent: (
        <div className="p-8 h-full">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">Grant Discovery</h3>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">3 Matches Found</div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-green-200 bg-green-50 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-semibold">92% Match</div>
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Environmental Education Initiative Grant</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">Supporting organizations focused on environmental education and community outreach programs. Priority given to innovative approaches that demonstrate measurable impact on community environmental awareness.</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-sm text-gray-500">Award Range</span>
                  <p className="font-semibold text-gray-800">$50,000 - $150,000</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-sm text-gray-500">Application Deadline</span>
                  <p className="font-semibold text-green-600">March 15, 2024</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Environmental</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Education</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Community Impact</span>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold">87% Match</div>
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Community Health & Wellness Fund</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">Grants for nonprofits working to improve community health outcomes through education and preventive care programs.</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-sm text-gray-500">Award Range</span>
                  <p className="font-semibold text-gray-800">$25,000 - $75,000</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-sm text-gray-500">Application Deadline</span>
                  <p className="font-semibold text-blue-600">April 1, 2024</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Health</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Community</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Prevention</span>
              </div>
            </div>
            
            <div className="border border-orange-200 bg-orange-50 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold">84% Match</div>
              <h4 className="font-semibold text-gray-800 mb-3 text-lg">Youth Development Program Grant</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">Supporting after-school and summer programs focused on youth development and education in underserved communities.</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-sm text-gray-500">Award Range</span>
                  <p className="font-semibold text-gray-800">$10,000 - $40,000</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <span className="text-sm text-gray-500">Application Deadline</span>
                  <p className="font-semibold text-orange-600">March 30, 2024</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Youth</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Education</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Development</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Get Detailed Insights",
      description: "See why each grant is a perfect match with AI-generated compatibility scores",
      icon: FileText,
      highlight: "92% fit • Excellent Match",
      mockupContent: (
        <div className="p-8 h-full">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold text-gray-800">Environmental Education Initiative Grant</h3>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold ml-auto">92% Match</div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-4 text-lg">Why This Grant Fits</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Environmental Focus Alignment</p>
                        <p className="text-sm text-gray-600">Your organization's environmental education programs directly match the funder's priority areas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Community Impact Track Record</p>
                        <p className="text-sm text-gray-600">Your proven history of community outreach aligns with their impact requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-800">Geographic Overlap</p>
                        <p className="text-sm text-gray-600">Your service area matches 88% of their target regions</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-4 text-lg">Key Requirements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">501(c)(3) status required</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">2+ years operating history</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">Environmental program focus</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-600 text-xs">!</span>
                      </div>
                      <span className="text-gray-700">Annual budget {'>'}$100K recommended</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-4 text-lg">Compatibility Score</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Mission Alignment</span>
                        <span className="font-semibold text-green-600">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Program Fit</span>
                        <span className="font-semibold text-green-600">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Geographic Match</span>
                        <span className="font-semibold text-green-600">88%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '88%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Capacity Match</span>
                        <span className="font-semibold text-yellow-600">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-yellow-500 h-3 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">Recommended Action</h5>
                  <p className="text-green-700 mb-4">High priority application - strong alignment with funder priorities and excellent track record match.</p>
                  <div className="space-y-2">
                    <p className="text-sm text-green-700"><strong>Next Steps:</strong></p>
                    <p className="text-sm text-green-700">• Review application guidelines (available in portal)</p>
                    <p className="text-sm text-green-700">• Schedule program director interview</p>
                    <p className="text-sm text-green-700">• Prepare 3-year impact projection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Track Everything",
      description: "Never miss a deadline with smart application management and progress tracking",
      icon: BarChart3,
      highlight: "5 applications • 2 urgent deadlines",
      mockupContent: (
        <div className="p-8 h-full bg-gray-50">
          <div className="flex h-full">
            <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-4 mr-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SF</span>
                </div>
                <span className="font-semibold text-gray-800">School Funding</span>
              </div>
              
              <nav className="space-y-2">
                <div className="flex items-center gap-3 px-3 py-2 bg-green-50 text-green-700 rounded-lg">
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm font-medium">Applications</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Search className="w-4 h-4" />
                  <span className="text-sm">Discover</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Drafts</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Reports</span>
                </div>
              </nav>
            </div>
            
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">My Applications</h2>
                    <p className="text-gray-600">Track and manage your grant applications</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium">
                      2 Urgent Deadlines
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                      New Application
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="border-l-4 border-red-500 bg-red-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Environmental Education Initiative</h4>
                      <div className="flex items-center gap-2">
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Due in 3 days</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Draft</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">$50,000 - $150,000 • March 15, 2024</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                      <button className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700">
                        Continue
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Community Health & Wellness Fund</h4>
                      <div className="flex items-center gap-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">Due in 12 days</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">In Review</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">$25,000 - $75,000 • April 1, 2024</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-700">
                        Review
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Youth Development Program Grant</h4>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Submitted</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Under Review</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">$10,000 - $40,000 • Submitted March 1, 2024</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                      <button className="bg-gray-500 text-white px-4 py-2 rounded text-sm">
                        View Status
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Arts Education Foundation Grant</h4>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Planning</span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Research</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">$75,000 - $200,000 • Due May 15, 2024</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>25%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                        Start Draft
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "AI-Powered Writing",
      description: "Draft compelling proposals 10x faster with intelligent writing assistance",
      icon: PenTool,
      highlight: "570/800 words • AI Suggestions",
      mockupContent: (
        <div className="p-8 h-full bg-gray-50">
          <div className="flex h-full gap-8">
            {/* Sidebar */}
            <div className="w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">FundSprout</h3>
                  <p className="text-xs text-gray-500">AI Grant Writer</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">Proposal Sections</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-800">Project Summary</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">Writing</span>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">570 / 800 words</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{width: '71%'}}></div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-800">Impact Statement</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">Complete</span>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">800 / 800 words</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer opacity-60">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-800">Budget Narrative</span>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">Pending</span>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">0 / 600 words</div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-300 h-2 rounded-full" style={{width: '0%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">AI Assistant</h4>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✨</span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">Writing Assistant</span>
                      <div className="ml-auto flex gap-1">
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">I'm analyzing your organization's data to craft compelling content that aligns with funder priorities.</p>
                    <div className="flex gap-2">
                      <button className="text-xs bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        Continue Writing
                      </button>
                      <button className="text-xs border border-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        Pause
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Editor */}
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-semibold text-gray-900">Environmental Education Initiative</h2>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">Project Summary</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">570/800 words</span>
                    <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-700 font-medium">AI Writing</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Save Draft
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Review
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-8 h-full overflow-y-auto">
                <div className="max-w-4xl mx-auto space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 leading-relaxed">
                      Our organization is dedicated to fostering environmental awareness and education within underserved communities. Through innovative programming and community partnerships, we have successfully reached over 2,000 students and families in the past three years, creating lasting impact through hands-on learning experiences that connect classroom theory with real-world environmental challenges.
                    </p>
                    
                    <p className="text-gray-800 leading-relaxed">
                      The proposed Environmental Education Initiative represents a strategic expansion of our proven curriculum, designed to reach an additional 500 students annually across five elementary schools in low-income neighborhoods.
                    </p>
                  </div>
                  
                  {/* AI Writing in Progress */}
                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 rounded-r-xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-gray-700">AI is writing...</span>
                        </div>
                        <div className="text-xs text-gray-500">Analyzing funder priorities • Adding impact metrics</div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-gray-800 leading-relaxed">
                          Our evidence-based approach combines classroom instruction with outdoor learning experiences, creating measurable improvements in environmental literacy and stewardship behaviors. Recent assessments show that 
                          <span className="bg-blue-100 text-blue-800 px-1 rounded animate-pulse">participating students demonstrate an 85% improvement in environmental knowledge scores</span>
                          <span className="ml-1 w-2 h-5 bg-blue-400 animate-pulse inline-block"></span>
                        </p>
                        
                        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-gray-700">AI Suggestions</span>
                            <div className="flex gap-2">
                              <button className="text-xs bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors">
                                ✓ Accept
                              </button>
                              <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                                Edit
                              </button>
                              <button className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full hover:bg-red-200 transition-colors">
                                ✕ Reject
                              </button>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 space-y-2">
                            <p>• Add specific timeline for implementation phases</p>
                            <p>• Include sustainability plan beyond grant period</p>
                            <p>• Highlight partnership with local environmental organizations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-800 leading-relaxed">
                      Research demonstrates that environmental education programs implemented in elementary settings show the highest retention rates and behavioral change outcomes. Our curriculum integrates STEM learning objectives with environmental science concepts, ensuring alignment with state educational standards while fostering critical thinking skills essential for the next generation of environmental stewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Panel - Quick Actions */}
            <div className="w-72 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-purple-500">⚡</span>
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  <button className="w-full text-left flex items-center gap-3 text-sm p-3 hover:bg-purple-50 rounded-lg transition-colors group">
                    <span className="text-purple-500 group-hover:scale-110 transition-transform">✨</span>
                    <span className="text-gray-700 font-medium">Make more compelling</span>
                  </button>
                  <button className="w-full text-left flex items-center gap-3 text-sm p-3 hover:bg-blue-50 rounded-lg transition-colors group">
                    <span className="text-blue-500 group-hover:scale-110 transition-transform">📊</span>
                    <span className="text-gray-700 font-medium">Add statistics</span>
                  </button>
                  <button className="w-full text-left flex items-center gap-3 text-sm p-3 hover:bg-green-50 rounded-lg transition-colors group">
                    <span className="text-green-500 group-hover:scale-110 transition-transform">🎯</span>
                    <span className="text-gray-700 font-medium">Match funder priorities</span>
                  </button>
                  <button className="w-full text-left flex items-center gap-3 text-sm p-3 hover:bg-orange-50 rounded-lg transition-colors group">
                    <span className="text-orange-500 group-hover:scale-110 transition-transform">📝</span>
                    <span className="text-gray-700 font-medium">Improve clarity</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">💡</span>
                  Smart Suggestions
                </h4>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">⚠️</span>
                      <div>
                        <p className="text-sm font-medium text-gray-800 mb-1">Add Implementation Timeline</p>
                        <p className="text-xs text-gray-600 mb-3">Funders want to see clear project phases and milestones</p>
                        <button className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition-colors">
                          Generate ✨
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">📈</span>
                      <div>
                        <p className="text-sm font-medium text-gray-800 mb-1">Strengthen Impact Metrics</p>
                        <p className="text-xs text-gray-600 mb-3">Add measurable outcomes and success indicators</p>
                        <button className="text-xs bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition-colors">
                          Generate ✨
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Manage Reports",
      description: "Stay compliant with automated progress reports and milestone tracking",
      icon: CheckCircle,
      highlight: "All reports up to date",
      mockupContent: (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Grant Reporting Dashboard</h3>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">All Up to Date</div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Environmental Education Initiative</h4>
                <span className="text-green-600 font-semibold text-sm">✓ Submitted</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Q1 Progress Report</span>
                  <span className="text-green-600">Submitted Feb 28</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students Reached: 425 / 400 (Target)</span>
                  <span className="text-green-600">106% of Goal</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Budget Utilization</span>
                  <span className="text-gray-700">$35,750 / $50,000</span>
                </div>
              </div>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Community Health & Wellness</h4>
                <span className="text-blue-600 font-semibold text-sm">Due Mar 15</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Mid-term Report</span>
                  <span className="text-blue-600">In Progress</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Community Members Served</span>
                  <span className="text-gray-700">180 / 250 (Target)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">Arts Education Foundation</h4>
                <span className="text-gray-600 font-semibold text-sm">Next: Jun 30</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Annual Report</span>
                  <span className="text-gray-500">Not Due</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Program Participants</span>
                  <span className="text-gray-700">85 / 100 (Target)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-700">Compliance Status</span>
              <span className="text-green-600 font-semibold">✓ All Current</span>
            </div>
            <p className="text-sm text-gray-600">Next report due: March 15, 2024 (Community Health & Wellness)</p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-brand-light-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-green mb-6">
            See FundSprout in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From grant discovery to successful funding — experience the complete journey
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 flex gap-2 overflow-x-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'bg-brand-primary-green text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">{step.title}</div>
                    <div className={`text-xs ${isActive ? 'text-green-100' : 'text-gray-500'}`}>
                      Step {step.id}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="bg-gray-100 rounded-t-xl p-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="ml-4 bg-white rounded px-4 py-2 text-sm text-gray-500 font-mono">
                app.fundsprout.com
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-b-xl shadow-2xl min-h-[800px] relative overflow-hidden">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeStep 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < activeStep 
                      ? 'opacity-0 transform -translate-x-full' 
                      : 'opacity-0 transform translate-x-full'
                }`}
              >
                {step.mockupContent}
              </div>
            ))}
          </div>
          
          <div className="absolute -top-4 -right-4 bg-brand-orange-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {activeStep + 1} / {steps.length}
          </div>
        </div>

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
