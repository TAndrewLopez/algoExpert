// PROMPT: https://www.algoexpert.io/questions/two-number-sum

const sampleArray = [3, 4, -4, 8, 11, 1, -1, 6];
const sampleTarget = 10;

//IF MUTATION IS ALLOWED
//SORT ARRAY
//USE TWO POINTERS TO POINT AT LEFT MOST AND RIGHT MOST INDICIES
//IF SUM IS LESS THAN TARGET, MOVE LEFT INDEX +1
//IF SUM IS MORE THAN TARGET, MOVE RIGHT INDEX -1
//IF SUM IS EQUAL TO TARGET RETURN [ARR[P1], ARR[P2]]

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

//IF MUTATION ISN'T ALLOWED
//DOUBLE FOR LOOP THROUGH ARRAY LOOKING FOR SUM === TARGET

const twoNumberSumClean = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};

// console.log(twoNumberSum(sampleArray, sampleTarget));
// console.log(twoNumberSumClean(sampleArray, sampleTarget));
