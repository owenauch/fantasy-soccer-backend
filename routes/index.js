// /api/

var express = require('express')
var apiRouter = express.Router()

// stats route
const stats = require('./stats')
apiRouter.use('/stats', stats)

module.exports = apiRouter
