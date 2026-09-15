'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SELECTOR = [
  '.section',
  '.founder-card',
  '.contact-card',
  '.enquiry-card',
  '.faq-group',
  '.compare-wrap',
  '.trek-card',
  '.blog-card',
  '.gcell',
  '.gear-card',
].join(',');

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    els.forEach((el) => el.classList.add('reveal'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
