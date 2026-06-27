"use client";

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

  return (
    <main className="mx-auto flex w-full flex-col gap-6">
      <Carousel />

      <section className="px-6">
        <Card className="grid gap-6">
          {description.map((paragraph, index) => (
            <p className="font-bold" key={index}>
              {paragraph}
            </p>
          ))}
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
