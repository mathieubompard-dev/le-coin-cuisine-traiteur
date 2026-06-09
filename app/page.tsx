"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Carousel } from "./components/Carousel";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        {/* <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
            {t("nav.menu")}
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {t("home.title")}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            {t("home.subtitle")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/evenements-entreprise"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
            >
              {t("nav.corporateEvents")}
            </Link>
            <Link
              href="/nous-contacter"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {t("home.contactCta")}
            </Link>
          </div>
        </div> */}

        <Carousel />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {t("home.section1")}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            {t("home.section1Text")}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {t("home.section2")}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            {t("home.section2Text")}
          </p>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {t("home.section3")}
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            {t("home.section3Text")}
          </p>
        </article>
      </section>
    </main>
  );
}
