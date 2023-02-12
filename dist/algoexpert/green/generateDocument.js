"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateDocument = (characters, document) => {
    const dictionary = {};
    for (const character of characters) {
        if (!dictionary[character]) {
            dictionary[character] = 1;
        }
        else {
            dictionary[character]++;
        }
    }
    for (const character of document) {
        if (!dictionary[character]) {
            return false;
        }
        else {
            dictionary[character]--;
        }
    }
    return true;
};
console.log(generateDocument("Bste!hetsi ogEAxpe1rt x ", "AlgoExpert is the Best!"));
