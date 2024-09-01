import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState, createContext, useMemo } from 'react';
import './App.css';
import { Home } from './pages/Home';
import './index.css';

// Create a context for the theme mode
export const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'dark' });

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'dark' ? '#121212' : '#ffffff',
            paper: mode === 'dark' ? '#1d1d1d' : '#f5f5f5',
          },
        },
        typography: {
          fontFamily: 'Roboto',
          htmlFontSize: 16,
          fontSize: 14,
          h1: {
            fontSize: '3.5rem',
          },
          h2: {
            fontSize: '3rem',
          },
          h3: {
            fontSize: '1.8rem',
          },
          body1: {
            fontSize: '1.2rem',
          },
          body2: {
            fontSize: '1rem',
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;