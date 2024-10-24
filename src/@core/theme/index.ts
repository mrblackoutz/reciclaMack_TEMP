import { montserrat, poppins } from '@/pages/_document';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00b59f',
    },
    secondary: {
      main: '#10b14a',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      poppins.style.fontFamily,
      montserrat.style.fontFamily,
      'Inter',
      '-apple-system',
      'sans-serif',
    ].join(','),
    // Defina as fontes específicas para cada variante tipográfica
    h1: {
      fontFamily: poppins.style.fontFamily,
    },
    h2: {
      fontFamily: montserrat.style.fontFamily,
    },
    // Adicione outras variações tipográficas conforme necessário
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          margin: 0,
          padding: 0,
          fontFamily: [
            'Poppins',
            'Montserrat',
            'Inter',
            '-apple-system',
            'sans-serif',
          ].join(','),
        },
      },
    },
  },
});

export default theme;
