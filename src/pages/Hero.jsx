import bgUrl from "../assets/background.jpg";
import React from "react";

const Hero = () => {
  const dial = (num) => {
    const e164 = `+${num.replace(/\D/g, "")}`;
    window.location.href = `tel:${e164}`;
  };

  return (
    <div
      className="flex flex-row items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${bgUrl})`,
      }}
    >
      {/* overlay that makes the bg “transparent” */}
      <div className="absolute bg-white/70 lg:bg-white/60 h-full" />

      {/* content stays fully opaque */}
      <div className="flex flex-col items-center justify-center z-10 text-center">
        <p className="m-6 text-6xl font-bold text-gray-800 font-serif">
          Welcome to Toto Bouncing Castles
        </p>
        <div
          role="button"
          tabIndex={0}
          onClick={() => dial("+254 722 286300")}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && dial("+254 722 286300")
          }
          className="m-6 flex flex-row items-center justify-center space-x-4 text-2xl hover:text-[#25D366]"
        >
          <span className="icon-[tabler--phone] text-2xl" aria-hidden="true" />
          <p className="font-serif">+254 722 286300</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
