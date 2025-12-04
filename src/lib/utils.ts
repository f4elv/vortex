import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState } from "react";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function useInView(threshold: number = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export enum ProjectType {
  LANDING_PAGE = "Landing Page",
  DASHBOARD = "Dashboard",
  OUTRO = "Outro"
}

export type formData = {
  name: string,
  phone: string,
  company: string,
  projectDescription: string,
  deadline: string,
  budget: string,
  projectType: ProjectType | "",
  extraDetails: string
}

export function formatPhoneBR(value: string) {
  value = value.replace(/\D/g, '');

  if (value.length > 11) value = value.slice(0, 11);

  if (value.length <= 2 && value.length !== 0 ) {
    return `(${value}`;
  }

  if (value.length <= 7) {
    return `(${value.slice(0,2)}) ${value.slice(2)}`;
  }

  return `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
}