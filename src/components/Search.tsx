import { FilterState } from '../types';
import { locations, states } from '../data/properties';

interface SearchProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  resultCount: number;
}

export default function Search({ filters, onFilterChange, resultCount }: SearchProps) {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    onFilterChange({
      type: '',
      priceMin: 50000000,
      priceMax: 500000000,
      location: '',
      beds: 0,
      baths: 0,
      status: ''
    });
  };

  const formatPrice = (value: number) => {
    if (value >= 1000000000) return `₦${(value / 1000000000).toFixed(1)}B`;
    if (value >= 1000000) return `₦${(value / 1000000).toFixed(0)}M`;
    return `₦${value.toLocaleString()}`;
  };

  return (
    <div className="bg-navy-light/50 backdrop-blur-xl border border-gold/10 rounded-2xl p-6 mb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h3 className="font-playfair text-white text-xl font-semibold">Find Your Dream Property</h3>
          <p className="text-white/50 text-sm font-inter mt-1">{resultCount} exclusive properties available</p>
        </div>
        <button
          onClick={resetFilters}
          className="text-gold hover:text-gold-light text-sm font-inter font-medium mt-2 sm:mt-0 transition-colors"
        >
          <i className="fas fa-undo mr-2"></i>Reset Filters
        </button>
      </div>

      {/* Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Property Type */}
        <div>
          <label className="text-white/60 text-xs font-inter uppercase tracking-wider mb-2 block">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => updateFilter('type', e.target.value)}
            className="w-full bg-navy border border-white/10 text-white rounded-xl px-4 py-3 text-sm font-inter focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">All Types</option>
            <option value="residential">Luxury Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="text-white/60 text-xs font-inter uppercase tracking-wider mb-2 block">Location</label>
          <select
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="w-full bg-navy border border-white/10 text-white rounded-xl px-4 py-3 text-sm font-inter focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            {locations.map(loc => (
              <option key={loc} value={loc === 'All Locations' ? '' : loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Beds */}
        <div>
          <label className="text-white/60 text-xs font-inter uppercase tracking-wider mb-2 block">Bedrooms</label>
          <select
            value={filters.beds}
            onChange={(e) => updateFilter('beds', Number(e.target.value))}
            className="w-full bg-navy border border-white/10 text-white rounded-xl px-4 py-3 text-sm font-inter focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value={0}>Any</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
            <option value={6}>6+</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="text-white/60 text-xs font-inter uppercase tracking-wider mb-2 block">Status</label>
          <select
            value={filters.status}
            onChange={(e) => updateFilter('status', e.target.value)}
            className="w-full bg-navy border border-white/10 text-white rounded-xl px-4 py-3 text-sm font-inter focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">All Status</option>
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div className="mt-6 pt-6 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="text-white/60 text-xs font-inter uppercase tracking-wider whitespace-nowrap">Price Range</label>
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <div className="flex-1 w-full">
              <input
                type="range"
                min={50000000}
                max={500000000}
                step={10000000}
                value={filters.priceMin}
                onChange={(e) => updateFilter('priceMin', Number(e.target.value))}
                className="w-full"
              />
              <span className="text-gold text-xs font-inter mt-1 block">Min: {formatPrice(filters.priceMin)}</span>
            </div>
            <span className="text-white/30 hidden sm:block">—</span>
            <div className="flex-1 w-full">
              <input
                type="range"
                min={50000000}
                max={500000000}
                step={10000000}
                value={filters.priceMax}
                onChange={(e) => updateFilter('priceMax', Number(e.target.value))}
                className="w-full"
              />
              <span className="text-gold text-xs font-inter mt-1 block text-right sm:text-left">Max: {formatPrice(filters.priceMax)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
