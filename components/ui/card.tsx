'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-sky-500/10 transition-colors",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 text-slate-200", className)}
    {...props}
  />
));

CardContent.displayName = "CardContent";
