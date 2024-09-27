import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'

import Instagram from './svgs/Instagram'
import Facebook from './svgs/Facebook'
import Twitter from './svgs/Twitter'

// import SlideIn from './utils/SlideIn'
import data from '../data'

function ResponsiveIcons () {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      container
      alignItems="flex-start"
      justifyContent={isSmallScreen ? 'flex-start' : 'flex-end'}
      spacing={2}
    >
      <Grid item>
        <Link href={data.social.instagramUrl}>
          <Instagram fill="#7e7e7e" width="30px" height="30px" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          component="button"
          disabled
          aria-disabled
          href={data.social.facebookUrl}
        >
          <Facebook fill="#7e7e7e" width="30px" height="30px" />
        </Link>
      </Grid>
      <Grid item>
        <Link
          component="button"
          disabled
          aria-disabled
          href={data.social.twitterUrl}
        >
          <Twitter fill="#7e7e7e" width="30px" height="30px" />
        </Link>
      </Grid>
    </Grid>
  )
}

export default function SocialMedia () {
  return (
    <Box id="social" className="marginContainer black" >
      <Container maxWidth="xl" disableGutters={true}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5" color="secondary">Follow us on Social Media</Typography>
            <Typography variant="body1" color="secondary">There's a lot that happens on social media.  Follow us and stay connected!</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box pt={{ xs: 3, sm: 0 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <ResponsiveIcons />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
