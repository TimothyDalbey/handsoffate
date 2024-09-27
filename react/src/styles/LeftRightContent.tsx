import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import ComingSoonOverlay from '../components/utils/ComingSoonOverlay'

function ContentBlock (props: any) {
  const smallScreen = !useMediaQuery('(min-width:900px)')
  const reverse = (props.reverse && !smallScreen) ? props.reverse : false
  const comingSoon = (props.comingSoon) ? props.comingSoon : false
  const {
    image,
    imageAlt,
    title,
    subtitle
  } = props

  const DisplayImage = () => {
    if (comingSoon) {
      return (
        <ComingSoonOverlay>
          <img
            width="100%"
            src={image}
            alt={imageAlt}
          />
        </ComingSoonOverlay>
      )
    }
    return (
      <img
        width="100%"
        src={image}
        alt={imageAlt}
      />
    )
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} order={(reverse) ? 2 : 1}>
        <Box mb={2}>
          <DisplayImage />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} order={(reverse) ? 1 : 2}>
        <Box className={ smallScreen ? '' : 'marginContainerHorizontal'}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle1" color="primary" sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold'
          }}>{subtitle}</Typography>
          {props.children}
        </Box>
      </Grid>
    </Grid>
  )
}

export default ContentBlock
