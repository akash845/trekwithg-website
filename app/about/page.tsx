import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'TrekwithG started as one person\'s weekend habit that friends kept asking to join — now fixed departures across Uttarakhand, Himachal and Ladakh, led by founder Akash.',
};

export default function AboutPage() {
  return (
    <section className="page" id="page-about">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">About</div>
          <h2>Built on trail, not in an office</h2>
        </div>
      </div>
      <div className="about-grid">
        <div>
          <p>
            TrekwithG started the way most good trekking outfits do — as one person&apos;s weekend habit
            that friends kept asking to join. What began as a WhatsApp group coordinating a Kedarkantha
            trip turned into fixed departures across Uttarakhand, Himachal and Ladakh.
          </p>
          <p>
            The rule that hasn&apos;t changed since batch one: every route gets walked and re-walked by
            the team before it&apos;s sold. If a campsite runs dry or a bridge washes out, the itinerary
            changes before your money does.
          </p>
          <p>
            TrekwithG also runs joint expeditions with regional partners — including{' '}
            <strong>Moksha Adventures</strong> on select high-altitude routes — to bring in local crew
            who know a valley&apos;s weather better than any forecast.
          </p>
        </div>
        <div className="founder-card">
          <div className="eyebrow">Founder</div>
          <div className="founder-top">
            <svg className="founder-avatar" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="32" fill="var(--ice-soft)" />
              <path d="M6 54 L24 20 L32 34 L38 24 L58 54 Z" fill="var(--ice)" />
            </svg>
            <div>
              <div className="founder-name">Akash</div>
              <div className="founder-handle">@___akashh____</div>
            </div>
          </div>
          <p>
            Leads route planning and the odd last-minute weather call. Usually reachable somewhere
            between a trailhead and a signal tower.
          </p>
          <div className="badge-row" style={{ marginTop: 14 }}>
            <span className="badge">Wilderness first-aid trained</span>
            <span className="badge">6+ years on trail</span>
          </div>
        </div>
      </div>
    </section>
  );
}
