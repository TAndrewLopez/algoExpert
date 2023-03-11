"use strict";
const isPangram = (pangram) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < pangram.length; i++) {
        let charCount = {};
        const currString = pangram[i].toLowerCase();
        for (let j = 0; j < currString.length; j++) {
            const currChar = currString[j];
            if (alphabet.includes(currChar)) {
                charCount[currChar] = (charCount[currChar] || 0) + 1;
            }
        }
        Object.keys(charCount).length === 26 ? (result += "1") : (result += "0");
    }
    return result;
};
console.log(isPangram([
    "we promptly judged antique ivory buckles for the next prize",
    "we promptly judged antique ivory buckles for the prizes",
    "the quick brown fox jumps over the lazy dog",
    "the quick brown fox jump over the lazy dog",
]));
