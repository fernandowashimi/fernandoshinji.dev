import { createContext, useContext, useState } from 'react';

import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

import { light } from '@/themes/light';
import { dark } from '@/themes/dark';

const ThemeMode: Application.Map<DefaultTheme> = {
  light,
  dark,
};

export const ThemeContext = createContext<Theme.Context>({
  mode: 'dark',
  toggle: () => {},
});

export function useTheme() {
  const { mode, toggle } = useContext(ThemeContext);

  return { mode, toggle };
}

export function ThemeProvider({ children }: Theme.ProviderProps) {
  const [mode, setMode] = useState<Theme.Mode>('dark');

  const handleToggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle: handleToggleMode }}>
      <StyledThemeProvider theme={ThemeMode[mode]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
