"use strict";
const reverseWordsInString = (string) => {
    let returnString = "";
    let charSegment = "";
    let whiteSpace = "";
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char !== " ") {
            charSegment += char;
            returnString = whiteSpace + returnString;
            whiteSpace = '';
        }
        else {
            whiteSpace += char;
            returnString = charSegment + returnString;
            charSegment = '';
        }
    }
    if (charSegment.length) {
        returnString = charSegment + returnString;
    }
    if (whiteSpace.length) {
        returnString = whiteSpace + returnString;
    }
    return returnString;
};
console.log(reverseWordsInString('AlgoExpert is the best!'));
