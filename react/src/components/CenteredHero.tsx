import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import { Outlet } from 'react-router-dom'

export default function CeneteredHero (props: any) {
  const backgroundImage = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <Box id="gear" sx={backgroundImage} className="marginContainerTall dimmedImage">
      <Container maxWidth="xl" disableGutters={true}>
        <Grid container>
          <Grid item md={8}>
              <Typography variant="h1" sx={{ fontSize: { xs: '5rem', sm: '6rem' } }}>{props.title}</Typography>
              <Typography mb={1} variant="subtitle1" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{props.subtitle}</Typography>
              {props.children}
          </Grid>
          <Grid item md={4}>
              <Box
              style={{ height: '100%' }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              >
                  <Button variant="contained" href={props.ctalink} color="secondary">{props.cta}</Button>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
