import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, FileText, BarChart3, PenTool, CheckCircle, Menu, Save, Send, Lightbulb, Clock, Target } from 'lucide-react';

const AppShowcase = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeValueProp, setActiveValueProp] = useState(0);

  const valuePropCopy = [
    {
      audience: "Nonprofits",
      copy: "use Fundsprout's AI-powered platform to discover perfect grants faster, write compelling proposals, and manage their entire grant lifecycle—transforming their funding success."
    },
    {
      audience: "Organizations",
      copy: "use Fundsprout's comprehensive platform to streamline grant discovery, accelerate proposal writing, and never miss a critical deadline."
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Discover Perfect Grants",
      description: "AI finds the best funding opportunities for your mission",
      icon: Search,
      highlight: "3.5x more relevant grants",
      mockupContent: (
        <div className="h-[800px] bg-gray-50 flex">
          {/* Left Sidebar */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SF</span>
                </div>
                <span className="font-semibold text-gray-800">FundSprout</span>
              </div>
              
              <div className="relative mb-6">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search grants..." 
                  className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            
            <div className="flex-1 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Smart Filters</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Funding Amount</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>$50K - $250K</option>
                    <option>$250K - $500K</option>
                    <option>$500K+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Focus Area</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-600" checked />
                      <span className="ml-2 text-sm text-gray-700">Health & Wellness</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-600" checked />
                      <span className="ml-2 text-sm text-gray-700">Education</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-600" />
                      <span className="ml-2 text-sm text-gray-700">Environment</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Next 30 days</option>
                    <option>Next 90 days</option>
                    <option>Next 6 months</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-teal-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-teal-500 text-lg">🎯</span>
                  <h5 className="font-semibold text-teal-900 text-sm">AI Recommendation</h5>
                </div>
                <p className="text-sm text-teal-800">
                  Based on your profile, focus on health grants with 90%+ match scores for best success rates.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Grant Discovery</h2>
                  <p className="text-sm text-gray-500 mt-1">12 grants found • Sorted by AI match score</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Export List
                  </button>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">
                    Save Search
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {/* Grant Card 1 - High Match */}
                <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6 hover:border-green-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">PERFECT MATCH</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Health</span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">NEW</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Community Wellness Initiative</h3>
                      <p className="text-teal-600 mb-3">🏛️ Better Health Foundation</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="font-bold text-2xl text-gray-900">$250,000</span>
                        <span className="text-orange-600 font-medium">📅 Due June 10, 2025</span>
                        <span className="text-gray-600">📍 Erie County, NY</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        96% match
                      </div>
                      <div className="text-xs text-gray-500">AI Confidence: High</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Supports community health programs with focus on food security and senior services. Perfect alignment with your mission and geographic area.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="bg-white text-green-700 px-3 py-1 rounded-full text-sm border border-green-200">Geographic Match</span>
                      <span className="bg-white text-green-700 px-3 py-1 rounded-full text-sm border border-green-200">Mission Aligned</span>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                      View Details →
                    </button>
                  </div>
                </div>

                {/* Grant Card 2 - Good Match */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">GOOD MATCH</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Education</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Youth Leadership Development</h3>
                      <p className="text-teal-600 mb-3">🏛️ Future Leaders Foundation</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="font-bold text-2xl text-gray-900">$150,000</span>
                        <span className="text-orange-600 font-medium">📅 Due July 15, 2025</span>
                        <span className="text-gray-600">📍 Western NY</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        87% match
                      </div>
                      <div className="text-xs text-gray-500">AI Confidence: High</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Youth mentorship and leadership programs. Strong fit with your after-school initiatives and community engagement focus.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Age Group Match</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Program Fit</span>
                    </div>
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">
                      View Details →
                    </button>
                  </div>
                </div>

                {/* Grant Card 3 - Moderate Match */}
                <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">MODERATE MATCH</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Environment</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Climate Action Initiative</h3>
                      <p className="text-teal-600 mb-3">🏛️ Green Future Fund</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="font-bold text-2xl text-gray-900">$75,000</span>
                        <span className="text-orange-600 font-medium">📅 Due August 30, 2025</span>
                        <span className="text-gray-600">📍 Statewide</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        72% match
                      </div>
                      <div className="text-xs text-gray-500">AI Confidence: Medium</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Environmental sustainability projects. Moderate fit - could work if you expand into environmental education.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">New Area</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Growth Opportunity</span>
                    </div>
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Write Winning Proposals",
      description: "AI helps you craft compelling applications 10x faster",
      icon: PenTool,
      highlight: "10x faster writing with AI",
      mockupContent: (
        <div className="h-[800px] bg-gray-50 flex">
          {/* Left Sidebar - Writing Assistant */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SF</span>
                </div>
                <span className="font-semibold text-gray-800">FundSprout</span>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Community Wellness Fund</h3>
                <p className="text-sm text-gray-600">Better Health Foundation • $250,000</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">96% match</span>
                  <span className="text-sm text-gray-500">Due June 10, 2025</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">AI Writing Assistant</h4>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-500 text-lg">✨</span>
                    <h5 className="font-semibold text-blue-900 text-sm">Smart Suggestions</h5>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 bg-white rounded border hover:border-blue-300 text-sm">
                      "Strengthen impact metrics"
                    </button>
                    <button className="w-full text-left p-2 bg-white rounded border hover:border-blue-300 text-sm">
                      "Add community partnerships"
                    </button>
                    <button className="w-full text-left p-2 bg-white rounded border hover:border-blue-300 text-sm">
                      "Improve sustainability plan"
                    </button>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 text-lg">🎯</span>
                    <h5 className="font-semibold text-green-900 text-sm">Funder Insights</h5>
                  </div>
                  <div className="text-sm text-green-800 space-y-1">
                    <p>• Prefers measurable outcomes</p>
                    <p>• Values community partnerships</p>
                    <p>• Focuses on sustainability</p>
                  </div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-500 text-lg">📊</span>
                    <h5 className="font-semibold text-purple-900 text-sm">Success Factors</h5>
                  </div>
                  <div className="text-sm text-purple-800 space-y-1">
                    <p>• Include specific numbers</p>
                    <p>• Mention past successes</p>
                    <p>• Address all requirements</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-600 text-lg">⚡</span>
                  <h5 className="font-semibold text-yellow-900 text-sm">Quick Actions</h5>
                </div>
                <div className="space-y-2">
                  <button className="w-full bg-yellow-600 text-white py-2 rounded text-sm font-medium hover:bg-yellow-700">
                    Generate Executive Summary
                  </button>
                  <button className="w-full bg-white text-yellow-700 border border-yellow-300 py-2 rounded text-sm font-medium hover:bg-yellow-50">
                    Import Previous Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Writing Interface */}
          <div className="flex-1 bg-white">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Project Narrative</h2>
                  <p className="text-sm text-gray-500 mt-1">Section 2 of 5 • 1,247 / 2,000 words</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Save Draft
                  </button>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">
                    AI Enhance
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="bg-white border border-gray-200 rounded-lg min-h-[500px]">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Project Description</h3>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        The Community Wellness Initiative represents a comprehensive approach to addressing food insecurity among seniors in Erie County. Our program will serve <span className="bg-blue-100 px-1 rounded">over 1,200 seniors annually</span>, providing not only nutritious meals but also social connection and health education.
                      </p>
                      
                      <p className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <span className="text-green-800 font-medium">AI Enhancement:</span> Building on our successful track record of serving 850+ seniors over the past three years, this expansion will increase our capacity by 40% while maintaining our 98% participant satisfaction rate. Our evidence-based approach has demonstrated measurable improvements in nutritional status and social connectivity among participants.
                        <span className="ml-1 w-0.5 h-4 bg-green-500 animate-pulse inline-block align-middle"></span>
                      </p>
                      
                      <p>
                        Through strategic partnerships with local healthcare providers, community centers, and volunteer organizations, we will implement a multi-faceted delivery model that includes:
                      </p>
                      
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Home-delivered meals for mobility-limited seniors</li>
                        <li>Congregate dining at community centers</li>
                        <li>Nutrition education workshops</li>
                        <li>Health screening and referral services</li>
                      </ul>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <span className="text-blue-500 text-xl">💡</span>
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-1">AI Suggestion</h4>
                            <p className="text-blue-800 text-sm">Consider adding specific metrics about the target population size and demographic breakdown to strengthen this section.</p>
                            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                              Apply Suggestion
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Progress:</span> 62% complete
                  </div>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-500 h-2 rounded-full" style={{width: '62%'}}></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="text-gray-600 hover:text-gray-900 flex items-center gap-1 text-sm">
                    📎 Add References
                  </button>
                  <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700">
                    Continue to Budget →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Track Applications",
      description: "Monitor progress and never miss a deadline",
      icon: BarChart3,
      highlight: "5 applications • 2 urgent deadlines",
      mockupContent: (
        <div className="h-[800px] bg-gray-50 flex">
          {/* Left Sidebar - Application Overview */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SF</span>
                </div>
                <span className="font-semibold text-gray-800">FundSprout</span>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Application Pipeline</h3>
                <p className="text-sm text-gray-600">12 active applications</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">2 urgent</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">3 due soon</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-xs text-gray-600">In Progress</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">4</div>
                  <div className="text-xs text-gray-600">Submitted</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600">2</div>
                  <div className="text-xs text-gray-600">Under Review</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">1</div>
                  <div className="text-xs text-gray-600">Awarded</div>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-4">Upcoming Deadlines</h4>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs font-medium text-red-800">URGENT</span>
                  </div>
                  <p className="font-medium text-gray-900 text-sm">Community Wellness</p>
                  <p className="text-xs text-red-600">Due in 2 days</p>
                </div>
                
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs font-medium text-yellow-800">SOON</span>
                  </div>
                  <p className="font-medium text-gray-900 text-sm">Youth Leadership</p>
                  <p className="text-xs text-yellow-600">Due June 15</p>
                </div>
                
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs font-medium text-blue-800">UPCOMING</span>
                  </div>
                  <p className="font-medium text-gray-900 text-sm">Climate Action</p>
                  <p className="text-xs text-blue-600">Due August 30</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-teal-500 text-lg">📊</span>
                  <h5 className="font-semibold text-teal-900 text-sm">Success Rate</h5>
                </div>
                <p className="text-sm text-teal-800">
                  Your applications have a 78% success rate - 15% above average!
                </p>
              </div>
            </div>
          </div>

          {/* Main Content - Application List */}
          <div className="flex-1 bg-white">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Application Tracker</h2>
                  <p className="text-sm text-gray-500 mt-1">12 applications • $1.2M total requested</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Export Report
                  </button>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">
                    New Application
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* Urgent Application */}
                <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">URGENT</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Health</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Community Wellness Fund</h3>
                      <p className="text-teal-600 mb-3">🏛️ Better Health Foundation</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="font-bold text-2xl text-gray-900">$250,000</span>
                        <span className="text-red-600 font-medium">📅 Due in 2 days</span>
                        <span className="text-gray-600">Started May 15</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        75% complete
                      </div>
                      <div className="text-xs text-gray-500">Last updated: 2 hours ago</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-orange-500 h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Next: Submit final budget documentation</p>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                      Continue Application →
                    </button>
                  </div>
                </div>

                {/* In Progress Application */}
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">IN PROGRESS</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Education</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Youth Leadership Development</h3>
                      <p className="text-teal-600 mb-3">🏛️ Future Leaders Foundation</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="font-bold text-2xl text-gray-900">$150,000</span>
                        <span className="text-orange-600 font-medium">📅 Due July 15</span>
                        <span className="text-gray-600">Started June 1</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        45% complete
                      </div>
                      <div className="text-xs text-gray-500">Last updated: 1 day ago</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-500 h-3 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Next: Complete project narrative section</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                      Continue Application →
                    </button>
                  </div>
                </div>

                {/* Submitted Application */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">SUBMITTED</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Environment</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Climate Action Initiative</h3>
                      <p className="text-teal-600 mb-3">🏛️ Green Future Fund</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="font-bold text-2xl text-gray-900">$75,000</span>
                        <span className="text-green-600 font-medium">📅 Submitted May 28</span>
                        <span className="text-gray-600">Decision expected: July 1</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        Under Review
                      </div>
                      <div className="text-xs text-gray-500">Submitted on time</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Awaiting funder response • Follow-up scheduled for June 20</p>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                      View Submission →
                    </button>
                  </div>
                </div>

                {/* Draft Application */}
                <div className="border border-gray-200 bg-white rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">DRAFT</span>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">Technology</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Digital Equity Fund</h3>
                      <p className="text-teal-600 mb-3">🏛️ Tech for Good Foundation</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="font-bold text-2xl text-gray-900">$100,000</span>
                        <span className="text-orange-600 font-medium">📅 Due September 15</span>
                        <span className="text-gray-600">Started June 5</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-gray-400 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        15% complete
                      </div>
                      <div className="text-xs text-gray-500">Last updated: 3 days ago</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gray-400 h-3 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Next: Complete organization profile section</p>
                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700">
                      Continue Application →
                    </button>
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
      title: "Stay Compliant",
      description: "Automated reporting keeps you compliant and funders happy",
      icon: FileText,
      highlight: "3 reports due this month",
      mockupContent: (
        <div className="h-[800px] bg-gray-50 flex">
          {/* Left Sidebar - Report Overview */}
          <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">SF</span>
                </div>
                <span className="font-semibold text-gray-800">FundSprout</span>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Dashboard</h3>
                <p className="text-sm text-gray-600">8 active grants</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">3 due soon</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">5 current</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Report Status</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-green-600">12</div>
                  <div className="text-xs text-gray-600">Submitted</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-blue-600">2</div>
                  <div className="text-xs text-gray-600">In Progress</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-yellow-600">3</div>
                  <div className="text-xs text-gray-600">Due Soon</div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <div className="text-xl font-bold text-red-600">1</div>
                  <div className="text-xs text-gray-600">Overdue</div>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-teal-600 text-white py-2 rounded text-sm font-medium hover:bg-teal-700">
                  Generate Report
                </button>
                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded text-sm font-medium hover:bg-gray-50">
                  View Templates
                </button>
                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded text-sm font-medium hover:bg-gray-50">
                  Schedule Reminders
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-purple-500 text-lg">🤖</span>
                  <h5 className="font-semibold text-purple-900 text-sm">AI Assistant</h5>
                </div>
                <p className="text-sm text-purple-800">
                  Auto-generate reports using your project data and past submissions.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content - Report Management */}
          <div className="flex-1 bg-white">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Report Management</h2>
                  <p className="text-sm text-gray-500 mt-1">18 total reports • 3 due this month</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Export Calendar
                  </button>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700">
                    New Report
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* Urgent Report */}
                <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">OVERDUE</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Quarterly</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Q2 Progress Report</h3>
                      <p className="text-teal-600 mb-3">🏛️ Community Wellness Fund • Better Health Foundation</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-red-600 font-medium">📅 Due June 15 (3 days overdue)</span>
                        <span className="text-gray-600">Quarterly Report</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        Action Required
                      </div>
                      <div className="text-xs text-gray-500">Auto-reminder sent</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Required Sections:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Program Activities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Financial Summary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Participant Outcomes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Challenges & Solutions</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Contact funder immediately to request extension</p>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
                      Start Report Now →
                    </button>
                  </div>
                </div>

                {/* Due Soon Report */}
                <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">DUE SOON</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Financial</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Annual Financial Report</h3>
                      <p className="text-teal-600 mb-3">🏛️ Youth Leadership Grant • Future Leaders Foundation</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-yellow-600 font-medium">📅 Due June 30 (12 days)</span>
                        <span className="text-gray-600">Annual Report</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        In Progress
                      </div>
                      <div className="text-xs text-gray-500">60% complete</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-yellow-500 h-3 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Progress Summary:</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Budget Summary ✓</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Expense Reports ✓</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span>Audit Documentation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        <span>Final Review</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">Next: Upload audit documentation</p>
                    <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700">
                      Continue Report →
                    </button>
                  </div>
                </div>

                {/* Upcoming Report */}
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">UPCOMING</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Impact</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">Mid-Year Impact Assessment</h3>
                      <p className="text-teal-600 mb-3">🏛️ Climate Action Initiative • Green Future Fund</p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-blue-600 font-medium">📅 Due July 31 (43 days)</span>
                        <span className="text-gray-600">Impact Report</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-lg font-bold mb-2">
                        Scheduled
                      </div>
                      <div className="text-xs text-gray-500">Reminder set</div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Preparation Checklist:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300 text-teal-600" checked />
                        <span className="line-through text-gray-500">Collect participant surveys</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300 text-teal-600" checked />
                        <span className="line-through text-gray-500">Analyze program metrics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300 text-teal-600" />
                        <span>Document success stories</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-gray-300 text-teal-600" />
                        <span>Prepare visual data summaries</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700">AI will auto-generate draft using collected data</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                      Prepare Report →
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

  useEffect(() => {
    const valuePropInterval = setInterval(() => {
      setActiveValueProp((prev) => (prev + 1) % valuePropCopy.length);
    }, 4000);

    return () => clearInterval(valuePropInterval);
  }, [valuePropCopy.length]);

  return (
    <section id="demo" className="py-12 sm:py-16 bg-gradient-to-b from-white to-brand-light-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-brand-dark-green mb-4 sm:mb-6">
            Watch How Easy Grant Success Can Be
          </h2>
          <div className="min-h-[40px] sm:min-h-[60px] flex items-center justify-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed transition-all duration-500">
              <span className="font-semibold text-brand-dark-green">{valuePropCopy[activeValueProp].audience}</span>{" "}
              {valuePropCopy[activeValueProp].copy}
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-brand-primary-green mb-1 sm:mb-2">10x</div>
            <div className="text-gray-600 text-xs sm:text-base">Faster proposal writing</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-brand-primary-green mb-1 sm:mb-2">90%+</div>
            <div className="text-gray-600 text-xs sm:text-base">Grant matching accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-brand-primary-green mb-1 sm:mb-2">15hr</div>
            <div className="text-gray-600 text-xs sm:text-base">Weekly time savings</div>
          </div>
        </div>

        <div className="flex justify-center mb-6 sm:mb-12">
          <div className="bg-white rounded-2xl p-1 sm:p-2 shadow-lg border border-gray-100 flex gap-1 sm:gap-2 overflow-x-auto max-w-full">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-4 rounded-xl transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? 'bg-brand-primary-green text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div className="text-left hidden sm:block">
                    <div className="font-semibold text-sm">{step.title}</div>
                    <div className={`text-xs ${isActive ? 'text-green-100' : 'text-gray-500'}`}>
                      Step {step.id}
                    </div>
                  </div>
                  <div className="text-left sm:hidden">
                    <div className="font-semibold text-xs">{step.id}</div>
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
              <div className="ml-4 bg-white rounded px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-500 font-mono overflow-hidden">
                <span className="hidden sm:inline">app.fundsprout.com</span>
                <span className="sm:hidden">fundsprout.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-b-xl shadow-2xl h-[300px] sm:h-[500px] lg:h-[800px] relative overflow-hidden">
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

        {/* Enhanced Customer Testimonial */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-brand-light-green/10 to-white border border-brand-light-green/20 rounded-3xl p-8 sm:p-12">
            {/* Large Quote Mark */}
            <div className="absolute top-6 left-8 text-6xl text-brand-primary-green/20 font-serif leading-none">"</div>
            
            <div className="relative">
              {/* Testimonial Text */}
              <blockquote className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-medium mb-8 pl-8">
                We've been beta testing FundSprout for the past few months, and <span className="text-brand-dark-green font-semibold">it's already transformed how we approach grant applications</span>. The AI matching helped us <span className="bg-brand-light-green/30 px-1 rounded">discover funding opportunities we would have never found otherwise</span>, and the writing assistance made our proposals <span className="text-brand-dark-green font-semibold">much more compelling</span>. We're still in the early stages with the platform, but we're already seeing <span className="bg-brand-light-green/30 px-1 rounded">promising results in our grant research and application process</span>.
              </blockquote>
              
              {/* Author Info */}
              <div className="pl-8">
                <div className="font-bold text-gray-900 text-lg">Ahmed Ali</div>
                <div className="text-brand-primary-green font-medium">CEO, Injaz Toronto</div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute bottom-6 right-8 text-6xl text-brand-primary-green/20 font-serif leading-none rotate-180">"</div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AppShowcase;
