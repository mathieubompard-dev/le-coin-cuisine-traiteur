"use client";

import { useTranslation } from "react-i18next";
import type { ReactElement } from "react";

export default function AboutPage(): ReactElement {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as string[];

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
          {t("nav.about")}
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
          {t("about.title")}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t("about.text")}
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div
            key={value}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950/80"
          >
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {value}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
