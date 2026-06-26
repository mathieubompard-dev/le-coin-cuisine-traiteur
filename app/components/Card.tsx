"use client";

import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  const style: React.CSSProperties = {
    backgroundColor: "var(--color-card-bg)",
    color: "var(--color-text)",
  };

  return (
    <div className={`rounded-3xl p-6 shadow-sm ${className}`} style={style}>
      {children}
    </div>
  );
}
