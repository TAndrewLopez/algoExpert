"use strict";
const containsDuplicate = (numbers) => {
    const lookUp = {};
    for (let i = 0; i < numbers.length; i++) {
        const currChar = numbers[i];
        if (lookUp[currChar]) {
            return true;
        }
        else {
            lookUp[currChar] = 1;
        }
    }
    return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
