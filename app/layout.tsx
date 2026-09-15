import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'TrekwithG',
    template: '%s · TrekwithG',
  },
  description:
    "TrekwithG runs small-batch Himalayan treks across Uttarakhand, Himachal and Ladakh — planned around actual weather windows, not a brochure calendar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
