// RETURN "1" IF TRUE OR "0" IF FALSE
// IF EACH STRING IN ARRAY IS PANGRAM

const isPangram = (pangram: string[]): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  // LOOP THROUGH ARRAY
  for (let i = 0; i < pangram.length; i++) {
    let charCount: { [key: string]: number } = {};
    const currString = pangram[i].toLowerCase();

    // THEN LOOP THROUGH EACH CHARACTER IN STRING
    // TRACK CHARACTERS THAT ARE SEEN
    for (let j = 0; j < currString.length; j++) {
      const currChar = currString[j];
      if (alphabet.includes(currChar)) {
        charCount[currChar] = (charCount[currChar] || 0) + 1;
      }
    }
    // IF CHAR COUNT.LENGTH = 26 ADD 1 OTHERWISE ADD 0 TO RESULT STRING
    Object.keys(charCount).length === 26 ? (result += "1") : (result += "0");
  }

  return result;
};

console.log(
  isPangram([
    "we promptly judged antique ivory buckles for the next prize",
    "we promptly judged antique ivory buckles for the prizes",
    "the quick brown fox jumps over the lazy dog",
    "the quick brown fox jump over the lazy dog",
  ])
);
