import { Property } from '../types';

interface PropertyDetailProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyDetail({ property, onClose }: PropertyDetailProps) {
  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Tonywhite, I'm interested in "${property.title}" listed at ${formatPrice(property.price)} in ${property.location}. Please share more details and arrange a private viewing.`
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-sm"></div>
      <div
        className="relative bg-navy-light border border-gold/20 rounded-t-2xl sm:rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-auto comparison-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-navy/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent"></div>
          {property.exclusive && (
            <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
              Exclusive Listing
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 -mt-12 relative">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="font-playfair text-white text-2xl sm:text-3xl font-bold leading-tight">
                {property.title}
              </h2>
              <p className="text-white/50 text-sm font-inter flex items-center gap-2 mt-2">
                <i className="fas fa-map-marker-alt text-gold"></i>
                {property.location}
              </p>
            </div>
            <div className="text-right">
              <p className="font-playfair text-gold text-3xl font-bold">{formatPrice(property.price)}</p>
              <p className="text-white/40 text-xs font-inter uppercase tracking-wider">Asking Price</p>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {property.beds > 0 && (
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <i className="fas fa-bed text-gold text-lg mb-2"></i>
                <p className="text-white font-semibold font-inter">{property.beds}</p>
                <p className="text-white/40 text-xs font-inter">Bedrooms</p>
              </div>
            )}
            {property.baths > 0 && (
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <i className="fas fa-bath text-gold text-lg mb-2"></i>
                <p className="text-white font-semibold font-inter">{property.baths}</p>
                <p className="text-white/40 text-xs font-inter">Bathrooms</p>
              </div>
            )}
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <i className="fas fa-ruler-combined text-gold text-lg mb-2"></i>
              <p className="text-white font-semibold font-inter">{property.sqft.toLocaleString()}</p>
              <p className="text-white/40 text-xs font-inter">Sq Ft</p>
            </div>
            {property.parking > 0 && (
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <i className="fas fa-car text-gold text-lg mb-2"></i>
                <p className="text-white font-semibold font-inter">{property.parking}</p>
                <p className="text-white/40 text-xs font-inter">Parking</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-playfair text-white text-lg font-semibold mb-3">About This Property</h3>
            <p className="text-white/60 text-sm font-inter leading-relaxed">{property.description}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-playfair text-white text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {property.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-inter">
                  <i className="fas fa-check text-gold text-xs"></i>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/2347034755481?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gold hover:bg-gold-light text-navy py-4 rounded-xl text-base font-semibold font-inter transition-all text-center"
            >
              <i className="fab fa-whatsapp mr-2 text-lg"></i>
              Request Private Tour
            </a>
            <a
              href="tel:+2347034755481"
              className="flex-1 border-2 border-white/20 hover:border-gold text-white hover:text-gold py-4 rounded-xl text-base font-semibold font-inter transition-all text-center"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
