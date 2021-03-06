const scraper = require('./rotowire-soccer-scraper')
const request = require('request')

// arguments (in order): username, password, league, season, week, lockedIn (true or false)
const username = process.argv[2]
const password = process.argv[3]
const league = process.argv[4]
const season = process.argv[5]
const week = parseInt(process.argv[6])

console.log(`Starting scrape of ${league}...`)

scraper(username, password, league, season)
.then(result => {
  const data = {
    league,
    week,
    season,
    players: result
  }

  console.log(`Scrape of ${league} successful! Sending data to server.`)
  const options = {
    url: 'http://localhost:8000/api/stats/new',
    json: data,
    method: 'POST'
  }
  request(options, function (error, response, body) {
    if (error) {
      console.log('error:', error)
    }
    console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    console.log('error:', body.error)
  })
})
