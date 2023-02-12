// PROMPT: https://www.algoexpert.io/questions/validate-subsequence

/*
    INPUT: 
        TWO NON EMPTY ARRAYS OF INTEGERS
    OUTPUT:
        RETURN TORF IF 2ND ARRAY IS SUBSEQUENCE OF 1ST ARRAY
*/

//GOAL
//FIND THE FIRST OCCURENCE OF THE FIRST INDEX OF SUBSEQUENCE ARRAY
//CONTINUE THROUGH LOOP ADDING +1 TO POINTER FOR EACH OCCURENCE OF SEQUENCE
//END OF LOOP => IF POINTER < SEQUENCE ARRAY LENGTH RETURN TRUE : FALSE

const validateSubsequence = (array: number[], sequence: number[]): boolean => {
  let pointer = 0;
  array.forEach((num) => {
    if (num === sequence[pointer]) {
      pointer++;
    }
  });
  return pointer === sequence.length;
};

console.log(
  validateSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 25, 6, -1, 8, 10, 12]
  )
);
