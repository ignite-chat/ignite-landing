"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface DecorIconProps extends React.ComponentProps<"svg"> {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export function DecorIcon({ position, className, ...props }: DecorIconProps) {
  const positionClasses = {
    "top-left": "-top-3 -left-3",
    "top-right": "-top-3 -right-3",
    "bottom-left": "-bottom-3 -left-3",
    "bottom-right": "-bottom-3 -right-3",
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("absolute text-border", positionClasses[position], className)}
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
