"use strict";
const caesarCipherEncryptor = (str, key) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cypher = "";
    for (const character of str) {
        let newIndex = alphabet.indexOf(character) + key;
        cypher += alphabet[newIndex % 26];
    }
    return cypher;
};
console.log(caesarCipherEncryptor("xyz", 2));
