"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { ReactElement } from "react";
import { Carousel } from "../components/Carousel";
import Card from "../components/Card";

export default function AboutPage(): ReactElement {
  const { t } = useTranslation();
  const description = t("about.description", {
    returnObjects: true,
  }) as string[];
  const ecoResponsible = t("about.ecoResponsible", {
    returnObjects: true,
  }) as string[];

  const [galleryImages, setGalleryImages] = useState<
    { src: string; alt?: string }[] | undefined
  >(undefined);

  useEffect(() => {
    let mounted = true;
    fetch("/api/images?dir=images/nous_connaitre")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.images?.length) {
          setGalleryImages(
            data.images.map((name: string) => ({
              src: `/images/nous_connaitre/${encodeURIComponent(name)}`,
              alt: name.replace(/\.[^/.]+$/, ""),
            }))
          );
        } else {
          setGalleryImages(undefined);
        }
      })
      .catch(() => {
        if (mounted) setGalleryImages(undefined);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="mx-auto flex w-full flex-col gap-4 py-6">
      <section className="px-6">
        <Card className="grid gap-6">
          {description.map((paragraph, index) => (
            <p className="font-bold" key={index}>
              {paragraph}
            </p>
          ))}
          </Card>
      </section>

      <section className="px-6">
        <Carousel images={galleryImages} />
      </section>

      <section className="px-6">
        <Card className="grid gap-6">
          {ecoResponsible.map((point, index) => (
            <p
              className="font-medium"
              key={index}
              dangerouslySetInnerHTML={{ __html: point }}
            />
          ))}
        </Card>
      </section>
    </main>
  );
}
