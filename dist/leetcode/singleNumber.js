"use strict";
const singleNumber = (numbers) => {
    const lookUp = {};
    for (let i = 0; i < numbers.length; i++) {
        const currNum = numbers[i];
        if (lookUp[currNum]) {
            lookUp[currNum]++;
        }
        else {
            lookUp[currNum] = 1;
        }
    }
    for (const key in lookUp) {
        if (lookUp[key] === 1) {
            return Number(key);
        }
    }
    return -1;
};
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
