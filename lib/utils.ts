import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/')
  return segments[1] || 'en'
}

export function getOppositeLocale(locale: string): string {
  return locale === 'en' ? 'my' : 'en'
}
