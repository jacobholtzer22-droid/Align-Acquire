import React from 'react'

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-blue via-blue-600 to-brand-green">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Build. Automate. Grow.
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
            Transform your business with stunning, conversion-focused websites and automatic systems that will save time and money for your company.
            Your success starts with the right digital foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white text-brand-blue px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-white hover:text-brand-blue transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
