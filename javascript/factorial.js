// ? Given an integer 'n', find the factorial of that integer

// ! the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n' => factorial(4) = 4*3*2*1 = 24

const factorial = (value) => {
  let results = 1;

  for (let i = 2; i <= value; i++) {
    results *= i;
  }
  return results;
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// * BIG O NOTATION - O(n) - LINEAR TIME COMPLEXITY
// * as the number value increases, the number of times the loop executes increase.
