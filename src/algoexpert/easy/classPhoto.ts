// * GUIDELINES :
// * ALL STUDENTS WEARING RED SHIRTS MUST BE IN THE SAME ROM
// * ALL STUDENTS WEARING BLUE SHIRTS MUST BE IN THE SAME ROW
// * EACH STUDENT IN THE BACK ROW MUST BE STRICTLY TALLER THAN THE STUDENT DIRECTLY IN FRONT OF THEM

// ! USED HINTS

const classPhotos = (
  redShirtHeights: number[],
  blueShirtHeights: number[]
): Boolean => {
  // SORT BOTH ARRAYS OF HEIGHT
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let validRedInBack = true;
  let validBlueInBack = true;
  let i = 0;

  //ASSIGN BACK ROW BASED WITH FIRST TALLER STUDENT
  //   for (let i = 0; i < redShirtHeights.length; i++) {
  while (i < redShirtHeights.length && (validBlueInBack || validRedInBack)) {
    if (!validRedInBack && !validBlueInBack) break;
    if (redShirtHeights[i] <= blueShirtHeights[i]) validRedInBack = false;
    if (redShirtHeights[i] >= blueShirtHeights[i]) validBlueInBack = false;
    i++;
  }

  return validRedInBack || validBlueInBack;
};

// bsh = [ 2, 4, 5, 6, 9]
// rsh = [ 1, 3, 4, 5, 8]

// console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5])); // true
// console.log(classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9])); // false
