"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const romanToInt = (inputString) => {
    const romanLookUp = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let total = 0;
    for (let i = 0; i < inputString.length; i++) {
        const romanNumber = inputString[i];
        const nextRomanNumber = inputString[i + 1];
        if (romanLookUp[romanNumber] < romanLookUp[nextRomanNumber]) {
            total += romanLookUp[nextRomanNumber] - romanLookUp[romanNumber];
            i++;
        }
        else {
            total += romanLookUp[romanNumber];
        }
    }
    return total;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
