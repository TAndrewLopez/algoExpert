const reverseWordsInString = (string: string): string => {
    let returnString = ""
    let charSegment = ""
    let whiteSpace = "";

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        // IF A CHARACTER IS FOUND THAT ISN'T WHITE SPACE
        if (char !== " ") {
            // ADD CHARACTERS TO CHARACTER SEGMENT
            charSegment += char;
            // ADD AND RESET WHITESPACE CHARACTERS
            returnString = whiteSpace + returnString
            whiteSpace = ''
        } else {
            // IF WHITESPACE IS FOUND, ADD TO WHITESPACE SEGMENT
            whiteSpace += char
            // ADD CHARACTERS TO RETURN STRING
            returnString = charSegment + returnString
            // RESET CHAR SEGMENT
            charSegment = ''
        }
    }
    if (charSegment.length) {
        returnString = charSegment + returnString;
    }
    if (whiteSpace.length) {
        returnString = whiteSpace + returnString;
    }
    return returnString
}

console.log(reverseWordsInString('AlgoExpert is the best!'))