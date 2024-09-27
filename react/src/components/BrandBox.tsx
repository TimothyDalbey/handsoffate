import Box from '@mui/material/Box'
import wolf from '../assets/wolf.svg'

export default function BrandBox () {
  return (
    <Box
      className="black"
      py={8}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        className="avatar"
        sx={{
          display: 'inline-block',
          overflow: 'hidden',
          width: '30%',
          height: '30%',
          paddingLeft: '7px'
        }}
      >
        <img
          src={wolf}
          width="100%"
          height="auto"
        />
      </Box>
    </Box>
  )
}
