import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  isComparing: boolean;
  onToggleCompare: (id: string) => void;
  onViewDetails: (property: Property) => void;
}

export default function PropertyCard({ property, isComparing, onToggleCompare, onViewDetails }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Tonywhite, I'm interested in "${property.title}" listed at ${formatPrice(property.price)}. Please share more details and arrange a private viewing.`
  );

  return (
    <div className={`masonry-item property-card bg-navy-light rounded-2xl overflow-hidden border ${
      isComparing ? 'border-gold ring-2 ring-gold/30' : 'border-white/5'
    }`}>
      {/* Image */}
      <div className="relative img-zoom">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 sm:h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {property.exclusive && (
            <span className="bg-gold text-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Exclusive
            </span>
          )}
          <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
            {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>

        {/* Compare Button */}
        <button
          onClick={() => onToggleCompare(property.id)}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isComparing
              ? 'bg-gold text-navy'
              : 'bg-white/10 backdrop-blur-md text-white hover:bg-gold hover:text-navy border border-white/20'
          }`}
          title="Add to comparison"
        >
          <i className="fas fa-balance-scale text-sm"></i>
        </button>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <p className="font-playfair text-white text-2xl font-bold">{formatPrice(property.price)}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-playfair text-white text-lg font-semibold mb-2 leading-tight">
          {property.title}
        </h3>
        <p className="text-white/50 text-sm font-inter flex items-center gap-2 mb-4">
          <i className="fas fa-map-marker-alt text-gold text-xs"></i>
          {property.location}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/5">
          {property.beds > 0 && (
            <div className="flex items-center gap-1.5 text-white/60">
              <i className="fas fa-bed text-gold text-xs"></i>
              <span className="text-xs font-inter">{property.beds} Beds</span>
            </div>
          )}
          {property.baths > 0 && (
            <div className="flex items-center gap-1.5 text-white/60">
              <i className="fas fa-bath text-gold text-xs"></i>
              <span className="text-xs font-inter">{property.baths} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1.5 text-white/60">
            <i className="fas fa-ruler-combined text-gold text-xs"></i>
            <span className="text-xs font-inter">{property.sqft.toLocaleString()} sqft</span>
          </div>
          {property.parking > 0 && (
            <div className="flex items-center gap-1.5 text-white/60">
              <i className="fas fa-car text-gold text-xs"></i>
              <span className="text-xs font-inter">{property.parking}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => onViewDetails(property)}
            className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold/30 rounded-xl py-3 text-sm font-inter font-medium transition-all duration-300"
          >
            View Details
          </button>
          <a
            href={`https://wa.me/2347034755481?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold/10 hover:bg-gold text-gold hover:text-navy border border-gold/30 hover:border-gold rounded-xl py-3 text-sm font-inter font-medium transition-all duration-300 text-center"
          >
            <i className="fab fa-whatsapp mr-1"></i>
            Private Tour
          </a>
        </div>
      </div>
    </div>
  );
}
