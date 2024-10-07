import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export default function SubHero () {
  return (
    <Box id="partners" className="marginContainerHorizontal black" py={2}>
        <Container maxWidth="xl" disableGutters={true}>
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h3"
              color="secondary"
              sx={{
                textTransform: 'uppercase',
                fontSize: '20px'
              }}
              >Coffee & Sandwiches</Typography>
            <Typography
              variant="subtitle1"
              color="secondary"
              sx={{
                fontSize: '12px'
              }}
            >in Downtown Lake Oswego</Typography>
          </Box>
        </Container>
    </Box>
  )
}
