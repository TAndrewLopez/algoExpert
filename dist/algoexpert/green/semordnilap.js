"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const semordnilap = (words) => {
    const lookUp = {};
    const returnArray = [];
    for (let i = 0; i < words.length; i++) {
        const originalWord = words[i];
        if (!lookUp[originalWord]) {
            const palindrome = originalWord.split('').reverse().join("");
            lookUp[originalWord] = palindrome;
            lookUp[palindrome] = words[i];
        }
        else {
            returnArray.push([originalWord, lookUp[originalWord]]);
        }
    }
    return returnArray;
};
console.log(semordnilap(['diaper', 'abc', 'test', 'cba', 'repaid']));
