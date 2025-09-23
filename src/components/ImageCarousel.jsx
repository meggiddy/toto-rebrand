import React, { useEffect, useRef, useState } from "react";

export default function ImageCarousel({
  images = [],
  autoPlay = false,
  interval = 4000,
  aspectClass = "h-96",
  ariaLabel = "Image carousel",
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);
  const count = images.length;

  const goTo = (i) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [index, autoPlay, interval, count, next]);

  // pause on hover (optional nice-to-have)
  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    if (autoPlay && count > 1) {
      timerRef.current = setInterval(next, interval);
    }
  };

  // keyboard navigation
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // swipe gestures
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 50;
    if (dx > SWIPE_THRESHOLD) prev();
    if (dx < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  if (count === 0) return null;

  return (
    <section
      className="relative w-full my-6"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      {/* viewport */}
      <div
        className={`overflow-hidden rounded-xl bg-black/10 ${aspectClass}`}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        tabIndex={0} // focusable for keyboard arrows
      >
        {/* track */}
        <ul
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          role="list"
        >
          {images.map((img, i) => (
            <li
              key={i}
              className="min-w-full h-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${count}`}
            >
              <div className="flex h-full justify-center">
                <img
                  src={img.src}
                  alt={img.alt ?? `Slide ${i + 1}`}
                  className="block h-full w-full object-cover"
                  draggable="false"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Prev */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 hover:bg-white/50 text-gray-800 shadow-sm ring-1 ring-black/5 flex items-center justify-center"
      >
        {/* left chevron */}
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 hover:bg-white/50 text-gray-800 shadow-sm ring-1 ring-black/5 flex items-center justify-center"
      >
        {/* right chevron */}
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/10 transition
              ${i === index ? "bg-white/20" : "bg-white/50 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
