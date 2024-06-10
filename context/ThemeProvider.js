// ThemeProvider.js
import { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import theme from "../styles/theme";

// Crie o contexto do tema
export const ThemeContext = createContext();

// Crie um provedor de tema personalizado
const CustomThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [fontSize, setFontSize] = useState(14);

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
    setFontSize(fontSize - 2);
  };

  const customTheme = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: colorblindMode ? "#0072C6" : "#1976d2",
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
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;