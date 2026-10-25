import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a',
    },
    secondary: {
      main: '#3b82f6',
    },
    warning: {
      main: '#f59e0b',
      contrastText: '#0f172a',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
    h1: { fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
    h2: { fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
    h3: { fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
    h4: { fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
    h5: { fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
    h6: { fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
