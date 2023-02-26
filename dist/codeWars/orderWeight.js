"use strict";
const orderWeight = (inputString) => {
    const stringArray = inputString.split(" ").map((string) => {
        const numbersArray = string.split("");
        let newNumberValue = 0;
        for (let i = 0; i < numbersArray.length; i++) {
            newNumberValue += Number(numbersArray[i]);
        }
        return {
            oldValue: string,
            newValue: String(newNumberValue),
        };
    });
    stringArray.sort((a, b) => {
        if (a.newValue < b.newValue) {
            return 1;
        }
        return 0;
    });
    return stringArray;
};
const firstString = "103 123 4444 99 2000";
const secondString = "2000 10003 1234000 44444444 9999 11 11 22 123";
console.log(orderWeight(firstString));
console.log(orderWeight(secondString));
