import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import Logo from '../../svgs/logo'
import AltText2 from '../../svgs/AltText'
import backgroundImage from '../../../assets/psychadelic.gif'

export default function Hero () {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{
            height: { xs: '55vh', md: '90vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'centered'
          }}>
            <Box sx={{
              width: '90%'
            }}>
              <AltText2
                width="100%"
                height="100%"
                viewBox="0 0 3622 1298"
                fill="#fff"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
