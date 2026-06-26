"use client";

import Link from "next/link";
import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
