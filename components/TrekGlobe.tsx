'use client';

import Globe from 'react-globe.gl';
import Link from 'next/link';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

export type GlobePinKind = 'trek' | 'water' | 'air' | 'land';

export interface GlobePinItem {
  id: string;
  href: string;
  title: string;
  kicker: string;
  region: string;
  lat: number;
  lng: number;
  kind?: GlobePinKind;
}

interface GlobeCluster {
  lat: number;
  lng: number;
  items: GlobePinItem[];
}

const CLUSTER_DEGREES = 1.5;

// Dehradun — the jump-off point for most TrekwithG Himalayan departures.
const BASE = { lat: 30.3165, lng: 78.0322, label: 'TrekwithG Base — Dehradun' };

const KIND_ICON: Record<GlobePinKind, string> = {
  trek: '⛰',
  water: '🤿',
  air: '🪂',
  land: '🧗',
};

function dominantKind(cluster: GlobeCluster): GlobePinKind {
  const counts: Partial<Record<GlobePinKind, number>> = {};
  for (const item of cluster.items) {
    const kind = item.kind ?? 'trek';
    counts[kind] = (counts[kind] ?? 0) + 1;
  }
  return (Object.entries(counts).sort((a, b) => b[1]! - a[1]!)[0]?.[0] as GlobePinKind) ?? 'trek';
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

export default function TrekGlobe({ pins }: { pins: GlobePinItem[] }) {
  const clusters = useMemo(() => clusterPins(pins), [pins]);
  const [selected, setSelected] = useState<GlobeCluster | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  const selectCluster = (cluster: GlobeCluster) => {
    setSelected(cluster);
    const controls = globeRef.current?.controls?.();
    if (controls) controls.autoRotate = false;
  };

  const arcs = useMemo(
    () =>
      clusters.map((c) => ({
        startLat: BASE.lat,
        startLng: BASE.lng,
        endLat: c.lat,
        endLng: c.lng,
      })),
    [clusters]
  );

  const regionLabels = useMemo(() => {
    const seen = new Map<string, GlobeCluster>();
    for (const c of clusters) {
      const region = c.items[0].region;
      if (!seen.has(region)) seen.set(region, c);
    }
    return Array.from(seen.values());
  }, [clusters]);

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
            arcsData={arcs}
            arcStartLat="startLat"
            arcStartLng="startLng"
            arcEndLat="endLat"
            arcEndLng="endLng"
            arcColor={() => ['rgba(217,83,27,0.15)', 'rgba(240,112,59,0.85)']}
            arcDashLength={0.4}
            arcDashGap={2}
            arcDashInitialGap={() => Math.random() * 2}
            arcDashAnimateTime={4000}
            arcStroke={0.35}
            arcAltitudeAutoScale={0.35}
            ringsData={clusters}
            ringLat="lat"
            ringLng="lng"
            ringColor={(d: object) => (t: number) =>
              (d as GlobeCluster) === selected
                ? `rgba(240,112,59,${1 - t})`
                : `rgba(217,83,27,${0.55 * (1 - t)})`}
            ringMaxRadius={(d: object) => ((d as GlobeCluster) === selected ? 3.5 : 2.2)}
            ringPropagationSpeed={2}
            ringRepeatPeriod={(d: object) => ((d as GlobeCluster) === selected ? 900 : 1800)}
            htmlElementsData={clusters}
            htmlLat="lat"
            htmlLng="lng"
            htmlAltitude={0.01}
            htmlElement={(d: object) => {
              const cluster = d as GlobeCluster;
              const el = document.createElement('div');
              el.className = 'globe-marker';
              el.title = cluster.items[0].region;

              const icon = document.createElement('span');
              icon.className = 'globe-marker-icon';
              icon.textContent = KIND_ICON[dominantKind(cluster)];
              el.appendChild(icon);

              if (cluster.items.length > 1) {
                const count = document.createElement('span');
                count.className = 'globe-marker-count';
                count.textContent = String(cluster.items.length);
                el.appendChild(count);
              }

              el.onclick = () => selectCluster(cluster);
              return el;
            }}
            labelsData={regionLabels}
            labelLat="lat"
            labelLng="lng"
            labelText={(d: object) => (d as GlobeCluster).items[0].region}
            labelSize={0.55}
            labelDotRadius={0.25}
            labelColor={() => 'rgba(238,241,234,0.75)'}
            labelResolution={2}
            labelAltitude={0.015}
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
