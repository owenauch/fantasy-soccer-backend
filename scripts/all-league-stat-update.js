const fork = require('child_process').fork
const delay = 600000 // 10 minutes

function updateStats () {
  const username = process.env.ROTOWIRE_USERNAME
  const password = process.env.ROTOWIRE_PASSWORD
  const season = process.env.SEASON
  const week = parseInt(process.env.WEEK)

  fork('./scripts/post-new-stats.js', [username, password, 'EPL', season, week])

  fork('./scripts/post-new-stats.js', [username, password, 'FRAN', season, week])

  fork('./scripts/post-new-stats.js', [username, password, 'BUND', season, week])

  fork('./scripts/post-new-stats.js', [username, password, 'LIGA', season, week])

  fork('./scripts/post-new-stats.js', [username, password, 'SERI', season, week])

  setTimeout(() => { updateStats() }, delay)
}

module.exports = updateStats
