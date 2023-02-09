// ? Given a number 'n', find the first 'n' elements of the Fibonacci sequence

// !EACH VALUE OF THE LIST IS THE SUM OF THE TWO PRECEDING ONES

const fibonacci = (value) => {
  const list = [0, 1];

  while (list.length < value) {
    const first = list[list.length - 2];
    const sec = list[list.length - 1];
    list.push(first + sec);
  }

  return value ? list : [0];
};

// console.log(fibonacci(0));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

const getNthFib = (value) => {
  const list = [0, 1];

  while (list.length < value) {
    const first = list[list.length - 2];
    const sec = list[list.length - 1];
    list.push(first + sec);
  }

  return value >= 2 ? list[list.length - 1] : 0;
};

// console.log(getNthFib(0));
// console.log(getNthFib(2));
// console.log(getNthFib(3));
// console.log(getNthFib(7));

// * BIG O NOTATION - O(n) - LINEAR TIME COMPLEXITY
// * as the number value increases, the number of times the loop executes increase.
