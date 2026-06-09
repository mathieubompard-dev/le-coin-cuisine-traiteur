"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Nav() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          //   className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          <img
            src="/logo/logo-noir.png"
            alt="Le Coin Cuisine Traiteur"
            className="h-20 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/evenements-entreprise"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {t("nav.corporateEvents")}
          </Link>
          <Link
            href="/evenements-prives"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {t("nav.privateEvents")}
          </Link>
          <Link
            href="/nous-connaitre"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="/nous-contacter"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {t("nav.contact")}
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
