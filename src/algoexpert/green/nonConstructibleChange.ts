// ? GIVEN AN ARRAY OF POSITIVE INTEGERS REPRESENTING THE VALUES OF COINS
// ? RETURN THE MINIMUM AMOUNT OF CHANGE (THE MINIMUM SUM OF MONEY) THAT YOU CANNOT CREATE

// ! FOLLOWED HINTS

const nonConstructibleChange = (coins: number[]): number => {
  coins.sort((a, b) => a - b);
  let minChange = 0;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minChange + 1) break;
    minChange += coins[i];
  }
  return minChange + 1;
};

const COINS = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(COINS)); // 20
