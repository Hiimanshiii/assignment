import { NavLink } from 'react-router-dom';

const linkBase =
  'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition';

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white md:block">
      <div className="p-4">
        <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
          <p className="text-xs font-medium text-slate-500">Workspace</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            Your scheduling
          </p>
        </div>

        <nav className="mt-4 space-y-1">
          <NavLink
            to="/dashboard/event-types"
            className={({ isActive }) =>
              [
                linkBase,
                isActive
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-600 hover:bg-slate-50',
              ].join(' ')
            }
          >
            Event Types
          </NavLink>

          <NavLink
            to="/dashboard/availability"
            className={({ isActive }) =>
              [
                linkBase,
                isActive
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-600 hover:bg-slate-50',
              ].join(' ')
            }
          >
            Availability
          </NavLink>

          <NavLink
            to="/dashboard/bookings"
            className={({ isActive }) =>
              [
                linkBase,
                isActive
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-600 hover:bg-slate-50',
              ].join(' ')
            }
          >
            Bookings
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}
