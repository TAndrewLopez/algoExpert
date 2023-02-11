// ? GIVEN A POSITIVE INTEGER 'N', DETERMINE IF THE NUMBER IS A POWER OF 2 OR NOT
// ! AN INTEGER IS A POWER OF TWO IF THERE EXISTS AN INTEGER 'X' SUCH THAT 'N' === 2X
// ! isPowerOfTWo(1) => TRUE (2^0)
// ! isPowerOfTWo(2) => TRUE (2^1)
// ! isPowerOfTWo(5) => FALSE

function powerOfTwo(value) {
  if (value < 1) return false;
  while (value > 1) {
    if (value % 2 !== 0) return false;
    value = value / 2;
  }
  return true;
}

// console.log(powerOfTwo(1)); // TRUE
// console.log(powerOfTwo(2)); // TRUE
// console.log(powerOfTwo(5)); // FALSE
// console.log(powerOfTwo(48));

// * BIG O NOTATION - O(logn)

function powerOfTwoOptimized(value) {
  if (value < 1) return false;

  return (value & (value - 1)) === 0;
}
// * BIG O NOTATION - O(1) - CONSTANT TIME COMPLEXITY

// console.log(powerOfTwoOptimized(1)); // TRUE
// console.log(powerOfTwoOptimized(2)); // TRUE
// console.log(powerOfTwoOptimized(5)); // FALSE
