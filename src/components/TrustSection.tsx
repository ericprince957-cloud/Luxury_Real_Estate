import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Chief Emeka O.',
    title: 'CEO, EmTech Industries',
    text: 'Tonywhite Luxury Homes delivered beyond expectations. Their attention to detail and market knowledge helped us secure the perfect commercial property in record time.',
    rating: 5
  },
  {
    name: 'Mrs. Adaeze N.',
    title: 'High-Net-Worth Investor',
    text: 'The level of discretion and professionalism is unmatched. They understood exactly what I was looking for and presented only verified, premium options. Truly a concierge experience.',
    rating: 5
  },
  {
    name: 'Engr. Obinna K.',
    title: 'Managing Director, K&P Developments',
    text: 'We\'ve worked with several agencies, but Tonywhite stands apart. Their verification process saved us from a potentially disastrous deal. I recommend them to all serious investors.',
    rating: 5
  }
];

const whyUs = [
  {
    icon: 'fa-shield-halved',
    title: 'Verified Titles',
    description: 'Every property undergoes rigorous legal verification before listing.'
  },
  {
    icon: 'fa-headset',
    title: '24/7 Concierge',
    description: 'Dedicated support available round-the-clock via WhatsApp or call.'
  },
  {
    icon: 'fa-map-pin',
    title: 'Prime Locations',
    description: 'Exclusive access to the most sought-after addresses in the region.'
  },
  {
    icon: 'fa-user-secret',
    title: 'Discreet Service',
    description: 'Complete confidentiality for high-profile clients and transactions.'
  }
];

export default function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-inter uppercase tracking-[4px] mb-4">Why Choose Us</p>
          <h2 className="font-playfair text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Tonywhite <span className="text-gold italic">Difference</span>
          </h2>
          <div className="luxury-divider mx-auto"></div>
        </div>

        {/* Why Us Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {whyUs.map((item, index) => (
            <div
              key={index}
              className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-gold/20 rounded-2xl p-6 text-center transition-all duration-500"
            >
              <div className="w-14 h-14 bg-gold/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <i className={`fas ${item.icon} text-gold text-xl`}></i>
              </div>
              <h3 className="font-playfair text-white text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm font-inter leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div id="testimonials">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-inter uppercase tracking-[4px] mb-4">Client Testimonials</p>
            <h2 className="font-playfair text-white text-3xl sm:text-4xl font-bold">
              Trusted by <span className="text-gold italic">Elite Investors</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/[0.03] border border-white/5 rounded-2xl p-8 sm:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 left-8 text-gold/20">
                <i className="fas fa-quote-left text-4xl"></i>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-gold text-sm"></i>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 text-base sm:text-lg font-inter leading-relaxed text-center italic mb-8">
                "{testimonials[activeTestimonial].text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold font-playfair font-bold text-lg">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </span>
                </div>
                <p className="text-white font-semibold font-inter">{testimonials[activeTestimonial].name}</p>
                <p className="text-white/40 text-sm font-inter">{testimonials[activeTestimonial].title}</p>
              </div>

              {/* Dots */}
              <div className="flex gap-2 justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeTestimonial
                        ? 'w-6 h-2 bg-gold'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-white/5">
          {[
            { number: '₦5B+', label: 'Property Value Sold' },
            { number: '200+', label: 'Happy Clients' },
            { number: '15+', label: 'Years Experience' },
            { number: '98%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-playfair text-gold text-3xl sm:text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-white/40 text-sm font-inter">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
