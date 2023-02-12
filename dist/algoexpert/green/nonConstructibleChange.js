"use strict";
const nonConstructibleChange = (coins) => {
    coins.sort((a, b) => a - b);
    let minChange = 0;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > minChange + 1)
            break;
        minChange += coins[i];
    }
    return minChange + 1;
};
const COINS = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(COINS));
