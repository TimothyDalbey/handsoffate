import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import Layout from './components/layout'
import Home from './components/pages/Home'
import Privacy from './components/pages/Privacy'
import TermsOfUse from './components/pages/TermsOfUse'
import theme from './themes/theme'
import './styles/App.scss'

function App () {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'policies/privacy', element: <Privacy /> },
        { path: 'policies/terms-of-use', element: <TermsOfUse /> },
        { path: '*', element: <Home /> }
      ]
    }
  ]

  const routesCompiled = useRoutes(routes)

  return (
    <ThemeProvider theme={theme}>
      {routesCompiled}
    </ThemeProvider>
  )
}

export default App
