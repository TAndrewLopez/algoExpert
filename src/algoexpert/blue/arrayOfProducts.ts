// ? Given an array of non-empty integers
// ? Return an array of the same length where each element is equal to the product
// ? of every other number in the input array

const arrayOfProducts = (array: Array<number>): Array<number> => {
    const returnArray = []
    for (let index = 0; index < array.length; index++) {
        returnArray.push(
            array.reduce((acc, el, i) => {
                if (i !== index) {
                    acc *= el
                }
                return acc
            }, 1)
        )
    }
    return returnArray
}

console.log(arrayOfProducts([5, 1, 4, 2])) // => [8, 40, 10, 20]