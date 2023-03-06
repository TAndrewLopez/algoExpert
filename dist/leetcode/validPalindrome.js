"use strict";
const validPalindrome = (string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz012345689";
    let updatedString = "";
    for (let i = 0; i < string.length; i++) {
        const char = string[i].toLowerCase();
        if (alphabet.includes(char))
            updatedString += char;
    }
    let p1 = 0;
    let p2 = updatedString.length - 1;
    while (p1 <= p2) {
        if (updatedString[p1] !== updatedString[p2])
            return false;
        p1++;
        p2--;
    }
    return true;
};
console.log(validPalindrome('0P'));
