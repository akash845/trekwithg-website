import type { Metadata } from 'next';
import Link from 'next/link';
import FoundersApplyForm from '@/components/FoundersApplyForm';

export const metadata: Metadata = {
  title: 'Apply — Founders Trek',
  description:
    'Apply for the next Founders Trek hike in Thrissur — a small-batch, invite-only trekking meetup for startup founders, run by TrekwithG.',
};

export default function FoundersApplyPage() {
  return (
    <section className="page" id="page-founders-apply">
      <div className="section-head" style={{ marginTop: 0 }}>
        <div>
          <div className="eyebrow">Founders Trek</div>
          <h2>Apply for the next hike</h2>
        </div>
        <p style={{ maxWidth: '34ch', fontSize: '.85rem' }}>
          This is an application, not an RSVP — we curate each batch to keep it small. Takes two
          minutes.
        </p>
      </div>

      <div className="enquiry-card">
        <FoundersApplyForm />
      </div>

      <p className="gallery-note eyebrow" style={{ marginTop: 24 }}>
        <Link href="/founders">&larr; Back to Founders Trek</Link>
      </p>
    </section>
  );
}
