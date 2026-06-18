"use client";

import { useTranslation } from "react-i18next";
import Button from "./Button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLang = (lang: string) => {
    void i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2 text-sm">
      <Button variant="secondary" onClick={() => switchLang("fr")}>
        FR
      </Button>
      <Button variant="ghost" onClick={() => switchLang("en")}>
        EN
      </Button>
    </div>
  );
}
