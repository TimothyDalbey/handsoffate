import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
// import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { HashLink } from 'react-router-hash-link'

import MainNoText from '../svgs/MainNoText'

// import data from '../../data'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

const pages: Record<string, { type: string, value: string, hideDesktop?: boolean, hideMobile?: boolean }> = {
  Home: {
    type: 'page',
    value: '/',
    hideDesktop: true
  },
  Partners: {
    type: 'hash',
    value: '/#partners'
  },
  Menu: {
    type: 'hash',
    value: '/#menu'
  },
  'Mailing List': {
    type: 'hash',
    value: '/#mailinglist'
  },
  'Follow Us': {
    type: 'hash',
    value: '/#social'
  }
}

function HideOnScroll (props: Props) {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

function ResponsiveAppBar () {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null)
  }

  const BrandBox = () => (<Box sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
      <Link href="/">
        <Box id="main" sx={{
          height: { xs: '100px', md: '100px' },
          justifyContent: 'center'
        }}>
          <MainNoText
            width="100px"
            height="100px"
            viewBox="0 0 3622 1298"
            fill="white"
          />
        </Box>
      </Link>
    </Box>)

  const IconMenu = () => (
      <Box sx={{
        flexGrow: 0,
        justifyContent: 'flex-start',
        display: { xs: 'flex', md: 'none' }
      }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
            marginTop: '65px'
          }}
        >
          {
            Object.keys(pages).map((page: any) => {
              if (pages[page].hideMobile === true) {
                return (<></>)
              }
              return (
                <MenuItem key={pages[page].value} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {
                      pages[page].type === 'hash'
                        ? (<Link component={HashLink} to={pages[page].value}>{page}</Link>)
                        : (<Link href={pages[page].value}>{page}</Link>)
                    }
                  </Typography>
                </MenuItem>
              )
            })
          }
        </Menu>
      </Box>
  )

  const TextMenu = () => (<Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'none', md: 'flex' } }}>
      {
        Object.keys(pages).map((page) => {
          if (pages[page].hideDesktop === true) {
            return (<></>)
          }
          if (pages[page].type === 'hash') {
            return (
              <Button
                component={HashLink}
                to={pages[page].value}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  minWidth: '0px',
                  my: 2,
                  color: 'white',
                  display: 'block'
                }}
              >
                {page}
              </Button>
            )
          }
          return (
            <Button
              href={pages[page].value}
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                minWidth: '0px',
                my: 2,
                color: 'white',
                display: 'block'
              }}
            >
              {page}
            </Button>
          )
        })
      }
    </Box>)

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar position='fixed'>
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              <IconMenu />
              <BrandBox />
              <TextMenu />
              <Box sx={{
                width: '48px',
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ height: '100px' }}/>
    </React.Fragment>
  )
}
export default ResponsiveAppBar
