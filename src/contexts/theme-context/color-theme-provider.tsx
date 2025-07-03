'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ColorThemeContextType = {
  colorTheme: string;
  setColorTheme: (theme: string) => void;
};

const ColorThemeContext = createContext<ColorThemeContextType>({
  colorTheme: '',
  setColorTheme: () => {},
});

export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme, setColorThemeState] = useState<string>('orange-theme');

  const setColorTheme = (theme: string) => {
    setColorThemeState(theme);
  };

  useEffect(() => {
    const html = document.documentElement; // This targets the <html> tag
  
    // Remove previous theme-* classes
    html.classList.forEach((cls) => {
      if (cls.endsWith('-theme')) {
        html.classList.remove(cls);
      }
    });
  
    // Add the new theme class
    html.classList.add(colorTheme);
  }, [colorTheme]);
  
  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
};
