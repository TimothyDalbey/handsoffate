import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function NotificationBanner () {
  const smallScreen = !useMediaQuery('(min-width:600px)')

  return (
    <Box
      className="creme"
      sx={{
        textAlign: 'center',
        zIndex: 3,
        display: 'block',
        position: 'relative',
        borderColor: 'primary.light',
        boxShadow: 2
      }} p={1}
    >
      {
        smallScreen
          ? (<Typography variant="body2">Opening in Downtown Lake Oswego early 2025.</Typography>)
          : (<Typography variant="body2">Opening in Downtown Lake Oswego early 2025.</Typography>)
      }
    </Box>
  )
}
