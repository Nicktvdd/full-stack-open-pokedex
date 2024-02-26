const express = require('express')
const static_ = require('express').static
const process = require('process')

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(static_('dist'))

app.get('/version', (_req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
