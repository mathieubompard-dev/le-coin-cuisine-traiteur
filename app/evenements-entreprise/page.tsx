"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Carousel } from "../components/Carousel";
import Card from "../components/Card";
import Button from "../components/Button";
import type { ReactElement } from "react";

export default function CorporateEventsPage(): ReactElement {
  const { t } = useTranslation();
  const highlights = t("corporate.highlights", {
    returnObjects: true,
  }) as string[];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
          {t("nav.corporateEvents")}
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
          {t("corporate.title")}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t("corporate.text")}
        </p>
      </section>

      <Carousel />

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item}>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {item}
            </p>
          </Card>
        ))}
      </section>

      <Card className="text-center p-8">
        <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t("contact.text")}
        </p>
        <div className="mt-6">
          <Button href="/nous-contacter" variant="primary">
            {t("home.contactCta")}
          </Button>
        </div>
      </Card>
    </main>
  );
}
