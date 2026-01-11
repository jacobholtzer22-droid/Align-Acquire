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
    'Advanced AI automation integration',
    'Custom chatbot development',
    'Hands-on strategy consulting',
    'Monthly strategy calls',
    'A/B testing & optimization',
    'Advanced analytics & reporting',
    'Marketing automation setup',
    'Workflow automation',
    'Custom integrations',
    'Dedicated account manager',
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-center bg-white p-2 rounded-lg shadow-md inline-flex mx-auto">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'basic'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-gray-700 hover:text-brand-blue'
              }`}
            >
              Basic Website Plan
            </button>
            <button
              onClick={() => setActiveTab('pro')}
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                activeTab === 'pro'
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-gray-700 hover:text-brand-blue'
              }`}
            >
              Pro Upgrade Plan
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div
            className={`bg-white rounded-2xl shadow-xl p-8 transform transition ${
              activeTab === 'basic' ? 'scale-105 ring-4 ring-brand-blue' : 'scale-100'
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Website Plan</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-gray-900">$200</span>
                <span className="text-gray-600"> one-time setup</span>
              </div>
              <div className="text-gray-600 mb-2">
                <span className="text-3xl font-bold text-brand-blue">$100</span>
                <span className="text-lg">/month</span>
              </div>
              <p className="text-sm text-gray-500">for maintenance & updates</p>
            </div>

            <ul className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block w-full bg-brand-blue text-white text-center py-4 rounded-lg font-semibold hover:bg-brand-blue-dark transition shadow-md hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div
            className={`bg-gradient-to-br from-brand-blue to-brand-green rounded-2xl shadow-xl p-8 text-white transform transition relative ${
              activeTab === 'pro' ? 'scale-105 ring-4 ring-brand-green' : 'scale-100'
            }`}
          >
            <div className="absolute top-4 right-4 bg-white text-brand-green px-3 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Pro Upgrade Plan</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold">$200</span>
                <span className="opacity-90"> one-time setup</span>
              </div>
              <div className="mb-2">
                <span className="text-3xl font-bold">$200</span>
                <span className="text-lg opacity-90">/month</span>
              </div>
              <p className="text-sm opacity-80">includes Basic Plan + Pro features</p>
            </div>

            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="opacity-95">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="block w-full bg-white text-brand-blue text-center py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 30-day money-back guarantee</p>
          <p className="text-sm text-gray-500">Questions? <a href="#contact" className="text-brand-blue hover:underline">Contact us</a> to discuss custom solutions</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
