const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};
const links = [
  { path: '/', title: 'Home' },
  { path: '/register', title: 'Register' },
  { path: '/login', title: 'Login' },
  { path: '/services', title: 'Services' },

  { path: '/contact', title: 'Contact Us' },
];

const bannerFeatures = [
  {
    img: '/v3.png',
    title: 'Free Delivery',
    desc: 'on orders over $5!',
  },
  {
    img: '/v4.png',
    title: 'Certified Products',
    desc: '100% guaranteed',
  },
  {
    img: '/v2.png',
    title: 'Big savings',
    desc: 'Get the best price',
  },
];

const testimonials = [
  {
    img: '/quotes.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
    author: 'Guy Hawkins',
    job: 'CEO Founder',
    id: generateId(),
  },
  {
    img: '/quotes.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
    author: 'Cameron Wilson',
    job: 'CEO Founder',
    id: generateId(),
  },
  {
    img: '/quotes.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
    author: 'Cody Fisher',
    job: 'CEO Founder',
    id: generateId(),
  },
  {
    img: '/quotes.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
    author: 'Cody Fisher',
    job: 'CEO Founder',
    id: generateId(),
  },
  {
    img: '/quotes.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
    author: 'Cody Fisher',
    job: 'CEO Founder',
    id: generateId(),
  },
  {
    img: '/quotes.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
    author: 'Cody Fisher',
    job: 'CEO Founder',
    id: generateId(),
  },
];

const bestSelling = [
  {
    img: '/best3.png',
    subtitle: 'Water Softeners and filters',
    title: '3M Appliance Protection System IAS430SS',
    price: 11999.0,
    reviews: 10,
    stars: 3.5,
    category: 'water-softeners and filters',
    slug: 'water softerners and filters',
    stock: 3,
  },
  {
    img: '/best2.png',
    subtitle: 'Heat Pumps',
    title: '300 LPD Solarizer Non pressure hybrid heat',
    price: 160000.0,
    reviews: 8,
    stars: 4.5,
    category: 'Heat Pumps',
    slug: 'heat pumps',
    stock: 3,
  },
  {
    img: '/best1.png',
    subtitle: ' Pumps and Controllers',
    title: 'Natureraise Automatic Water Level Controller',
    price: 160000.0,
    reviews: 1,
    stars: 1.5,
    category: ' Pumps and controllers',
    slug: 'pumps and controllers',
    stock: 0,
  },
];

const homecarts = [
  {
    img: '/ac.png',
    title: 'AC and Inverters',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },
  {
    img: '/ups.png',
    title: 'UPS and Batteries',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },
  {
    img: '/solarlights.png',
    title: 'Solar Lighting',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },
  {
    img: '/pumpc.png',
    title: 'Pumps and Controllers',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },

  {
    img: '/rofilters.png',
    title: 'RO and Filters',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },
  {
    img: '/filters.png',
    title: 'Water Softeners and Filters',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },
  {
    img: '/heatpumps.png',
    title: 'Heat Pumps',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },
  {
    img: '/solar.png',
    title: 'Solar water Heater',
    desc: 'Discover efficient AC and inverter solutions for your comfort and energy needs.',
  },
];
export { links, bannerFeatures, homecarts, testimonials, bestSelling };
