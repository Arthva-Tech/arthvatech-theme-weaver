
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'blue' | 'purple';

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'blue', 'purple');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'blue') {
      root.classList.add('blue');
      root.style.setProperty('--primary', '59 130 246');
      root.style.setProperty('--primary-foreground', '255 255 255');
    } else if (theme === 'purple') {
      root.classList.add('purple');
      root.style.setProperty('--primary', '139 92 246');
      root.style.setProperty('--primary-foreground', '255 255 255');
    } else {
      root.classList.add('light');
      root.style.setProperty('--primary', '59 130 246');
      root.style.setProperty('--primary-foreground', '255 255 255');
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
