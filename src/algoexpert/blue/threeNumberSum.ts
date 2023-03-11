const threeNumberSum = (array: number[], targetSum: number): number[][] => {
  const triplets: number[][] = [];
  let p1 = 0;
  let p2 = 1;
  let p3 = 2;

  array.sort((a, b) => a - b);

  while (p1 < array.length) {
    // IF POINTER THREE MAKES IT TO END OF ARRAY, INCREMENT POINTER TWO AND RESET POINTER THREE
    if (p3 >= array.length) {
      p2++;
      p3 = p2 + 1;
    }
    // IF POINTER TWO MAKES IT TO END OF ARRAY - 1, INCREMENT POINTER ONE
    // RESET POINTER TWO AND THREE
    // (-1 BECAUSE P3 SHOULD HOLD LAST POSITION AND WE SHOULDN'T OVERLAP)
    if (p2 >= array.length - 1) {
      p1++;
      p2 = p1 + 1;
      p3 = p2 + 1;
    }

    const firstNum = array[p1];
    const secondNum = array[p2];
    const thirdNum = array[p3];

    if (firstNum + secondNum + thirdNum === targetSum) {
      triplets.push([firstNum, secondNum, thirdNum]);
    }

    p3++;
  }

  return triplets;
};

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
