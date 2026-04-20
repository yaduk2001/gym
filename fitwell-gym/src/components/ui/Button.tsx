import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  icon?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  icon = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-brand text-black hover:bg-brand/90 shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:shadow-[0_0_25px_rgba(204,255,0,0.5)]",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-black",
    ghost: "text-white hover:text-brand hover:bg-white/5",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const IconEl = icon && (
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
        {IconEl}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
      {IconEl}
    </button>
  );
}
