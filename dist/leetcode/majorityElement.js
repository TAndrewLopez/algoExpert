"use strict";
const majorityElement = (numbers) => {
    const lookUp = {};
    for (let i = 0; i < numbers.length; i++) {
        const currNum = numbers[i];
        if (lookUp[currNum]) {
            lookUp[currNum]++;
        }
        else {
            lookUp[currNum] = 1;
        }
        if (lookUp[currNum] >= numbers.length / 2) {
            return currNum;
        }
    }
    return -1;
};
