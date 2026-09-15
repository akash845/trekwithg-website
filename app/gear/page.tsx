import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gear Checklist',
  description:
    'What to pack for a TrekwithG departure — clothing, footwear, sleep system and essentials, plus what\'s available on rent at the base village.',
};

const GEAR_GROUPS = [
  {
    title: 'Clothing & layers',
    items: [
      'Moisture-wicking base layer (top & bottom)',
      'Fleece or light down mid layer',
      'Windproof, water-resistant outer shell',
      '2–3 pairs wool trekking socks (never cotton)',
      'Thermal inners for camp & night',
      'Gloves — inner liner + waterproof outer',
      'Warm cap / beanie + sun cap',
      'Buff or neck gaiter',
    ],
  },
  {
    title: 'Footwear',
    items: [
      'Broken-in trekking boots with ankle support',
      'Gaiters (snow treks: Kedarkantha, Brahmatal, Chadar)',
      'Camp shoes / sandals for evenings',
      'Micro-spikes (own pair recommended for icy sections)',
    ],
  },
  {
    title: 'Sleep & shelter',
    items: [
      'Sleeping bag rated below the stated night temperature',
      'Fleece sleeping bag liner (winter & Chadar)',
      'Inflatable pillow or stuff-sack pillow',
    ],
  },
  {
    title: 'Essentials',
    items: [
      'Headlamp + one spare set of batteries carried on your body',
      'Power bank rated for cold weather',
      'Trekking poles',
      'Reusable water bottle + electrolyte sachets',
      'Personal first-aid & any prescription medication',
      'Sunscreen (SPF 50+) & SPF lip balm',
      'Sunglasses with UV protection',
      'Daypack (30–40L) with rain cover',
    ],
  },
  {
    title: 'Documents',
    items: [
      'Valid government photo ID (original + photocopy)',
      '2 passport-size photographs',
      'Medical certificate, where the trek requires one',
      'Travel/trek insurance details, if you have cover',
    ],
  },
];

export default function GearPage() {
  return (
    <section className="page" id="page-gear">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Pack list</div>
          <h2>Gear checklist</h2>
        </div>
        <p style={{ maxWidth: '34ch', fontSize: '.85rem' }}>
          A general kit list across our treks — exact needs flex by season and trek. Most items are also
          available on rent; ask when you enquire.
        </p>
      </div>
      <div className="gear-grid">
        {GEAR_GROUPS.map((group) => (
          <div className="gear-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 32, fontSize: '.88rem' }}>
        Winter and expedition treks (Kedarkantha, Brahmatal, Chadar) need heavier insulation and cold-rated
        gear — see{' '}
        <a href="/blog/winter-himalayan-trek-packing-list">our winter packing list</a> for the specifics we
        actually use in the field.
      </p>
    </section>
  );
}
