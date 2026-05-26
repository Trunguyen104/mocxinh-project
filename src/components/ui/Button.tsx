import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const variants = {
  primary:
    "bg-moc-green text-white hover:bg-moc-green-dark shadow-soft hover:shadow-paper glow-green hover:glow-pulse-green dark:bg-moc-green dark:hover:bg-moc-green-dark",
  outline:
    "border border-moc-green/40 text-moc-green-dark hover:bg-moc-green-pale hover:border-moc-green/70 dark:border-moc-green/30 dark:text-moc-green-light dark:hover:bg-moc-green-pale",
  ghost: "text-moc-green-dark hover:bg-moc-green-pale dark:text-moc-green-light dark:hover:bg-moc-green-pale/50",
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-8 py-3.5 text-sm",
  lg: "px-10 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide
        transition-all duration-500 active:scale-[0.97]
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
