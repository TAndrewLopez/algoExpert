const missingWords = (s: string, t: string): string[] => {
  const stringArray = s.split(" ");
  const sequenceArray = t.split(" ");
  const missingWords: string[] = [];

  let p1 = 0;
  let p2 = 0;

  // USE TWO POINTERS TO COMPARE EACH WORD
  while (p1 < stringArray.length && p2 < sequenceArray.length) {
    4;
    // IF WORDS DON'T MATCH WE ADD WORD TO MISSING WORDS ARRAY
    if (stringArray[p1] !== sequenceArray[p2]) {
      missingWords.push(stringArray[p1]);
    } else {
      // IF IT DOES MATCH WE MOVE SECOND POINTER
      p2++;
    }
    // ALWAYS MOVE FIRST POINTER AT END OF EACH LOOP
    p1++;
  }

  // CHECK IF THERE ARE ANY REMAINING WORDS IN stringArray ARRAY THAT HAVEN'T BEEN ADDED
  while (p1 < stringArray.length) {
    missingWords.push(stringArray[p1]);
    p1++;
  }

  return missingWords;
};

console.log(
  missingWords(
    "I am using HackerRank to improve programming",
    "am HackerRank to improve"
  )
);

/*
    [
        "I",
        "using",
        "programming"
    ]
*/
