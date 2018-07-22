const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const updateStats = require('./scripts/all-league-stat-update.js')

// configure dotenv
require('dotenv').config()

// Set up the express app
const app = express()

// Log requests to the console.
app.use(logger('dev'))

// Parse incoming requests data
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))

// get routes set up
var routes = require('./routes/index')
app.use('/api', routes)

var port = process.env.PORT || 8000
app.listen(port)
console.log('Fantasy Soccer Backend running on port ' + port)

// start stat updating script
// updateStats()
