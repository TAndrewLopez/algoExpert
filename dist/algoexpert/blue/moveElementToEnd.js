"use strict";
const moveElementToEnd = (array, toMove) => {
    let p1 = 0;
    let p2 = array.length - 1;
    while (p1 <= p2) {
        if (array[p2] === toMove) {
            p2--;
            continue;
        }
        if (array[p1] === toMove) {
            array[p1] = array[p2];
            array[p2] = toMove;
            p2--;
        }
        p1++;
    }
    return array;
};
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
