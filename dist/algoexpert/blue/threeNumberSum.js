"use strict";
const threeNumberSum = (array, targetSum) => {
    const triplets = [];
    let p1 = 0;
    let p2 = 1;
    let p3 = 2;
    array.sort((a, b) => a - b);
    while (p1 < array.length) {
        if (p3 >= array.length) {
            p2++;
            p3 = p2 + 1;
        }
        if (p2 >= array.length - 1) {
            p1++;
            p2 = p1 + 1;
            p3 = p2 + 1;
        }
        const firstNum = array[p1];
        const secondNum = array[p2];
        const thirdNum = array[p3];
        if (firstNum + secondNum + thirdNum === targetSum) {
            triplets.push([firstNum, secondNum, thirdNum]);
        }
        p3++;
    }
    return triplets;
};
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
