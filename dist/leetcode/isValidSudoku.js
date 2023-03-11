"use strict";
const isValidSudoku = (board) => {
    return true;
};
const returnRow = (board, row) => {
    return board[row];
};
const returnCol = (board, col) => {
    const sudokuCol = [];
    for (let i = 0; i < board.length; i++) {
        sudokuCol.push(board[i][col]);
    }
    return sudokuCol;
};
const return3x3 = (board, x, y) => {
    const section = [];
    let row1, row2, row3;
    if (y === 0) {
        row1 = returnRow(board, 0);
        row2 = returnRow(board, 1);
        row3 = returnRow(board, 2);
    }
    else if (y === 1) {
        row1 = returnRow(board, 3);
        row2 = returnRow(board, 4);
        row3 = returnRow(board, 5);
    }
    else {
        row1 = returnRow(board, 6);
        row2 = returnRow(board, 7);
        row3 = returnRow(board, 8);
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
const hasDuplicates = () => { };
const sudokuPuzzle1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const sudokuPuzzle2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(return3x3(sudokuPuzzle1, 1, 0));
