const inputString = ["h", "e", "l", "l", "o"]

const reverseString = (str: string[]): void => {
    let p1 = 0;
    let p2 = str.length - 1;

    while (p1 <= p2) {
        const holder = str[p1];
        str[p1] = str[p2]
        str[p2] = holder;
        p1++
        p2--
    }
    return
}


reverseString(inputString)
console.log(inputString)