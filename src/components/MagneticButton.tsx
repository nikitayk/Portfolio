"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const shared =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-elevated/80 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-[transform,background-color,border-color] duration-300 hover:border-accent/40 hover:bg-elevated";

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={`${shared} ${className}`}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`${shared} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
