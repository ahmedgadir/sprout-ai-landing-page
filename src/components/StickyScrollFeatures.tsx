import React from "react";

const StickyScrollFeatures = () => {
  const features = [
    {
      title: "Understands your organization's DNA",
      subtitle: "Deep learning from your unique context",
      description: "Fundsprout analyzes your mission, programs, track record, and organizational capacity to build a comprehensive understanding. Unlike generic AI, it knows your strengths, your community, and what makes you fundable.",
      testimonial: {
        quote: "It's uncanny how well Fundsprout knows our organization. The AI understands our programs better than most board members and identifies opportunities that perfectly match our mission.",
        author: "Maria Rodriguez",
        title: "Executive Director, Chicago Youth Alliance",
        initials: "MR"
      },
      mockup: (
        <div className="w-full h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Clean minimal header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-teal-500 rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5m-5 4h5m-5-8h5"></path></svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Organization Intelligence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-500">Profile Synced</span>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Profile Strength & Sources */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="inline-block relative">
                  <svg className="w-32 h-32">
                    <circle className="text-slate-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="52" cx="64" cy="64" />
                    <circle className="text-teal-500" strokeWidth="10" stroke="currentColor" fill="transparent" r="52" cx="64" cy="64" style={{ strokeDasharray: 326.56, strokeDashoffset: 326.56 * (1 - 0.98) }} transform="rotate(-90 64 64)" />
                  </svg>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-slate-900">98%</span>
                  </div>
                </div>
                <div className="text-base font-semibold text-slate-900 mt-2">Profile Strength</div>
                <div className="text-xs text-slate-500">Ready for grant matching</div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Analyzed Sources (17 total)</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span className="text-xs font-medium text-slate-700 truncate">Annual Report 2023.pdf</span>
                    <span className="text-xs text-slate-400 ml-auto">Synced</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span className="text-xs font-medium text-slate-700 truncate">Strategic Plan.docx</span>
                    <span className="text-xs text-slate-400 ml-auto">Synced</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" /></svg>
                    <span className="text-xs font-medium text-slate-700 truncate">chicago-youth-alliance.org</span>
                    <span className="text-xs text-slate-400 ml-auto">Synced</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <span className="text-xs font-medium text-slate-700 truncate">Program Metrics.xlsx</span>
                    <span className="text-xs text-slate-400 ml-auto">Synced</span>
                  </div>
                  <div className="text-xs text-slate-500 pt-1 border-t border-slate-200">... and 13 other documents</div>
                </div>
              </div>
            </div>
            
            {/* AI Extracted Concepts */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">AI-Extracted Core Concepts</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1 rounded-full">Youth Development</span>
                <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-1 rounded-full">STEM Education</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">Workforce Prep</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full">Community Engagement</span>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full">Bilingual Services</span>
                <span className="bg-rose-100 text-rose-800 text-xs font-medium px-2.5 py-1 rounded-full">Mental Health Support</span>
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">Parent Engagement</span>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-5">
              <button className="w-full bg-teal-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-teal-700 transition-colors shadow-sm">Find Matching Grants</button>
              <div className="text-center text-xs text-slate-500 mt-2">Fundsprout will analyze your profile to find the best opportunities.</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Creates publication-ready logic models",
      subtitle: "Professional diagrams funders expect to see",
      description: "Generate beautiful, funder-ready logic models that clearly show your theory of change. Our AI understands program design principles and creates visual diagrams that demonstrate impact pathways and evaluation frameworks.",
      testimonial: {
        quote: "The logic models Fundsprout generates look like they came from a $50,000 consultant. Clean, professional, and they actually make sense to funders. It saves us weeks of work.",
        author: "Dr. James Patterson",
        title: "Program Director, Education Forward",
        initials: "JP"
      },
      mockup: (
        <div className="w-full h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Professional header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Logic Model Builder</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-500">Theory Validated</span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Project Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Youth STEM Leadership Program</h3>
              <div className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">2-Year Model</div>
            </div>
            
            {/* Flow Chart */}
            <div className="space-y-3">
              {/* Inputs */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="text-center text-xs font-semibold text-purple-800 mb-2 uppercase tracking-wide">Inputs</div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900">3.5 FTE</div>
                    <div className="text-xs text-slate-600">Staff</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900">$275K</div>
                    <div className="text-xs text-slate-600">Funding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900">5</div>
                    <div className="text-xs text-slate-600">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-slate-900">2</div>
                    <div className="text-xs text-slate-600">Facilities</div>
                  </div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="text-slate-400">↓</div>
              </div>

              {/* Activities */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="text-center text-xs font-semibold text-blue-800 mb-2 uppercase tracking-wide">Activities</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-xs">
                    <div className="font-medium text-slate-900">• Weekly hands-on sessions</div>
                    <div className="font-medium text-slate-900">• Industry mentorship</div>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-slate-900">• Real-world projects</div>
                    <div className="font-medium text-slate-900">• Leadership development</div>
                  </div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="text-slate-400">↓</div>
              </div>

              {/* Outputs */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-center text-xs font-semibold text-green-800 mb-2 uppercase tracking-wide">Outputs</div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">120</div>
                    <div className="text-xs text-slate-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">1,440</div>
                    <div className="text-xs text-slate-600">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">24</div>
                    <div className="text-xs text-slate-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">95%</div>
                    <div className="text-xs text-slate-600">Completion</div>
                  </div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="text-slate-400">↓</div>
              </div>

              {/* Outcomes & Impact */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="text-center text-xs font-semibold text-yellow-800 mb-2 uppercase tracking-wide">Short-term</div>
                  <div className="space-y-1 text-xs">
                    <div className="text-slate-700">↗ STEM confidence</div>
                    <div className="text-slate-700">↗ Leadership skills</div>
                    <div className="text-slate-700">↗ Industry connections</div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <div className="text-center text-xs font-semibold text-orange-800 mb-2 uppercase tracking-wide">Long-term</div>
                  <div className="space-y-1 text-xs">
                    <div className="text-slate-700">↗ STEM careers</div>
                    <div className="text-slate-700">↗ Community leadership</div>
                    <div className="text-slate-700">↗ Economic mobility</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Assumptions */}
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="text-sm font-semibold text-slate-900 mb-2">Key Assumptions</div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                <div>• High-quality mentors available</div>
                <div>• Student commitment maintained</div>
                <div>• Industry partnerships sustained</div>
                <div>• Family support secured</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Generates funder-compliant budgets",
      subtitle: "Professional financial documents that get approved",
      description: "Create detailed, compliant budgets that follow funder guidelines and industry best practices. Our AI knows budget categories, indirect rates, and cost allocation rules that impress program officers and pass fiscal reviews.",
      testimonial: {
        quote: "The budgets are incredibly detailed and follow every funder guideline perfectly. Our finance team was amazed—it includes indirect calculations, fringe benefits, everything a CFO would want to see.",
        author: "Sarah Mitchell",
        title: "CFO, Community Health Partners",
        initials: "SM"
      },
      mockup: (
        <div className="w-full h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Professional header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Budget Builder</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-500">Compliant</span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Project Header */}
            <div className="text-center border-b border-slate-200 pb-3">
              <h3 className="text-lg font-semibold text-slate-900">Youth STEM Leadership Program</h3>
              <div className="text-sm text-slate-600 mt-1">January 2025 - December 2026 • 24-Month Grant</div>
            </div>
            
            {/* Budget Overview */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900">$405K</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Total Request</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">67%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Personnel</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">10%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Indirect Rate</div>
                </div>
              </div>
            </div>

            {/* Budget Categories */}
            <div className="space-y-3">
              {/* Personnel */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">Personnel</span>
                  <span className="text-sm font-bold text-slate-900">$272,250</span>
                </div>
                <div className="p-3 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Program Director (0.75 FTE)</span>
                    <span className="font-medium">$63,750</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">STEM Educators (1.5 FTE)</span>
                    <span className="font-medium">$97,500</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Youth Coordinator (1.0 FTE)</span>
                    <span className="font-medium">$45,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-t border-slate-200 pt-2">
                    <span className="text-slate-600">Fringe Benefits (32%)</span>
                    <span className="font-medium">$66,000</span>
                  </div>
                </div>
              </div>

              {/* Program Expenses */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">Program Expenses</span>
                  <span className="text-sm font-bold text-slate-900">$99,000</span>
                </div>
                <div className="p-3 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Equipment & Technology</span>
                    <span className="font-medium">$45,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Materials & Supplies</span>
                    <span className="font-medium">$18,500</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Transportation</span>
                    <span className="font-medium">$12,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Professional Development</span>
                    <span className="font-medium">$8,500</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Program Evaluation</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                </div>
              </div>

              {/* Administrative */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-purple-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-900">Administrative</span>
                  <span className="text-sm font-bold text-slate-900">$34,125</span>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600">Indirect Costs (10% de minimis)</span>
                    <span className="font-medium">$34,125</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total & Compliance */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-4">
              <div className="text-center">
                <div className="text-lg font-bold text-slate-900 mb-1">Total Project Budget</div>
                <div className="text-3xl font-bold text-emerald-600">$405,375</div>
                <div className="text-xs text-slate-500 mt-2 flex items-center justify-center gap-2">
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Federal guidelines compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Delivers fact-based evidence with citations",
      subtitle: "Transparent research that builds funder confidence",
      description: "Every recommendation comes with verifiable sources, impact data, and research citations. Our AI provides transparent methodology and evidence-based rationale that program officers can trust and verify.",
      testimonial: {
        quote: "Funders love that every statistic and claim comes with a citation. It's not black-box AI—it's transparent, evidence-based intelligence that makes our proposals incredibly credible and trustworthy.",
        author: "Dr. Amanda Chen",
        title: "Research Director, Urban Education Institute",
        initials: "AC"
      },
      mockup: (
        <div className="w-full h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Professional header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700">Evidence Library</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-500">12 Sources Verified</span>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {/* Research Quality Score */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-900">Research Quality Score</div>
                  <div className="text-sm text-slate-600">Based on source credibility and recency</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-indigo-600">94</div>
                  <div className="text-xs text-slate-500">/ 100</div>
                </div>
              </div>
            </div>

            {/* Evidence Cards */}
            <div className="space-y-3">
              {/* First Evidence */}
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    87%
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-sm mb-1">
                      Students in quality STEM programs 87% more likely to pursue STEM careers
                    </div>
                    <div className="text-xs text-slate-600 mb-2">
                      Supports hands-on learning and mentorship components
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-medium">NSF 2024</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Peer Reviewed</span>
                      <span className="text-slate-500">15,247 students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Evidence */}
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    32%
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-sm mb-1">
                      Youth mentorship increases graduation rates by 32%
                    </div>
                    <div className="text-xs text-slate-600 mb-2">
                      Strong evidence for industry mentorship impact
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">Rhodes et al. 2023</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Meta-Analysis</span>
                      <span className="text-slate-500">Impact Factor: 4.7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Evidence */}
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    2.8x
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 text-sm mb-1">
                      Every $1 invested generates $2.80 economic return
                    </div>
                    <div className="text-xs text-slate-600 mb-2">
                      ROI justification for program investment
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded font-medium">Brookings 2024</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Policy Research</span>
                      <span className="text-slate-500">15-year study</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Source Analysis */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">94%</div>
                <div className="text-xs text-slate-500 mt-1">Peer-reviewed</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">87%</div>
                <div className="text-xs text-slate-500 mt-1">Recent (3 years)</div>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">12</div>
                <div className="text-xs text-slate-500 mt-1">Total Sources</div>
              </div>
            </div>

            {/* Source Verification */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">Source Verification Status</div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-green-600 font-medium">All sources verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div id="why-fundsprout" className="bg-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Fundsprout is AI purpose-built for
            <br className="hidden sm:block" />
            <span className="block sm:inline text-teal-600 italic">professional grant writing</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Trained on thousands of winning proposals, our AI delivers funder-ready documents, not just suggestions.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-24">
          {features.map((feature, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                  <p className="text-lg sm:text-xl text-teal-600 font-medium mb-6">
                    {feature.subtitle}
                  </p>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border">
                  <div className="text-lg italic text-gray-800 mb-4 leading-relaxed">
                    "{feature.testimonial.quote}"
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                      {feature.testimonial.initials}
                </div>
                    <div>
                      <div className="font-semibold text-gray-900">{feature.testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{feature.testimonial.title}</div>
          </div>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {feature.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollFeatures;

