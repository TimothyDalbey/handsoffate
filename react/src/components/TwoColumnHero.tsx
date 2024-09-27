import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function TwoColumnHero (props: any) {
  const backgroundImage = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
     <Box sx={backgroundImage} className="dimmedImageDark">
        <Box py={4} px={{ xs: 4, md: 0 }}>
        <Container maxWidth="xl" disableGutters={true}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                      // minHeight: { xs: '0vh', md: '20vh' },
                      textAlign: { xs: 'left', md: 'right' },
                      paddingLeft: { md: '32px' },
                      paddingRight: { md: '32px' }
                    }}
                    >
                        <Typography
                            variant="h1"
                            color="secondary"
                            sx={{
                              lineHeight: 0.9,
                              fontSize: { xs: ' 3.25em', sm: '4.5rem', lg: '6rem ' }
                            }}
                            mb={2}
                            >{props.title}</Typography>
                        <Typography variant="h5" mb={2} mt={-1} color="secondary" sx={{ textTransform: 'uppercase' }}>{props.subtitle}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                      paddingLeft: { md: '32px' },
                      paddingRight: { md: '32px' },
                      zIndex: 3,
                      position: 'relative',
                      height: '100%'
                    }}
                    >
                    {props.children}
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </Box>
    </Box>
  )
}
