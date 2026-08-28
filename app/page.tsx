"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "./components/Card";
import { Carousel } from "./components/Carousel";

export default function Home() {
  const { t } = useTranslation();
  const description = t("home.description", {
    returnObjects: true,
  }) as string[];
  const trustedCompanies = [
    "Thales Alenia Space Cannes",
    "Brockton Capital MIPIM",
    "Orchestre de Cannes",
    "Green room expérience GP Monaco",
    "Cinéum de Cannes",
    "Sophia Engineering",
    "Polytech Sophia",
    "Padel Riviera Mougins",
    "Wolfgang Yacht Nice",
    "Plage de l’Alba Cannes 06",
    "Association Cannes Cinema",
  ];

  const [accueilImages, setAccueilImages] = useState<
    { src: string; alt?: string }[] | undefined
  >(undefined);
  useEffect(() => {
    let mounted = true;

    fetch("/api/images")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.images?.length) {
          setAccueilImages(
            data.images.map((name: string) => ({
              src: `/images/accueil/${encodeURIComponent(name)}`,
              alt: name.replace(/\.[^/.]+$/, ""),
            })),
          );
        } else {
          setAccueilImages(undefined);
        }
      })
      .catch(() => {
        if (mounted) setAccueilImages(undefined);
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

      <section className="px-3">
        <Carousel images={accueilImages} />
      </section>

      <section className="px-6">
        <Card className="grid gap-6">
          <h1 className="text-l uppercase tracking-[0.15em] text-[var(--color-accent)]">
            {t("home.theyTrustUs")}
          </h1>
          <div
            className="trust-marquee border-y border-[var(--color-accent)]/35 py-5"
            aria-label={t("home.theyTrustUs")}
          >
            <div className="trust-marquee__track">
              {[0, 1].map((copy) => (
                <ul
                  aria-hidden={copy === 1}
                  className="trust-marquee__list"
                  key={copy}
                >
                  {trustedCompanies.map((company) => (
                    <li
                      className="trust-marquee__item"
                      key={`${copy}-${company}`}
                    >
                      <span className="trust-marquee__dot" aria-hidden="true" />
                      {company}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
