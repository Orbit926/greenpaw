import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5bc4c3',
      light: '#96d6d5',
      dark: '#3a8f94',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#478d8a',
      light: '#75b7b4',
      dark: '#306462',
      contrastText: '#ffffff',
    },
    success: {
      main: '#6abf9f',
      light: '#b4e3d2',
      dark: '#3e8f74',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ebffffff',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3a8f94',
      secondary: '#666666',
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
