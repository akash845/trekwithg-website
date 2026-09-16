'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BLUR_DATA_URL } from '@/lib/blurPlaceholder';

export interface SlideshowItem {
  key: string;
  href: string;
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  region: string;
  desc: string;
}

const AUTOPLAY_MS = 5500;

export default function HighlightsSlideshow({ items }: { items: SlideshowItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % items.length) + items.length) % items.length);
    },
    [items.length]
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, items.length]);

  const current = items[index];

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slideshow-stage">
        {items.map((item, i) => (
          <Link
            key={item.key}
            href={item.href}
            className={`slideshow-slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i === index ? undefined : true}
            tabIndex={i === index ? undefined : -1}
          >
            <Image
              src={`/${item.image}`}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 760px) 100vw, 900px"
              priority={i === 0}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              style={{ objectFit: 'cover' }}
            />
            <div className="slideshow-scrim" />
            <div className="slideshow-caption">
              <div className="slideshow-kicker mono">{item.kicker}</div>
              <h3>{item.title}</h3>
              <div className="slideshow-region">{item.region}</div>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}

        <button
          type="button"
          className="slideshow-arrow slideshow-arrow-prev"
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          className="slideshow-arrow slideshow-arrow-next"
          onClick={() => goTo(index + 1)}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="slideshow-dots" role="tablist" aria-label={`${current.kicker} highlights`}>
        {items.map((item, i) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={item.title}
            className={`slideshow-dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
