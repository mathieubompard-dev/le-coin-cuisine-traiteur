"use client";

import { useTranslation } from "react-i18next";
import { Carousel } from "./components/Carousel";
import Card from "./components/Card";

export default function Home() {
  const { t } = useTranslation();
  const description = t("home.description", {
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
        </Card>
      </section>

      <section className="px-6">
        <Card className="grid gap-6">
          <p className="font-bold">{t("home.theyTrustUs")}</p>
        </Card>
      </section>
    </main>
  );
}
