import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import LoadingButton from '@mui/lab/LoadingButton'
import validator from 'validator'

import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Main from './svgs/Main'
// import AltTextSub from './svgs/AltTextSub'

import SlideIn from './utils/SlideIn'

import data from '../data'
import '../styles/MailingList.scss'

export interface IErrors {
  firstName?: string
  lastName?: string
  email?: string
}

const CustomForm = ({ status, message, onValidated }: { status: any, message: any, onValidated: any }) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<IErrors>({})

  useEffect(() => {
    if (status === 'success') {
      setLoading(false)
      clearFields()
    }
    if (status === 'error') {
      setLoading(false)
    }
  }, [status])

  const clearFields = (): void => {
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    let newErrors = {}
    if (email === '') {
      newErrors = { email: 'We need your email address.', ...newErrors }
    }
    if (!validator.isEmail(email)) {
      newErrors = { email: 'That doesn\'t look like a valid email address.', ...newErrors }
    }
    if (firstName === '') {
      newErrors = { firstName: 'We need your first name.', ...newErrors }
    }
    if (lastName === '') {
      newErrors = { lastName: 'We need your last name.', ...newErrors }
    }
    setErrors(newErrors)
    if (Object.keys(newErrors).length < 1) {
      setLoading(true)
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName
      })
    }
  }

  const MCMessage = (props: any) => {
    // eslint-disable-next-line
    const capitalize = (s: any): string => s && s[0].toUpperCase() + s.slice(1)

    if (['success', 'error'].includes(props.status) && props.message) {
      return (
          <Box mb={3}>
            <Alert severity={props.status}>
              <AlertTitle>{capitalize(props.status)}</AlertTitle>
              {props.message}
            </Alert>
          </Box>
      )
    }

    return (<></>)
  }

  return (
      <Box>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Typography mb={1} variant="h4" textTransform="uppercase">Join the Mailing List</Typography>
          <Typography mb={2} variant="body1">We'll keep it short.  If you're a member or just wanting to stay up-to-date with what's happening at {data.company.shortname}, sign up to receive updates about promotions, events and announcements as they happen.</Typography>
          <MCMessage status={status} message={message} />
          <Box
            sx={{ maxWidth: { xs: '100vw', md: '50vw' } }}
          >
            <Grid container
              direction="column"
              spacing={2}
            >
              <Grid item xs>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs>
                    <TextField
                      id="first-name"
                      label="First"
                      variant="outlined"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      fullWidth={true}
                      required
                      error={!!errors.firstName}
                      helperText={errors.firstName ? errors.firstName : false }
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      id="last-name"
                      label="Last"
                      variant="outlined"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      fullWidth={true}
                      required
                      error={!!errors.lastName}
                      helperText={errors.lastName ? errors.lastName : false }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <TextField
                  id="mail"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth={true}
                  required
                  error={!!errors.email}
                  helperText={errors.email ? errors.email : false }
                 />
              </Grid>
              <Grid item xs>
                <Box py={0.5}>
                  <LoadingButton
                    fullWidth={true}
                    onClick={handleSubmit}
                    loading={loading}
                    variant="contained"

                  >
                   Join the Mailing List
                 </LoadingButton>
                </Box>
              </Grid>
              <Grid item xs sx={{ textAlign: { xs: 'left', md: 'center' } }}>
                <Typography variant="body2">By signing up, you agree to The Black Dog Jiu-Jitsu Company's <Link href="/policies/privacy">Privacy Policy</Link> and <Link href="/policies/terms-of-use">Terms of Use</Link>.</Typography>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Box>
  )
}

export default function MailingList (props: any) {
  const url = `${data.mailingList.url}?u=${data.mailingList.u}&id=${data.mailingList.id}`

  return (
    <Box id="mailinglist" className="marginContainerTall" py={16} >
      <SlideIn>
        <Grid container
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        >
          <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
            >
              <Box sx={{
                width: '80%',
                paddingBottom: '20px'
              }}>
                <Main
                  width="100%"
                  height="100%"
                  viewBox="0 0 3622 1298"
                  backgroundColor="#f5f5f5"
                  mainColor="white"
                />
              </Box>
              <Box sx={{ maxWidth: '40%' }}>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="containedRight">
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }: { subscribe: any, status: any, message: any }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData: any) => subscribe(formData)}
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </SlideIn>
    </Box>
  )
}
