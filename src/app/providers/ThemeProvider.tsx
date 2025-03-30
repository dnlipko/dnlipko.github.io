'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
      root.style.setProperty('--primary', '#171717');
      root.style.setProperty('--secondary', '#4b5563');
      root.style.setProperty('--accent', '#e5e7eb');
      root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.8)');
    } else {
      root.style.setProperty('--background', '#0f172a');
      root.style.setProperty('--foreground', '#f1f5f9');
      root.style.setProperty('--primary', '#f1f5f9');
      root.style.setProperty('--secondary', '#cbd5e1');
      root.style.setProperty('--accent', '#1e293b');
      root.style.setProperty('--nav-bg', 'rgba(15, 23, 42, 0.8)');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 