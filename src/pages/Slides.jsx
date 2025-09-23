import React from "react";
import ImageCarousel from "../components/ImageCarousel";

export default function Slides() {
  const imported = import.meta.glob(
    "../assets/carousel/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  );
  const images = Object.values(imported).map((src, i) => ({
    src,
    alt: `Slide ${i + 1}`,
  }));
  return (
    <div className="">
      {/* Header */}
      <div className="relative mx-auto my-12 w-fit sm:my-16 lg:my-24">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
          For Sale
        </h2>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-9 h-1 w-full rounded-full bg-gradient-to-r from-cyan-500/40 to-cyan-500/5"
        />
      </div>
      <ImageCarousel images={images} autoPlay interval={4000} />
    </div>
  );
}
