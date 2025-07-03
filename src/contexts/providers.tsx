import { ColorThemeProvider } from '@/contexts/theme-context/color-theme-provider'
import { ThemeProvider } from './theme-context/theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ColorThemeProvider>

<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

      {children}
          </ThemeProvider>
    </ColorThemeProvider>
  );
}
