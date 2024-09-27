import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import Container from '@mui/material/Container'
import useMediaQuery from '@mui/material/useMediaQuery'

import SlideIn from './utils/SlideIn'

export default function FullLeftHero (props: any) {
  const smallScreen = !useMediaQuery('(min-width:900px)')

  return (
    <Box id={props.id} className="creme">
        <Grid container>
            <Grid item xs={12} md={6}>
                <Box sx={{
                  backgroundImage: `url(${props.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '20% 30%',
                  width: '100%',
                  height: '100%',
                  minHeight: (props.minHeight ? props.minHeight : '40vh')
                }}></Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <SlideIn>
                <Box className="containedRight">
                    <Box className={smallScreen ? 'marginContainer' : 'marginContainerTall' }>
                        {props.children}
                    </Box>
                </Box>
            </SlideIn>
            </Grid>
        </Grid>
    </Box>
  )
}
