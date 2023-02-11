// ? Round Robin - Each team faces all other teams, only two teams compete at a time
// ? One team is designated the home team / 1 winner & 1 loser & no ties
// ? 3 points for the winner - 0 for the loser

// ! Given an array of pairs representing the teams that have competed against each other, and an array containing the results of each competition, write a function that returns the winner of the tournament.

const tournamentWinner = (competitions, results) => {
  const teamsObj = {};
  let tourneyWinner;
  let winnerScore;

  // * LOOP THROUGH COMPETITIONS
  for (let i = 0; i < competitions.length; i++) {
    const winner = results[i];
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];
    // * STORE TEAM VALUES AND RESULTS IN OBJ
    if (teamsObj[homeTeam] === undefined) teamsObj[homeTeam] = 0;
    if (teamsObj[awayTeam] === undefined) teamsObj[awayTeam] = 0;

    // * ADD WINNER'S SCORE
    if (winner) {
      teamsObj[homeTeam] += 3;
    } else {
      teamsObj[awayTeam] += 3;
    }
  }

  // * LOOP THROUGH OBJECT AND RETURN WINNER
  console.log(teamsObj);
  for (const keys in teamsObj) {
    if (!tourneyWinner) {
      tourneyWinner = keys;
      winnerScore = teamsObj[keys];
    }

    if (winnerScore < teamsObj[keys]) {
      tourneyWinner = keys;
      winnerScore = teamsObj[keys];
    }
  }
  return tourneyWinner || "Something went wrong. =)";
};

const COMPETITIONS = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const RESULTS = [0, 0, 1];

console.log(tournamentWinner(COMPETITIONS, RESULTS)); // 'Python'

/*
* HTML VS C# - AWAY TEAM WINS
* { teamName: score }
* { HTML : 0,
*    C# 1 
*}

*/
