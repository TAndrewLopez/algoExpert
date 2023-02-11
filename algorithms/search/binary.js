// ? Give a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

const binarySearch = (array, target) => {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    if (array[middle] === target) return middle;

    if (array[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
};

const testArray = [-5, 2, 4, 6, 10];
console.log(binarySearch(testArray, 10)); // 4
console.log(binarySearch(testArray, 6)); // 3
console.log(binarySearch(testArray, 20)); // -1

// * Big O = O(logn) - Algorithmic Time Complexity

const recursiveBinarySearch = (array, target) => {
  // ! CHECK FOR VALID ARRAY
  if (!array.length) return;
};
