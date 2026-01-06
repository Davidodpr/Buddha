// Shared product data for consistent product information across the app
export const products = [
  {
    id: 1,
    slug: 'neorest-nx1',
    name: 'NEOREST® NX1',
    price: '$12,900',
    category: 'Intelligent Toilet',
    tag: 'Best Seller',
    img: '/product1.png',
    description: 'The NEOREST NX1 represents the pinnacle of bathroom innovation. Combining cutting-edge technology with elegant design, this intelligent toilet delivers an unparalleled experience of comfort and hygiene.',
    features: [
      'EWATER+® self-cleaning technology',
      'TORNADO FLUSH® system',
      'Heated seat with temperature control',
      'Integrated warm air dryer',
      'Automatic lid open/close',
      'Night light illumination',
      'Deodorizer with air purification'
    ],
    specifications: {
      dimensions: '32.5" x 15.5" x 21.5"',
      weight: '121 lbs',
      voltage: '120V AC',
      warranty: '3 years limited'
    }
  },
  {
    id: 2,
    slug: 'neorest-nx2',
    name: 'NEOREST® NX2',
    price: '$17,500',
    category: 'Premium Series',
    tag: 'Premium',
    img: '/product2.png',
    description: 'The NEOREST NX2 elevates the bathroom experience to new heights. Our most advanced intelligent toilet features enhanced bidet functionality and state-of-the-art cleaning technology.',
    features: [
      'Advanced EWATER+® with UV sanitization',
      'TORNADO FLUSH® dual cyclone',
      'Premium heated seat with memory',
      'Oscillating and pulsating spray',
      'Auto-flush with proximity sensor',
      'Ambient lighting system',
      'Bluetooth connectivity',
      'Remote control included'
    ],
    specifications: {
      dimensions: '33" x 16" x 22"',
      weight: '135 lbs',
      voltage: '120V AC',
      warranty: '5 years limited'
    }
  },
  {
    id: 3,
    slug: 'washlet-s7a',
    name: 'WASHLET® S7A',
    price: '$1,548',
    category: 'Bidet Seat',
    tag: 'Popular',
    img: '/product1.png',
    description: 'Transform your existing toilet with the WASHLET S7A bidet seat. Experience the legendary cleansing comfort that has made WASHLET a household name in Japan for over 40 years.',
    features: [
      'PREMIST™ technology',
      'EWATER+® bowl cleaning',
      'Adjustable water temperature',
      'Heated seat',
      'Warm air dryer',
      'Automatic deodorizer',
      'Soft-close lid'
    ],
    specifications: {
      dimensions: '21" x 15" x 5.5"',
      weight: '15 lbs',
      voltage: '120V AC',
      warranty: '2 years limited'
    }
  },
  {
    id: 4,
    slug: 'neorest-rh',
    name: 'NEOREST® RH',
    price: '$10,200',
    category: 'Intelligent Toilet',
    tag: 'Classic',
    img: '/product2.png',
    description: 'The NEOREST RH combines timeless design with modern innovation. This intelligent toilet features a classic silhouette enhanced with advanced cleaning and comfort technology.',
    features: [
      'EWATER+® technology',
      'TORNADO FLUSH® system',
      'Heated seat',
      'Warm air dryer',
      'Automatic lid',
      'Deodorizer',
      'SoftClose® lid'
    ],
    specifications: {
      dimensions: '31" x 15.5" x 21"',
      weight: '110 lbs',
      voltage: '120V AC',
      warranty: '3 years limited'
    }
  }
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};
