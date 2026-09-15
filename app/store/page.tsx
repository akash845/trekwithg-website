import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Store',
  description:
    'Frame Your Trek posters, Travelogue Posters, scratch maps and trail patches — trek memorabilia built from your actual route, not a template.',
};

export default function StorePage() {
  const products = getAllProducts();

  return (
    <section className="page" id="page-store">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Journey. Remember. Celebrate.</div>
          <h2>Store</h2>
        </div>
        <p style={{ maxWidth: '34ch', fontSize: '.85rem' }}>
          Trek memorabilia built from the route you actually walked — not a template. Order by DM, draft
          in 24 hours.
        </p>
      </div>
      <div className="trek-grid">
        {products.map((product) => (
          <Link className="trek-card" href={`/store/${product.slug}`} key={product.slug}>
            <div className="trek-art">
              <Image src={`/${product.image}`} alt={product.imageAlt} width={280} height={132} />
            </div>
            <div className="trek-body">
              <span className="trek-grade grade-easy">{product.categoryLabel}</span>
              <div className="trek-title">{product.title}</div>
              <div className="store-price">
                <b className="mono">₹{product.price.toLocaleString('en-IN')}</b>
                {product.compareAtPrice && (
                  <span className="store-price-strike mono">
                    ₹{product.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              <p className="trek-desc">{product.desc}</p>
              <div className="trek-note">DM @trekwith_g to order</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
