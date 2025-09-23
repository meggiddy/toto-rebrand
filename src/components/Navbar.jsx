import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imgUrl from "../assets/Toto.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-bl from-cyan-500/40 to-blue-500/40 backdrop-blur supports-[backdrop-filter]:bg-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={imgUrl}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className="text-white/90 hover:text-white text-lg font-semibold"
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className="text-white/90 hover:text-white text-lg font-semibold"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white/90 hover:text-white text-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {/* Bars icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile panel (slide-in) */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-gray-900 text-white shadow-xl ring-1 ring-black/10 transition-transform duration-200 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src={imgUrl}
              alt="Logo"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="font-semibold">Toto</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {/* X icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="mt-2 px-2">
          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10"
          >
            Services
          </Link>
          <Link
            to="/gallery"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
