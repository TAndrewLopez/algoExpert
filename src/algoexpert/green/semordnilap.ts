import { LookUp } from './../../types/types';

const semordnilap = (words: Array<string>): Array<Array<string>> => {
    const lookUp: { [key: string]: string } = {}
    const returnArray = []
    for (let i = 0; i < words.length; i++) {
        const originalWord = words[i]

        // * if the original word doesn't exist in lookup, we haven't seen it nor it's palindrome

        if (!lookUp[originalWord]) {
            const palindrome = originalWord.split('').reverse().join("")
            lookUp[originalWord] = palindrome;
            lookUp[palindrome] = words[i];

        } else {
            returnArray.push([originalWord, lookUp[originalWord]])
        }
    }
    return returnArray
}

console.log(semordnilap(['diaper', 'abc', 'test', 'cba', 'repaid']))