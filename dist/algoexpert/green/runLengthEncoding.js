"use strict";
const runLengthEncoding = (string) => {
    const stack = [];
    for (const char of string) {
        if (!stack.length) {
            stack.push({ char, count: 1 });
            continue;
        }
        const top = stack[stack.length - 1];
        if (char === top.char && top.count < 9) {
            top.count++;
        }
        else {
            stack.push({ char, count: 1 });
        }
    }
    const results = [];
    for (const { char, count } of stack) {
        results.push(`${count}${char}`);
    }
    return results.join('');
};
console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'));
console.log(runLengthEncoding('aA'));
