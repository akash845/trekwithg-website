import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProduct, getAllProducts, PRODUCT_SLUGS } from '@/lib/products';
import { getTrek } from '@/lib/treks';
import { BLUR_DATA_URL } from '@/lib/blurPlaceholder';

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};

  return {
    title: product.title,
    description: `${product.title} — ₹${product.price}. ${product.desc}`,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const trek = product.trekSlug ? getTrek(product.trekSlug) : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.desc,
    image: `https://www.trekwithg.com/${product.image}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <section className="page" id="page-product-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link className="back-link" href="/store">
        &larr; All store items
      </Link>
      <div className="trek-detail-hero">
        <Image
          src={`/${product.image}`}
          alt={product.imageAlt}
          width={1120}
          height={380}
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <span className="placeholder-badge">Reference photo — not the final product</span>
        <div className="trek-detail-hero-overlay">
          <span className="trek-grade grade-easy">{product.categoryLabel}</span>
          <h1>{product.title}</h1>
          {trek && <div className="trek-region">Route from the {trek.title} trek</div>}
        </div>
      </div>

      <div className="store-price" style={{ marginTop: 24, fontSize: '1.3rem' }}>
        <b className="mono">₹{product.price.toLocaleString('en-IN')}</b>
        {product.compareAtPrice && (
          <span className="store-price-strike mono">
            ₹{product.compareAtPrice.toLocaleString('en-IN')}
          </span>
        )}
      </div>
      <p style={{ fontSize: '1.05rem', maxWidth: '68ch', marginTop: 12 }}>{product.desc}</p>

      <div style={{ marginTop: 32 }}>
        <div className="eyebrow">What you get</div>
        <ul className="included" style={{ marginTop: 12 }}>
          {product.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {trek && (
        <p style={{ marginTop: 24, fontSize: '.88rem' }}>
          Based on the <Link href={`/treks/${trek.slug}`}>{trek.title}</Link> route — see the trek
          itself for the full itinerary.
        </p>
      )}

      <div className="founder-card" style={{ marginTop: 48 }}>
        <p style={{ color: 'var(--ink)', fontSize: '1.02rem' }}>
          Want a <strong>{product.title}</strong>?
        </p>
        <a
          className="btn btn-primary"
          href="https://www.instagram.com/trekwith_g/"
          target="_blank"
          rel="noopener"
          style={{ marginTop: 16, alignSelf: 'flex-start' }}
        >
          DM @trekwith_g to order
        </a>
      </div>
    </section>
  );
}
