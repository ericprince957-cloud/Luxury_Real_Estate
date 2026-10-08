export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  state: string;
  type: 'residential' | 'commercial' | 'industrial';
  status: 'for-sale' | 'for-rent' | 'sold';
  beds: number;
  baths: number;
  sqft: number;
  parking: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  exclusive: boolean;
  featured: boolean;
}

export interface FilterState {
  type: string;
  priceMin: number;
  priceMax: number;
  location: string;
  beds: number;
  baths: number;
  status: string;
}
