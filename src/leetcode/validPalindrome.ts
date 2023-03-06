const validPalindrome = (string: string): boolean => {
    // LOOP THROUGH INPUT STRING REMOVING ALL NON CHARACTERS
    // USE TWO POINTERS TO COMPARE BEGIN AND END OF STRING
    // IF CHARACTERS ARE THE SAME, MOVE POINTER
    // IF CHARACTERS ARE DIFF, RETURN FALSE
    const alphabet = "abcdefghijklmnopqrstuvwxyz012345689";
    let updatedString = "";

    for (let i = 0; i < string.length; i++) {
        const char = string[i].toLowerCase();
        if (alphabet.includes(char)) updatedString += char
    }

    let p1 = 0;
    let p2 = updatedString.length - 1;

    while (p1 <= p2) {
        if (updatedString[p1] !== updatedString[p2]) return false
        p1++
        p2--
    }
    return true
}

// console.log(validPalindrome('A man, a plan, a canal: Panama'))
// console.log(validPalindrome('race a car'))
// console.log(validPalindrome('racecar'))
console.log(validPalindrome('0P'))