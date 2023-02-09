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
