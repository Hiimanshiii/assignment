import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';

export default function PublicLayout() {
  return (
    <div className="min-h-dvh bg-slate-50">
      <Navbar />
      <main className="container-page py-8">
        <Outlet />
      </main>
    </div>
  );
}
