import React from 'react'

const WhatWeOffer = () => {
  const features = [
    {
      title: 'Mobile-Optimized',
      description: 'Your website looks and performs flawlessly on every device, ensuring your audience has the best experience wherever they are.',
      icon: '📱'
    },
    {
      title: 'Lightning-Fast Load Speeds',
      description: 'Optimized performance means visitors stay engaged. We build sites that load in seconds, not minutes.',
      icon: '⚡'
    },
    {
      title: 'SEO-Ready',
      description: 'Built with search engine optimization in mind from day one, helping you rank higher and reach more customers.',
      icon: '🔍'
    },
    {
      title: 'Conversion-Driven Design',
      description: 'Every element is strategically placed to guide visitors toward action, turning clicks into customers.',
      icon: '🎯'
    },
    {
      title: 'Modern & Professional',
      description: 'Clean, contemporary designs that build trust and reflect the quality of your brand.',
      icon: '✨'
    },
    {
      title: 'Easy Content Management',
      description: 'User-friendly interfaces that let you update your site without needing technical expertise.',
      icon: '🔄'
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence and scale your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
