import { TREKS, TREK_SLUGS } from './treks';

export type ProductCategory = 'poster' | 'map' | 'patch';

export interface Product {
  slug: string;
  title: string;
  category: ProductCategory;
  categoryLabel: string;
  image: string;
  imageAlt: string;
  price: number;
  compareAtPrice?: number;
  desc: string;
  details: string[];
  trekSlug?: string;
}

const POSTER_DETAILS = [
  'Route line plotted from the actual trek GPS track',
  'Summit/pass altitude, distance and key camps marked',
  'Digital draft shared within 24 hours, one round of revisions',
  'Print-ready file — framed or unframed, your call',
];

const framePosters: Product[] = TREK_SLUGS.filter((slug) => slug !== 'custom').map((slug) => {
  const trek = TREKS[slug];
  return {
    slug: `frame-your-trek-${slug}`,
    title: `Frame Your Trek — ${trek.title}`,
    category: 'poster',
    categoryLabel: 'Frame Your Trek©',
    image: trek.image,
    imageAlt: trek.imageAlt,
    price: 1499,
    compareAtPrice: 1999,
    desc: `A designer poster of your ${trek.title} route — ${trek.region}. Built from the real track, not a template, so it's specific to the batch you actually walked.`,
    details: POSTER_DETAILS,
    trekSlug: slug,
  };
});

const standaloneProducts: Product[] = [
  {
    slug: 'travelogue-poster',
    title: 'Travelogue Poster',
    category: 'poster',
    categoryLabel: 'Travelogue Poster©',
    image: 'images/ladakh-tsokar-reflections.jpg',
    imageAlt: 'Ladakh road trip landscape used as a Travelogue Poster reference',
    price: 1999,
    desc: 'One poster covering a whole trip — route map plus a curated grid of your own trip photos. Built for multi-stop trips like Ladakh or Spiti, not single treks.',
    details: [
      'Your route across every stop of the trip, plotted to scale',
      'Up to 12 of your own photos laid into the design',
      'Digital draft within 24 hours, one round of revisions',
      'Print-ready file — framed or unframed',
    ],
  },
  {
    slug: 'scratch-map-india',
    title: 'Scratch Map — India',
    category: 'map',
    categoryLabel: 'Scratch map',
    image: 'images/kedarkantha-region.jpg',
    imageAlt: 'Himalayan region used as a reference image for the India scratch map',
    price: 1299,
    desc: 'Scratch off every state, trek base or city you\'ve actually been to. A running record of where you\'ve gone, not where you\'re planning to.',
    details: [
      'A2 scratch-off print, ready to hang unframed',
      'Every Indian state plus major trekking regions marked',
      'Gold foil layer — scratch reveals the print underneath',
    ],
  },
  {
    slug: 'scratch-map-world',
    title: 'Scratch Map — World',
    category: 'map',
    categoryLabel: 'Scratch map',
    image: 'images/ladakh-tsokar-salt.jpg',
    imageAlt: 'Ladakh landscape used as a reference image for the world scratch map',
    price: 1499,
    desc: 'Same idea, world scale — every country you\'ve set foot in, scratched off as you go.',
    details: [
      'A2 scratch-off print, ready to hang unframed',
      'All 195 countries marked',
      'Gold foil layer — scratch reveals the print underneath',
    ],
  },
  {
    slug: 'trail-patch-pack',
    title: 'Trail Patch Pack',
    category: 'patch',
    categoryLabel: 'Bag patch',
    image: 'images/triund-night-camp.jpg',
    imageAlt: 'Backpack at a trail camp, reference image for the trail patch pack',
    price: 149,
    desc: 'Sew-on / iron-on patches for your trek bag — pick from our trek-themed slogans or a plain TrekwithG mark.',
    details: [
      'Set of 3, mixed slogans or all one design — tell us when you order',
      'Iron-on backing, sew-on edge finish',
      '~7cm patch, fits most daypacks and duffels',
    ],
  },
];

export const PRODUCTS: Record<string, Product> = Object.fromEntries(
  [...framePosters, ...standaloneProducts].map((p) => [p.slug, p])
);

export const PRODUCT_SLUGS = Object.keys(PRODUCTS);

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS[slug];
}

export function getAllProducts(): Product[] {
  return PRODUCT_SLUGS.map((slug) => PRODUCTS[slug]);
}
