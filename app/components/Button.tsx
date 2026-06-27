"use client";

import Link from "next/link";
import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  href?: string;
  selected?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  className = "",
  children,
  selected,
  ...rest
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center rounded-full p-2 text-sm font-semibold cursor-pointer ${selected ? "text-[var(--color-accent)]" : ""} hover:text-[var(--color-accent)]`;

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
