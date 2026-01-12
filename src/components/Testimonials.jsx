import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'James T.',
      role: 'Local Business Owner',
      image: '👨',
      quote: null,
      isStarOnly: true
    },
    {
      name: 'Maria S.',
      role: 'Small Business Owner',
      image: '👩',
      quote: null,
      isStarOnly: true
    },
    {
      name: 'David Martinez',
      role: 'Owner, Martinez Construction',
      image: '👨',
      quote: 'We\'ve been with Align & Acquire for about 8 months now. The website they built for us looks professional and actually brings in leads, which is what we needed. The Pro plan automation stuff has been helpful - they set up some email workflows that save me time responding to inquiries. The monthly cost is reasonable for what we get. Only thing I\'d say is sometimes it takes a day or two to get responses on support questions, but overall we\'re happy with the service.',
      isStarOnly: false
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—here's what businesses like yours are saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {testimonial.isStarOnly ? (
                <>
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-yellow-400 text-3xl mb-2 text-center">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-4">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
