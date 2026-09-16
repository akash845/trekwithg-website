import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import HighlightsSlideshow, { type SlideshowItem } from '@/components/HighlightsSlideshow';
import { BLUR_DATA_URL } from '@/lib/blurPlaceholder';
import { getAllTreks } from '@/lib/treks';
import { getAllAdventures } from '@/lib/adventures';

const HIGHLIGHT_SLIDES: SlideshowItem[] = [
  ...getAllTreks()
    .filter((trek) => trek.slug !== 'custom')
    .map((trek) => ({
      key: `trek-${trek.slug}`,
      href: `/treks/${trek.slug}`,
      image: trek.image,
      imageAlt: trek.imageAlt,
      kicker: 'Trek',
      title: trek.title,
      region: trek.region,
      desc: trek.desc,
    })),
  ...getAllAdventures().map((adventure) => ({
    key: `adventure-${adventure.slug}`,
    href: `/adventures/${adventure.slug}`,
    image: adventure.image,
    imageAlt: adventure.imageAlt,
    kicker: adventure.categoryLabel,
    title: adventure.title,
    region: adventure.region,
    desc: adventure.desc,
  })),
];

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
      <Hero />

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
            <div className="eyebrow">All treks & activities</div>
            <h2>Every route we run, in one loop</h2>
          </div>
          <Link className="btn btn-outline" href="/treks">
            Browse all treks
          </Link>
        </div>
        <HighlightsSlideshow items={HIGHLIGHT_SLIDES} />
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
              <Image
                src={`/${img.src}`}
                alt={img.alt}
                width={280}
                height={280}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
