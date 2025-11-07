'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-400/70",
  outline:
    "border border-slate-700 text-slate-200 hover:bg-slate-800 focus-visible:ring-blue-500/40",
  ghost:
    "text-slate-300 hover:bg-slate-800/80 focus-visible:ring-blue-500/40"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  default: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base"
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
