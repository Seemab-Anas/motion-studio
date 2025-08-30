'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-0 lg:px-0 py-4">
        <div>
          <Image
            src="/logo-black.png"
            alt="Motion Studio Logo"
            width={120}
            height={40}
            priority
          />
        </div>
      </div>
    </nav>
  );
}