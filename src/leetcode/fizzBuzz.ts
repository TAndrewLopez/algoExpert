const fizzBuzz = (number: number): string[] => {
    const stringArray: string[] = [];

    for (let i = 1; i < number + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            stringArray.push("FizzBuzz")
        } else if (i % 3 === 0) {
            stringArray.push("Fizz")
        } else if (i % 5 === 0) {
            stringArray.push("Buzz")
        } else {
            stringArray.push(String(i))
        }
    }
    return stringArray
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))