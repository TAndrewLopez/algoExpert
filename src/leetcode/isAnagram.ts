const isAnagram = (str1: string, str2: string): boolean => {
    const lookUp: { [key: string]: number } = {}

    if (str1.length !== str2.length) return false


    for (let i = 0; i < str1.length; i++) {
        const currChar = str1[i]
        if (lookUp[currChar]) {
            lookUp[currChar]++
        } else {
            lookUp[currChar] = 1
        }
    }

    for (let j = 0; j < str2.length; j++) {
        const currChar = str2[j];
        if (lookUp[currChar] > 0) {
            lookUp[currChar]--
        } else {
            return false
        }
    }

    // * ALTERNATIVE TO CHECKING STRING LENGTHS ON LINE 4
    // * BETTER RUN TIME BUT WORSE MEMORY USAGE
    // for (const keys in lookUp) {
    //     if (lookUp[keys]) return false
    // }

    return true
}


console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))