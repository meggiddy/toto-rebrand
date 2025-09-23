import React, { useMemo } from "react";

export default function WhatsAppWidget({
  number = "",
  message = "",
  text = "Message Us",
  color = "#25D366",
  bg = "#f3f4f6",
  theme = "light",
  position = "right",
  mb = "20px",
  mx = "20px",
  radius = "20px",
  boxShadow = "none",
  compact = false,
}) {
  // sanitize number: keep digits only
  const phone = useMemo(
    () => (number || "").toString().replace(/\D/g, ""),
    [number]
  );

  const href = useMemo(() => {
    if (!phone) return "https://wa.me/"; // fallback if missing
    const q = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${phone}${q}`;
  }, [phone, message]);

  const textColor = theme === "dark" ? "#000000" : "#ffffff";

  const shadowClass =
    boxShadow === "low"
      ? "shadow-sm"
      : boxShadow === "medium"
      ? "shadow-md"
      : boxShadow === "high"
      ? "shadow-xl"
      : "";

  const containerStyle = {
    position: "fixed",
    bottom: mb,
    zIndex: 999999,
    cursor: "pointer",
    [position === "right" ? "right" : "left"]: mx,
  };

  const buttonStyle = {
    backgroundColor: bg, // light grey
    color, // WhatsApp green for icon + text
    borderRadius: radius,
    border: "1px solid rgba(0,0,0,0.06)", // subtle edge so it doesn't melt into page
  };

  // hide the widget when no number is set:
  if (!phone) return null;

  return (
    <div style={containerStyle} aria-live="polite">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        className={`group inline-flex items-center gap-2 font-medium no-underline transition-transform duration-200 hover:scale-[1.03] ${shadowClass} ${
          compact ? "p-3 rounded-full" : "px-4 py-3"
        }`}
        style={buttonStyle}
      >
        {/* icon */}
        <span
          className="icon-[tabler--brand-whatsapp] text-[20px] leading-none"
          aria-hidden="true"
        />
        {!compact && <span className="text-sm">{text}</span>}
      </a>
    </div>
  );
}
