import React from 'react'

const WhyChooseUs = () => {
  const stats = [
    {
      number: '50+',
      label: 'Websites Launched',
      description: 'Successfully delivered projects across various industries'
    },
    {
      number: '95%',
      label: 'Client Retention',
      description: 'Long-term partnerships built on trust and results'
    },
    {
      number: '2x',
      label: 'Avg. Conversion Increase',
      description: 'Clients see measurable improvements in performance'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'We\'re here when you need us, around the clock'
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We don't just build websites—we build digital foundations for your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-brand-blue to-brand-green text-white"
            >
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-blue-100">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-gray-50 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Expert Web Development
            </h3>
            <p className="text-gray-600 mb-4">
              Our team combines technical expertise with creative vision to deliver websites that not only look stunning but drive real business results. We stay ahead of industry trends and best practices.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-brand-green mr-2">✓</span>
                <span>Custom designs tailored to your brand</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">✓</span>
                <span>Latest web technologies and frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">✓</span>
                <span>Rigorous testing and quality assurance</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Automatic Systems & Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Beyond websites, we help streamline your operations with automatic systems that will save time and money for your company. From customer service solutions to workflow optimization, we identify and implement automation opportunities throughout your business.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-brand-green mr-2">✓</span>
                <span>Custom automation solutions tailored to your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">✓</span>
                <span>Process automation and seamless integrations</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-green mr-2">✓</span>
                <span>Continuous optimization and dedicated support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
