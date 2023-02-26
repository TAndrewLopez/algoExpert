"use strict";
const removeColumns = (originalGrid, numCol) => {
    return originalGrid.reduce((acc, el) => {
        const keep = el.length - numCol;
        const newEl = el.slice(0, keep);
        acc.push(newEl);
        return acc;
    }, []);
};
console.log(removeColumns([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
], 2));
