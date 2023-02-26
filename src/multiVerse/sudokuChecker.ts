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
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];

const getRow = (puzzle: any, rowIdx: number): Array<number> => {
    return puzzle[rowIdx]
}

const getColumn = (puzzle: any, colIdx: number): Array<number> => {
    return puzzle.reduce((acc: [], el: []) => {
        acc.push(el[colIdx])
        return acc;
    }, [])
}

const getSection = (puzzle: any, x: number, y: number): Array<number> => {
    const section = []
    let row1, row2, row3;
    if (y === 0) {
        row1 = getRow(puzzle, 0)
        row2 = getRow(puzzle, 1)
        row3 = getRow(puzzle, 2)
    } else if (y === 1) {
        row1 = getRow(puzzle, 3)
        row2 = getRow(puzzle, 4)
        row3 = getRow(puzzle, 5)
    } else {
        row1 = getRow(puzzle, 6)
        row2 = getRow(puzzle, 7)
        row3 = getRow(puzzle, 8)
    }
    if (x === 0) {
        section.push(...row1.slice(0, 3))
        section.push(...row2.slice(0, 3))
        section.push(...row3.slice(0, 3))
    } else if (x === 1) {
        section.push(...row1.slice(3, 6))
        section.push(...row2.slice(3, 6))
        section.push(...row3.slice(3, 6))
    } else {
        section.push(...row1.slice(6))
        section.push(...row2.slice(6))
        section.push(...row3.slice(6))
    }
    return section
}

// console.log(getRow(puzzle, 8)) // => [ 3,2,8,1,9,6,5,4,7 ]
// console.log(getRow(puzzle, 0)) // => [ 8,9,5,7,4,2,1,3,6 ]

// console.log(getColumn(puzzle, 0)) // => [ 8,2,4,9,5,6,1,7,3 ]
// console.log(getColumn(puzzle, 8)) // => [ 6,5,2,8,4,1,3,9,7 ]


// console.log(getSection(puzzle, 0, 0)) // => [ 8,9,5,2,7,1,4,6,3 ]
// console.log(getSection(puzzle, 1, 0)) // => [ 7,4,2,9,6,3,5,8,1 ]

const includes1To9 = (arr: Array<number>): boolean => {
    for (let i = arr.length; i > 0; i--) {
        if (!arr.includes(i)) {
            return false
        }
    }
    return true
}
// console.log(includes1To9([1, 2, 3, 4, 5, 6, 7, 8, 9])) // => true
// console.log(includes1To9([1, 1, 2, 3, 4, 5, 6, 7, 8])) // => false (no 9)


const sudokuIsValid = (puzzle: any): boolean => {
    //CHECK ROWS AND COLS
    for (let i = 0; i < puzzle.length; i++) {
        const row = getRow(puzzle, i)
        const col = getColumn(puzzle, i)
        if (!includes1To9(row) || !includes1To9(col)) {
            return false
        }
    }
    //CHECK SECTIONS
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const section = getSection(puzzle, i, j)
            if (!includes1To9(section)) {
                return false
            }
        }
    }
    return true
}

console.log(sudokuIsValid(puzzle)) // => true
console.log(sudokuIsValid(puzzleTwo)) // => false