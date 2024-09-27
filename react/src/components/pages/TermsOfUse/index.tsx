import React from 'react'
import { Helmet } from 'react-helmet'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ReactMarkdown from 'react-markdown'

import termsOfUse from '../../content/terms-of-use'

function TermsOfUse () {
  return (
    <div>
      <Helmet>
        <title>Terms of Use - Lake Oswego, Oregon - The Black Dog Jiu-Jitsu Company</title>
      </Helmet>
      <Box id="termsofuse" className="marginContainer creme">
        <Container maxWidth="xl" disableGutters={true}>
          <Grid container>
            <Grid item md>
              <Typography variant="h3">Terms of Use</Typography>
              <ReactMarkdown>
                {termsOfUse}
              </ReactMarkdown>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default TermsOfUse
