import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#604BE8",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#06D6A0',
    },
  },
});

export default function CustomizedTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
