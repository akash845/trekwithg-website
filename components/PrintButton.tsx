'use client';

export default function PrintButton({ label = 'Download itinerary (PDF)' }: { label?: string }) {
  return (
    <button type="button" className="btn btn-outline no-print" onClick={() => window.print()}>
      {label}
    </button>
  );
}
