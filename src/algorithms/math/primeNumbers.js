// ? Given a natural number 'n', determine if the number is prime or not

// ! A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

const isPrime = (value) => {
  // NUMBER WILL HAVE TO BE GREATER THAN 1
  if (value < 2) return false;

  //IF WE HAVE A VALID NUMBER AND IT'S DIVISIBLE BY I RETURN FALSE
  for (let i = 2; i < value; i++) {
    if (value % i === 0) return false;
  }

  //MADE IT THROUGH THE LIST, RETURN TRUE
  return true;
};

console.log(isPrime(1)); // FALSE
console.log(isPrime(5)); // TRUE
console.log(isPrime(4)); // FALSE

// * BIG O NOTATION - O(n) - LINEAR TIME COMPLEXITY

// ! OPTIMIZED VERSION
// INTEGERS LARGER THAN THE SQUARE ROOT DO NOT NEED TO BE CHECKED BECAUSE, WHENEVER 'N=A*B' ONE OF THE TWO FACTORS 'A' AND 'B' IS LESS THAN OR EQUAL TO THE SQUARE ROOT OF 'N' 🤯
/*
 n = 24, a = 4, b = 6
 THE SQUARE ROOT OF 24 IS 4.89
 4 IS LESS THAN 4.89
 A IS LESS THAN THE SQUARE ROOT OF N
 
 n = 35, a = 5, b = 7
 THE SQUARE ROOT OF 35 IS 5.91
 5 IS LESS THAN 5.91
 A IS LESS THAN THE SQUARE ROOT OF N

*/

const isPrimeOptimized = (value) => {
  if (value < 2) return false;
  for (let i = 2; i < Math.sqrt(value); i++) {
    if (value % i === 0) return false;
  }
  return true;
};

// * BIG O NOTATION - O(sqrt(n))
