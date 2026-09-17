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
    title: 'Small batch, on purpose',
    desc: 'Capped at ~15 people a hike, so it stays a conversation, not a crowd.',
  },
  {
    title: 'A ridgeline beats a banquet hall',
    desc: 'Three hours of walking surfaces better conversations than three hours of standing around with a name tag.',
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

export default function FoundersPage() {
  return (
    <section className="page" id="page-founders">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">TrekwithG &times; Founders</div>
          <h2>Founders who&apos;d rather talk business on a ridgeline than in a conference room</h2>
        </div>
      </div>

      <p style={{ maxWidth: '58ch', fontSize: '1.05rem' }}>
        An invite-capped hiking meetup for startup founders in Thrissur. Small batches, real
        terrain, no stage.
      </p>
      <div className="hero-cta" style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" href="/founders/apply">
          Apply for the next hike
        </Link>
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
          {WHY_POINTS.map((point) => (
            <div className="founders-why-card" key={point.title}>
              <div className="founders-why-title">{point.title}</div>
              <p>{point.desc}</p>
            </div>
          ))}
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
            <div className="founder-card" key={t.quote}>
              <p className="founders-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="founders-testimonial-attr mono">{t.attribution}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section founders-footer-cta">
        <div className="eyebrow">Stay in the loop</div>
        <h2 style={{ fontSize: '1.4rem', marginTop: 6 }}>Join the WhatsApp community</h2>
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
