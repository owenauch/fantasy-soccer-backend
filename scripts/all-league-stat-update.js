const fork = require("child_process").fork;
const abuseFreeTrial = require("./abuseFreeTrial");
const bigDelay = 600000; // 10 minutes
const smallDelay = 10000; // 10 seconds
var username;
var password;
var season;
var week;


function updateStats() {
  abuseFreeTrial().then(account => {
    username = account.username;
    password = account.password;
    season = process.argv[2];
    week = parseInt(process.argv[3]);

    fork("./scripts/post-new-stats.js", [
      username,
      password,
      "EPL",
      season,
      week
    ]);
    setTimeout(() => {
      getFranceStats();
    }, smallDelay);
  });
}

function getFranceStats() {
  fork("./scripts/post-new-stats.js", [
    username,
    password,
    "FRAN",
    season,
    week
  ]);

  setTimeout(() => {
    getItalyStats();
  }, smallDelay);
}

function getItalyStats() {
  fork("./scripts/post-new-stats.js", [
    username,
    password,
    "SERI",
    season,
    week
  ]);

  setTimeout(() => {
    getSpainStats();
  }, smallDelay);
}

function getSpainStats() {
  fork("./scripts/post-new-stats.js", [
    username,
    password,
    "LIGA",
    season,
    week
  ]);

  setTimeout(() => {
    getGermanyStats();
  }, smallDelay);
}

function getGermanyStats() {
  fork("./scripts/post-new-stats.js", [
    username,
    password,
    "BUND",
    season,
    week
  ]);

  // setTimeout(() => {
  //   updateStats();
  // }, bigDelay);
}

module.exports = updateStats;
