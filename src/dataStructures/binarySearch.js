// ITERATIVE SOLUTION - PREFERRED IN JS BECAUSE IT RUNS IN A CONSTANT SPACE
// BIG O NOTATION -
// LOGARITHMIC RUNTIME

// REQUIRES LIST TO BE SORTED
const binarySearch = (list, target) => {
  let first = 0;
  let last = list.length;

  while (first <= last) {
    midpoint = Math.floor((first + last) / 2);

    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return null;
};

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const validTarget = 6;
const invalidTarget = 12;

console.log("binary search", binarySearch(testList, invalidTarget));
console.log("binary search", binarySearch(testList, validTarget));
