const firstNonRepeatingCharacter = (string: string): number => {
    const lookUp: { [key: string]: number } = {};
    // LOOP THROUGH STRING
    // ADD STRING KEY AND INDEX VALUE
    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (lookUp[char] === undefined) {
            lookUp[char] = i
        } else {
            // IF CHARACTER EXIST IN LOOKUP , CHANGE INDEX VALUE TO -1
            lookUp[char] = -1
        }

    }
    // LOOP THROUGH LOOKUP FOR FIRST CHARACTER THAT HAS VALUE GREATER THAN -1
    for (const key in lookUp) {
        if (lookUp[key] > -1) return lookUp[key];
    }
    return -1;
}

console.log(firstNonRepeatingCharacter('abcdcaf')) // b => 1