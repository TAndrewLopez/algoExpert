// ? Weight for weight - Code Wars: https://www.codewars.com/kata/55c6126177c9441a570000cc

// ! EACH MONTH JOHN IS LAST ON THE LIST WHICH MEANS HE IS HEAVIEST
// ! MODIFY THE ORDER OF THE LIST
// ! WEIGHT OF NUMBER = SUM OF DIGITS

// ! 99 => WEIGHT OF 18
// ! 100 => WEIGHT OF 1

// ? Given a string with the weight of it's members in normal order can you give this string ordered by weights of these numbers

// ! ex: "56 65 74 100 99 68 86 180 90"  => "100 180 90 56 65 74 68 86 99"
// ! ex:  11 11 11 1   18 14 14 9 9

const orderWeight = (inputString) => {
  // MAP THROUGH STRING ARRAY AND CREATE OBJECTS WITH OLD AND NEW VALUES
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

  //SORT BASED ON NEW VALUES
  stringArray.sort((a, b) => a.newValue < b.newValue);

  // REDUCE STRING ARRAY BACK TO STRING BEFORE RETURNING

  return stringArray;
  // .reduce((acc, obj) => {
  //   return acc + obj.oldValue + " ";
  // }, "")
  // .trim();
};

const firstString = "103 123 4444 99 2000";
const secondString = "2000 10003 1234000 44444444 9999 11 11 22 123";

console.log(orderWeight(firstString)); // "2000 103 123 4444 99"
console.log(orderWeight(secondString)); // "11 11 2000 10003 22 123 1234000 44444444 9999"
