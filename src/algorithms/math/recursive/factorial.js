// ? Given an integer 'n', find the factorial of that integer

// ! the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n' => factorial(4) = 4*3*2*1 = 24

// ! n! = n * (n-1)!

const factorial = (value) => {
  if (value === 0) return 1;
  return value * factorial(value - 1);
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// * BIG O NOTATION - O(n) - LINEAR TIME COMPLEXITY
