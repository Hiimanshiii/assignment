import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { eventTypesApi } from '../services/api/eventTypesApi';
import { SESSION } from '../store/session';
import type { EventType } from '../types/domain';

export default function HomePage() {
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);

  useEffect(() => {
    eventTypesApi
      .listByUser(SESSION.userId)
      .then((ets) => setEventTypes(ets))
      .catch(() => {});
  }, []);

  const firstSlug = eventTypes[0]?.slug;

  return (
    <div className="min-h-dvh bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 font-semibold text-lg text-slate-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
              C
            </span>
            <span>Cal Clone</span>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#" className="hover:text-slate-900">
              Product
            </a>
            <a href="#" className="hover:text-slate-900">
              Solutions
            </a>
            <a href="#" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#" className="hover:text-slate-900">
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/dashboard/event-types">
              <button className="text-sm text-slate-600 hover:text-slate-900">
                Login
              </button>
            </Link>
            <Link to="/dashboard/event-types">
              <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Scheduling infrastructure
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Scheduling infrastructure for everyone.
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Create booking links and let people schedule meetings with you
            instantly. Powered by your Node, React, and MySQL stack.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/dashboard/event-types">
              <Button>Open Dashboard</Button>
            </Link>
            <Link to={firstSlug ? `/book/${firstSlug}` : '/dashboard/event-types'}>
              <Button variant="secondary" disabled={!firstSlug}>
                Try Booking Flow
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Event Types
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Define 15, 30, or 60 minute event types and share unique links.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Availability
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Configure weekly schedules and let the system generate slots.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Bookings
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Capture name, email, and time while preventing double-booking.
              </p>
            </div>
          </div>
        </section>

        {/* Feature cards section */}
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3">
          <Card className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-slate-900">Event Types</p>
            <p className="mt-2 text-sm text-slate-600">
              Central place to manage all of your booking presets and links.
            </p>
          </Card>
          <Card className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-slate-900">Availability</p>
            <p className="mt-2 text-sm text-slate-600">
              Day-of-week based availability with intelligent slot generation.
            </p>
          </Card>
          <Card className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-slate-900">Bookings</p>
            <p className="mt-2 text-sm text-slate-600">
              See upcoming meetings, cancel bookings, and keep your calendar in
              sync.
            </p>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-10 border-t bg-white py-10 text-center text-sm text-slate-500">
        <p>© 2026 Cal Clone. Built with React, Express and MySQL.</p>
      </footer>
    </div>
  );
}
