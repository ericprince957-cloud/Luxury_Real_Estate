import { Property } from '../types';

interface ComparisonModalProps {
  properties: Property[];
  onClose: () => void;
}

export default function ComparisonModal({ properties, onClose }: ComparisonModalProps) {
  const formatPrice = (price: number) => `₦${price.toLocaleString()}`;

  const specs = [
    { label: 'Price', key: 'price', format: (p: Property) => formatPrice(p.price) },
    { label: 'Location', key: 'location', format: (p: Property) => p.location },
    { label: 'Type', key: 'type', format: (p: Property) => p.type.charAt(0).toUpperCase() + p.type.slice(1) },
    { label: 'Bedrooms', key: 'beds', format: (p: Property) => p.beds > 0 ? `${p.beds}` : 'N/A' },
    { label: 'Bathrooms', key: 'baths', format: (p: Property) => p.baths > 0 ? `${p.baths}` : 'N/A' },
    { label: 'Area', key: 'sqft', format: (p: Property) => `${p.sqft.toLocaleString()} sqft` },
    { label: 'Parking', key: 'parking', format: (p: Property) => p.parking > 0 ? `${p.parking} spaces` : 'N/A' },
    { label: 'Status', key: 'status', format: (p: Property) => p.status === 'for-sale' ? 'For Sale' : 'For Rent' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-sm"></div>
      <div
        className="relative bg-navy-light border border-gold/20 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-auto comparison-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-navy-light border-b border-white/5 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="font-playfair text-white text-2xl font-bold">Property Comparison</h2>
            <p className="text-white/50 text-sm font-inter mt-1">Side-by-side analysis of {properties.length} properties</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-6">
          {/* Images Row */}
          <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: `200px repeat(${properties.length}, 1fr)` }}>
            <div></div>
            {properties.map(property => (
              <div key={property.id} className="text-center">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-32 object-cover rounded-xl mb-3"
                />
                <h4 className="font-playfair text-white text-sm font-semibold leading-tight">{property.title}</h4>
              </div>
            ))}
          </div>

          {/* Specs Rows */}
          <div className="space-y-0">
            {specs.map((spec, index) => (
              <div
                key={spec.key}
                className={`grid gap-4 items-center ${index % 2 === 0 ? 'bg-white/[0.02]' : ''} rounded-lg`}
                style={{ gridTemplateColumns: `200px repeat(${properties.length}, 1fr)` }}
              >
                <div className="text-white/60 text-sm font-inter font-medium py-3 px-4">
                  {spec.label}
                </div>
                {properties.map(property => (
                  <div key={property.id} className="text-white text-sm font-inter py-3 px-4 text-center font-medium">
                    {spec.format(property)}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {properties.map(property => {
              const msg = encodeURIComponent(
                `Hi Tonywhite, I'd like to compare properties and schedule a viewing for "${property.title}" at ${formatPrice(property.price)}.`
              );
              return (
                <a
                  key={property.id}
                  href={`https://wa.me/2347034755481?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-full text-sm font-semibold font-inter transition-all text-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Inquire: {property.title.split(' ').slice(0, 3).join(' ')}...
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
