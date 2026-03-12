import type { ReactNode } from 'react';

export default function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'rounded-2xl bg-white shadow-soft ring-1 ring-slate-200',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

