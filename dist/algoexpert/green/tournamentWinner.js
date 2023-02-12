"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tournamentWinner = (competitions, results) => {
    const teamsObj = {};
    let tourneyWinner;
    let winnerScore = -1;
    for (let i = 0; i < competitions.length; i++) {
        const winner = results[i];
        const homeTeam = competitions[i][0];
        const awayTeam = competitions[i][1];
        if (teamsObj[homeTeam] === undefined)
            teamsObj[homeTeam] = 0;
        if (teamsObj[awayTeam] === undefined)
            teamsObj[awayTeam] = 0;
        if (winner) {
            teamsObj[homeTeam] += 3;
        }
        else {
            teamsObj[awayTeam] += 3;
        }
    }
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
console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
], [0, 0, 1]));
