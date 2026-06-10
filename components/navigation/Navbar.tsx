'use client';

import { useState } from 'react';
import {
  Bars3Icon,
  ShoppingCartIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import SideMenu from './SideMenu';
import { logout } from '@/app/(auth)/login/actions';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-5 bg-white h-16 p-4 flex justify-between items-center border-b border-gray-200">
        <button onClick={() => setOpen(true)}>
          <Bars3Icon className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex items-center gap-4">
          <ShoppingCartIcon className="w-6 h-6 text-gray-700" />

          <form action={logout} className="contents">
            <button type="submit">
              <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-gray-700" />
            </button>
          </form>
        </div>
      </header>

      <SideMenu open={open} setOpen={setOpen} />
    </>
  );
}
