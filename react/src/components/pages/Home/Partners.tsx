import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import puff from '../../../assets/puff.png'
import grandcru from '../../../assets/grandcru.png'
import bakery from '../../../assets/bakery.jpg'
import ComingSoonOverlay from '../../utils/ComingSoonOverlay'

import '../../../styles/Partners.scss'

function PartnerBlock (props: any) {
  return (
    <Grid item sm={12} md={4}>
      { props.comingSoonOverlay
        ? (
        <Box my={2}>
          <ComingSoonOverlay>
            <Box
              className="courseImage"
              sx={{
                backgroundImage: `url(${props.image})`,
                height: {
                  xs: '30vh',
                  sm: '50vh',
                  md: '30vh'
                }
              }}>
            </Box>
          </ComingSoonOverlay>
        </Box>
          )
        : (
         <Box
         mt={2}
         mb={2}
         className="courseImage"
         sx={{
           backgroundImage: `url(${props.image})`,
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundSize: '100%',
           height: {
             xs: '30vh',
             sm: '50vh',
             md: '30vh'
           }
         }}></Box>
          )
      }
      { /* <Typography variant="h4">{props.title}</Typography> */ }
      <Typography
        variant="subtitle1"
        color="primary"
        mb={1}
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}
      >{props.subtitle}</Typography>
      <Typography
        variant="body1"
        mb={2}
      >{props.body}</Typography>
      <Link href={props.link}>{props.linkText}</Link>
    </Grid>
  )
}
export default function Courses () {
  return (
    <Box id="partners" className="marginContainerTall creme" py={8}>
        <Container maxWidth="xl" disableGutters={true}>
          <Typography variant="h4" mb={4}>Partners</Typography>
          <Grid container spacing={4}>
            <PartnerBlock
              title="Puff Coffee"
              image={puff}
              subtitle="Rad coffee, rad vibes"
              link="https://puffcoffee.com/"
              linkText="Visit Puff Coffee"
              body="Puff Coffee is an itsy bitsy teeny weeny coffee company on a mission to find, roast, and deliver the highest quality beans anywhere.  Hands of Fate is stoked to serve Puff Coffee daily."
            />
            <PartnerBlock
              title="Grand Cru"
              image={grandcru}
              subtitle="Let this team cook"
              body="Founded by chefs Patrick Miller and Alex Chong in 2012, Grand Cru's commissary kitchen provides Hands of Fate it's culinary backbone.  We've known these guys for more than a decade and we couldn't be more enthusiastic about leveraging their culinary excellence in the cafe."
              link="https://www.grandcruhospitality.com/"
              linkText="Grand Cru's Website"
              imageAlign="top"
            />
             <PartnerBlock
              title="Bakery"
              image={bakery}
              subtitle="Bakery Announcement Coming Soon"
              body="We're working on finding the perfect bakery to provide Hands of Fate excellent loaves and breakfast pastries daily.  We strongly believe that the right bakery partner is one of the keys to our success, so we're being picky.  More to come soon."
              link=""
              linkText="Coming Soon"
            />
          </Grid>
        </Container>
    </Box>
  )
}
