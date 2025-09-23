import React from "react";
import poolPic from "../assets/castles/pool1.jpeg";
import pool from "../assets/carousel/pool.jpeg";
import pool2 from "../assets/carousel/train.jpeg";
import Corporate from "../assets/corporate.jpg";
import train from "../assets/carousel/train1.jpg";
import ImageCarousel from "./ImageCarousel";

const Packages = () => {
  const imported = import.meta.glob(
    "../assets/painting/*.{png,jpg,jpeg,webp}",
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

  const importedFest = import.meta.glob(
    "../assets/festival/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  );
  const imagesFest = Object.values(importedFest).map((src, i) => ({
    src,
    alt: `Slide ${i + 1}`,
  }));

  const importedPriv = import.meta.glob(
    "../assets/private/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  );
  const imagesPriv = Object.values(importedPriv).map((src, i) => ({
    src,
    alt: `Slide ${i + 1}`,
  }));

  const poolImages = [
    { src: poolPic, alt: "School Party 1" },
    { src: pool, alt: "School Party 2" },
    { src: pool2, alt: "School Party 3" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-4xl font-serif">Our Packages</p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-6">
          <div>
            <ImageCarousel images={poolImages} aspectClass="h-48" />
            <p>School Fun Days</p>
          </div>
          <div>
            <ImageCarousel images={images} aspectClass="h-48" />
            <p>Birthday Parties</p>
          </div>
          <div>
            <ImageCarousel
              images={[{ src: Corporate, alt: "Team Building" }]}
              aspectClass="h-48"
            />
            <p>Corporate Events</p>
          </div>
          <div>
            <ImageCarousel
              images={[{ src: train, alt: "Wedding" }]}
              aspectClass="h-48"
            />
            <p>Weddings</p>
          </div>
          <div>
            <ImageCarousel images={imagesFest} aspectClass="h-48" />
            <p>Festivals</p>
          </div>
          <div>
            <ImageCarousel images={imagesPriv} aspectClass="h-48" />
            <p>Private Events</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
