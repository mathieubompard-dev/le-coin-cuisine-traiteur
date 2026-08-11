"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const defaultImages = [
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
export function Carousel({
  images: imagesProp,
  continuous = true,
}: {
  images?: { src: string; alt?: string }[];
  continuous?: boolean;
}) {
  const images = imagesProp ?? defaultImages;

  const autoplay = continuous
    ? { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }
    : { delay: 3500, disableOnInteraction: false };

  const speed = continuous ? 3000 : 500;

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        autoplay={autoplay}
        loop
        slidesPerView={1}
        speed={speed}
        allowTouchMove
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <img
              src={image.src}
              alt={image.alt ?? ""}
              className="block aspect-video max-h-130 w-full object-cover transition duration-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
