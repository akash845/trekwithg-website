'use client';

import Globe from 'react-globe.gl';
import Link from 'next/link';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

export type GlobeGrade = 'grade-easy' | 'grade-mod' | 'grade-hard';

export interface GlobePinItem {
  id: string;
  href: string;
  title: string;
  kicker: string;
  region: string;
  lat: number;
  lng: number;
  type: 'trek' | 'adventure';
  grade: GlobeGrade;
  gradeLabel: string;
  durationDays?: number;
  maxAltitudeM?: number;
  season?: string;
}

interface GlobeCluster {
  lat: number;
  lng: number;
  items: GlobePinItem[];
}

const CLUSTER_DEGREES = 1.5;

const GRADE_COLOR: Record<GlobeGrade, string> = {
  'grade-easy': '#5C93A0',
  'grade-mod': '#D9531B',
  'grade-hard': '#B23A2E',
};

const GRADE_LABEL: Record<GlobeGrade, string> = {
  'grade-easy': 'Easy',
  'grade-mod': 'Moderate',
  'grade-hard': 'Hard',
};

const GRADE_ORDER: GlobeGrade[] = ['grade-easy', 'grade-mod', 'grade-hard'];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dominantGrade(items: GlobePinItem[]): GlobeGrade {
  return items.reduce<GlobeGrade>((worst, item) => {
    return GRADE_ORDER.indexOf(item.grade) > GRADE_ORDER.indexOf(worst) ? item.grade : worst;
  }, 'grade-easy');
}

function isInSeason(season: string | undefined, monthIndex: number): boolean {
  if (!season) return false;
  if (/any/i.test(season)) return true;
  const parts = season.split(/[–-]/).map((s) => s.trim());
  if (parts.length < 2) return false;
  const startIdx = MONTHS.findIndex((m) => parts[0].startsWith(m));
  const endIdx = MONTHS.findIndex((m) => parts[1].startsWith(m));
  if (startIdx === -1 || endIdx === -1) return false;
  if (startIdx <= endIdx) return monthIndex >= startIdx && monthIndex <= endIdx;
  return monthIndex >= startIdx || monthIndex <= endIdx;
}

function clusterPins(items: GlobePinItem[]): GlobeCluster[] {
  const clusters: GlobeCluster[] = [];
  for (const item of items) {
    const match = clusters.find(
      (c) => Math.abs(c.lat - item.lat) < CLUSTER_DEGREES && Math.abs(c.lng - item.lng) < CLUSTER_DEGREES
    );
    if (match) {
      match.items.push(item);
      match.lat = match.items.reduce((sum, i) => sum + i.lat, 0) / match.items.length;
      match.lng = match.items.reduce((sum, i) => sum + i.lng, 0) / match.items.length;
    } else {
      clusters.push({ lat: item.lat, lng: item.lng, items: [item] });
    }
  }
  return clusters;
}

type TypeFilter = 'all' | 'trek' | 'adventure';

