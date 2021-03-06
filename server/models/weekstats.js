'use strict'
module.exports = function (sequelize, DataTypes) {
  var weekStats = sequelize.define('weekStats', {
    week: DataTypes.INTEGER,
    season: DataTypes.STRING,
    league: DataTypes.STRING,
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    gamesPlayed: DataTypes.INTEGER,
    minutesPlayed: DataTypes.INTEGER,
    starts: DataTypes.INTEGER,
    subOn: DataTypes.INTEGER,
    subOff: DataTypes.INTEGER,
    yellowCards: DataTypes.INTEGER,
    yellowRedCards: DataTypes.INTEGER,
    redCards: DataTypes.INTEGER,
    goals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    secondaryAssists: DataTypes.INTEGER,
    shots: DataTypes.INTEGER,
    shotsOnGoal: DataTypes.INTEGER,
    interceptions: DataTypes.INTEGER,
    crosses: DataTypes.INTEGER,
    accurateCrosses: DataTypes.INTEGER,
    chancesCreated: DataTypes.INTEGER,
    blocks: DataTypes.INTEGER,
    tackles: DataTypes.INTEGER,
    tacklesWon: DataTypes.INTEGER,
    foulsCommitted: DataTypes.INTEGER,
    foulsSuffered: DataTypes.INTEGER,
    passes: DataTypes.INTEGER,
    attemptedPasses: DataTypes.INTEGER,
    accurateCrossesOpenPlay: DataTypes.INTEGER,
    aerialsWon: DataTypes.INTEGER,
    bigChancesCreated: DataTypes.INTEGER,
    ballRecoveries: DataTypes.INTEGER,
    dribbles: DataTypes.INTEGER,
    duelsWon: DataTypes.INTEGER,
    touches: DataTypes.INTEGER,
    touchesInBox: DataTypes.INTEGER,
    shotsInsideBox: DataTypes.INTEGER,
    shotsOutsideBox: DataTypes.INTEGER,
    shotsOnGoalInsideBox: DataTypes.INTEGER,
    shotsOnGoalOutsideBox: DataTypes.INTEGER,
    goalsInsideBox: DataTypes.INTEGER,
    goalsOutsideBox: DataTypes.INTEGER,
    dispossessed: DataTypes.INTEGER,
    ownGoals: DataTypes.INTEGER,
    penaltyKicksTaken: DataTypes.INTEGER,
    penaltyKickGoals: DataTypes.INTEGER,
    penaltyKickMisses: DataTypes.INTEGER,
    penaltyKicksSaved: DataTypes.INTEGER,
    cornersTaken: DataTypes.INTEGER,
    cornerCrosses: DataTypes.INTEGER,
    cornersWon: DataTypes.INTEGER,
    freeKickCrosses: DataTypes.INTEGER,
    freeKickAccurateCrosses: DataTypes.INTEGER,
    freeKickShots: DataTypes.INTEGER,
    freeKickShotsOnGoal: DataTypes.INTEGER,
    freeKickGoals: DataTypes.INTEGER,
    goalsConceded: DataTypes.INTEGER,
    cleanSheets: DataTypes.INTEGER,
    saves: DataTypes.INTEGER,
    savesFromShotsInsideBox: DataTypes.INTEGER,
    savesFromShotsOutsideBox: DataTypes.INTEGER,
    accurateKeeperSweeper: DataTypes.INTEGER,
    penaltyConceded: DataTypes.INTEGER,
    penaltiesFaced: DataTypes.INTEGER,
    penaltySaves: DataTypes.INTEGER,
    clearances: DataTypes.INTEGER,
    effectiveClearances: DataTypes.INTEGER,
    punches: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return weekStats
}
