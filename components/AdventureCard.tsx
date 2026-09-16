import Link from 'next/link';
import type { Adventure } from '@/lib/adventures';
import { categoryGrade } from '@/lib/adventures';

export default function AdventureCard({ adventure }: { adventure: Adventure }) {
  return (
    <Link
      className="trek-card"
      href={`/adventures/${adventure.slug}`}
      aria-label={`View ${adventure.title} details`}
    >
      <div className={`activity-art cat-${adventure.category}`}>
        <span>{adventure.title}</span>
      </div>
      <div className="trek-body">
        <span className={`trek-grade ${categoryGrade(adventure.category)}`}>{adventure.categoryLabel}</span>
        <div>
          <div className="trek-title">{adventure.title}</div>
          <div className="trek-region">{adventure.region}</div>
        </div>
        <p className="trek-desc">{adventure.desc}</p>
        <div className="trek-stats">
          {adventure.cardStats.map((stat) => (
            <div className="trek-stat" key={stat.label}>
              <b className="mono">{stat.value}</b>
              {stat.label}
            </div>
          ))}
        </div>
        <div className="trek-note">{adventure.note}</div>
      </div>
    </Link>
  );
}
