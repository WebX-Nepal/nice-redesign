import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);

  if (!el) return;

  window.scrollTo({
    top: el.offsetTop,
    behavior: "smooth",
  });
};