"use strict";
const lettersAfter = (haystack, needle, limit) => {
    let returnString = '';
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            for (let j = limit; j > 0; j--) {
                i++;
                returnString += haystack[i];
            }
            break;
        }
    }
    return returnString;
};
console.log(lettersAfter('hello', 'e', 2));
console.log(lettersAfter('hello', 'h', 1));
console.log(lettersAfter('indefatigable', 'a', 4));
