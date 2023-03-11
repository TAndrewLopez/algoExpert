"use strict";
const getSpamEmails = (subjects, spam_words) => {
    const result = [];
    const lowerCaseSpamWords = spam_words.map((word) => word.toLowerCase());
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i].toLowerCase();
        const words = subject.split(" ");
        const wordCount = {};
        let isSpam = false;
        for (let j = 0; j < words.length; j++) {
            const currWord = words[j].toLowerCase();
            if (lowerCaseSpamWords.includes(currWord)) {
                if (wordCount[currWord]) {
                    wordCount[currWord]++;
                }
                else {
                    wordCount[currWord] = 1;
                }
                if (wordCount[currWord] >= 2) {
                    isSpam = true;
                    break;
                }
            }
        }
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
console.log(getSpamEmails(["ten tips for a carefree lifestyle", "free prize worth millions"], ["free", "money", "win", "millions"]));
