// LOOP THROUGH ARRAY
// IF INDEX A AND INDEX B ARE NUMBER => SUM
// IF INDEX IS ARRAY => SUM ARRAY AND MULTIPLY BY DEPTH
// HOW DO I KNOW MY DEPTH???
// ADD THAT SUM TO ORIGINAL COUNT

const productSum = (arr, depth = 1) => {
  let sum = 0;
  //loop through array
  for (let i = 0; i < arr.length; i++) {
    const number = Array.isArray(arr[i]);
    //if index is a number add to sum
    if (!number) {
      sum += arr[i];
    } else {
      //if not put array in recursive call and add to depth
      const results = productSum(arr[i], depth + 1);
      //when recursion completes, add the sum to total sum
      sum += results;
    }
  }
  //the sum of an array is the depth * sum
  return sum * depth;
};
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])); // 12
