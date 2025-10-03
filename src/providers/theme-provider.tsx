'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

type ThemeContextValue = {
  theme: ThemeMode;
  resolved: 'light' | 'dark';
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  resolved: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children, defaultTheme = 'system' }: { children: ReactNode; defaultTheme?: ThemeMode }) {
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme);

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && (localStorage.getItem('theme') as ThemeMode)) || defaultTheme;
    setTheme(stored);
  }, [defaultTheme]);

  const resolved = useMemo<'light' | 'dark'>(() => {
    if (theme === 'system') {
      return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }, [theme]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', resolved === 'dark');
    if (typeof window !== 'undefined') localStorage.setItem('theme', theme);
  }, [theme, resolved]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme === 'system') document.documentElement.classList.toggle('dark', media.matches);
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, resolved, setTheme, toggleTheme: () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark')) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}