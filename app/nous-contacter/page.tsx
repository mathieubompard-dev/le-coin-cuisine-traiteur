"use client";

import { useTranslation } from "react-i18next";
import type { FormEvent, ReactElement } from "react";

export default function ContactPage(): ReactElement {
  const { t } = useTranslation();

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
          {t("nav.contact")}
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
          {t("contact.title")}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
          {t("contact.text")}
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={submitForm}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-950/80"
        >
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("contact.formName")}
            <input
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              type="text"
              required
            />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("contact.formEmail")}
            <input
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              type="email"
              required
            />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("contact.formMessage")}
            <textarea
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              rows={6}
              required
            />
          </label>
          <button
            type="submit"
            className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            {t("contact.formSubmit")}
          </button>
        </form>

        <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900/80">
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                Email
              </h2>
              <p className="mt-2 text-base text-slate-900 dark:text-slate-100">
                {t("contact.email")}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
                Téléphone
              </h2>
              <p className="mt-2 text-base text-slate-900 dark:text-slate-100">
                {t("contact.phone")}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
