'use client';

import { useMemo, useState } from 'react';
import TrekCard from '@/components/TrekCard';
import type { Trek, TrekGrade } from '@/lib/treks';

const GRADE_OPTIONS: { value: TrekGrade | 'all'; label: string }[] = [
  { value: 'all', label: 'All grades' },
  { value: 'grade-easy', label: 'Easy – Moderate' },
  { value: 'grade-mod', label: 'Moderate' },
  { value: 'grade-hard', label: 'Strenuous / Expedition' },
];

const SEASON_OPTIONS = ['all', 'Dec–Apr', 'Jun–Oct', 'Jul–Sep', 'Jan–Feb'];

export default function TreksFilter({ treks }: { treks: Trek[] }) {
  const [query, setQuery] = useState('');
  const [grade, setGrade] = useState<TrekGrade | 'all'>('all');
  const [season, setSeason] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return treks.filter((trek) => {
      if (grade !== 'all' && trek.grade !== grade) return false;
      if (season !== 'all' && trek.season !== season) return false;
      if (q && !`${trek.title} ${trek.region}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [treks, query, grade, season]);

  return (
    <>
      <div className="filter-bar">
        <div className="filter-field grow">
          <label htmlFor="trek-search">Search</label>
          <input
            id="trek-search"
            type="text"
            placeholder="Trek or region…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="trek-grade">Grade</label>
          <select id="trek-grade" value={grade} onChange={(e) => setGrade(e.target.value as TrekGrade | 'all')}>
            {GRADE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="trek-season">Season</label>
          <select id="trek-season" value={season} onChange={(e) => setSeason(e.target.value)}>
            {SEASON_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt === 'all' ? 'All seasons' : opt}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-count">
          {filtered.length} of {treks.length} treks
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="trek-grid">
          {filtered.map((trek) => (
            <TrekCard key={trek.slug} trek={trek} />
          ))}
        </div>
      ) : (
        <div className="filter-empty">No treks match those filters — try widening your search.</div>
      )}
    </>
  );
}
