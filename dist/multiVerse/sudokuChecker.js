"use strict";
let puzzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]
];
let puzzleTwo = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [8, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]
];
const getRow = (puzzle, rowIdx) => {
    return puzzle[rowIdx];
};
const getColumn = (puzzle, colIdx) => {
    return puzzle.reduce((acc, el) => {
        acc.push(el[colIdx]);
        return acc;
    }, []);
};
const getSection = (puzzle, x, y) => {
    const section = [];
    let row1, row2, row3;
    if (y === 0) {
        row1 = getRow(puzzle, 0);
        row2 = getRow(puzzle, 1);
        row3 = getRow(puzzle, 2);
    }
    else if (y === 1) {
        row1 = getRow(puzzle, 3);
        row2 = getRow(puzzle, 4);
        row3 = getRow(puzzle, 5);
    }
    else {
        row1 = getRow(puzzle, 6);
        row2 = getRow(puzzle, 7);
        row3 = getRow(puzzle, 8);
    }
    if (x === 0) {
        section.push(...row1.slice(0, 3));
        section.push(...row2.slice(0, 3));
        section.push(...row3.slice(0, 3));
    }
    else if (x === 1) {
        section.push(...row1.slice(3, 6));
        section.push(...row2.slice(3, 6));
        section.push(...row3.slice(3, 6));
    }
    else {
        section.push(...row1.slice(6));
        section.push(...row2.slice(6));
        section.push(...row3.slice(6));
    }
    return section;
};
const includes1To9 = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        if (!arr.includes(i)) {
            return false;
        }
    }
    return true;
};
const sudokuIsValid = (puzzle) => {
    for (let i = 0; i < puzzle.length; i++) {
        const row = getRow(puzzle, i);
        const col = getColumn(puzzle, i);
        if (!includes1To9(row) || !includes1To9(col)) {
            return false;
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const section = getSection(puzzle, i, j);
            if (!includes1To9(section)) {
                return false;
            }
        }
    }
    return true;
};
console.log(sudokuIsValid(puzzle));
console.log(sudokuIsValid(puzzleTwo));
