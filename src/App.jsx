import React, { useState } from 'react'
import Hero from './components/Hero'
import WhatWeOffer from './components/WhatWeOffer'
import WhyChooseUs from './components/WhyChooseUs'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhatWeOffer />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
