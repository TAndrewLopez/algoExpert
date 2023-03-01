"use strict";
const smallestDifference = (arrayOne, arrayTwo) => {
    let difference;
    let integers = [];
    for (let i = 0; i < arrayOne.length; i++) {
        const firstNum = arrayOne[i];
        for (let j = 0; j < arrayTwo.length; j++) {
            const secNum = arrayTwo[j];
            const absDiff = Math.abs((firstNum) - (secNum));
            if (difference === undefined) {
                difference = absDiff;
                integers = [firstNum, secNum];
            }
            else {
                if (absDiff < difference) {
                    difference = absDiff;
                    integers = [firstNum, secNum];
                }
            }
        }
    }
    return integers;
};
console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
