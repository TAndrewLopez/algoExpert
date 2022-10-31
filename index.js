/*
INPUT:
  NON EMPTY ARRAY OF DISTINCT INTEGERS
  INTEGER OF TARGET SUM\
OUTPUT:
  RETURN ARRAY
    IF ANY TWO NUMBERS OF INPUT ARRAY EQUAL TARGET SUM
      ADD THEM TO ARRAY
    IF NOTHING EQUAL SUM
      RETURN EMPTY ARRAY


EXAMPLE:
  ARRAY: [3,4,-4,8,11,1,-1,6];
  TARGETSUM: 10;
  OUTPUT: [-1, 11];
 */

const sampleArray = [3, 4, -4, 8, 11, 1, -1, 6];
const sampleTarget = 10;

//IF MUTATION IS ALLOWED
//SORT ARRAY
//USE TWO POINTERS TO POINT AT LEFT MOST AND RIGHT MOST INDEXES
//IF SUM OF TWO NUMBERS IS LESS THAN TARGET, MOVE LEFT INDEX +1
//IF SUM OF TWO NUMBERS IS MORE THAN TARGET, MOVE RIGHT INDEX -1
//IF SUM IS EQUAL TO TARGET RETURN [ARR[P1], ARR[P2]]
//IF INDEX 1 >= INDEX 2 RETURN []
const twoNumberSum = (arr, target) => {
  let p1 = 0;
  let p2 = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];
    if (sum === target) {
      return [arr[p1], arr[p2]];
    }
    if (sum < target) {
      p1++;
    }
    if (sum > target) {
      p2--;
    }
  }
  return [];
};

console.log(twoNumberSum(sampleArray, sampleTarget));
