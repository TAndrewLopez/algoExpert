// YOUR CODE
const lettersAfter = (haystack: string, needle: string, limit: number) => {
    let returnString = ''

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            for (let j = limit; j > 0; j--) {
                i++
                returnString += haystack[i]
            }
            break;
        }
    }
    return returnString
}

console.log(lettersAfter('hello', 'e', 2)) // => ll
console.log(lettersAfter('hello', 'h', 1))  // => e
console.log(lettersAfter('indefatigable', 'a', 4)) // => tiga



