import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function ComingSoonOverlay (props: any) {
  const { children } = props
  return (
    <Box className="comingSoon" {...props}>
      <Typography variant="h4" color="secondary" sx={{
        position: 'absolute',
        zIndex: 100
      }}>Coming Soon</Typography>
      { children }
    </Box>
  )
}
