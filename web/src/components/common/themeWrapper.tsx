'use client';

import { useThemeSetting } from '@/context/themeProvider';
import AppTheme from '@/theme/appTheme';
import CssBaseline from '@mui/material/CssBaseline';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { disableCustomTheme } = useThemeSetting();

  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </AppTheme>
  );
}