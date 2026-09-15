import type { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Plan your next trek — DM @trekwith_g on Instagram or send an enquiry with your dates and group size.',
};

export default function ContactPage() {
  return (
    <section className="page" id="page-contact">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Get in touch</div>
          <h2>Plan your next trek</h2>
        </div>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <p style={{ color: 'var(--ink)', fontSize: '1.05rem' }}>
            Fastest way in is Instagram — DM the handle below with your dates and we&apos;ll tell you
            straight if the route&apos;s open, sold out, or worth waiting a season for.
          </p>
          <ul className="contact-list">
            <li>
              <span className="k">Instagram</span>
              <span className="v">
                <a href="https://www.instagram.com/trekwith_g/" target="_blank" rel="noopener">
                  @trekwith_g
                </a>
              </span>
            </li>
            <li>
              <span className="k">Founder</span>
              <span className="v">
                <a href="https://www.instagram.com/___akashh____/" target="_blank" rel="noopener">
                  @___akashh____
                </a>{' '}
                — Akash
              </span>
            </li>
            <li>
              <span className="k">Email</span>
              <span className="v">
                <a href="mailto:hello@trekwithg.com">hello@trekwithg.com</a>
              </span>
            </li>
            <li>
              <span className="k">Partner</span>
              <span className="v">Netra Adventures — joint high-altitude expeditions</span>
            </li>
          </ul>
        </div>
        <div className="map-frame">
          <div className="eyebrow">Base of operations</div>
          <div className="coord">
            <span>Region</span>
            <b>Uttarakhand, India</b>
          </div>
          <div className="coord">
            <span>Lat / Lon</span>
            <b className="mono">30.0668° N, 79.0193° E</b>
          </div>
          <div className="coord">
            <span>Elevation</span>
            <b className="mono">1,900 m</b>
          </div>
          <div className="coord">
            <span>Response time</span>
            <b>Usually within a day</b>
          </div>
          <a
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start', marginTop: 4 }}
            href="https://www.instagram.com/trekwith_g/"
            target="_blank"
            rel="noopener"
          >
            Message on Instagram
          </a>
        </div>
      </div>

      <div className="enquiry-card">
        <div className="eyebrow">Prefer a form?</div>
        <h2 style={{ fontSize: '1.4rem', marginTop: 6 }}>Send an enquiry</h2>
        <p style={{ marginTop: 8 }}>
          Fill this in and it lands directly in our booking queue — we&apos;ll follow up over email or
          WhatsApp, whichever you leave.
        </p>
        <EnquiryForm />
      </div>
    </section>
  );
}
