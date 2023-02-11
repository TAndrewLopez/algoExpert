// RECURSIVE SOLUTION
// RUN LOGARITHMIC TIME

const recursiveBinarySearch = (list, target) => {
  //CHECK FOR A VALID LIST
  if (!list.length) return false;

  //DEFINE MIDPOINT
  midpoint = Math.floor(list.length / 2);

  //CHECK 1
  if (list[midpoint] === target) return true;

  //DECIDE WHICH FUNCTION IS GOING TO INCLUDE MIDPOINT
  //CHECK 2
  if (list[midpoint < target])
    return recursiveBinarySearch(list.slice(list[midpoint] + 1), target);

  //CHECK 3
  if (list[midpoint > target])
    return recursiveBinarySearch(list.slice(0, midpoint), target);

  return false;
};

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const validTarget = 6;
const invalidTarget = 12;

console.log(
  "recursive binary search",
  recursiveBinarySearch(testList, invalidTarget)
);

console.log(
  "recursive binary search",
  recursiveBinarySearch(testList, validTarget)
);
