"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { t } = useTranslation();
  const currentPath = usePathname();

  const links = [
    { href: "/evenements-entreprise", label: t("nav.corporateEvents") },
    { href: "/evenements-prives", label: t("nav.privateEvents") },
    { href: "/nous-connaitre", label: t("nav.about") },
    { href: "/nous-contacter", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-20 bg-[var(--color-background)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/">
          <img
            src="/logo/logo-noir.png"
            alt="Le Coin Cuisine Traiteur"
            className="h-20 w-auto"
          />
        </Link>
        <nav className="items-center gap-4 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                currentPath === link.href ? "text-[var(--color-accent)]" : ""
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
