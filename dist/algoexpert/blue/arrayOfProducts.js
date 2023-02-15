"use strict";
const arrayOfProducts = (array) => {
    const returnArray = [];
    for (let index = 0; index < array.length; index++) {
        returnArray.push(array.reduce((acc, el, i) => {
            if (i !== index) {
                acc *= el;
            }
            return acc;
        }, 1));
    }
    return returnArray;
};
console.log(arrayOfProducts([5, 1, 4, 2]));
