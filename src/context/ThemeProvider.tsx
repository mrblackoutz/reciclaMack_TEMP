// ThemeProvider.js
import { createContext, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ReactNode } from 'react';
import theme from '@/@core/theme';

// Crie o contexto do tema
interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colorblindMode: boolean;
  toggleColorblindMode: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

// Crie um provedor de tema personalizado
const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleColorblindMode = () => {
    setColorblindMode(!colorblindMode);
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const customTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: colorblindMode ? '#0072C6' : '#1976d2',
      },
    },
    typography: {
      ...theme.typography,
      fontSize: fontSize,
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        colorblindMode,
        toggleColorblindMode,
        increaseFontSize,
        decreaseFontSize,
      }}
    >
      <CssBaseline />
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
