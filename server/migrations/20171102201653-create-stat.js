'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lockedIn: {
        type: Sequelize.BOOLEAN
      },
      week: {
        type: Sequelize.INTEGER
      },
      season: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      league: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      gamesPlayed: {
        type: Sequelize.INTEGER
      },
      minutesPlayed: {
        type: Sequelize.INTEGER
      },
      starts: {
        type: Sequelize.INTEGER
      },
      subOn: {
        type: Sequelize.INTEGER
      },
      subOff: {
        type: Sequelize.INTEGER
      },
      yellowCards: {
        type: Sequelize.INTEGER
      },
      yellowRedCards: {
        type: Sequelize.INTEGER
      },
      redCards: {
        type: Sequelize.INTEGER
      },
      goals: {
        type: Sequelize.INTEGER
      },
      assists: {
        type: Sequelize.INTEGER
      },
      secondaryAssists: {
        type: Sequelize.INTEGER
      },
      shots: {
        type: Sequelize.INTEGER
      },
      shotsOnGoal: {
        type: Sequelize.INTEGER
      },
      interceptions: {
        type: Sequelize.INTEGER
      },
      crosses: {
        type: Sequelize.INTEGER
      },
      accurateCrosses: {
        type: Sequelize.INTEGER
      },
      chancesCreated: {
        type: Sequelize.INTEGER
      },
      blocks: {
        type: Sequelize.INTEGER
      },
      tackles: {
        type: Sequelize.INTEGER
      },
      tacklesWon: {
        type: Sequelize.INTEGER
      },
      foulsCommitted: {
        type: Sequelize.INTEGER
      },
      foulsSuffered: {
        type: Sequelize.INTEGER
      },
      passes: {
        type: Sequelize.INTEGER
      },
      attemptedPasses: {
        type: Sequelize.INTEGER
      },
      accurateCrossesOpenPlay: {
        type: Sequelize.INTEGER
      },
      aerialsWon: {
        type: Sequelize.INTEGER
      },
      bigChancesCreated: {
        type: Sequelize.INTEGER
      },
      ballRecoveries: {
        type: Sequelize.INTEGER
      },
      dribbles: {
        type: Sequelize.INTEGER
      },
      duelsWon: {
        type: Sequelize.INTEGER
      },
      touches: {
        type: Sequelize.INTEGER
      },
      touchesInBox: {
        type: Sequelize.INTEGER
      },
      shotsInsideBox: {
        type: Sequelize.INTEGER
      },
      shotsOutsideBox: {
        type: Sequelize.INTEGER
      },
      shotsOnGoalInsideBox: {
        type: Sequelize.INTEGER
      },
      shotsOnGoalOutsideBox: {
        type: Sequelize.INTEGER
      },
      goalsInsideBox: {
        type: Sequelize.INTEGER
      },
      goalsOutsideBox: {
        type: Sequelize.INTEGER
      },
      dispossessed: {
        type: Sequelize.INTEGER
      },
      ownGoals: {
        type: Sequelize.INTEGER
      },
      penaltyKicksTaken: {
        type: Sequelize.INTEGER
      },
      penaltyKickGoals: {
        type: Sequelize.INTEGER
      },
      penaltyKickMisses: {
        type: Sequelize.INTEGER
      },
      penaltyKicksSaved: {
        type: Sequelize.INTEGER
      },
      cornersTaken: {
        type: Sequelize.INTEGER
      },
      cornerCrosses: {
        type: Sequelize.INTEGER
      },
      cornersWon: {
        type: Sequelize.INTEGER
      },
      freeKickCrosses: {
        type: Sequelize.INTEGER
      },
      freeKickAccurateCrosses: {
        type: Sequelize.INTEGER
      },
      freeKickShots: {
        type: Sequelize.INTEGER
      },
      freeKickShotsOnGoal: {
        type: Sequelize.INTEGER
      },
      freeKickGoals: {
        type: Sequelize.INTEGER
      },
      goalsConceded: {
        type: Sequelize.INTEGER
      },
      cleanSheets: {
        type: Sequelize.INTEGER
      },
      saves: {
        type: Sequelize.INTEGER
      },
      savesFromShotsInsideBox: {
        type: Sequelize.INTEGER
      },
      savesFromShotsOutsideBox: {
        type: Sequelize.INTEGER
      },
      accurateKeeperSweeper: {
        type: Sequelize.INTEGER
      },
      penaltyConceded: {
        type: Sequelize.INTEGER
      },
      penaltiesFaced: {
        type: Sequelize.INTEGER
      },
      penaltySaves: {
        type: Sequelize.INTEGER
      },
      clearances: {
        type: Sequelize.INTEGER
      },
      effectiveClearances: {
        type: Sequelize.INTEGER
      },
      punches: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('stats')
  }
}
