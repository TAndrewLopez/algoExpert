"use strict";
const missingWords = (s, t) => {
    const stringArray = s.split(" ");
    const sequenceArray = t.split(" ");
    const missingWords = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < stringArray.length && p2 < sequenceArray.length) {
        4;
        if (stringArray[p1] !== sequenceArray[p2]) {
            missingWords.push(stringArray[p1]);
        }
        else {
            p2++;
        }
        p1++;
    }
    while (p1 < stringArray.length) {
        missingWords.push(stringArray[p1]);
        p1++;
    }
    return missingWords;
};
console.log(missingWords("I am using HackerRank to improve programming", "am HackerRank to improve"));
