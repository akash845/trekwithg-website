import Image from 'next/image';
import type { Trek } from '@/lib/treks';

const X_POSITIONS = [0.78, 0.3, 0.64, 0.2, 0.82, 0.4, 0.7];

function getWaypoints(trek: Trek): string[] {
  const stops: string[] = [];
  for (const step of trek.itinerary) {
    if (!step.title.includes('→')) continue;
    for (const raw of step.title.split('→')) {
      const stop = raw.split('(')[0].trim();
      if (stop && stops[stops.length - 1] !== stop) stops.push(stop);
    }
  }
  return stops;
}

export default function RouteMap({ trek }: { trek: Trek }) {
  const waypoints = getWaypoints(trek);
  if (waypoints.length < 2) return null;

  const altitude = trek.detailStats.find((s) => s.label.toLowerCase().includes('alt'))?.value;
  const duration = trek.detailStats.find((s) => s.label.toLowerCase().includes('duration'))?.value;

  const top = 70;
  const bottom = 430;
  const points = waypoints.map((label, i) => {
    const t = waypoints.length === 1 ? 0 : i / (waypoints.length - 1);
    const y = top + t * (bottom - top);
    const x = X_POSITIONS[i % X_POSITIONS.length] * 400;
    return { label, x, y };
  });

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');

  return (
    <div className="route-map">
      <Image className="route-map-bg" src={`/${trek.image}`} alt="" width={800} height={1000} />
      <div className="route-map-scrim" />
      <div className="route-map-content">
        <div className="route-map-stats">
          {trek.distanceKm && (
            <div>
              <b className="mono">{trek.distanceKm}</b>
              <span>Distance</span>
            </div>
          )}
          {altitude && (
            <div>
              <b className="mono">{altitude}</b>
              <span>Altitude</span>
            </div>
          )}
          {duration && (
            <div>
              <b className="mono">{duration}</b>
              <span>Duration</span>
            </div>
          )}
        </div>
        <h3 className="route-map-title">{trek.title}</h3>

        <svg className="route-map-svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet">
          <path d={path} className="route-map-path" fill="none" />
          {points.map((p, i) => (
            <g key={p.label}>
              <circle cx={p.x} cy={p.y} r={i === points.length - 1 ? 7 : 5} className="route-map-pin" />
              <text
                x={p.x + (p.x > 200 ? -14 : 14)}
                y={p.y + 4}
                textAnchor={p.x > 200 ? 'end' : 'start'}
                className="route-map-label"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>

        <div className="route-map-foot">
          <span>{trek.region}</span>
        </div>
      </div>
    </div>
  );
}
