import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Founders Trek',
  description:
    'A small-batch, invite-only trekking meetup for startup founders in Thrissur, run by TrekwithG. Apply for the next hike.',
};

const STEPS = [
  {
    n: '01',
    title: 'Apply',
    desc: 'Two-minute form. Tell us what you’re building and where you’re at.',
  },
  {
    n: '02',
    title: 'Get an invite',
    desc: 'If there’s a spot in the batch, we’ll confirm by WhatsApp or email.',
  },
  {
    n: '03',
    title: 'Show up, hike, talk shop',
    desc: 'No agenda beyond the trail. Conversations happen where they happen.',
  },
];

const WHY_POINTS = [
  {
    title: 'No stage, no pitching',
    desc: 'Nobody’s presenting a deck. If business comes up, it comes up on the trail, not at a mic.',
  },
  {
    title: 'Founders helping founders',
    desc: 'Some of us have shipped, some are still figuring out what to build or how to start. That gap is the whole point — the hike is where it closes, not a place to sell.',
  },
  {
    title: 'Small batch, on purpose',
    desc: 'Capped at ~15 people a hike, so everyone actually gets a conversation, not just a nod.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Best conversations I’ve had about my product happened four kilometres in, not at a demo day.',
    attribution: 'Placeholder — swap in after batch 1',
  },
  {
    quote: 'No pitching, no lanyards. Just founders who happened to also be out of breath.',
    attribution: 'Placeholder — swap in after batch 1',
  },
  {
    quote: 'Left with two people I’m still talking to and zero business cards.',
    attribution: 'Placeholder — swap in after batch 1',
  },
];

function MicOffIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 9v3a3 3 0 0 0 4.44 2.63M12 5a3 3 0 0 1 3 3v1M8 19h8M12 16.9V19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ClusterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5.5" cy="16" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="16" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9.4V12M12 12l-4.8 3M12 12l4.8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function RidgeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 17l4.5-6.5L9 14l3.5-8L15 12l2-2.5L22 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

const WHY_ICONS = [MicOffIcon, ClusterIcon, RidgeIcon];

function MountainGlyph() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" aria-hidden="true">
      <circle cx="94" cy="16" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4 52l24-30 14 16 10-12 12 14 8-9 16 21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FoundersPage() {
  return (
    <section className="page" id="page-founders">
      <div className="founders-hero">
        <svg
          className="founders-hero-contours"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none" stroke="#EEF1EA" strokeWidth="1">
            <path d="M-20 240 Q120 190 260 220 T560 195 T860 225" opacity=".16" />
            <path d="M-20 205 Q140 150 280 180 T580 155 T860 185" opacity=".14" />
            <path d="M-20 170 Q150 120 300 145 T600 120 T860 150" opacity=".12" />
            <path d="M-20 135 Q160 90 320 110 T620 90 T860 115" opacity=".10" />
          </g>
        </svg>
        <svg
          className="founders-hero-route"
          width="180"
          height="220"
          viewBox="0 0 180 220"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 20 L80 60 L50 120 L130 160 L110 200"
            stroke="#D9531B"
            strokeWidth="2"
            strokeDasharray="1 10"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="5" fill="#D9531B" />
          <circle cx="50" cy="120" r="5" fill="#EEF1EA" fillOpacity=".5" />
          <circle cx="110" cy="200" r="6" fill="none" stroke="#D9531B" strokeWidth="2" />
          <path d="M20 20 V4 L30 10 L20 15" fill="#EEF1EA" fillOpacity=".7" />
        </svg>
        <div className="founders-hero-inner">
          <div className="eyebrow">TrekwithG &times; Founders</div>
          <h2>Founders helping founders find their footing</h2>
          <p>
            An invite-capped hiking meetup for startup founders in Thrissur. Some of us have a
            clear roadmap, some are still working out how to build — the hike is where that gets
            talked through, on a trail instead of a stage.
          </p>
          <div className="hero-cta" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" href="/founders/apply">
              Apply for the next hike
            </Link>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">How it works</div>
            <h2>Three steps</h2>
          </div>
        </div>
        <div className="founders-steps">
          {STEPS.map((step) => (
            <div className="founders-step" key={step.n}>
              <span className="founders-step-n mono">{step.n}</span>
              <div className="founders-step-title">{step.title}</div>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Why this, not another networking event</div>
            <h2>What&apos;s different</h2>
          </div>
        </div>
        <div className="founders-why-grid">
          {WHY_POINTS.map((point, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <div className="founders-why-card" key={point.title}>
                <Icon />
                <div className="founders-why-title">{point.title}</div>
                <p>{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Next hike</div>
            <h2>Upcoming</h2>
          </div>
        </div>
        <div className="founders-event-card">
          <div className="founders-stamp">Invite
            <br />
            only
          </div>
          <div className="founders-event-main">
            <div className="founders-event-title">Founders Trek &mdash; Batch 01</div>
            <ul className="contact-list">
              <li>
                <span className="k">Date</span>
                <span className="v">To be confirmed</span>
              </li>
              <li>
                <span className="k">Location</span>
                <span className="v">Vilangan Hills, Thrissur</span>
              </li>
              <li>
                <span className="k">Cap</span>
                <span className="v">15 founders</span>
              </li>
              <li>
                <span className="k">Spots remaining</span>
                <span className="v">Open for applications</span>
              </li>
            </ul>
          </div>
          <Link className="btn btn-primary founders-event-cta" href="/founders/apply">
            Apply now
          </Link>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">From the trail</div>
            <h2>Past hikes</h2>
          </div>
        </div>
        <div className="founders-gallery-empty">
          <MountainGlyph />
          <p>
            This is our first batch, so there&apos;s no gallery yet &mdash; check{' '}
            <a href="https://www.instagram.com/trekwith_g/" target="_blank" rel="noopener">
              @trekwith_g
            </a>{' '}
            on Instagram for updates, and this section fills in after batch 01.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">What founders say</div>
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="founders-testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div className="founder-card founders-testimonial-card" key={t.quote}>
              <div className="founders-testimonial-mark" aria-hidden="true">
                &rdquo;
              </div>
              <p className="founders-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="founders-testimonial-attr mono">{t.attribution}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section founders-footer-cta">
        <div className="eyebrow">Stay in the loop</div>
        <h2 style={{ fontSize: '1.4rem', marginTop: 6 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 21V4M6 4l11 3.5L6 11" stroke="var(--blaze)" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          Join the WhatsApp community
        </h2>
        <p style={{ marginTop: 8, maxWidth: '52ch' }}>
          Hikes, dates and applications get posted here first &mdash; before Instagram.
        </p>
        <a
          className="btn btn-primary"
          style={{ marginTop: 16 }}
          href="https://chat.whatsapp.com/"
          target="_blank"
          rel="noopener"
        >
          Join on WhatsApp
        </a>
      </div>
    </section>
  );
}
