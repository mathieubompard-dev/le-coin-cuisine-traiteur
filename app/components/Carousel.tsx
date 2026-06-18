"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    src: "/carousel/entreprises.jpg",
    alt: "Des prestations sur mesures pour les entreprises et les particuliers",
  },
  {
    src: "/carousel/thales.jpg",
    alt: "Des solutions pour les entreprises",
  },
  {
    src: "/carousel/caussols.jpg",
    alt: "Un engagement éco-responsable, sur lequel communiquer",
  },
  {
    src: "/carousel/equipe.jpg",
    alt: "Une équipe de professionnels engagés",
  },
  {
    src: "/carousel/plats.jpg",
    alt: "Des recettes originales",
  },
];

export function Carousel() {
  return (
    <div className="rounded-3xl border p-2 shadow-lg shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950/90">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        spaceBetween={24}
        slidesPerView={1}
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <div className="overflow-hidden rounded-3xl bg-slate-900/5">
              <img
                src={image.src}
                alt={image.alt}
                className="h-80 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
