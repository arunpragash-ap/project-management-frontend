'use client';

import { useColorTheme } from "@/contexts/theme-context/color-theme-provider";


export default function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div>
      <button onClick={() => setColorTheme('theme-orange')}>Orange</button>
      <button onClick={() => setColorTheme('theme-blue')}>Blue</button>
      <p>Current Theme: {colorTheme}</p>
    </div>
  );
}
