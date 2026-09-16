import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LightboxGallery from '@/components/Lightbox';
import PrintButton from '@/components/PrintButton';
import RouteMap from '@/components/RouteMap';
import { getTrek, TREK_SLUGS } from '@/lib/treks';
import { BLUR_DATA_URL } from '@/lib/blurPlaceholder';

export function generateStaticParams() {
  return TREK_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const trek = getTrek(params.slug);
  if (!trek) return {};

  return {
    title: trek.title,
    description: `${trek.title} — ${trek.region}. ${trek.desc}`,
  };
}

export default function TrekDetailPage({ params }: { params: { slug: string } }) {
  const trek = getTrek(params.slug);
  if (!trek) notFound();

  const extraImages = trek.images.filter((src) => src !== trek.image);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: trek.title,
    description: trek.desc,
    touristType: trek.gradeLabel,
    ...(trek.durationDays
      ? { itinerary: { '@type': 'ItemList', numberOfItems: trek.durationDays } }
      : {}),
    provider: {
      '@type': 'Organization',
      name: 'TrekwithG',
      url: 'https://www.instagram.com/trekwith_g/',
    },
  };

  return (
    <section className="page" id="page-trek-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link className="back-link" href="/treks">
        &larr; All treks
      </Link>
      <div className="trek-detail-hero">
        <Image
          src={`/${trek.image}`}
          alt={trek.title}
          width={1120}
          height={380}
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="trek-detail-hero-overlay">
          <span className={`trek-grade ${trek.grade}`}>{trek.gradeLabel}</span>
          <h1>{trek.title}</h1>
          <div className="trek-region">{trek.region}</div>
        </div>
      </div>
      {trek.imageCredit && (
        <div style={{ fontSize: '0.75rem', opacity: 0.6, marginTop: 6 }}>{trek.imageCredit}</div>
      )}
      <div className="trek-detail-stats">
        {trek.detailStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <b className="mono">{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '1.05rem', maxWidth: '68ch', marginTop: 24 }}>{trek.desc}</p>

      {trek.batchDates && trek.batchDates.length > 0 && (
        <div style={{ marginTop: 28 }}>
          <div className="eyebrow">Upcoming batches</div>
          <div className="batch-dates">
            {trek.batchDates.map((date) => (
              <span className="batch-date-chip" key={date}>
                {date}
              </span>
            ))}
          </div>
        </div>
      )}

      <RouteMap trek={trek} />
      <div className="no-print" style={{ marginTop: 20 }}>
        <PrintButton />
      </div>
      <LightboxGallery
        className="td-gallery"
        imgWidth={280}
        imgHeight={210}
        images={extraImages.map((src) => ({ src, alt: `${trek.title} — trail photo` }))}
      />

      <div className="section-head" style={{ marginTop: 52 }}>
        <div>
          <div className="eyebrow">{trek.itineraryEyebrow || 'Day by day'}</div>
          <h2>{trek.itineraryHeading || 'Itinerary'}</h2>
        </div>
        <p style={{ maxWidth: '34ch', fontSize: '.82rem' }}>
          {trek.itineraryNote || 'Sample plan — exact days flex with weather, snow line and group pace.'}
        </p>
      </div>
      <ol className="itinerary">
        {trek.itinerary.map((step) => (
          <li key={step.day}>
            <div className="day">{step.day}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      {(trek.included || trek.excluded) && (
        <div style={{ marginTop: 48 }}>
          <div className="section-head">
            <div>
              <div className="eyebrow">Cost breakdown</div>
              <h2>What&apos;s included</h2>
            </div>
          </div>
          <div className="inc-exc-grid">
            {trek.included && (
              <ul className="included">
                {trek.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {trek.excluded && (
              <ul className="excluded">
                {trek.excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <div className="founder-card" style={{ marginTop: 48 }}>
        <p style={{ color: 'var(--ink)', fontSize: '1.02rem' }}>
          Ready to lock a date for <strong>{trek.title}</strong>?
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
