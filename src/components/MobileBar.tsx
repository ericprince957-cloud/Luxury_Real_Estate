export default function MobileBar() {
  return (
    <div className="sticky-bottom-bar">
      <div className="flex gap-3 max-w-md mx-auto">
        <a
          href="tel:+2347034755481"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white py-3.5 rounded-xl text-sm font-inter font-semibold transition-all active:scale-95"
        >
          <i className="fas fa-phone text-gold"></i>
          Call Us
        </a>
        <a
          href="https://wa.me/2347034755481?text=Hi%20Tonywhite%2C%20I%27m%20interested%20in%20your%20luxury%20properties."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gold text-navy py-3.5 rounded-xl text-sm font-inter font-semibold transition-all active:scale-95"
        >
          <i className="fab fa-whatsapp text-lg"></i>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
