import { LookUp } from "../types/types";

// ? Given a roman numeral, covert it to an integer

const romanToInt = (inputString: string): number => {
  const romanLookUp: LookUp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < inputString.length; i++) {
    const romanNumber = inputString[i];
    const nextRomanNumber = inputString[i + 1];

    if (romanLookUp[romanNumber] < romanLookUp[nextRomanNumber]) {
      total += romanLookUp[nextRomanNumber] - romanLookUp[romanNumber];
      i++;
    } else {
      total += romanLookUp[romanNumber];
    }
  }

  return total;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994

// * SYMBOL | VALUE
// * I      | 1
// * V      | 5
// * X      | 10
// * L      | 50
// * C      | 100
// * D      | 500
// * M      | 1000

// * II => 2
// * XII => 12
// * XXVII => 27
// * IV => 4
