import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const INSTA_IMAGES = [
  { src: 'images/kedarkantha-harkidun.jpg', alt: 'First light over Har Ki Dun from the Kedarkantha ridge' },
  { src: 'images/hampta-chandratal.jpg', alt: 'Chandratal lake near the Hampta Pass crossing' },
  { src: 'images/chadar-trek-01.jpg', alt: 'Trekkers crossing the frozen Zanskar river on Chadar' },
  { src: 'images/valley-of-flowers-bloom.jpg', alt: 'Wildflowers in bloom at Valley of Flowers' },
  { src: 'images/brahmatal-nandaghunti-view.jpg', alt: 'Trishul and Nanda Ghunti view from Brahmatal' },
  { src: 'images/ladakh-tsokar-reflections.jpg', alt: 'Reflections at Tso Kar, Ladakh' },
];

export const metadata: Metadata = {
  title: 'TrekwithG · Small-batch Himalayan treks',
  description:
    "TrekwithG runs small-batch Himalayan treks for people who'd rather sweat up a ridgeline than scroll past one. Founded by Akash Gangadharan, guided in the field, planned around actual weather windows.",
};

export default function HomePage() {
  return (
    <section className="page" id="page-home">
      <div className="hero">
        <svg className="contours" viewBox="0 0 800 400" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#EEF1EA" strokeWidth="1">
            <path d="M-20 320 Q120 260 260 300 T560 270 T860 310" opacity=".18" />
            <path d="M-20 280 Q140 210 280 250 T580 220 T860 260" opacity=".16" />
            <path d="M-20 240 Q150 170 300 200 T600 175 T860 210" opacity=".14" />
            <path d="M-20 200 Q160 130 320 155 T620 130 T860 165" opacity=".12" />
            <path d="M-20 160 Q170 95 340 115 T640 90 T860 120" opacity=".10" />
          </g>
        </svg>
        <svg className="ridge" viewBox="0 0 800 200" preserveAspectRatio="none" aria-hidden="true">
          <polygon
            points="0,200 0,120 90,55 170,110 260,40 350,120 430,70 520,130 610,60 700,115 800,80 800,200"
            fill="var(--blaze)"
            opacity=".22"
          />
          <polygon
            points="0,200 0,150 120,90 220,140 320,75 420,145 520,95 620,150 720,100 800,140 800,200"
            fill="#EEF1EA"
            opacity=".08"
          />
        </svg>
        <div className="hero-inner">
          <div className="eyebrow">Trekking · Backpacking · Camping · Expedition</div>
          <h1>
            Get It <em>Done.</em>
          </h1>
          <p>
            TrekwithG runs small-batch Himalayan treks for people who&apos;d rather sweat up a ridgeline
            than scroll past one. Founded by Akash Gangadharan, guided in the field, planned around actual weather
            windows — not a brochure calendar.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/treks">
              See upcoming treks
            </Link>
            <a
              className="btn btn-ghost"
              href="https://www.instagram.com/trekwith_g/"
              target="_blank"
              rel="noopener"
            >
              @trekwith_g on Instagram
            </a>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat">
            <b className="mono">
              14,065<span style={{ fontSize: '.9rem' }}>ft</span>
            </b>
            <span>Highest pass led</span>
          </div>
          <div className="stat">
            <b className="mono">30+</b>
            <span>Batches run</span>
          </div>
          <div className="stat">
            <b className="mono">6</b>
            <span>Regions covered</span>
          </div>
          <div className="stat">
            <b className="mono">1:8</b>
            <span>Guide-to-trekker ratio</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Why TrekwithG</div>
            <h2>Small batches, real acclimatization</h2>
          </div>
        </div>
        <div className="about-grid">
          <div>
            <p>
              Every itinerary is built with a rest day baked in above 3,200m and a hard turn-back rule
              if the group&apos;s pace slips — no summit is worth a case of altitude sickness. Batches
              are capped small enough that the guide knows your name by day two.
            </p>
            <div className="badge-row">
              <span className="badge">Fixed departures</span>
              <span className="badge">Custom expeditions</span>
              <span className="badge">Gear on rent</span>
              <span className="badge">First-timers welcome</span>
            </div>
          </div>
          <div>
            <p>
              Campsites are chosen for water access and wind cover, not for the photo. Food is cooked
              fresh at every camp by the support crew — no freeze-dried packets unless you&apos;re above
              the last treeline.
            </p>
            <div className="pull">
              &quot;You don&apos;t need to be fit. You need to be stubborn for six days.&quot;
              <cite>— Akash Gangadharan, Founder</cite>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">From the trail</div>
            <h2>@trekwith_g on Instagram</h2>
          </div>
          <a
            className="btn btn-outline"
            href="https://www.instagram.com/trekwith_g/"
            target="_blank"
            rel="noopener"
          >
            Follow along
          </a>
        </div>
        <div className="insta-grid">
          {INSTA_IMAGES.map((img) => (
            <a
              className="insta-cell"
              key={img.src}
              href="https://www.instagram.com/trekwith_g/"
              target="_blank"
              rel="noopener"
              aria-label={`${img.alt} — view on Instagram`}
            >
              <Image src={`/${img.src}`} alt={img.alt} width={280} height={280} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
