import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green
      dark: '#2E7D32', // Dark Green
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2E7D32',
    },
    background: {
      default: '#F5F5E9', // Beige light
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2E7D32', // Dark Green for text to keep it consistent
      secondary: '#666666',
    },
    action: {
      active: '#4CAF50',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#2E7D32',
    },
    h2: {
      fontWeight: 600,
      color: '#2E7D32',
    },
    h3: {
      fontWeight: 600,
      color: '#2E7D32',
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
            boxShadow: '0px 4px 12px rgba(76, 175, 80, 0.2)',
          },
        },
        containedPrimary: {
          color: '#FFFFFF',
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
