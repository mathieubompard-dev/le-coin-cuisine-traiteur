"use client";

import { useTranslation } from "react-i18next";
import Card from "./Card";

export function TheyTrustUs() {
  const { t } = useTranslation();

  const trustedCompanies = [
    "Thales Alenia Space Cannes",
    "Brockton Capital MIPIM",
    "Orchestre de Cannes",
    "Green room expérience GP Monaco",
    "Cinéum de Cannes",
    "Sophia Engineering",
    "Polytech Sophia",
    "Padel Riviera Mougins",
    "Wolfgang Yacht Nice",
    "Plage de l’Alba Cannes 06",
    "Association Cannes Cinema",
  ];

  return (
    <Card className="grid gap-6">
      <h1 className="text-l uppercase tracking-[0.15em] text-[var(--color-accent)]">
        {t("home.theyTrustUs")}
      </h1>
      <div
        className="trust-marquee border-y border-[var(--color-accent)]/35 py-5"
        aria-label={t("home.theyTrustUs")}
      >
        <div className="trust-marquee__track">
          {[0, 1].map((copy) => (
            <ul
              aria-hidden={copy === 1}
              className="trust-marquee__list"
              key={copy}
            >
              {trustedCompanies.map((company) => (
                <li className="trust-marquee__item" key={`${copy}-${company}`}>
                  <span className="trust-marquee__dot" aria-hidden="true" />
                  {company}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </Card>
  );
}
