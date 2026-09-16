'use client';

import Globe from 'react-globe.gl';
import Link from 'next/link';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

export interface GlobePinItem {
  id: string;
  href: string;
  title: string;
  kicker: string;
  region: string;
  lat: number;
  lng: number;
}

interface GlobeCluster {
  lat: number;
  lng: number;
  items: GlobePinItem[];
}

const CLUSTER_DEGREES = 1.5;

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
            pointsData={clusters}
            pointLat="lat"
            pointLng="lng"
            pointColor={(d: object) => ((d as GlobeCluster) === selected ? '#F0703B' : '#D9531B')}
            pointAltitude={0.01}
            pointRadius={(d: object) => 0.35 + Math.min((d as GlobeCluster).items.length, 4) * 0.15}
            pointLabel={(d: object) => (d as GlobeCluster).items[0].region}
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
