'use client';

import { FormEvent, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Status = { text: string; kind: 'success' | 'error' | '' };

export default function EnquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ text: '', kind: '' });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, humans never see them.
    if (data.get('company')) {
      setStatus({ text: "Thanks — we'll be in touch.", kind: 'success' });
      form.reset();
      return;
    }

    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    if (!name || !phone) {
      setStatus({ text: 'Name and phone are required.', kind: 'error' });
      return;
    }

    if (!supabase) {
      setStatus({
        text: "Booking form isn't connected yet — please DM @trekwith_g on Instagram instead.",
        kind: 'error',
      });
      return;
    }

    const payload = {
      name,
      phone,
      email: String(data.get('email') || '').trim() || null,
      trek: String(data.get('trek') || '') || null,
      preferred_month: String(data.get('preferred_month') || '').trim() || null,
      group_size: data.get('group_size') ? parseInt(String(data.get('group_size')), 10) : null,
      message: String(data.get('message') || '').trim() || null,
    };

    setSubmitting(true);
    setStatus({ text: '', kind: '' });

    const { error } = await supabase.from('enquiries').insert([payload]);

    setSubmitting(false);
    if (error) {
      setStatus({
        text: 'Something went wrong — please DM @trekwith_g on Instagram instead.',
        kind: 'error',
      });
    } else {
      setStatus({ text: "Sent! We'll get back to you shortly.", kind: 'success' });
      form.reset();
    }
  }

  return (
    <form id="enquiry-form" noValidate onSubmit={handleSubmit}>
      <div className="enquiry-grid">
        <div className="field">
          <label htmlFor="enq-name">Full name *</label>
          <input type="text" id="enq-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="enq-phone">Phone / WhatsApp *</label>
          <input type="tel" id="enq-phone" name="phone" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="enq-email">Email</label>
          <input type="email" id="enq-email" name="email" autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="enq-trek">Trek you&apos;re interested in</label>
          <select id="enq-trek" name="trek" defaultValue="">
            <option value="">Not sure yet</option>
            <option value="Kedarkantha">Kedarkantha</option>
            <option value="Hampta Pass">Hampta Pass</option>
            <option value="Valley of Flowers">Valley of Flowers</option>
            <option value="Chadar">Chadar</option>
            <option value="Brahmatal">Brahmatal</option>
            <option value="Custom / build your own">Custom / build your own</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="enq-month">Preferred dates</label>
          <input type="text" id="enq-month" name="preferred_month" placeholder="e.g. March 2027" />
        </div>
        <div className="field">
          <label htmlFor="enq-group">Group size</label>
          <input type="number" id="enq-group" name="group_size" min={1} placeholder="e.g. 4" />
        </div>
        <div className="field full">
          <label htmlFor="enq-message">Anything else we should know?</label>
          <textarea
            id="enq-message"
            name="message"
            placeholder="Fitness level, prior treks, questions..."
          />
        </div>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="enq-company">Company</label>
          <input type="text" id="enq-company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary" id="enq-submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send enquiry'}
        </button>
        <span
          className={`form-status${status.kind ? ` ${status.kind}` : ''}`}
          id="enq-status"
          role="status"
          aria-live="polite"
        >
          {status.text}
        </span>
      </div>
    </form>
  );
}
