'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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
          fixed inset-0 bg-black/40 transition-opacity
          ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      />

      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg
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
          <Link href="#" className="hover:text-black text-gray-600">
            Men
          </Link>
          <Link href="#" className="hover:text-black text-gray-600">
            Women
          </Link>
        </nav>
      </div>
    </>
  );
}
