import type { Metadata } from 'next';
import TrekCard from '@/components/TrekCard';
import { getAllTreks } from '@/lib/treks';

export const metadata: Metadata = {
  title: 'Treks & Expeditions',
  description:
    'Sample departures across Kedarkantha, Hampta Pass, Valley of Flowers, Chadar, Brahmatal and custom expeditions — exact dates confirmed by batch, two weeks out.',
};

export default function TreksPage() {
  const treks = getAllTreks();

  return (
    <section className="page" id="page-treks">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Upcoming &amp; recurring</div>
          <h2>Treks &amp; expeditions</h2>
        </div>
        <p style={{ maxWidth: '32ch', fontSize: '.85rem' }}>
          Sample departures — exact dates confirmed by batch, two weeks out.
        </p>
      </div>
      <div className="trek-grid">
        {treks.map((trek) => (
          <TrekCard key={trek.slug} trek={trek} />
        ))}
      </div>
    </section>
  );
}
