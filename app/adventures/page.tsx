import type { Metadata } from 'next';
import AdventuresFilter from '@/components/AdventuresFilter';
import { getAllAdventures } from '@/lib/adventures';

export const metadata: Metadata = {
  title: 'Adventure Sports',
  description:
    'Scuba diving, snorkeling, surfing, white-water rafting, kayaking, skydiving, paragliding, bungee jumping, rock climbing, desert safaris and mountain biking — booked by DM.',
};

export default function AdventuresPage() {
  const adventures = getAllAdventures();

  return (
    <section className="page" id="page-adventures">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Beyond the trail</div>
          <h2>Adventure sports</h2>
        </div>
        <p style={{ maxWidth: '34ch', fontSize: '.85rem' }}>
          Water, air and land activities across India — booked the same way as our treks, by DM.
        </p>
      </div>
      <AdventuresFilter adventures={adventures} />
    </section>
  );
}
