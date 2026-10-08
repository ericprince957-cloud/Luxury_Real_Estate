import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import PropertyCard from './components/PropertyCard';
import PropertyDetail from './components/PropertyDetail';
import ComparisonModal from './components/ComparisonModal';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import { properties } from './data/properties';
import { FilterState, Property } from './types';

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    type: '',
    priceMin: 50000000,
    priceMax: 500000000,
    location: '',
    beds: 0,
    baths: 0,
    status: ''
  });

  const [compareList, setCompareList] = useState<string[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  // Filter properties
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      if (filters.type && property.type !== filters.type) return false;
      if (property.price < filters.priceMin || property.price > filters.priceMax) return false;
      if (filters.location && property.location !== filters.location) return false;
      if (filters.beds > 0 && property.beds < filters.beds) return false;
      if (filters.baths > 0 && property.baths < filters.baths) return false;
      if (filters.status && property.status !== filters.status) return false;
      return true;
    });
  }, [filters]);

  const toggleCompare = (id: string) => {
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const compareProperties = properties.filter(p => compareList.includes(p.id));

  return (
    <div className="bg-navy min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Properties Banner */}
      <section className="bg-navy py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 overflow-x-auto py-2">
            <div className="flex items-center gap-2 text-white/40 text-xs font-inter whitespace-nowrap">
              <i className="fas fa-award text-gold"></i>
              <span>Verified Listings</span>
            </div>
            <div className="w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-2 text-white/40 text-xs font-inter whitespace-nowrap">
              <i className="fas fa-shield-halved text-gold"></i>
              <span>Legal Documentation</span>
            </div>
            <div className="w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-2 text-white/40 text-xs font-inter whitespace-nowrap">
              <i className="fas fa-handshake text-gold"></i>
              <span>Trusted by 200+ Clients</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block"></div>
            <div className="hidden sm:flex items-center gap-2 text-white/40 text-xs font-inter whitespace-nowrap">
              <i className="fas fa-clock text-gold"></i>
              <span>24/7 Concierge Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-gold-dark text-xs font-inter uppercase tracking-[4px] mb-4">Our Portfolio</p>
            <h2 className="font-playfair text-navy text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Exclusive <span className="text-gold-dark italic">Properties</span>
            </h2>
            <div className="luxury-divider mx-auto"></div>
            <p className="text-navy/50 text-base font-inter mt-4 max-w-2xl mx-auto">
              Hand-picked luxury properties verified for quality, legality, and investment value.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-navy rounded-2xl p-1">
            <Search filters={filters} onFilterChange={setFilters} resultCount={filteredProperties.length} />
          </div>

          {/* Compare Bar */}
          {compareList.length > 0 && (
            <div className="bg-navy border border-gold/20 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <i className="fas fa-balance-scale text-gold"></i>
                <span className="text-white text-sm font-inter">
                  <span className="text-gold font-semibold">{compareList.length}</span> properties selected for comparison
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setCompareList([])}
                  className="text-white/50 hover:text-white text-sm font-inter transition-colors"
                >
                  Clear All
                </button>
                {compareList.length >= 2 && (
                  <button
                    onClick={() => setShowComparison(true)}
                    className="bg-gold text-navy px-5 py-2 rounded-lg text-sm font-semibold font-inter hover:bg-gold-light transition-colors"
                  >
                    Compare Now
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Property Grid */}
          {filteredProperties.length > 0 ? (
            <div className="masonry-grid">
              {filteredProperties.map(property => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isComparing={compareList.includes(property.id)}
                  onToggleCompare={toggleCompare}
                  onViewDetails={setSelectedProperty}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-navy/20 text-3xl"></i>
              </div>
              <h3 className="font-playfair text-navy text-2xl font-bold mb-2">No Properties Found</h3>
              <p className="text-navy/50 text-sm font-inter">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=60"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your <span className="text-gold italic">Dream Property?</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg font-inter max-w-2xl mx-auto mb-10">
            Let our concierge team guide you to the perfect investment. Schedule a private consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2347034755481?text=Hi%20Tonywhite%2C%20I%27d%20like%20to%20schedule%20a%20private%20consultation%20about%20luxury%20properties."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full text-base font-semibold font-inter transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 flex items-center gap-3"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Start a Conversation
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a
              href="tel:+2347034755481"
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-base font-semibold font-inter transition-all duration-300 flex items-center gap-3"
            >
              <i className="fas fa-phone"></i>
              +234 703 475 5481
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <MobileBar />

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {/* Comparison Modal */}
      {showComparison && compareProperties.length >= 2 && (
        <ComparisonModal
          properties={compareProperties}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
}
