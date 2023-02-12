const isPalindrome = (string: string): boolean => {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};
