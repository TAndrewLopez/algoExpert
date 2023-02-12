// ? Given a non-empty string of lowercase letters and a non-negative integer representing a key
// ? return a new string obtained by shifting every letter by k (key)

const caesarCipherEncryptor = (str: string, key: number): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let cypher = "";

  for (const character of str) {
    let newIndex = alphabet.indexOf(character) + key;
    cypher += alphabet[newIndex % 26];
  }
  return cypher;
};

console.log(caesarCipherEncryptor("xyz", 2)); // zab

/*
const caesarCipherEncryptor = (str: string, key: number): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let returnString = "";

  while (key > alphabet.length - 1) {
    key -= alphabet.length;
  }

  for (let i = 0; i < str.length; i++) {
    let POS = alphabet.indexOf(str[i]);

    if (POS + key > 25) {
      POS = POS + key - alphabet.length;
    } else {
      POS = POS + key;
    }
    returnString += alphabet[POS];
  }
  return returnString;
};
*/
