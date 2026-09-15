import Image from 'next/image';
import Link from 'next/link';
import type { Trek } from '@/lib/treks';
import { BLUR_DATA_URL } from '@/lib/blurPlaceholder';

export default function TrekCard({ trek }: { trek: Trek }) {
  return (
    <Link
      className="trek-card"
      href={`/treks/${trek.slug}`}
      aria-label={`View ${trek.title} itinerary`}
    >
      <div className="trek-art">
        <Image
          src={`/${trek.image}`}
          alt={trek.imageAlt}
          width={560}
          height={132}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>
      <div className="trek-body">
        <span className={`trek-grade ${trek.grade}`}>{trek.gradeLabel}</span>
        <div>
          <div className="trek-title">{trek.title}</div>
          <div className="trek-region">{trek.region}</div>
        </div>
        <p className="trek-desc">{trek.desc}</p>
        <div className="trek-stats">
          {trek.cardStats.map((stat) => (
            <div className="trek-stat" key={stat.label}>
              <b className="mono">{stat.value}</b>
              {stat.label}
            </div>
          ))}
        </div>
        <div className="trek-note">{trek.note}</div>
      </div>
    </Link>
  );
}
