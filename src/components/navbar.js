'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto h-[64px] bg-white shadow-md rounded-full px-6">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={140}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-[#171824] hover:text-[#0C4F8D] transition">Home</Link>
          
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onFocus={() => setIsServicesOpen(true)}
            onBlur={() => setIsServicesOpen(false)}
          >
            <button
              className="text-[#171824] hover:text-[#0C4F8D] transition flex items-center"
            >
              Services ▾
            </button>
            <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all ${
              isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <Link href="/it-support" className="block px-4 py-2 text-sm text-[#171824] hover:bg-gray-100">
                IT Consultancy
              </Link>
              <Link href="/financial" className="block px-4 py-2 text-sm text-[#171824] hover:bg-gray-100">
                Financial Services
              </Link>
            </div>
          </div>

          <Link href="/why-us" className="text-[#171824] hover:text-[#0C4F8D] transition">Why Us</Link>
          <Link href="/blogs" className="text-[#171824] hover:text-[#0C4F8D] transition">Blogs</Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/contactUs"
            className="bg-[#0C4F8D] text-white px-6 py-3 rounded-full hover:bg-[#083865] transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-[#0C4F8D] w-10 h-10 rounded-full text-white flex items-center justify-center leading-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            // Close (X) icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-white rounded-2xl p-4 space-y-3 shadow-lg">
          <Link href="/" className="block text-[#171824] hover:text-[#0C4F8D]" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>

          {/* Services mobile dropdown */}
          <details>
            <summary className="cursor-pointer text-[#171824] hover:text-[#0C4F8D]">Services</summary>
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/it-support" className="block text-sm text-[#171824] hover:text-[#0C4F8D]" onClick={() => setIsMenuOpen(false)}>
                IT Consultancy
              </Link>
              <Link href="/financial" className="block text-sm text-[#171824] hover:text-[#0C4F8D]" onClick={() => setIsMenuOpen(false)}>
                Financial Services
              </Link>
            </div>
          </details>

          <Link href="/why-us" className="block text-[#171824] hover:text-[#0C4F8D]" onClick={() => setIsMenuOpen(false)}>
            Why Us
          </Link>
          <Link href="/blogs" className="block text-[#171824] hover:text-[#0C4F8D]" onClick={() => setIsMenuOpen(false)}>
            Blogs
          </Link>

          <Link
            href="/contactUs"
            className="block bg-[#0C4F8D] text-white text-center py-3 rounded-full hover:bg-[#083865]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
