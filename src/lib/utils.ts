import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  const header = document.querySelector('header');

  if (element && header) {
    const headerHeight = header.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: 'smooth'
    });
  }
};