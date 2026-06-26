"use client";

import { useTranslation } from "react-i18next";
import type { FormEvent, ReactElement } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ContactPage(): ReactElement {
  const { t } = useTranslation();

  return (
    <main className="mx-auto flex w-full flex-col gap-6 p-6">
      <section>
        <Card>
          <div className="space-y-4">
            <h1 className="text-2xl uppercase tracking-[0.15em]">
              {t("nav.contact")}
            </h1>
            <p className="text-lg">{t("contact.text")}</p>
          </div>
        </Card>
      </section>

      <Card>
        <div className="space-y-5">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em]">
              {t("contact.emailLabel")}
            </h2>
            <p className="mt-2 text-base">
              contact@le-coin-cuisine-traiteur.fr
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em]">
              {t("contact.phoneLabel")}
            </h2>
            <p className="mt-2 text-base">+33 1 23 45 67 89</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em]">
              {t("contact.instagramLabel")}
            </h2>
            <p className="mt-2 text-base">lien.instagram</p>
          </div>
        </div>
      </Card>
    </main>
  );
}
