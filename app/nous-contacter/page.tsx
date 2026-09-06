"use client";

import { useTranslation } from "react-i18next";
import type { ReactElement } from "react";
import Card from "../components/Card";
import { TheyTrustUs } from "../components/TheyTrustUs";

export default function ContactPage(): ReactElement {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex w-full flex-col gap-6 p-6">
      <section>
        <Card>
          <div className="space-y-4">
            <h1 className="text-xl uppercase tracking-[0.15em] text-[var(--color-accent)]">
              {t("nav.contact")}
            </h1>
            <p>{t("contact.text")}</p>
          </div>
        </Card>
      </section>

      <Card>
        <div className="space-y-5">
          <div>
            <h2 className="text-sm text-[var(--color-accent)] font-semibold uppercase tracking-[0.24em]">
              {t("contact.emailLabel")}
            </h2>
            <a
              className="mt-2 underline block text-base underline-offset-4 hover:underline hover:text-[var(--color-accent)]"
              href="mailto:contact@lecoincuisinetraiteur.fr"
            >
              contact@lecoincuisinetraiteur.fr
            </a>
          </div>
          <div>
            <h2 className="text-sm text-[var(--color-accent)] font-semibold uppercase tracking-[0.24em]">
              {t("contact.phoneLabel")}
            </h2>
            <a
              className="mt-2 underline block text-base underline-offset-4 hover:underline hover:text-[var(--color-accent)]"
              href="tel:0615155064"
            >
              06 15 15 50 64
            </a>
            <a
              className="mt-2 underline block text-base underline-offset-4 hover:underline hover:text-[var(--color-accent)]"
              href="tel:0625026362"
            >
              06 25 02 63 62
            </a>
          </div>
          <div>
            <h2 className="text-sm text-[var(--color-accent)] font-semibold uppercase tracking-[0.24em]">
              {t("contact.socialNetworksLabel")}
            </h2>
            <a
              className="mt-2 flex items-center gap-3 text-base underline underline-offset-4 hover:text-[var(--color-accent)]"
              href="https://www.instagram.com/lecoincuisinetraiteur"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  width="17"
                  height="17"
                  x="3.5"
                  y="3.5"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              @lecoincuisinetraiteur
            </a>
            <a
              className="mt-2 flex items-center gap-3 text-base underline underline-offset-4 hover:text-[var(--color-accent)]"
              href="https://www.facebook.com/lecoincuisinetraiteur/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />
              </svg>
              lecoincuisinetraiteur
            </a>
          </div>
        </div>
      </Card>

      <section>
        <TheyTrustUs />
      </section>
    </main>
  );
}
