'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, ...props }, ref) => (
      <span
        ref={ref}
        className={cn(
        "inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-100",
          className
        )}
        {...props}
      />
  )
);

Badge.displayName = "Badge";
