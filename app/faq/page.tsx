import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Permits, fitness levels, best seasons, what\'s included and what to expect on a TrekwithG departure — answers to what we get asked most.',
};

interface Faq {
  q: string;
  a: ReactNode;
}

interface FaqGroup {
  title: string;
  items: Faq[];
}

const FAQ_GROUPS: FaqGroup[] = [
  {
    title: 'Fitness & experience',
    items: [
      {
        q: 'Do I need to be very fit to join?',
        a: 'No — you need to be stubborn more than athletic. Being able to jog 4–5 km or climb a few flights of stairs without getting badly winded is enough for easy–moderate treks like Kedarkantha or Valley of Flowers. Moderate and strenuous treks (Hampta Pass, Brahmatal, Chadar) reward a few weeks of prep — walking, stairs, or a light cardio routine — but altitude sickness has more to do with ascent rate and hydration than raw fitness.',
      },
      {
        q: "I've never trekked before. Can I still sign up?",
        a: "Yes. Kedarkantha and Valley of Flowers are both built as first-timer-friendly routes, with short, deliberately easy acclimatization days baked in. Tell us it's your first trek when you enquire and we'll flag anything worth prepping for beforehand.",
      },
      {
        q: 'What if I get altitude sickness on trail?',
        a: "Every batch carries a first-aid kit and does daily oximeter checks. Trek leaders are trained to make the call to descend before it becomes serious — if you're asked to skip a summit push or turn back, that's the safety system working as designed, not a failure.",
      },
    ],
  },
  {
    title: 'Permits & logistics',
    items: [
      {
        q: 'Do I need to arrange permits myself?',
        a: "No. Forest, wildlife and region-specific permits (including Inner Line Permits for Ladakh routes) are sorted by us and included in the trek cost. You'll just need a valid government photo ID and, for some regions, passport-size photos — we'll tell you exactly what's needed after booking.",
      },
      {
        q: 'How do I get to the base village?',
        a: "Transport to and from the base village (e.g. Sankri for Kedarkantha, Jobra for Hampta Pass) isn't included by default, but we share shared-cab and bus options for every batch, and can arrange a group vehicle on request.",
      },
      {
        q: 'What happens if the itinerary changes on trail?',
        a: 'Campsites and days can shift for weather, snow line or trail conditions — the trek leader makes that call in the field. Every itinerary carries at least one buffer day for exactly this reason.',
      },
    ],
  },
  {
    title: 'Booking & cost',
    items: [
      {
        q: "What's included in the trek cost?",
        a: 'Camping and stay through the trek, all meals from Day 1 dinner to the last breakfast, permits and forest fees, an experienced trek leader and support crew, and a first-aid kit with daily health checks. See the full included/excluded breakdown on each trek page.',
      },
      {
        q: 'Can I rent gear instead of buying it?',
        a: (
          <>
            Yes — sleeping bags, jackets, trekking poles, gaiters and micro-spikes are all available on
            rent. Mention it when you enquire and we&apos;ll have it ready at the base village. See the{' '}
            <a href="/gear">gear checklist</a> for what we recommend owning versus renting.
          </>
        ),
      },
      {
        q: 'How far in advance should I book?',
        a: 'Batch dates are confirmed roughly two weeks out, but weekend and holiday-season batches (especially Kedarkantha and Chadar) fill faster. DMing us as soon as you have rough dates in mind holds you a spot on the shortlist.',
      },
    ],
  },
  {
    title: 'Groups & custom trips',
    items: [
      {
        q: 'What size are your batches?',
        a: "We keep a roughly 1:8 guide-to-trekker ratio and cap batches deliberately small — Chadar is capped at 12. It's a deliberate tradeoff: smaller batches move slower to organize but the trek leader knows your name by day two.",
      },
      {
        q: 'Can you run a private or custom trek for our group?',
        a: (
          <>
            Yes — corporate offsites, college groups, and custom summit requests all go through our{' '}
            <a href="/treks/custom">custom departure</a> process: a discovery call, route and permit
            scoping, then crew and logistics booked before you pay anything.
          </>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <section className="page" id="page-faq">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Before you book</div>
          <h2>Frequently asked questions</h2>
        </div>
        <p style={{ maxWidth: '32ch', fontSize: '.85rem' }}>
          The questions we get most, answered straight. Still stuck? <a href="/contact">Reach out</a>.
        </p>
      </div>

      {FAQ_GROUPS.map((group) => (
        <div className="faq-group" key={group.title}>
          <div className="faq-group-title">{group.title}</div>
          <div className="faq-list">
            {group.items.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
