'use client';

import { useState } from 'react';
import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import SideMenu from './SideMenu';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="h-16 p-4 flex justify-between items-center border-b border-gray-200">
        <button onClick={() => setOpen(true)}>
          <Bars3Icon className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex items-center gap-4">
          <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
          <UserIcon className="w-6 h-6 text-gray-700" />
        </div>
      </header>

      <SideMenu open={open} setOpen={setOpen} />
    </>
  );
}
