const isPalindrome = (string) => {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

console.log(isPalindrome("abcdcba"));
