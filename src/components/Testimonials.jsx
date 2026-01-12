import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder, Bloom & Grow',
      image: '👩',
      quote: 'Align & Acquire transformed our online presence. Our conversion rate increased by 180% within the first month, and the ongoing support has been exceptional. Worth every penny!'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechFlow Solutions',
      image: '👨',
      quote: 'The Pro plan has been a game-changer. The automatic systems they set up save us 15+ hours per week, and our website runs flawlessly. They constantly find new ways to automate our processes. Highly recommend upgrading if you\'re serious about scaling.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Entrepreneur, Mindful Moments',
      image: '👩',
      quote: 'As a small business owner, I was nervous about investing in a professional website. Align & Acquire made the process seamless, and the results speak for themselves. My business has never looked better.'
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
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
