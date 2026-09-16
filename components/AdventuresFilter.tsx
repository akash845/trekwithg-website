'use client';

import { useMemo, useState } from 'react';
import AdventureCard from '@/components/AdventureCard';
import type { Adventure, AdventureCategory } from '@/lib/adventures';

const CATEGORY_OPTIONS: { value: AdventureCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All categories' },
  { value: 'water', label: 'Water' },
  { value: 'air', label: 'Air' },
  { value: 'land', label: 'Land' },
];

export default function AdventuresFilter({ adventures }: { adventures: Adventure[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<AdventureCategory | 'all'>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return adventures.filter((adventure) => {
      if (category !== 'all' && adventure.category !== category) return false;
      if (q && !`${adventure.title} ${adventure.region}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [adventures, query, category]);

  return (
    <>
      <div className="filter-bar">
        <div className="filter-field grow">
          <label htmlFor="adventure-search">Search</label>
          <input
            id="adventure-search"
            type="text"
            placeholder="Activity or region…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="filter-field">
          <label htmlFor="adventure-category">Category</label>
          <select
            id="adventure-category"
            value={category}
            onChange={(e) => setCategory(e.target.value as AdventureCategory | 'all')}
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-count">
          {filtered.length} of {adventures.length} activities
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="trek-grid">
          {filtered.map((adventure) => (
            <AdventureCard key={adventure.slug} adventure={adventure} />
          ))}
        </div>
      ) : (
        <div className="filter-empty">No activities match those filters — try widening your search.</div>
      )}
    </>
  );
}
