import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                Align & Acquire
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-brand-blue transition">Features</a>
              <a href="#why-us" className="text-gray-700 hover:text-brand-blue transition">Why Us</a>
              <a href="#pricing" className="text-gray-700 hover:text-brand-blue transition">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-brand-blue transition">Testimonials</a>
              <a href="#contact" className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-brand-blue-dark transition">
                Get Started
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-brand-blue">Features</a>
            <a href="#why-us" className="block px-3 py-2 text-gray-700 hover:text-brand-blue">Why Us</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-brand-blue">Pricing</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-brand-blue">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 bg-brand-blue text-white rounded-lg">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
