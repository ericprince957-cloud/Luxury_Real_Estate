import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="text-navy font-playfair font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="font-playfair text-white text-lg font-semibold leading-tight">Tonywhite</h1>
              <p className="text-gold text-[10px] uppercase tracking-[3px] font-inter">Luxury Homes</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Properties', id: 'properties' },
              { label: 'About', id: 'about' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Contact', id: 'contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-gold transition-colors duration-300 text-sm font-inter font-medium tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/2347034755481?text=Hi%20Tonywhite%2C%20I%27d%20like%20to%20inquire%20about%20your%20luxury%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy px-6 py-2.5 rounded-full text-sm font-semibold font-inter transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Concierge
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-gold/20 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {[
              { label: 'Properties', id: 'properties' },
              { label: 'About', id: 'about' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Contact', id: 'contact' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/80 hover:text-gold transition-colors py-2 text-base font-inter"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/2347034755481?text=Hi%20Tonywhite%2C%20I%27d%20like%20to%20inquire%20about%20your%20luxury%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gold text-navy text-center px-6 py-3 rounded-full text-sm font-semibold font-inter mt-4"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp Concierge
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
