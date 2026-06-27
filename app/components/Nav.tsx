"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Nav() {
  const { t } = useTranslation();
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { href: "/evenements-entreprise", label: t("nav.corporateEvents") },
    { href: "/evenements-prives", label: t("nav.privateEvents") },
    { href: "/nous-connaitre", label: t("nav.about") },
    { href: "/nous-contacter", label: t("nav.contact") },
  ];

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex">
          {links.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              selected={currentPath === link.href}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        {/* Desktop language switcher */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile: burger button */}
        <div className="md:hidden" ref={menuRef}>
          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border p-2"
          >
            <span className="sr-only">
              {open ? t("nav.closeMenu") : t("nav.openMenu")}
            </span>
            <svg
              className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile menu panel */}
          {open && (
            <div
              id="mobile-menu"
              className="absolute right-6 top-20 z-30 w-[calc(100%-3rem)] max-w-xs rounded-md border bg-[var(--color-background)] p-4 shadow-lg"
            >
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <Button
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-2"
                    selected={currentPath === link.href}
                  >
                    {link.label}
                  </Button>
                ))}
                <div className="pt-2">
                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
