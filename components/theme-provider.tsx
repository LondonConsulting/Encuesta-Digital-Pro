"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

// Force light theme before any rendering
if (typeof window !== 'undefined') {
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('light')
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props} 
      defaultTheme="light"
      enableSystem={false}
      storageKey="theme"
    >
      {children}
    </NextThemesProvider>
  )
} 