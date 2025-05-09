import { Box, CircularProgress, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useState, createContext, useMemo, useEffect } from 'react';
import './App.css';
import { Home } from './pages/Home';
import './index.css';
import ColorModeSwitcher from './components/ColorModeSwitcher';

// Create a context for the theme mode
export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'dark' });


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a delay for loading (e.g., fetching data or initializing)
    const timer = setTimeout(() => setLoading(false), 500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

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
        shape:{
          borderRadius: 20,
        },
        palette: {
          mode,
          background: {
            default: mode === 'dark' ? '#1F1D36' : '#ffffff',
            paper: mode === 'dark' ? '#3F3351' : '#f5f5f5',
          },
          secondary: {
            main: mode === 'dark' ? '#c86bcb' : '#c86bcb',
          }
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
        components: {
          MuiChip: {
            styleOverrides: {
              root: {
                fontWeight: 'bold',
              },
            },
          },
        },
      }),
    [mode]
  );

  if (loading) {
    // Display a loading spinner while the app is initializing
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: mode === 'dark' ? '#1F1D36' : '#ffffff',
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <ColorModeSwitcher onChange={() => colorMode.toggleColorMode()}/>
        </Box>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;