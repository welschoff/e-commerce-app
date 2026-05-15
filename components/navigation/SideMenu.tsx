'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import CategoryLink from '../categoryLink/CategoryLink';

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

export default function SideMenu({ open, setOpen }: Props) {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed z-10 inset-0 bg-black/40 transition-opacity
          ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      />

      <div
        className={`
          fixed z-20 top-0 left-0 h-full w-64 bg-white shadow-lg
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="h-16 p-4 flex items-center border-b">
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-4">
          <CategoryLink label="Home" href="/" onClick={() => setOpen(false)} />
          <CategoryLink
            label="Men’s Clothing"
            href={`/category/${encodeURIComponent(`men's clothing`)}`}
            onClick={() => setOpen(false)}
          />
          <CategoryLink
            label="Women’s Clothing"
            href={`/category/${encodeURIComponent(`women's clothing`)}`}
            onClick={() => setOpen(false)}
          />
          <CategoryLink
            label="Electronics"
            href="/category/electronics"
            onClick={() => setOpen(false)}
          />
          <CategoryLink
            label="Jewelery"
            href="/category/jewelery"
            onClick={() => setOpen(false)}
          />
        </nav>
      </div>
    </>
  );
}
