// * GUIDELINES :
// * ALL STUDENTS WEARING RED SHIRTS MUST BE IN THE SAME ROM
// * ALL STUDENTS WEARING BLUE SHIRTS MUST BE IN THE SAME ROW
// * EACH STUDENT IN THE BACK ROW MUST BE STRICTLY TALLER THAN THE STUDENT DIRECTLY IN FRONT OF THEM


const classPhotos = (
  redShirtHeights: number[],
  blueShirtHeights: number[]
): Boolean => {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  let frontRow, backRow;

  const redTallest = redShirtHeights[0]
  const blueTallest = blueShirtHeights[0]

  if (redTallest > blueTallest) {
    backRow = redShirtHeights
    frontRow = blueShirtHeights
  } else {
    backRow = blueShirtHeights
    frontRow = redShirtHeights
  }

  for (let i = 0; i < backRow.length; i++) {
    if (backRow[i] <= frontRow[i]) return false
  }

  return true
};

// bsh = [ 2, 4, 5, 6, 9]
// rsh = [ 1, 3, 4, 5, 8]

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])); // true
console.log(classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9])); // false