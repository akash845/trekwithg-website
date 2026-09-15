import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllTreks } from '@/lib/treks';

export const metadata: Metadata = {
  title: 'Compare Treks',
  description:
    'Side-by-side comparison of every TrekwithG departure by grade, duration, max altitude, distance and season.',
};

export default function ComparePage() {
  const treks = getAllTreks().filter((t) => t.slug !== 'custom');

  return (
    <section className="page" id="page-compare">
      <Link className="back-link" href="/treks">
        &larr; All treks
      </Link>
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Side by side</div>
          <h2>Compare treks</h2>
        </div>
        <p style={{ maxWidth: '32ch', fontSize: '.85rem' }}>
          Grade, duration, altitude and season for every fixed departure.
        </p>
      </div>
      <div className="compare-wrap">
        <table className="compare-table">
          <caption>Trek comparison</caption>
          <thead>
            <tr>
              <th scope="col">Trek</th>
              <th scope="col">Region</th>
              <th scope="col">Grade</th>
              <th scope="col">Duration</th>
              <th scope="col">Max altitude</th>
              <th scope="col">Distance</th>
              <th scope="col">Season</th>
            </tr>
          </thead>
          <tbody>
            {treks.map((trek) => (
              <tr key={trek.slug}>
                <td>
                  <Link href={`/treks/${trek.slug}`}>{trek.title}</Link>
                </td>
                <td className="mono">{trek.region}</td>
                <td className="mono">{trek.gradeLabel}</td>
                <td className="mono">{trek.durationDays ? `${trek.durationDays}D` : '—'}</td>
                <td className="mono">{trek.maxAltitudeM ? `${trek.maxAltitudeM}m` : '—'}</td>
                <td className="mono">{trek.distanceKm || '—'}</td>
                <td className="mono">{trek.season || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
