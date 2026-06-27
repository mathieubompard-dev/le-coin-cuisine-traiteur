"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Carousel } from "../components/Carousel";
import Card from "../components/Card";
import Button from "../components/Button";
import type { ReactElement } from "react";

export default function PrivateEventsPage(): ReactElement {
  const { t } = useTranslation();
  const description = t("private.description", {
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
    </main>
  );
}
