import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  transitions: {
    duration: {
      enteringScreen: 750
    }
  },
  palette: {
    background: {
      default: '#000000'
    },
    primary: {
      main: '#111111',
      light: '#7e7e7e'
    },
    secondary: {
      main: '#ffffff',
      dark: '#8aa87d'
    },
    info: {
      main: '#7e7e7e'
    }
  },
  typography: {
    h1: {
      color: '#ffffff',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    /*
    h5: {
      fontSize: '30px'
    },
    */
    subtitle1: {
      color: '#ffffff'
    },
    body2: {
      fontSize: '14px'
    }
  }
})

export default theme
