const moveZeroes = (array: number[]): number[] => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] !== 0) {
                    array[i] = array[j]
                    array[j] = 0
                    break;
                }
            }
        }
    }
    return array
}

console.log(moveZeroes([0, 1, 0, 3, 12])) // => [1, 3, 12, 0, 0]
console.log(moveZeroes([0])) // => [1, 3, 12, 0, 0]