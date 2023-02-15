"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (numbers) => {
    const dictionary = {};
    for (let i = 0; i < numbers.length; i++) {
        if (!dictionary[numbers[i]]) {
            dictionary[numbers[i]] = 1;
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if (dictionary[numbers[i]]) {
            dictionary[numbers[i]]--;
        }
        else {
            numbers[i] = -1;
        }
    }
    console.log(numbers);
    return Object.keys(dictionary).length;
};
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
