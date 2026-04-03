'use client';

import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition-colors duration-200 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Ime i prezime *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Vase ime i prezime"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Email adresa *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="vasa@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+381 6X XXX XXXX"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-stone-700"
        >
          Poruka *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Opisite vasu ideju ili postavite pitanje..."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-block rounded-lg bg-gold-400 px-8 py-3 font-medium uppercase tracking-wide text-white transition-colors duration-200 hover:bg-gold-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Slanje...' : 'Posaljite poruku'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-green-600">
          Vasa poruka je uspesno poslata! Odgovoricemo vam u najkracem roku.
        </p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Doslo je do greske pri slanju. Pokusajte ponovo ili nas kontaktirajte
          telefonom.
        </p>
      )}
    </form>
  );
}
