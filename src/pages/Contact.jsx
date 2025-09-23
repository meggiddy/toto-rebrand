import React from "react";

import contactImg from "../assets/location.jpeg";
import { Link } from "react-router";

export default function ContactBlock() {
  return (
    <section className="my-8 sm:py-16 lg:my-24 h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Contact Us
          </h2>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-9 h-1 w-full rounded-full bg-gradient-to-r from-cyan-500/40 to-cyan-500/5"
          />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <img
            src={contactImg}
            alt="Contact illustration"
            className="w-full rounded-xl object-cover"
          />

          {/* Contact Info Section */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Let us bring the fun!
            </h3>
            <p className="mb-10 text-lg font-medium text-gray-600">
              We provide the blocks and components you need to build a polished
              website, landing page, or admin panel — fast.
            </p>

            {/* Contact Info Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Office Hours */}
              <div className="rounded-xl border border-gray-200 p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-600">
                  {/* Iconify (optional) */}
                  <span
                    className="icon-[tabler--clock] text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  Office Hours
                </h4>
                <p className="text-gray-600">Monday–Saturday</p>
                <p className="text-gray-600">8:00 am to 5:00 pm</p>
              </div>

              <div className="rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:bg-linear-to-bl from-cyan-500/15 to-blue-500/15">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-600">
                  <span
                    className="icon-[tabler--map-pin] text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  Our Address
                </h4>
                <Link to={"https://maps.google.com/?q=-1.183295,36.995144"}>
                  <address className="not-italic text-gray-600">
                    Joyland Gardens
                    <br />
                    Kamakis Corner
                  </address>
                </Link>
              </div>

              {/* Get in Touch */}
              <div className="rounded-xl border border-gray-200 p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/30 text-cyan-600">
                  <span
                    className="icon-[tabler--phone] text-xl"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-900">
                  Get in Touch
                </h4>
                <p className="text-gray-600">+254 722 286300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
