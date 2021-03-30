import { ReactNode } from 'react';

import { useTheme } from '@/providers/ThemeProvider';
import { MoonIcon, SunIcon, Button } from '@/styles/themetoggle';

const IconType: Application.Map<ReactNode> = {
  light: <MoonIcon />,
  dark: <SunIcon />,
};

export function ThemeToggle() {
  const { mode, toggle } = useTheme();

  return <Button onClick={toggle}>{IconType[mode]}</Button>;
}
