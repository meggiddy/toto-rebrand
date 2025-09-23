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
