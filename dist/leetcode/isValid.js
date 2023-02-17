"use strict";
function isValid(string) {
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        const bracket = string[i];
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
        }
        else {
            if (bracket === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            }
            else if (bracket === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            }
            else if (bracket === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
