import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
            C
          </span>
          <span>Cal Clone</span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          <NavLink
            to="/dashboard/event-types"
            className={({ isActive }) =>
              [
                'rounded-lg px-3 py-2',
                isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50',
              ].join(' ')
            }
          >
            Dashboard
          </NavLink>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-50"
          >
            Inspiration
          </a>
        </nav>
      </div>
    </header>
  );
}
