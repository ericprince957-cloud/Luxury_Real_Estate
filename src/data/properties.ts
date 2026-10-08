import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: '5-Bed Luxury Duplex in GRA Umuahia',
    price: 120000000,
    location: 'GRA, Umuahia',
    state: 'Abia',
    type: 'residential',
    status: 'for-sale',
    beds: 5,
    baths: 6,
    sqft: 4500,
    parking: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    ],
    description: 'An architectural masterpiece in the heart of GRA Umuahia. This stunning 5-bedroom duplex features imported Italian marble flooring, a chef\'s kitchen with Miele appliances, and a resort-style pool.',
    features: ['Swimming Pool', 'Smart Home System', 'Italian Marble', 'Generator House', 'Boys Quarter', 'Perimeter Fence'],
    exclusive: true,
    featured: true
  },
  {
    id: '2',
    title: 'Executive 4-Bed Villa with Pool',
    price: 185000000,
    location: 'Trans Amadi, Port Harcourt',
    state: 'Rivers',
    type: 'residential',
    status: 'for-sale',
    beds: 4,
    baths: 5,
    sqft: 5200,
    parking: 4,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    ],
    description: 'A breathtaking villa with panoramic views, infinity pool, and world-class finishes. Located in the most prestigious neighborhood in Port Harcourt.',
    features: ['Infinity Pool', 'Home Cinema', 'Wine Cellar', 'Elevator', 'Staff Quarters', 'Landscaped Garden'],
    exclusive: true,
    featured: true
  },
  {
    id: '3',
    title: 'Commercial Plaza - Prime Location',
    price: 350000000,
    location: 'Abaji Expressway, Aba',
    state: 'Abia',
    type: 'commercial',
    status: 'for-sale',
    beds: 0,
    baths: 8,
    sqft: 12000,
    parking: 50,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    ],
    description: 'A 4-story commercial complex with 24 retail spaces, 12 office suites, and basement parking for 50 vehicles. Ideal for investors seeking high-yield commercial property.',
    features: ['24 Retail Spaces', '12 Office Suites', '50-Car Parking', 'Central AC', 'Fire Safety System', 'CCTV'],
    exclusive: false,
    featured: true
  },
  {
    id: '4',
    title: '3-Bed Penthouse with City Views',
    price: 95000000,
    location: 'New GRA, Owerri',
    state: 'Imo',
    type: 'residential',
    status: 'for-sale',
    beds: 3,
    baths: 4,
    sqft: 3200,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    ],
    description: 'Stunning penthouse apartment with floor-to-ceiling windows offering breathtaking city views. Features a private rooftop terrace and premium finishes throughout.',
    features: ['Rooftop Terrace', 'Floor-to-Ceiling Windows', 'Designer Kitchen', 'Walk-in Closet', '24/7 Security', 'Gym Access'],
    exclusive: true,
    featured: false
  },
  {
    id: '5',
    title: '5 Hectares Industrial Land',
    price: 250000000,
    location: 'Aba-Owerri Expressway',
    state: 'Abia',
    type: 'industrial',
    status: 'for-sale',
    beds: 0,
    baths: 0,
    sqft: 217800,
    parking: 0,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
    ],
    description: 'Prime industrial land with C of O, situated along the major Aba-Owerri expressway. Perfect for manufacturing, warehousing, or logistics hub development.',
    features: ['C of O', 'Road Access', 'Flat Terrain', 'Water Source', 'Power Access', 'Zoned Industrial'],
    exclusive: false,
    featured: false
  },
  {
    id: '6',
    title: '6-Bed Mansion with Tennis Court',
    price: 450000000,
    location: 'Old GRA, Port Harcourt',
    state: 'Rivers',
    type: 'residential',
    status: 'for-sale',
    beds: 6,
    baths: 7,
    sqft: 8000,
    parking: 6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    ],
    description: 'An extraordinary mansion on 2 acres with tennis court, Olympic-size pool, and separate guest house. The epitome of luxury living in the Niger Delta.',
    features: ['Tennis Court', 'Olympic Pool', 'Guest House', 'Home Theater', 'Wine Cellar', 'Helipad'],
    exclusive: true,
    featured: true
  },
  {
    id: '7',
    title: 'Modern 4-Bed Terrace Duplex',
    price: 65000000,
    location: 'Eziukwu, Aba',
    state: 'Abia',
    type: 'residential',
    status: 'for-sale',
    beds: 4,
    baths: 4,
    sqft: 2800,
    parking: 2,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80'
    ],
    description: 'Contemporary terrace duplex with modern finishes, open-plan living, and a private garden. Located in a serene, gated community with 24-hour security.',
    features: ['Gated Community', 'Open Plan Living', 'Private Garden', 'POP Ceiling', 'Water Treatment', 'Intercom'],
    exclusive: false,
    featured: false
  },
  {
    id: '8',
    title: 'Luxury Office Complex',
    price: 280000000,
    location: 'Abakaliki Expressway, Umuahia',
    state: 'Abia',
    type: 'commercial',
    status: 'for-sale',
    beds: 0,
    baths: 12,
    sqft: 15000,
    parking: 40,
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80'
    ],
    description: 'State-of-the-art office complex with glass facade, modern conference rooms, and ample parking. Ideal for corporate headquarters or co-working space.',
    features: ['Glass Facade', 'Conference Rooms', '40-Car Parking', 'Backup Power', 'Fiber Optic', 'Security'],
    exclusive: false,
    featured: true
  },
  {
    id: '9',
    title: 'Waterfront 5-Bed Estate Home',
    price: 220000000,
    location: 'Woji, Port Harcourt',
    state: 'Rivers',
    type: 'residential',
    status: 'for-sale',
    beds: 5,
    baths: 6,
    sqft: 6000,
    parking: 4,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80'
    ],
    description: 'Exquisite waterfront property with private dock, infinity pool overlooking the creek, and lush tropical landscaping. A true sanctuary of luxury.',
    features: ['Waterfront', 'Private Dock', 'Infinity Pool', 'Tropical Garden', 'Smart Home', 'Staff Quarters'],
    exclusive: true,
    featured: false
  }
];

export const locations = [
  'All Locations',
  'GRA, Umuahia',
  'Trans Amadi, Port Harcourt',
  'Abaji Expressway, Aba',
  'New GRA, Owerri',
  'Aba-Owerri Expressway',
  'Old GRA, Port Harcourt',
  'Eziukwu, Aba',
  'Abakaliki Expressway, Umuahia',
  'Woji, Port Harcourt'
];

export const states = ['All States', 'Abia', 'Imo', 'Rivers'];
