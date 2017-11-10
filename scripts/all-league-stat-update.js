const fork = require('child_process').fork
const bigDelay = 600000 // 10 minutes
const smallDelay = 10000 // 10 seconds

function updateStats () {
  const username = process.env.ROTOWIRE_USERNAME
  const password = process.env.ROTOWIRE_PASSWORD
  const season = process.env.SEASON
  const week = parseInt(process.env.WEEK)

  fork('./scripts/post-new-stats.js', [username, password, 'EPL', season, week])

  setTimeout(() => { getFranceStats() }, smallDelay)
}

function getFranceStats () {
  const username = process.env.ROTOWIRE_USERNAME
  const password = process.env.ROTOWIRE_PASSWORD
  const season = process.env.SEASON
  const week = parseInt(process.env.WEEK)

  fork('./scripts/post-new-stats.js', [username, password, 'FRAN', season, week])

  setTimeout(() => { getItalyStats() }, smallDelay)
}

function getItalyStats () {
  const username = process.env.ROTOWIRE_USERNAME
  const password = process.env.ROTOWIRE_PASSWORD
  const season = process.env.SEASON
  const week = parseInt(process.env.WEEK)

  fork('./scripts/post-new-stats.js', [username, password, 'SERI', season, week])

  setTimeout(() => { getSpainStats() }, smallDelay)
}

function getSpainStats () {
  const username = process.env.ROTOWIRE_USERNAME
  const password = process.env.ROTOWIRE_PASSWORD
  const season = process.env.SEASON
  const week = parseInt(process.env.WEEK)

  fork('./scripts/post-new-stats.js', [username, password, 'LIGA', season, week])

  setTimeout(() => { getGermanyStats() }, smallDelay)
}

function getGermanyStats () {
  const username = process.env.ROTOWIRE_USERNAME
  const password = process.env.ROTOWIRE_PASSWORD
  const season = process.env.SEASON
  const week = parseInt(process.env.WEEK)

  fork('./scripts/post-new-stats.js', [username, password, 'BUND', season, week])

  setTimeout(() => { updateStats() }, bigDelay)
}

module.exports = updateStats
