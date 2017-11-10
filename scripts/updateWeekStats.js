const models = require('../server/models')
const Promise = require('bluebird')

// finds the stats from this week and last week for each player
// and diffs them, then sets this week's current stats to
// the diffed value
function updateWeekStats (week, league) {
  const Stat = models.stat
  const WeekStat = models.weekStats
  const lastWeek = week - 1

  var thisWeekPlayers = []
  var lWeekPlayers = []

  WeekStat.destroy({
    where: {
      week: week,
      league: league
    }
  })

  .then((destroyed) => {
    return Stat.findAll({
      where: {
        week: week,
        league: league
      }
    })
  })

  .then(players => {
    return Promise.map(players, function (player) {
      thisWeekPlayers.push(player)
      return Stat.find({
        where: {
          name: player.name,
          week: lastWeek
        }
      })
    })
  })

  .then(lastWeekPlayers => {
    // get it in global variable
    // will be null if the player doesn't exist before
    for (var x = 0; x < lastWeekPlayers.length; x++) {
      if (lastWeekPlayers[x]) {
        lWeekPlayers.push(lastWeekPlayers[x])
      }
    }

    return Promise.map(thisWeekPlayers, function (tWeekPlayer) {
      // check if player record exists for last week
      var existsLastWeek = false
      var positionLastWeek = -1
      for (var x = 0; x < lastWeekPlayers.length; x++) {
        if (lastWeekPlayers[x]) {
          if (lastWeekPlayers[x].name === tWeekPlayer.name) {
            existsLastWeek = true
            positionLastWeek = x
            break
          }
        }
      }

      if (existsLastWeek) {
        const lastWeekPlayer = lastWeekPlayers[positionLastWeek]
        const playerData = {
          week: week,
          season: tWeekPlayer.season,
          league: league,
          name: tWeekPlayer.name,
          team: tWeekPlayer.team,
          position: tWeekPlayer.position,
          gamesPlayed: tWeekPlayer.gamesPlayed - lastWeekPlayer.gamesPlayed,
          minutesPlayed: tWeekPlayer.minutesPlayed - lastWeekPlayer.minutesPlayed,
          starts: tWeekPlayer.starts - lastWeekPlayer.starts,
          subOn: tWeekPlayer.subOn - lastWeekPlayer.subOn,
          subOff: tWeekPlayer.subOff - lastWeekPlayer.subOff,
          yellowCards: tWeekPlayer.yellowCards - lastWeekPlayer.yellowCards,
          yellowRedCards: tWeekPlayer.yellowRedCards - lastWeekPlayer.yellowRedCards,
          redCards: tWeekPlayer.redCards - lastWeekPlayer.redCards,
          goals: tWeekPlayer.goals - lastWeekPlayer.goals,
          assists: tWeekPlayer.goals - lastWeekPlayer.assists,
          secondaryAssists: tWeekPlayer.secondaryAssists - lastWeekPlayer.secondaryAssists,
          shots: tWeekPlayer.shots - lastWeekPlayer.shots,
          shotsOnGoal: tWeekPlayer.shotsOnGoal - lastWeekPlayer.shotsOnGoal,
          interceptions: tWeekPlayer.interceptions - lastWeekPlayer.interceptions,
          crosses: tWeekPlayer.crosses - lastWeekPlayer.crosses,
          accurateCrosses: tWeekPlayer.accurateCrosses - lastWeekPlayer.accurateCrosses,
          chancesCreated: tWeekPlayer.chancesCreated - lastWeekPlayer.chancesCreated,
          blocks: tWeekPlayer.blocks - lastWeekPlayer.blocks,
          tackles: tWeekPlayer.tackles - lastWeekPlayer.tackles,
          tacklesWon: tWeekPlayer.tacklesWon - lastWeekPlayer.tacklesWon,
          foulsCommitted: tWeekPlayer.foulsCommitted - lastWeekPlayer.foulsCommitted,
          foulsSuffered: tWeekPlayer.foulsSuffered - lastWeekPlayer.foulsSuffered,
          passes: tWeekPlayer.passes - lastWeekPlayer.passes,
          attemptedPasses: tWeekPlayer.attemptedPasses - lastWeekPlayer.attemptedPasses,
          accurateCrossesOpenPlay: tWeekPlayer.accurateCrossesOpenPlay - lastWeekPlayer.accurateCrossesOpenPlay,
          aerialsWon: tWeekPlayer.aerialsWon - lastWeekPlayer.aerialsWon,
          bigChancesCreated: tWeekPlayer.bigChancesCreated - lastWeekPlayer.bigChancesCreated,
          ballRecoveries: tWeekPlayer.ballRecoveries - lastWeekPlayer.ballRecoveries,
          dribbles: tWeekPlayer.dribbles - lastWeekPlayer.dribbles,
          duelsWon: tWeekPlayer.duelsWon - lastWeekPlayer.duelsWon,
          touches: tWeekPlayer.touches - lastWeekPlayer.touches,
          touchesInBox: tWeekPlayer.touchesInBox - lastWeekPlayer.touchesInBox,
          shotsInsideBox: tWeekPlayer.shotsInsideBox - lastWeekPlayer.shotsInsideBox,
          shotsOutsideBox: tWeekPlayer.shotsOutsideBox - lastWeekPlayer.shotsOutsideBox,
          shotsOnGoalInsideBox: tWeekPlayer.shotsOnGoalInsideBox - lastWeekPlayer.shotsOnGoalInsideBox,
          shotsOnGoalOutsideBox: tWeekPlayer.shotsOnGoalOutsideBox - lastWeekPlayer.shotsOnGoalOutsideBox,
          goalsInsideBox: tWeekPlayer.goalsInsideBox - lastWeekPlayer.goalsInsideBox,
          goalsOutsideBox: tWeekPlayer.goalsOutsideBox - lastWeekPlayer.goalsOutsideBox,
          dispossessed: tWeekPlayer.dispossessed - lastWeekPlayer.dispossessed,
          ownGoals: tWeekPlayer.ownGoals - lastWeekPlayer.ownGoals,
          penaltyKicksTaken: tWeekPlayer.penaltyKicksTaken - lastWeekPlayer.penaltyKicksTaken,
          penaltyKickGoals: tWeekPlayer.penaltyKickGoals - lastWeekPlayer.penaltyKickGoals,
          penaltyKickMisses: tWeekPlayer.penaltyKickMisses - lastWeekPlayer.penaltyKickMisses,
          penaltyKicksSaved: tWeekPlayer.penaltyKicksSaved - lastWeekPlayer.penaltyKicksSaved,
          cornersTaken: tWeekPlayer.cornersTaken - lastWeekPlayer.cornersTaken,
          cornerCrosses: tWeekPlayer.cornerCrosses - lastWeekPlayer.cornerCrosses,
          cornersWon: tWeekPlayer.cornersWon - lastWeekPlayer.cornersWon,
          freeKickCrosses: tWeekPlayer.freeKickCrosses - lastWeekPlayer.freeKickCrosses,
          freeKickAccurateCrosses: tWeekPlayer.freeKickAccurateCrosses - lastWeekPlayer.freeKickAccurateCrosses,
          freeKickShots: tWeekPlayer.freeKickShots - lastWeekPlayer.freeKickShots,
          freeKickShotsOnGoal: tWeekPlayer.freeKickShotsOnGoal - lastWeekPlayer.freeKickShotsOnGoal,
          freeKickGoals: tWeekPlayer.freeKickGoals - lastWeekPlayer.freeKickGoals,
          goalsConceded: tWeekPlayer.goalsConceded - lastWeekPlayer.goalsConceded,
          cleanSheets: tWeekPlayer.cleanSheets - lastWeekPlayer.cleanSheets,
          saves: tWeekPlayer.saves - lastWeekPlayer.saves,
          savesFromShotsInsideBox: tWeekPlayer.savesFromShotsInsideBox - lastWeekPlayer.savesFromShotsInsideBox,
          savesFromShotsOutsideBox: tWeekPlayer.savesFromShotsOutsideBox - lastWeekPlayer.savesFromShotsOutsideBox,
          accurateKeeperSweeper: tWeekPlayer.accurateKeeperSweeper - lastWeekPlayer.accurateKeeperSweeper,
          penaltyConceded: tWeekPlayer.penaltyConceded - lastWeekPlayer.penaltyConceded,
          penaltiesFaced: tWeekPlayer.penaltiesFaced - lastWeekPlayer.penaltiesFaced,
          penaltySaves: tWeekPlayer.penaltySaves - lastWeekPlayer.penaltySaves,
          clearances: tWeekPlayer.clearances - lastWeekPlayer.clearances,
          effectiveClearances: tWeekPlayer.effectiveClearances - lastWeekPlayer.effectiveClearances,
          punches: tWeekPlayer.punches - lastWeekPlayer.punches
        }

        created += 1
        return WeekStat.create(playerData)
      } else {
        const playerData = {
          week: week,
          season: tWeekPlayer.season,
          league: league,
          name: tWeekPlayer.name,
          team: tWeekPlayer.team,
          position: tWeekPlayer.position,
          gamesPlayed: tWeekPlayer.gamesPlayed,
          minutesPlayed: tWeekPlayer.minutesPlayed,
          starts: tWeekPlayer.starts,
          subOn: tWeekPlayer.subOn,
          subOff: tWeekPlayer.subOff,
          yellowCards: tWeekPlayer.yellowCards,
          yellowRedCards: tWeekPlayer.yellowRedCards,
          redCards: tWeekPlayer.redCards,
          goals: tWeekPlayer.goals,
          assists: tWeekPlayer.assists,
          secondaryAssists: tWeekPlayer.secondaryAssists,
          shots: tWeekPlayer.shots,
          shotsOnGoal: tWeekPlayer.shotsOnGoal,
          interceptions: tWeekPlayer.interceptions,
          crosses: tWeekPlayer.crosses,
          accurateCrosses: tWeekPlayer.accurateCrosses,
          chancesCreated: tWeekPlayer.chancesCreated,
          blocks: tWeekPlayer.blocks,
          tackles: tWeekPlayer.tackles,
          tacklesWon: tWeekPlayer.tacklesWon,
          foulsCommitted: tWeekPlayer.foulsCommitted,
          foulsSuffered: tWeekPlayer.foulsSuffered,
          passes: tWeekPlayer.passes,
          attemptedPasses: tWeekPlayer.attemptedPasses,
          accurateCrossesOpenPlay: tWeekPlayer.accurateCrossesOpenPlay,
          aerialsWon: tWeekPlayer.aerialsWon,
          bigChancesCreated: tWeekPlayer.bigChancesCreated,
          ballRecoveries: tWeekPlayer.ballRecoveries,
          dribbles: tWeekPlayer.dribbles,
          duelsWon: tWeekPlayer.duelsWon,
          touches: tWeekPlayer.touches,
          touchesInBox: tWeekPlayer.touchesInBox,
          shotsInsideBox: tWeekPlayer.shotsInsideBox,
          shotsOutsideBox: tWeekPlayer.shotsOutsideBox,
          shotsOnGoalInsideBox: tWeekPlayer.shotsOnGoalInsideBox,
          shotsOnGoalOutsideBox: tWeekPlayer.shotsOnGoalOutsideBox,
          goalsInsideBox: tWeekPlayer.goalsInsideBox,
          goalsOutsideBox: tWeekPlayer.goalsOutsideBox,
          dispossessed: tWeekPlayer.dispossessed,
          ownGoals: tWeekPlayer.ownGoals,
          penaltyKicksTaken: tWeekPlayer.penaltyKicksTaken,
          penaltyKickGoals: tWeekPlayer.penaltyKickGoals,
          penaltyKickMisses: tWeekPlayer.penaltyKickMisses,
          penaltyKicksSaved: tWeekPlayer.penaltyKicksSaved,
          cornersTaken: tWeekPlayer.cornersTaken,
          cornerCrosses: tWeekPlayer.cornerCrosses,
          cornersWon: tWeekPlayer.cornersWon,
          freeKickCrosses: tWeekPlayer.freeKickCrosses,
          freeKickAccurateCrosses: tWeekPlayer.freeKickAccurateCrosses,
          freeKickShots: tWeekPlayer.freeKickShots,
          freeKickShotsOnGoal: tWeekPlayer.freeKickShotsOnGoal,
          freeKickGoals: tWeekPlayer.freeKickGoals,
          goalsConceded: tWeekPlayer.goalsConceded,
          cleanSheets: tWeekPlayer.cleanSheets,
          saves: tWeekPlayer.saves,
          savesFromShotsInsideBox: tWeekPlayer.savesFromShotsInsideBox,
          savesFromShotsOutsideBox: tWeekPlayer.savesFromShotsOutsideBox,
          accurateKeeperSweeper: tWeekPlayer.accurateKeeperSweeper,
          penaltyConceded: tWeekPlayer.penaltyConceded,
          penaltiesFaced: tWeekPlayer.penaltiesFaced,
          penaltySaves: tWeekPlayer.penaltySaves,
          clearances: tWeekPlayer.clearances,
          effectiveClearances: tWeekPlayer.effectiveClearances,
          punches: tWeekPlayer.punches
        }

        return WeekStat.create(playerData)
      }
    })
  })

  .then(() => {
    // make record for new week with old stats for players who didn't
    // play this week
    return Promise.map(lWeekPlayers, function (lastWeekPlayer) {
      var existsThisWeek = false
      for (var x = 0; x < thisWeekPlayers.length; x++) {
        if (thisWeekPlayers[x].name === lastWeekPlayer.name) {
          existsThisWeek = true
          break
        }
      }

      if (!existsThisWeek) {
        const playerData = {
          week: week,
          season: lastWeekPlayer.season,
          league: league,
          name: lastWeekPlayer.name,
          team: lastWeekPlayer.team,
          position: lastWeekPlayer.position,
          gamesPlayed: lastWeekPlayer.gamesPlayed,
          minutesPlayed: lastWeekPlayer.minutesPlayed,
          starts: lastWeekPlayer.starts,
          subOn: lastWeekPlayer.subOn,
          subOff: lastWeekPlayer.subOff,
          yellowCards: lastWeekPlayer.yellowCards,
          yellowRedCards: lastWeekPlayer.yellowRedCards,
          redCards: lastWeekPlayer.redCards,
          goals: lastWeekPlayer.goals,
          assists: lastWeekPlayer.assists,
          secondaryAssists: lastWeekPlayer.secondaryAssists,
          shots: lastWeekPlayer.shots,
          shotsOnGoal: lastWeekPlayer.shotsOnGoal,
          interceptions: lastWeekPlayer.interceptions,
          crosses: lastWeekPlayer.crosses,
          accurateCrosses: lastWeekPlayer.accurateCrosses,
          chancesCreated: lastWeekPlayer.chancesCreated,
          blocks: lastWeekPlayer.blocks,
          tackles: lastWeekPlayer.tackles,
          tacklesWon: lastWeekPlayer.tacklesWon,
          foulsCommitted: lastWeekPlayer.foulsCommitted,
          foulsSuffered: lastWeekPlayer.foulsSuffered,
          passes: lastWeekPlayer.passes,
          attemptedPasses: lastWeekPlayer.attemptedPasses,
          accurateCrossesOpenPlay: lastWeekPlayer.accurateCrossesOpenPlay,
          aerialsWon: lastWeekPlayer.aerialsWon,
          bigChancesCreated: lastWeekPlayer.bigChancesCreated,
          ballRecoveries: lastWeekPlayer.ballRecoveries,
          dribbles: lastWeekPlayer.dribbles,
          duelsWon: lastWeekPlayer.duelsWon,
          touches: lastWeekPlayer.touches,
          touchesInBox: lastWeekPlayer.touchesInBox,
          shotsInsideBox: lastWeekPlayer.shotsInsideBox,
          shotsOutsideBox: lastWeekPlayer.shotsOutsideBox,
          shotsOnGoalInsideBox: lastWeekPlayer.shotsOnGoalInsideBox,
          shotsOnGoalOutsideBox: lastWeekPlayer.shotsOnGoalOutsideBox,
          goalsInsideBox: lastWeekPlayer.goalsInsideBox,
          goalsOutsideBox: lastWeekPlayer.goalsOutsideBox,
          dispossessed: lastWeekPlayer.dispossessed,
          ownGoals: lastWeekPlayer.ownGoals,
          penaltyKicksTaken: lastWeekPlayer.penaltyKicksTaken,
          penaltyKickGoals: lastWeekPlayer.penaltyKickGoals,
          penaltyKickMisses: lastWeekPlayer.penaltyKickMisses,
          penaltyKicksSaved: lastWeekPlayer.penaltyKicksSaved,
          cornersTaken: lastWeekPlayer.cornersTaken,
          cornerCrosses: lastWeekPlayer.cornerCrosses,
          cornersWon: lastWeekPlayer.cornersWon,
          freeKickCrosses: lastWeekPlayer.freeKickCrosses,
          freeKickAccurateCrosses: lastWeekPlayer.freeKickAccurateCrosses,
          freeKickShots: lastWeekPlayer.freeKickShots,
          freeKickShotsOnGoal: lastWeekPlayer.freeKickShotsOnGoal,
          freeKickGoals: lastWeekPlayer.freeKickGoals,
          goalsConceded: lastWeekPlayer.goalsConceded,
          cleanSheets: lastWeekPlayer.cleanSheets,
          saves: lastWeekPlayer.saves,
          savesFromShotsInsideBox: lastWeekPlayer.savesFromShotsInsideBox,
          savesFromShotsOutsideBox: lastWeekPlayer.savesFromShotsOutsideBox,
          accurateKeeperSweeper: lastWeekPlayer.accurateKeeperSweeper,
          penaltyConceded: lastWeekPlayer.penaltyConceded,
          penaltiesFaced: lastWeekPlayer.penaltiesFaced,
          penaltySaves: lastWeekPlayer.penaltySaves,
          clearances: lastWeekPlayer.clearances,
          effectiveClearances: lastWeekPlayer.effectiveClearances,
          punches: lastWeekPlayer.punches
        }

        return WeekStat.create(playerData)
      } else {
        return Promise.resolve('New stat existed')
      }
    })
  })

  .then(() => {
    console.log('Success updating weekStats!')
  })

  .catch((error) => {
    console.log('error updating weekStats:', error)
  })
}

module.exports = updateWeekStats
