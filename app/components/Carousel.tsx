"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Card from "./Card";

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
  imageFit = "cover",
  aspectClass = "aspect-video",
}: {
  images?: { src: string; alt?: string }[];
  continuous?: boolean;
  imageFit?: "cover" | "contain";
  aspectClass?: string;
}) {
  const images = imagesProp ?? defaultImages;
  const galleryListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imagesProp || !galleryListRef.current) return;

    const galleryList = galleryListRef.current;
    const updateDuration = () => {
      const pixelsPerSecond = 90;
      galleryList.parentElement?.style.setProperty(
        "--gallery-duration",
        `${galleryList.offsetWidth / pixelsPerSecond}s`,
      );
    };

    const observer = new ResizeObserver(updateDuration);
    observer.observe(galleryList);
    updateDuration();

    return () => observer.disconnect();
  }, [imagesProp]);

  if (imagesProp) {
    return (
      <Card className="px-2">
        <div className="gallery-marquee w-full min-w-0 overflow-hidden">
          <div className="gallery-marquee__track">
            {[0, 1].map((copy) => (
              <div
                aria-hidden={copy === 1}
                className="gallery-marquee__list"
                ref={copy === 0 ? galleryListRef : undefined}
                key={copy}
              >
                {images.map((image) => (
                  <img
                    src={image.src}
                    alt={copy === 1 ? "" : (image.alt ?? "")}
                    className="block h-[clamp(12rem,50vw,20rem)] w-auto max-w-none object-contain"
                    key={`${copy}-${image.src}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

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
              className={`block ${aspectClass} max-h-130 w-full object-${imageFit} transition duration-500`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
