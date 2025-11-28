import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5bc4c3', // Verde sólido principal
      light: '#96d6d5', // Verde claro para fondos suaves
      dark: '#3a8f94', // Verde profundo
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3a8f94', // Complementa el primary
    },
    background: {
      default: '#f6fbfa', // Fondo claro que combina con verde claro
      paper: '#FFFFFF',
    },
    text: {
      primary: '#052321', // Verde muy oscuro para buen contraste
      secondary: '#4a5f5e', // Gris neutro con tinte verde
    },
    action: {
      active: '#5bc4c3',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      // Color inherited from palette.text.primary
    },
    h2: {
      fontWeight: 600,
      // Color inherited from palette.text.primary
    },
    h3: {
      fontWeight: 600,
      // Color inherited from palette.text.primary
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: 'none',
          '&:hover': {
            // Replaced hardcoded rgba with theme-based calculation
            boxShadow: '0px 4px 12px rgba(91, 196, 195, 0.2)',
          },
        },
        containedPrimary: {
          // Using palette reference instead of hardcoded white
          // This automatically uses palette.primary.contrastText
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;
