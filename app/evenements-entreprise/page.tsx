"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { Carousel } from "../components/Carousel";
import Card from "../components/Card";
import type { ReactElement } from "react";

export default function CorporateEventsPage(): ReactElement {
  const { t } = useTranslation();
  const description = t("corporate.description", {
    returnObjects: true,
  }) as string[];

  const [galleryImages, setGalleryImages] = useState<
    { src: string; alt?: string }[] | undefined
  >(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch("/api/images?dir=images/entreprise")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.images?.length) {
          setGalleryImages(
            data.images.map((name: string) => ({
              src: `/images/entreprise/${encodeURIComponent(name)}`,
              alt: name.replace(/\.[^/.]+$/, ""),
            })),
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <main className="mx-auto flex w-full flex-col gap-4 py-6">
      <section className="px-2">
        <Card className="grid gap-6">
          <h1 className="text-xl uppercase tracking-[0.15em] text-[var(--color-accent)]">
            {t("nav.corporateEvents")}
          </h1>
          {description.map((paragraph, index) => (
            <p className="font-bold" key={index}>
              {paragraph}
            </p>
          ))}
          <Button
            className="w-fit border border-[var(--color-accent)] px-4 py-2"
            onClick={() => setIsMenuOpen(true)}
          >
            {t("corporate.viewMenu")}
          </Button>
        </Card>
      </section>

      <section className="px-2">
        <Carousel images={galleryImages} />
      </section>

      <section className="px-2">
        <Card className="grid gap-6">
          <p className="font-bold italic">{t("corporate.goodChoice")}</p>
        </Card>
      </section>

      {isMenuOpen && (
        <div
          aria-label={t("corporate.menuTitle")}
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="relative flex max-h-full max-w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src="/images/menu-entreprise.jpg"
              alt={t("corporate.menuTitle")}
              className="max-h-[92vh] max-w-[95vw] object-contain"
            />
            <button
              type="button"
              aria-label={t("corporate.closeMenu")}
              className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-[var(--color-accent)]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
