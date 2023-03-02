"use strict";
const firstUniqChar = (string) => {
    const lookUp = {};
    for (let i = 0; i < string.length; i++) {
        if (lookUp[string[i]]) {
            lookUp[string[i]]++;
        }
        else {
            lookUp[string[i]] = 1;
        }
    }
    for (let j = 0; j < string.length; j++) {
        if (lookUp[string[j]] === 1)
            return j;
    }
    return -1;
};
console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
