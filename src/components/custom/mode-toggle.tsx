'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/theme-provider';

export default function ModeToggle() {
  const { resolved, toggleTheme } = useTheme();
  return (
    <button type="button" className="btn-outline" aria-label="Toggle theme" onClick={toggleTheme}>
      {resolved === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}