"use strict";
const firstNonRepeatingCharacter = (string) => {
    const lookUp = {};
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (lookUp[char] === undefined) {
            lookUp[char] = i;
        }
        else {
            lookUp[char] = -1;
        }
    }
    for (const key in lookUp) {
        if (lookUp[key] > -1)
            return lookUp[key];
    }
    return -1;
};
console.log(firstNonRepeatingCharacter('abcdcaf'));
