"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  {
    src: "/carousel/entreprises.JPG",
    alt: "Des prestations sur mesures pour les entreprises et les particuliers",
  },
  {
    src: "/carousel/thales.JPG",
    alt: "Des solutions pour les entreprises",
  },
  {
    src: "/carousel/caussols.JPG",
    alt: "Un engagement éco-responsable, sur lequel communiquer",
  },
  {
    src: "/carousel/equipe.JPG",
    alt: "Une équipe de professionnels engagés",
  },
  {
    src: "/carousel/plats.JPG",
    alt: "Des recettes originales",
  },
];

export function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        slidesPerView={1}
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <div className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-130 w-full object-cover transition duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
