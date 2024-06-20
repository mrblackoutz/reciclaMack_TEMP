// hooks/useThemeContext.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useThemeContext deve ser usado dentro de um CustomThemeProvider'
    );
  }

  return context;
};

export default useThemeContext;
