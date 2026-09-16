import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAdventure, ADVENTURE_SLUGS, categoryGrade } from '@/lib/adventures';
import { BLUR_DATA_URL } from '@/lib/blurPlaceholder';

export function generateStaticParams() {
  return ADVENTURE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const adventure = getAdventure(params.slug);
  if (!adventure) return {};

  return {
    title: adventure.title,
    description: `${adventure.title} — ${adventure.region}. ${adventure.desc}`,
  };
}

export default function AdventureDetailPage({ params }: { params: { slug: string } }) {
  const adventure = getAdventure(params.slug);
  if (!adventure) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: adventure.title,
    description: adventure.desc,
    touristType: adventure.levelLabel,
    provider: {
      '@type': 'Organization',
      name: 'TrekwithG',
      url: 'https://www.instagram.com/trekwith_g/',
    },
  };

  return (
    <section className="page" id="page-adventure-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link className="back-link" href="/adventures">
        &larr; All adventure sports
      </Link>
      <div className="trek-detail-hero">
        <Image
          src={`/${adventure.image}`}
          alt={adventure.imageAlt}
          width={1120}
          height={380}
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="trek-detail-hero-overlay">
          <span className={`trek-grade ${categoryGrade(adventure.category)}`}>{adventure.categoryLabel}</span>
          <h1>{adventure.title}</h1>
          <div className="trek-region">{adventure.region}</div>
        </div>
      </div>
      <div className="trek-detail-stats">
        {adventure.detailStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <b className="mono">{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '1.05rem', maxWidth: '68ch', marginTop: 24 }}>{adventure.desc}</p>
      <p style={{ marginTop: 12, fontSize: '.85rem', fontFamily: "'IBM Plex Mono',monospace", color: 'var(--mist)' }}>
        {adventure.levelLabel}
      </p>

      <div className="section-head" style={{ marginTop: 52 }}>
        <div>
          <div className="eyebrow">What to expect</div>
          <h2>{adventure.experienceHeading || 'The experience'}</h2>
        </div>
        <p style={{ maxWidth: '34ch', fontSize: '.82rem' }}>
          {adventure.experienceNote || 'Sample plan — exact flow can shift with weather, tides or operator availability.'}
        </p>
      </div>
      <ol className="itinerary">
        {adventure.experience.map((step) => (
          <li key={step.day}>
            <div className="day">{step.day}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      {(adventure.included || adventure.excluded) && (
        <div style={{ marginTop: 48 }}>
          <div className="section-head">
            <div>
              <div className="eyebrow">Cost breakdown</div>
              <h2>What&apos;s included</h2>
            </div>
          </div>
          <div className="inc-exc-grid">
            {adventure.included && (
              <ul className="included">
                {adventure.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {adventure.excluded && (
              <ul className="excluded">
                {adventure.excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <div className="founder-card" style={{ marginTop: 48 }}>
        <p style={{ color: 'var(--ink)', fontSize: '1.02rem' }}>
          Ready to book <strong>{adventure.title}</strong>?
        </p>
        <a
          className="btn btn-primary"
          href="https://www.instagram.com/trekwith_g/"
          target="_blank"
          rel="noopener"
          style={{ marginTop: 16, alignSelf: 'flex-start' }}
        >
          DM @trekwith_g
        </a>
      </div>
    </section>
  );
}
