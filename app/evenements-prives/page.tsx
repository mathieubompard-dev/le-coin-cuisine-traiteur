"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Carousel } from "../components/Carousel";
import type { ReactElement } from "react";

export default function PrivateEventsPage(): ReactElement {
  const { t } = useTranslation();
  const highlights = t("private.highlights", {
    returnObjects: true,
  }) as string[];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
          {t("nav.privateEvents")}
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
          {t("private.title")}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t("private.text")}
        </p>
      </section>

      <Carousel />

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950/80"
          >
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {item}
            </p>
          </div>
        ))}
      </section>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-slate-700 dark:bg-slate-900/80">
        <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t("contact.text")}
        </p>
        <Link
          href="/nous-contacter"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
        >
          {t("home.contactCta")}
        </Link>
      </div>
    </main>
  );
}
