"use client";

import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  const style: React.CSSProperties = {
    backgroundColor: "var(--card-bg)",
    borderColor: "var(--border-muted)",
    color: "var(--foreground)",
  };

  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
