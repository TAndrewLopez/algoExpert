"use strict";
const bubbleSort = (array) => {
    let p1 = 0;
    let p2 = p1 + 1;
    while (p1 < array.length) {
        if (array[p2] < array[p1]) {
            const prev = array[p1];
            array[p1] = array[p2];
            array[p2] = prev;
        }
        if (p2 === array.length) {
            p1++;
            p2 = p1 + 1;
        }
        else {
            p2++;
        }
    }
    return array;
};
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
