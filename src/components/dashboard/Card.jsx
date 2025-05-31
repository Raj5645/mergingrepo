import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[#1c1c1e] text-white rounded-2xl shadow-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
