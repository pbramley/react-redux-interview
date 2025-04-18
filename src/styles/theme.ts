import { createTheme } from '@mui/material/styles';

// Overrides material ui theme to have nicer headings, etc.
const theme = createTheme({
  typography: {
    h1: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#0A1F3E',
    },
  },
});

export default theme;
