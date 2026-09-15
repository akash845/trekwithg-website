'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxGalleryProps {
  images: LightboxImage[];
  className?: string;
  itemClassName?: string;
  imgWidth: number;
  imgHeight: number;
}

export default function LightboxGallery({
  images,
  className,
  itemClassName,
  imgWidth,
  imgHeight,
}: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : images[activeIndex];

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const overlay = active && (
    <div className="lightbox-overlay" onClick={close} role="dialog" aria-modal="true">
      <button className="lightbox-close" type="button" onClick={close} aria-label="Close">
        &times;
      </button>
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-prev"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            showPrev();
          }}
          aria-label="Previous photo"
        >
          &larr;
        </button>
      )}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={`/${active.src}`} alt={active.alt} />
        {active.caption && <p className="lightbox-caption">{active.caption}</p>}
      </div>
      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-next"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            showNext();
          }}
          aria-label="Next photo"
        >
          &rarr;
        </button>
      )}
    </div>
  );

  return (
    <>
      <div className={className}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={itemClassName ? `lightbox-trigger ${itemClassName}` : 'lightbox-trigger'}
            onClick={() => setActiveIndex(i)}
            aria-label={`View ${img.alt} full size`}
          >
            <Image src={`/${img.src}`} alt={img.alt} width={imgWidth} height={imgHeight} />
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </button>
        ))}
      </div>

      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </>
  );
}
