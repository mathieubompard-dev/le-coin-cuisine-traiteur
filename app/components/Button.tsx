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

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--accent)",
      color: "#fff",
      boxShadow: "0 8px 30px rgba(197,122,58,0.12)",
      border: "none",
    },
    secondary: {
      backgroundColor: "transparent",
      color: "var(--foreground)",
      border: "1px solid var(--border-muted)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--foreground)",
      border: "none",
    },
  };

  const style = variantStyles[variant] || variantStyles.primary;

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${className}`}
        style={style as React.CSSProperties}
      >
        {children}
      </Link>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`${baseStyles} ${className}`}
      style={style as React.CSSProperties}
      {...rest}
    >
      {children}
    </button>
  );
}
