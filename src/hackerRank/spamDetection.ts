// THE FUNCTION IS EXPECTED TO RETURN A STRING_ARRAY
// THE FUNCTION ACCEPTS THE FOLLOWING PARAMETERS:
// 1. STRING_ARRAY SUBJECTS
// 2. STRING_ARRAY SPAM_WORDS

const getSpamEmails = (subjects: string[], spam_words: string[]): string[] => {
  const result: string[] = [];
  const lowerCaseSpamWords = spam_words.map((word) => word.toLowerCase());

  // LOOP THROUGH SUBJECT STRINGS AND THEM INTO INDIVIDUAL WORDS
  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i].toLowerCase();
    const words = subject.split(" ");
    const wordCount: { [key: string]: number } = {};
    let isSpam = false;

    // CHECK IF WORDS ARE CONSIDERED SPAM
    for (let j = 0; j < words.length; j++) {
      const currWord = words[j].toLowerCase();
      // IF WORDS ARE SPAM, TRACK THEM IN WORD COUNT
      if (lowerCaseSpamWords.includes(currWord)) {
        if (wordCount[currWord]) {
          wordCount[currWord]++;
        } else {
          wordCount[currWord] = 1;
        }

        // IF WORD COUNT IS 2 OR GREATER THAN EMAIL IS CONSIDER SPAM
        if (wordCount[currWord] >= 2) {
          isSpam = true;
          break;
        }
      }
    }

    // IF WE GET HERE, WE HAVEN'T FOUND A SINGLE WORD THAT OCCURS TWICE OR MORE
    // SO WE CHECK IF WE HAVE A TOTAL OF TWO WORDS IN THE WORD COUNT
    if (!isSpam) {
      if (Object.keys(wordCount).length >= 2) {
        isSpam = true;
        break;
      }
    }
    result.push(isSpam ? "spam" : "not_spam");
  }

  return result;
};

console.log(
  getSpamEmails(
    ["ten tips for a carefree lifestyle", "free prize worth millions"],
    ["free", "money", "win", "millions"]
  )
);
