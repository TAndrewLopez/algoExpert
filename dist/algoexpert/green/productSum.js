"use strict";
const productSum = (arr, depth = 1) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const number = Array.isArray(arr[i]);
        if (!number) {
            sum += arr[i];
        }
        else {
            const results = productSum(arr[i], depth + 1);
            sum += results;
        }
    }
    return sum * depth;
};
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
