'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/treks', label: 'Treks' },
  { href: '/adventures', label: 'Adventures' },
  { href: '/founders', label: 'Founders' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const tabs = (onNavigate?: () => void) =>
    NAV_ITEMS.map((item) => (
      <Link
        key={item.href}
        className="tab"
        role="tab"
        href={item.href}
        aria-selected={isActive(pathname, item.href)}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    ));

  return (
    <header>
      <div className="headbar">
        <Link className="brand" href="/">
          <Image
            className="brand-mark"
            src="/images/logo-mark.png"
            alt=""
            width={162}
            height={216}
            priority
          />
          <div className="brand-name">
            Trek<b>with</b>G
          </div>
        </Link>
        <nav className="nav-desktop" role="tablist" aria-label="Site sections">
          {tabs()}
        </nav>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="nav-mobile"
        role="tablist"
        aria-label="Site sections"
        data-open={menuOpen}
      >
        {tabs(() => setMenuOpen(false))}
      </nav>
    </header>
  );
}
