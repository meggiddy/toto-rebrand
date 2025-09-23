import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Toto.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cyan-800/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Toto" className="h-16 w-16" />
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-white lg:flex">
          <NavLink to="/gallery" className="hover:text-cyan-200">
            Gallery
          </NavLink>
          <NavLink to="/services" className="hover:text-cyan-200">
            Services
          </NavLink>
          <NavLink to="/contact" className="hover:text-cyan-200">
            Contact Us
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="inline-flex items-center rounded-md p-2 text-white lg:hidden"
        >
          {/* hamburger / X */}
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`${
          open ? "block" : "hidden"
        } border-t border-white/10 bg-cyan-800/95 text-white lg:hidden`}
      >
        <div className="space-y-1 px-4 py-3">
          <NavLink
            to="/gallery"
            onClick={() => setOpen(false)}
            className="block rounded px-2 py-2 hover:bg-white/10"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setOpen(false)}
            className="block rounded px-2 py-2 hover:bg-white/10"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block rounded px-2 py-2 hover:bg-white/10"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  );
}
