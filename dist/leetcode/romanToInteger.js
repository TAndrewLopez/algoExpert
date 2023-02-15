"use strict";
const romanToInt = (roman) => {
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
    for (let i = 0; i < roman.length; i++) {
        const romanNumber = roman[i];
        const nextRomanNumber = roman[i + 1];
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