export default function TrekGlobe({ pins }: { pins: GlobePinItem[] }) {
  const [selected, setSelected] = useState<GlobeCluster | null>(null);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [seasonOnly, setSeasonOnly] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  const currentMonth = useMemo(() => new Date().getMonth(), []);

  const filteredPins = useMemo(() => {
    return pins.filter((pin) => {
      if (typeFilter !== 'all' && pin.type !== typeFilter) return false;
      if (seasonOnly && !isInSeason(pin.season, currentMonth)) return false;
      return true;
    });
  }, [pins, typeFilter, seasonOnly, currentMonth]);

  const clusters = useMemo(() => clusterPins(filteredPins), [filteredPins]);

  const seasonRings = useMemo(
    () =>
      clusters
        .filter((c) => c.items.some((i) => isInSeason(i.season, currentMonth)))
        .map((c) => ({
          lat: c.lat,
          lng: c.lng,
          color: GRADE_COLOR[dominantGrade(c.items)],
        })),
    [clusters, currentMonth]
  );

  useLayoutEffect(() => {
    function updateSize() {
      const width = containerRef.current?.offsetWidth ?? 800;
      setDimensions({ width, height: width < 640 ? 360 : 460 });
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div>
      <div className="globe-controls">
        <div className="globe-filter-group">
          {(['all', 'trek', 'adventure'] as TypeFilter[]).map((f) => (
            <button
              key={f}
              type="button"
              className={`globe-pill${typeFilter === f ? ' is-active' : ''}`}
              onClick={() => setTypeFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'trek' ? 'Treks' : 'Adventures'}
            </button>
          ))}
          <button
            type="button"
            className={`globe-pill${seasonOnly ? ' is-active' : ''}`}
            onClick={() => setSeasonOnly((v) => !v)}
          >
            In season now
          </button>
        </div>
        <div className="globe-legend">
          {GRADE_ORDER.map((g) => (
            <span className="globe-legend-item" key={g}>
              <span className="globe-legend-dot" style={{ background: GRADE_COLOR[g] }} />
              {GRADE_LABEL[g]}
            </span>
          ))}
          <span className="globe-legend-item">
            <span className="globe-legend-ring" />
            In season now
          </span>
          <span className="globe-legend-item globe-legend-note">Bigger pin = more routes</span>
        </div>
      </div>

      <div className="globe-wrap">
        <div className="globe-stage" ref={containerRef}>
          {dimensions && (
            <Globe
              ref={globeRef}
              width={dimensions.width}
              height={dimensions.height}
              globeImageUrl="/images/globe/earth-night.jpg"
              backgroundImageUrl="/images/globe/night-sky.png"
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere
              atmosphereColor="#5C93A0"
              atmosphereAltitude={0.18}
              pointsData={clusters}
              pointLat="lat"
              pointLng="lng"
              pointColor={(d: object) => GRADE_COLOR[dominantGrade((d as GlobeCluster).items)]}
              pointAltitude={(d: object) => ((d as GlobeCluster) === selected ? 0.02 : 0.01)}
              pointRadius={(d: object) => 0.35 + Math.min((d as GlobeCluster).items.length, 4) * 0.15}
              pointLabel={(d: object) => {
                const c = d as GlobeCluster;
                const first = c.items[0];
                if (c.items.length > 1) {
                  return `<div class="globe-tooltip"><strong>${first.region}</strong><br/>${c.items.length} routes here</div>`;
                }
                const details = [
                  first.durationDays ? `${first.durationDays}D` : null,
                  first.season ?? null,
                ]
                  .filter(Boolean)
                  .join(' · ');
                return `<div class="globe-tooltip"><strong>${first.region}</strong>${
                  details ? `<br/>${details}` : ''
                }</div>`;
              }}
              ringsData={seasonRings}
              ringLat="lat"
              ringLng="lng"
              ringColor={(r: object) => (t: number) =>
                `${(r as { color: string }).color}${Math.round((1 - t) * 255)
                  .toString(16)
                  .padStart(2, '0')}`}
              ringMaxRadius={2.2}
              ringPropagationSpeed={2}
              ringRepeatPeriod={1400}
              onPointClick={(d: object) => {
                setSelected(d as GlobeCluster);
                const controls = globeRef.current?.controls?.();
                if (controls) controls.autoRotate = false;
              }}
              onGlobeReady={() => {
                const controls = globeRef.current?.controls?.();
                if (controls) {
                  controls.autoRotate = true;
                  controls.autoRotateSpeed = 0.5;
                }
                globeRef.current?.pointOfView?.({ lat: 22, lng: 80, altitude: 2.1 });
              }}
            />
          )}
        </div>

        {selected && (
          <div className="globe-panel">
            <button
              type="button"
              className="globe-panel-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="globe-panel-region mono">{selected.items[0].region}</div>
            <ul className="globe-panel-list">
              {selected.items.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <span className="globe-panel-kicker">{item.kicker}</span>
                    <span className="globe-panel-title">{item.title}</span>
                    <span className="globe-panel-meta">
                      <span className="globe-panel-grade" style={{ color: GRADE_COLOR[item.grade] }}>
                        ● {item.gradeLabel}
                      </span>
                      {item.durationDays && <span>{item.durationDays} days</span>}
                      {item.maxAltitudeM && <span>{item.maxAltitudeM.toLocaleString()}m max alt.</span>}
                      {item.season && <span>{item.season}</span>}
                      {isInSeason(item.season, currentMonth) && (
                        <span className="globe-panel-badge">In season now</span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
