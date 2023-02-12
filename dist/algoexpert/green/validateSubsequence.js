"use strict";
const validateSubsequence = (array, sequence) => {
    let pointer = 0;
    array.forEach((num) => {
        if (num === sequence[pointer]) {
            pointer++;
        }
    });
    return pointer === sequence.length;
};
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12]));
