"use strict";
const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    let total = 0;
    const redShirtsSorted = redShirtSpeeds.sort((a, b) => a - b);
    const blueShirtsSorted = blueShirtSpeeds.sort((a, b) => fastest ? b - a : a - b);
    for (let i = 0; i < redShirtsSorted.length; i++) {
        if (redShirtsSorted[i] > blueShirtsSorted[i]) {
            total += redShirtsSorted[i];
        }
        else {
            total += blueShirtsSorted[i];
        }
    }
    return total;
};
console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));
