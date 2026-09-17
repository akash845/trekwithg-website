'use client';

import { FormEvent, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Status = { text: string; kind: 'success' | 'error' | '' };

export default function FoundersApplyForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ text: '', kind: '' });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill hidden fields, humans never see them.
    if (data.get('company')) {
      setSubmitted(true);
      form.reset();
      return;
    }

    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    if (!name || !phone || !email) {
      setStatus({ text: 'Name, phone and email are required.', kind: 'error' });
      return;
    }

    if (!supabase) {
      setStatus({
        text: "Application form isn't connected yet — please DM @trekwith_g on Instagram instead.",
        kind: 'error',
      });
      return;
    }

    const payload = {
      name,
      phone,
      email,
      building: String(data.get('building') || '').trim(),
      stage: String(data.get('stage') || '') || null,
      social_link: String(data.get('social_link') || '').trim() || null,
      why: String(data.get('why') || '').trim() || null,
      heard_from: String(data.get('heard_from') || '').trim() || null,
    };

    setSubmitting(true);
    setStatus({ text: '', kind: '' });

    const { error } = await supabase.from('founders_applications').insert([payload]);

    setSubmitting(false);
    if (error) {
      setStatus({
        text: 'Something went wrong — please DM @trekwith_g on Instagram instead.',
        kind: 'error',
      });
    } else {
      setSubmitted(true);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="founders-confirm">
        <div className="eyebrow">Application sent</div>
        <p>Got it — we&apos;ll reach out if there&apos;s a spot for the next hike.</p>
        <p className="founders-confirm-sub">
          In the meantime, join the WhatsApp group below to hear when applications open again.
        </p>
      </div>
    );
  }

  return (
    <form id="founders-apply-form" noValidate onSubmit={handleSubmit}>
      <div className="enquiry-grid">
        <div className="field">
          <label htmlFor="fa-name">Name *</label>
          <input type="text" id="fa-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="fa-phone">Phone number *</label>
          <input type="tel" id="fa-phone" name="phone" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="fa-email">Email *</label>
          <input type="email" id="fa-email" name="email" required autoComplete="email" />
        </div>
        <div className="field full">
          <label htmlFor="fa-building">What are you building? *</label>
          <input type="text" id="fa-building" name="building" required placeholder="One line is fine" />
        </div>
        <div className="field">
          <label htmlFor="fa-stage">Stage *</label>
          <select id="fa-stage" name="stage" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option value="idea">Idea stage</option>
            <option value="building">Building</option>
            <option value="launched">Launched</option>
            <option value="scaling">Scaling</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="fa-social">LinkedIn or Instagram</label>
          <input type="text" id="fa-social" name="social_link" placeholder="Link (optional)" />
        </div>
        <div className="field full">
          <label htmlFor="fa-why">Why do you want to join?</label>
          <textarea id="fa-why" name="why" placeholder="Optional" />
        </div>
        <div className="field full">
          <label htmlFor="fa-heard">How did you hear about this?</label>
          <input type="text" id="fa-heard" name="heard_from" placeholder="Instagram, a friend, etc." />
        </div>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="fa-company">Company</label>
          <input type="text" id="fa-company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary" id="fa-submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit application'}
        </button>
        <span
          className={`form-status${status.kind ? ` ${status.kind}` : ''}`}
          id="fa-status"
          role="status"
          aria-live="polite"
        >
          {status.text}
        </span>
      </div>
    </form>
  );
}
