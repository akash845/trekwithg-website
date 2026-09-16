'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const depth = Math.min(window.scrollY, 240);
        el.style.setProperty('--parallax', `${depth}px`);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hero hero-load" ref={ref}>
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-trek.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" />
      </div>
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
        <div className="eyebrow hero-in hero-in-1">Trekking · Backpacking · Camping · Expedition</div>
        <h1 className="hero-in hero-in-2">
          Get It <em>Done.</em>
        </h1>
        <p className="hero-in hero-in-3">
          TrekwithG runs small-batch Himalayan treks for people who&apos;d rather sweat up a ridgeline
          than scroll past one. Founded by Akash Gangadharan, guided in the field, planned around actual
          weather windows — not a brochure calendar.
        </p>
        <div className="hero-cta hero-in hero-in-4">
          <Link className="btn btn-primary" href="/treks">
            See upcoming treks
          </Link>
          <a className="btn btn-ghost" href="https://www.instagram.com/trekwith_g/" target="_blank" rel="noopener">
            @trekwith_g on Instagram
          </a>
        </div>
      </div>
      <div className="stat-row hero-in hero-in-5">
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
  );
}
