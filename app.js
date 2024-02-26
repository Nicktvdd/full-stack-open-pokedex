const express = require('express')
const static_ = require('express').static
const process = require('process')

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(static_('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
