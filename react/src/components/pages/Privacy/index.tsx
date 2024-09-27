import React from 'react'
import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ReactMarkdown from 'react-markdown'

import privacyPolicy from '../../content/privacy-policy'

function Privacy () {
  return (
    <div>
      <Helmet>
        <title>Privacy Agreement - Lake Oswego, Oregon - The Black Dog Jiu-Jitsu Company</title>
      </Helmet>
      <Box id="privacy" className="marginContainer creme">
        <Container maxWidth="xl" disableGutters={true}>
          <Grid container>
            <Grid item md>
              <Typography variant="h3">Privacy Policy</Typography>
              <ReactMarkdown>
                {privacyPolicy}
              </ReactMarkdown>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Privacy
