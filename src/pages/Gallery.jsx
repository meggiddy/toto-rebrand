import React from "react";

const modules = import.meta.glob(
  "../assets/castles/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    import: "default", // gives you the final URL string
  }
);

const images = Object.keys(modules)
  .sort()
  .map((path) => {
    const src = modules[path];
    const file = path.split("/").pop() || "";
    const alt = file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
    return { src, alt };
  });

const Gallery = () => {
  return (
    <div
      className="gap-6 p-4"
      // tiles will be at least 280px wide and grow
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
    >
      {/* Header */}
      <div className="relative mx-auto my-12 w-fit sm:my-16 lg:my-24">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
          Gallery
        </h2>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-9 h-1 w-full rounded-full bg-gradient-to-r from-cyan-500/40 to-cyan-500/5"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {images.map((img, i) => (
          <figure
            key={i}
            className="items-center overflow-hidden rounded shadow-blue-400"
          >
            {/* Use a consistent box with cover fit */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-square w-full object-coverobject-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="sr-only">{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
