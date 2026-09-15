'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/treks', label: 'Treks' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="headbar">
        <Link className="brand" href="/">
          <svg className="brand-mark" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <path d="M2 27 L12 9 L17 18 L21 11 L32 27 Z" fill="var(--blaze)" />
            <path d="M2 27 L12 9 L17 18 L14 23 L9 27 Z" fill="var(--ink)" opacity=".85" />
            <circle cx="12" cy="9" r="1.6" fill="var(--paper)" />
          </svg>
          <div className="brand-name">
            Trek<b>with</b>G
          </div>
        </Link>
        <nav role="tablist" aria-label="Site sections">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              className="tab"
              role="tab"
              href={item.href}
              aria-selected={isActive(pathname, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
