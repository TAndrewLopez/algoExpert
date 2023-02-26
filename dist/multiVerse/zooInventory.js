"use strict";
const zooInventory = (multiDimArray) => {
    const returnArray = [];
    for (let i = 0; i < multiDimArray.length; i++) {
        returnArray.push(`${multiDimArray[i][0]} the ${multiDimArray[i][1][0]} is ${multiDimArray[i][1][1]}`);
    }
    return returnArray;
};
console.log(zooInventory([
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
]));
