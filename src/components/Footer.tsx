export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark border-t border-white/5 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy font-playfair font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="font-playfair text-white text-lg font-semibold">Tonywhite</h3>
                <p className="text-gold text-[10px] uppercase tracking-[3px]">Luxury Homes</p>
              </div>
            </div>
            <p className="text-white/40 text-sm font-inter leading-relaxed mb-6">
              Nigeria's premier luxury real estate agency. Verified properties, concierge service, and unmatched market expertise.
            </p>
            <div className="flex gap-3">
              {['fa-instagram', 'fa-facebook-f', 'fa-twitter', 'fa-linkedin-in'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-white/50 hover:text-gold transition-all"
                >
                  <i className={`fab ${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-white text-base font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Properties', 'About Us', 'Testimonials', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-gold text-sm font-inter transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-playfair text-white text-base font-semibold mb-5">Property Types</h4>
            <ul className="space-y-3">
              {['Luxury Villas', 'Commercial Spaces', 'Industrial Land', 'Penthouses', 'Terrace Duplexes'].map(type => (
                <li key={type}>
                  <span className="text-white/40 text-sm font-inter">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-white text-base font-semibold mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-gold mt-1"></i>
                <span className="text-white/40 text-sm font-inter">Umuahia, Abia State, Nigeria</span>
              </li>
              <li>
                <a href="tel:+2347034755481" className="flex items-center gap-3 text-white/40 hover:text-gold text-sm font-inter transition-colors">
                  <i className="fas fa-phone text-gold"></i>
                  +234 703 475 5481
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347034755481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-gold text-sm font-inter transition-colors"
                >
                  <i className="fab fa-whatsapp text-gold"></i>
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-inter">
            © 2026 Tonywhite Luxury Homes. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-inter">
            Designed with excellence for discerning investors.
          </p>
        </div>
      </div>
    </footer>
  );
}
