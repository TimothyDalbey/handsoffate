import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import SlideIn from '../../utils/SlideIn'

const MenuOptions = {
  'Forbidden Sandos': [
    'Beef Brisket, Pickled Red Onions,  Horseradish Creme on Country Wheat',
    'Smoked Turkey,  Brie, Cranberry Chutney on Challah',
    'Lemongrass Chicken Bahn Mi, Pickled Carrot and Cucumber on Dutch Crunch',
    'Bacon, Lettuce, Tomato, Avacado on White',
    'Fresh Mozzarella, Basil and Heirloom Tomato on Cibatta',
    'Grilled Mozzarella, Gruyere and Fontina cheeses on White'
  ],
  Breakfast: [
    'Avacado, Arugala, Pine Nuts and Lemon Zest on Country Wheat',
    'Butter, Jam and/or Peanut Butter on White',
    'Egg Breakfast Burrito',
    'Sausage Breakfast Burrito',
    'Assorted Pastries'
  ]
}

const createMenuItems = (items: string[]): any => {
  const options = items.map((item: string, i: number) => (
    <ListItem key={i}><Typography>{item}</Typography></ListItem>
  ))
  return (<List disablePadding>{options}</List>)
}

export default function Menu () {
  return (
    <Box id="menu" className="marginContainerTall white" py={8}>
      <SlideIn>
        <Container maxWidth="xl" disableGutters={true}>
          <Typography variant="h4" mb={4}>Menu</Typography>
          <Box mb={4}>
            <Typography variant="body1" mb={4}>Sandwiches are served with seasonal pickles and chips.</Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" mb={2}>Forbidden Sandos</Typography>
                <Box mb={2}><Divider/></Box>
                { createMenuItems(MenuOptions['Forbidden Sandos']) }
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" mb={2}>Breakfast</Typography>
                <Box mb={2}><Divider/></Box>
                { createMenuItems(MenuOptions.Breakfast) }
            </Grid>
          </Grid>
        </Container>
      </SlideIn>
    </Box>
  )
}
