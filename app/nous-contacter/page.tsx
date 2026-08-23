"use client";

import { useTranslation } from "react-i18next";
import type { ReactElement } from "react";
import Card from "../components/Card";

export default function ContactPage(): ReactElement {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex w-full flex-col gap-6 p-6">
      <section>
        <Card>
          <div className="space-y-4">
            <h1 className="text-2xl uppercase tracking-[0.15em] text-[var(--color-accent)]">
              {t("nav.contact")}
            </h1>
            <p className="text-lg">{t("contact.text")}</p>
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
              className="mt-2 underline block text-base underline-offset-4 hover:underline"
              href="mailto:contact@le-coin-cuisine-traiteur.fr"
            >
              contact@le-coin-cuisine-traiteur.fr
            </a>
          </div>
          <div>
            <h2 className="text-sm text-[var(--color-accent)] font-semibold uppercase tracking-[0.24em]">
              {t("contact.phoneLabel")}
            </h2>
            <a
              className="mt-2 underline block text-base underline-offset-4 hover:underline"
              href="tel:+33123456789"
            >
              +33 1 23 45 67 89
            </a>
          </div>
          <div>
            <h2 className="text-sm text-[var(--color-accent)] font-semibold uppercase tracking-[0.24em]">
              {t("contact.instagramLabel")}
            </h2>
            <a
              className="mt-2 underline block text-base underline-offset-4 hover:underline"
              href="https://www.instagram.com/lecoincuisinetraiteur"
              target="_blank"
              rel="noreferrer"
            >
              @lecoincuisinetraiteur
            </a>
          </div>
        </div>
      </Card>
    </main>
  );
}
