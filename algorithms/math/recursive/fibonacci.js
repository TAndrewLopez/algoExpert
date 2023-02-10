// ? GIVEN A NUMBER 'n', FIND THE NTH ELEMENT OF THE FIBONACCI SEQUENCE

// ! EACH VALUE OF THE LIST IS THE SUM OF THE TWO PRECEDING ONES
// ! Fn = Fn - 1 + Fn - 2

const fibonacci = (value) => {
  if (value === 0 || value === 1) return value;

  return fibonacci(value - 1) + fibonacci(value - 2);
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));

// * BIG O NOTATION = O(2^n)
