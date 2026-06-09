"use client";

import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLang = (lang: string) => {
    void i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2 rounded-full border border-slate-300 bg-white/80 px-2 py-1 text-sm shadow-sm shadow-slate-200 backdrop-blur dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-100">
      <button
        type="button"
        className="rounded-full px-3 py-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
        onClick={() => switchLang("fr")}
      >
        FR
      </button>
      <button
        type="button"
        className="rounded-full px-3 py-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
        onClick={() => switchLang("en")}
      >
        EN
      </button>
    </div>
  );
}
