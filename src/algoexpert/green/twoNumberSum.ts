// PROMPT: https://www.algoexpert.io/questions/two-number-sum

const sampleArray = [3, 4, -4, 8, 11, 1, -1, 6];
const sampleTarget = 10;

const twoNumberSum = (arr: [], target: number): [][] => {
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
