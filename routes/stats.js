// /api/stats

const express = require('express')
const statsRouter = express.Router()
const models = require('../server/models')
const Promise = require('bluebird')
const updateWeekStats = require('../scripts/updateWeekStats.js')

statsRouter.post('/new', function (req, res) {
  const Stat = models.stat
  const league = req.body.league
  const week = req.body.week
  const season = req.body.season
  const players = req.body.players

  Stat.destroy({
    where: {
      week: week,
      league: league
    }
  })

  .then((destroyed) => {
    return Promise.map(players, function (player) {
      const playerData = {
        week: week,
        season: season,
        league: league,
        name: player[0],
        team: player[1],
        position: player[2],
        gamesPlayed: player[3],
        minutesPlayed: player[4],
        starts: player[5],
        subOn: player[6],
        subOff: player[7],
        yellowCards: player[8],
        yellowRedCards: player[9],
        redCards: player[10],
        goals: player[11],
        assists: player[12],
        secondaryAssists: player[13],
        shots: player[14],
        shotsOnGoal: player[15],
        interceptions: player[16],
        crosses: player[17],
        accurateCrosses: player[18],
        chancesCreated: player[19],
        blocks: player[20],
        tackles: player[21],
        tacklesWon: player[22],
        foulsCommitted: player[23],
        foulsSuffered: player[24],
        passes: player[25],
        attemptedPasses: player[26],
        accurateCrossesOpenPlay: player[27],
        aerialsWon: player[28],
        bigChancesCreated: player[29],
        ballRecoveries: player[30],
        dribbles: player[31],
        duelsWon: player[32],
        touches: player[33],
        touchesInBox: player[34],
        shotsInsideBox: player[35],
        shotsOutsideBox: player[36],
        shotsOnGoalInsideBox: player[37],
        shotsOnGoalOutsideBox: player[38],
        goalsInsideBox: player[39],
        goalsOutsideBox: player[40],
        dispossessed: player[41],
        ownGoals: player[42],
        penaltyKicksTaken: player[43],
        penaltyKickGoals: player[44],
        penaltyKickMisses: player[45],
        penaltyKicksSaved: player[46],
        cornersTaken: player[47],
        cornerCrosses: player[48],
        cornersWon: player[49],
        freeKickCrosses: player[50],
        freeKickAccurateCrosses: player[51],
        freeKickShots: player[52],
        freeKickShotsOnGoal: player[53],
        freeKickGoals: player[54],
        goalsConceded: player[55],
        cleanSheets: player[56],
        saves: player[57],
        savesFromShotsInsideBox: player[58],
        savesFromShotsOutsideBox: player[59],
        accurateKeeperSweeper: player[60],
        penaltyConceded: player[61],
        penaltiesFaced: player[62],
        penaltySaves: player[63],
        clearances: player[64],
        effectiveClearances: player[65],
        punches: player[66]
      }

      return Stat.create(playerData)
    })
  })

  .then(stats => {
    // call updateCurrentStats
    updateWeekStats(week, league)

    res.json({
      success: true,
      message: 'Players added to database successfully!'
    })
  })
  .catch(error => {
    console.log('CIGARS', error)
    res.status(500).json({
      success: false,
      error
    })
  })
})

module.exports = statsRouter
