"use strict";
const isAnagram = (str1, str2) => {
    const lookUp = {};
    if (str1.length !== str2.length)
        return false;
    for (let i = 0; i < str1.length; i++) {
        const currChar = str1[i];
        if (lookUp[currChar]) {
            lookUp[currChar]++;
        }
        else {
            lookUp[currChar] = 1;
        }
    }
    for (let j = 0; j < str2.length; j++) {
        const currChar = str2[j];
        if (lookUp[currChar] > 0) {
            lookUp[currChar]--;
        }
        else {
            return false;
        }
    }
    return true;
};
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
