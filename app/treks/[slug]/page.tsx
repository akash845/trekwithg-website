import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import LightboxGallery from '@/components/Lightbox';
import RouteMap from '@/components/RouteMap';
import { getTrek, TREK_SLUGS } from '@/lib/treks';

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

  return (
    <section className="page" id="page-trek-detail">
      <Link className="back-link" href="/treks">
        &larr; All treks
      </Link>
      <div className="trek-detail-hero">
        <Image src={`/${trek.image}`} alt={trek.title} width={1120} height={380} priority />
        <div className="trek-detail-hero-overlay">
          <span className={`trek-grade ${trek.grade}`}>{trek.gradeLabel}</span>
          <h1>{trek.title}</h1>
          <div className="trek-region">{trek.region}</div>
        </div>
      </div>
      <div className="trek-detail-stats">
        {trek.detailStats.map((stat) => (
          <div className="stat" key={stat.label}>
            <b className="mono">{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '1.05rem', maxWidth: '68ch', marginTop: 24 }}>{trek.desc}</p>
      <RouteMap trek={trek} />
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
