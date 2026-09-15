import type { MetadataRoute } from 'next';
import { BLOG_SLUGS } from '@/lib/blog';
import { TREK_SLUGS } from '@/lib/treks';
import { PRODUCT_SLUGS } from '@/lib/products';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trekwithg.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/treks',
    '/treks/compare',
    '/store',
    '/blog',
    '/gallery',
    '/faq',
    '/gear',
    '/contact',
    '/credits',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const trekRoutes = TREK_SLUGS.map((slug) => ({
    url: `${SITE_URL}/treks/${slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/store/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...trekRoutes, ...blogRoutes, ...productRoutes];
}
