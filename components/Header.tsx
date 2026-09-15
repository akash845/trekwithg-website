'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/treks', label: 'Treks' },
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
