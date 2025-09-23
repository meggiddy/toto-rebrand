import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";
import Footer from "./components/Footer.jsx";
import Gallery from "./pages/Gallery.jsx";
import WhatsAppWidget from "./components/Whatsapp.jsx";
import Services from "./pages/Services.jsx";

const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    {/* WhatsApp Widget */}
    <WhatsAppWidget
      number={phone}
      message="Hello! I'm interested in your products!"
    />
    <Footer />
  </BrowserRouter>
);
