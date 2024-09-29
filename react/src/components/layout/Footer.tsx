import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { HashLink } from 'react-router-hash-link'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@mui/material/styles'

import Instagram from '../svgs/Instagram'
import Facebook from '../svgs/Facebook'
import Twitter from '../svgs/Twitter'

import data from '../../data'
import '../../styles/Footer.scss'

function ResponsiveIcons () {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box>
      <Grid
        container
        alignItems="flex-start"
        justifyContent={isSmallScreen ? 'flex-start' : 'flex-end'}
        spacing={2}
      >
        <Grid item>
          <Link href={data.social.instagramUrl}>
            <Instagram />
          </Link>
        </Grid>
        <Grid item>
          <Link
            component="button"
            disabled
            aria-disabled
          >
            <Facebook />
          </Link>
        </Grid>
        <Grid item>
          <Link
            component="button"
            disabled
            aria-disabled
          >
            <Twitter />
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function Footer () {
  const year = new Date().getFullYear()
  return (
    <Box className="black marginContainerHorizontal">
      <Container maxWidth="xl" disableGutters={true}>
        <Box id="footer">
          <Box sx={{ flexGrow: 1 }} py={4}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <Grid container spacing={4} mb={4}>
                  <Grid item xs>
                    <List className="tightList highlightAll" dense={true}>
                      <ListItem><Link href="/" color="secondary" underline="none">Home</Link></ListItem>
                      <ListItem><Link component={HashLink} to="/#menu" color="secondary" underline="none">Menu</Link></ListItem>
                      <ListItem><Link component={HashLink} to="/#partners" color="secondary" underline="none">Partners</Link></ListItem>
                      <ListItem><Link component={HashLink} to="/#mailinglist" color="secondary" underline="none">Mailing List</Link></ListItem>
                    </List>
                  </Grid>
                  <Grid item xs>
                    <List className="tightList highlightFirst" dense={true}>
                      <ListItem><Link color="secondary" underline="none">Just Don't</Link></ListItem>
                      <ListItem><Link href="" color="primary.light" underline="none">Do anything we wouldn't do.</Link></ListItem>
                    </List>
                  </Grid>
                  <Grid item xs>
                    <List className="tightList highlightFirst" dense={true}>
                      <ListItem>Contact</ListItem>
                      <ListItem sx={{ paddingBottom: '0px !important' }}>
                        <Box id="address">
                          <List className="tightList" dense={true}>
                            <ListItem disablePadding={true}>{data.address.line1}</ListItem>
                            <ListItem disablePadding={true}>{data.address.line2}</ListItem>
                            <ListItem disablePadding={true}>{data.address.city}, {data.address.state}</ListItem>
                            <ListItem disablePadding={true}>{data.address.zip}</ListItem>
                          </List>
                        </Box>
                      </ListItem>
                      <ListItem sx={{ paddingTop: 0 }}><Link href={`tel:${data.phone.areaCode}-${data.phone.number.replace(/\s/g, '')}`} color="primary.light" underline="none">({data.phone.areaCode}) {data.phone.number}</Link></ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={5} mb={4} alignItems="right">
                <ResponsiveIcons />
              </Grid>
            </Grid>
          </Box>
          <Box pb={4}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Grid container spacing={4}>
                  <Grid item>
                    <Link
                      href="/policies/privacy"
                      color="primary.light"
                      underline="none"
                      variant="body2"
                    >Privacy Policy</Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/policies/terms-of-use"
                      color="primary.light"
                      underline="none"
                      variant="body2"
                    >Terms of Use</Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href={data.company.parentCorp.url}
                      color="primary.light"
                      underline="none"
                      variant="body2"
                      target="_blank"
                    >{data.company.parentCorp.name}</Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Box my={{ xs: 2, md: 0 }}>
                  <Typography
                    color="primary.light"
                    variant="body2"
                    id="copyright"
                  >&copy; {year} {data.company.name} All Rights Reserved</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
