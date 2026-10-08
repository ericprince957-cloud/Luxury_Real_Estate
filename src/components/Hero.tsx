import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80',
    title: 'Exclusive Luxury Properties',
    subtitle: 'for Discerning Investors'
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
    title: 'Premium Living',
    subtitle: 'in Nigeria\'s Finest Locations'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
    title: 'Verified Listings',
    subtitle: 'in Abia, Imo & Beyond'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProperties = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
            style={{
              animation: index === currentSlide ? 'kenburns 20s ease-in-out infinite alternate' : 'none'
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-gold/30 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            <span className="text-gold text-xs font-inter font-medium uppercase tracking-wider">
              Nigeria's Premier Luxury Agency
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-playfair text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animate-delay-200">
            {heroSlides[currentSlide].title}
            <br />
            <span className="text-gold italic">{heroSlides[currentSlide].subtitle}</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-base sm:text-lg font-inter font-light max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-300">
            Verified Premium Listings in Abia, Imo & Beyond. Concierge-level service for high-net-worth clients and corporate investors.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
            <button
              onClick={scrollToProperties}
              className="group bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full text-base font-semibold font-inter transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 flex items-center gap-3 min-w-[250px] justify-center"
            >
              Browse Exclusive Listings
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
            <a
              href="https://wa.me/2347034755481?text=Hi%20Tonywhite%2C%20I%27m%20interested%20in%20your%20luxury%20properties.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-base font-semibold font-inter transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center backdrop-blur-sm"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Concierge WhatsApp
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Ken Burns Animation */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
