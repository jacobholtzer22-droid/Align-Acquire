import React, { useState } from 'react'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('basic')

  const basicFeatures = [
    'Professional website design & development',
    'Mobile-responsive on all devices',
    'SEO optimization setup',
    'Fast loading times',
    'Contact forms & integrations',
    'Social media integration',
    'Basic analytics setup',
    'Monthly maintenance & updates',
    'Security updates & backups',
    'Email support',
  ]

  const proFeatures = [
    'Everything in Basic Website Plan',
    'Priority support (24/7)',
    'Continuous automation assessment & implementation',
    'Constantly ensuring everything that can be automated is within your business',
    'Custom automation solutions development',
    'Hands-on strategy consulting',
    'Monthly strategy calls & optimization reviews',
    'A/B testing & conversion optimization',
    'Advanced analytics & comprehensive reporting',
    'Marketing automation setup & management',
    'Workflow automation across all departments',
    'Custom integrations & API connections',
    'Dedicated account manager',
    'Proactive system monitoring & improvements',
  ]

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Choose the plan that fits your business needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="flex justify-center bg-white p-1.5 md:p-2 rounded-lg shadow-md inline-flex mx-auto w-full max-w-md">
            <button
              onClick={() => setActiveTab('basic')}
              className={`flex-1 md:flex-none px-4 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition ${
                activeTab === 'basic'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-gray-700 hover:text-brand-blue'
              }`}
            >
              Basic Website Plan
            </button>
            <button
              onClick={() => setActiveTab('pro')}
              className={`flex-1 md:flex-none px-4 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition ${
                activeTab === 'pro'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-gray-700 hover:text-brand-blue'
              }`}
            >
              Pro Upgrade Plan
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div
            className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition ${
              activeTab === 'basic' ? 'md:scale-105 ring-4 ring-brand-blue' : 'scale-100'
            }`}
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Basic Website Plan</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Website & Website Upkeep</p>
              <div className="mb-3 md:mb-4">
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900">$500</span>
                <span className="text-sm md:text-base text-gray-600"> one-time setup</span>
              </div>
              <div className="text-gray-600 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-brand-blue">$150</span>
                <span className="text-base md:text-lg">/month</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500">for maintenance & updates</p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base text-gray-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block w-full bg-brand-blue text-white text-center py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-brand-blue-dark transition shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div
            className={`bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl shadow-xl p-6 md:p-8 text-white transform transition relative ${
              activeTab === 'pro' ? 'md:scale-105 ring-4 ring-brand-green' : 'scale-100'
            }`}
          >
            <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white text-brand-green px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
              MOST POPULAR
            </div>
            
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Pro Upgrade Plan</h3>
              <p className="text-xs md:text-sm opacity-90 mb-3 md:mb-4">Website + Premium Automation Solutions</p>
              <div className="mb-3 md:mb-4">
                <span className="text-3xl md:text-4xl font-extrabold">$500-$2,500</span>
                <span className="text-sm md:text-base opacity-90"> one-time setup</span>
              </div>
              <div className="mb-2">
                <span className="text-2xl md:text-3xl font-bold">$100-$400</span>
                <span className="text-base md:text-lg opacity-90">/month</span>
              </div>
              <p className="text-xs md:text-sm opacity-80 mb-1 md:mb-2">Prices vary based on automation implementation</p>
              <p className="text-xs md:text-sm opacity-80">includes Basic Plan + Premium automation features</p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base opacity-95 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block w-full bg-white text-brand-blue text-center py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition shadow-md hover:shadow-lg"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">All plans include a 30-day money-back guarantee</p>
          <p className="text-xs md:text-sm text-gray-500">Questions? <a href="#contact" className="text-brand-blue hover:underline">Contact us</a> to discuss custom solutions</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
