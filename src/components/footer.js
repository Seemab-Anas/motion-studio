"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#045494] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Logo */}
          <div className="flex flex-col gap-4">
            <div className="w-[160px]">
              <Image
                src="/logo.png"
                alt="Clarygen logo"
                width={320}
                height={80}
                style={{ filter: "invert(1) brightness(2)" }}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-white/90 max-w-[260px]">
              Integrated IT & financial outsourcing solutions — enterprise expertise with a human touch.
            </p>

            <div className="mt-2 text-xs text-white/80">
              <div>Headquarters: Mildenhall, UK</div>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3">
            <h4 className="text-lg font-semibold">Links</h4>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/it-support" className="text-sm hover:underline">
                  IT Support & Consultancy
                </Link>
              </li>
              <li>
                <Link href="/financial" className="text-sm hover:underline">
                  Financial & Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/contactUs" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="text-sm hover:underline">
                  Why Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info (reduced horizontal padding + icons) */}
          <div className="px-2">
            <h4 className="text-lg font-semibold">Contact Us</h4>

            <div className="mt-3 text-sm space-y-4 text-white/90">
              <div className="flex items-start gap-3">
                <div className="flex-none bg-white/10 p-2 rounded-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/80">Phone</div>
                  <a href="tel:+447367062976" className="block mt-1 hover:underline">
                    +44 7367 062976
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-none bg-white/10 p-2 rounded-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/80">Email</div>
                  <div className="mt-1 text-sm">
                    <a className="hover:underline" href="mailto:info@clarygen.com">info@clarygen.com</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-none bg-white/10 p-2 rounded-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/80">Address</div>
                  <address className="not-italic mt-1 text-sm">
                    82 James Carter Road
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold">Follow Us</h4>

              <p className="mt-3 text-sm text-white/90">
                Connect with us on WhatsApp or LinkedIn for quick support and updates.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://wa.me/447367062976"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="text-white"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .001 5.373 0 12c0 2.116.553 4.182 1.6 6.01L0 24l6.15-1.592A11.927 11.927 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.197-1.246-6.202-3.48-8.52zM12 21.6c-1.486 0-2.917-.402-4.15-1.163l-.296-.182-3.651.945.97-3.56-.193-.305A9.6 9.6 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4c5.304 0 9.6 4.296 9.6 9.6S17.304 21.6 12 21.6z" />
                    <path d="M17.1 14.58c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.65.14-.2.28-.78.91-.96 1.1-.18.19-.35.21-.65.07-.3-.14-1.27-.47-2.42-1.49-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.29.3-.48.1-.19.05-.35-.02-.49-.07-.14-.65-1.56-.89-2.14-.23-.56-.46-.48-.65-.49-.17-.01-.36-.01-.55-.01-.19 0-.49.07-.75.35-.26.27-1 1-1 2.44 0 1.43 1.03 2.81 1.17 3.01.14.2 2.03 3.1 4.92 4.35 1.35.58 1.9.62 2.58.52.67-.1 2.06-.84 2.35-1.65.29-.81.29-1.5.2-1.65-.09-.15-.33-.24-.66-.38z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 transition"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">
            © {year} Clarygen Tech Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-white/80 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/80 hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
