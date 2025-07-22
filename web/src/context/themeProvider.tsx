'use client'
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext<{
  disableCustomTheme: boolean;
  setDisableCustomTheme: (value: boolean) => void;
}>({
  disableCustomTheme: false,
  setDisableCustomTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [disableCustomTheme, setDisableCustomTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ disableCustomTheme, setDisableCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeSetting = () => useContext(ThemeContext);