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

  const [accueilImages, setAccueilImages] = useState<
    { src: string; alt?: string }[] | undefined
  >(undefined);
  const [trustImages, setTrustImages] = useState<
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
            }))
          );
        } else {
          setAccueilImages(undefined);
        }
      })
      .catch(() => {
        if (mounted) setAccueilImages(undefined);
      });
    fetch("/api/images?dir=images/trust")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.images?.length) {
          setTrustImages(
            data.images.map((name: string) => ({
              src: `/images/trust/${encodeURIComponent(name)}`,
              alt: name.replace(/\.[^/.]+$/, ""),
            }))
          );
        } else {
          setTrustImages(undefined);
        }
      })
      .catch(() => {
        if (mounted) setTrustImages(undefined);
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
          <Card className="grid gap-4">
            <p className="font-bold">{t("home.theyTrustUs")}</p>
          <Carousel images={trustImages} />
          </Card>
        </section>
    </main>
  );
}
