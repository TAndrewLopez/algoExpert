// ! HINTED

const plusOne = (digits: number[]): number[] => {

    for (let i = digits.length - 1; i > -1; i--) {

        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }

    if (digits[0] === 0) {
        return [1, ...digits]
    }


    return digits
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]