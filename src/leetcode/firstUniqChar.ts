const firstUniqChar = (string: string): number => {
    const lookUp: { [key: string]: number } = {}

    for (let i = 0; i < string.length; i++) {
        if (lookUp[string[i]]) {
            lookUp[string[i]]++
        } else {
            lookUp[string[i]] = 1
        }
    }

    for (let j = 0; j < string.length; j++) {
        if (lookUp[string[j]] === 1) return j
    }
    return -1
}

console.log(firstUniqChar('leetcode')) // => 0
console.log(firstUniqChar('loveleetcode')) // => 2
console.log(firstUniqChar('aabb')) // => -1