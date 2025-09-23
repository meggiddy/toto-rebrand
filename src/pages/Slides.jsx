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
    <div className="h-96">
      <ImageCarousel images={images} autoPlay interval={4000} />
    </div>
  );
}
