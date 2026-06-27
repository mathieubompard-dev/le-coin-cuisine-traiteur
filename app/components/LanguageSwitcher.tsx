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
      <Button
        onClick={() => switchLang("fr")}
        selected={i18n.language === "fr"}
      >
        FR
      </Button>
      <Button
        onClick={() => switchLang("en")}
        selected={i18n.language === "en"}
      >
        EN
      </Button>
    </div>
  );
}
