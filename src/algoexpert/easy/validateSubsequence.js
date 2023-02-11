// PROMPT: https://www.algoexpert.io/questions/validate-subsequence

/*
    INPUT: 
        TWO NON EMPTY ARRAYS OF INTEGERS
    OUTPUT:
        RETURN TORF IF 2ND ARRAY IS SUBSEQUENCE OF 1ST ARRAY
*/

const sampleArray = [5, 1, 22, 25, 6, -1, 8, 10];
const sampleSequence = [5, 1, 22, 25, 6, -1, 8, 10, 12];
const output = true;

//GOAL
//FIND THE FIRST OCCURENCE OF THE FIRST INDEX OF SUBSEQUENCE ARRAY
//CONTINUE THROUGH LOOP ADDING +1 TO POINTER FOR EACH OCCURENCE OF SEQUENCE
//END OF LOOP => IF POINTER < SEQUENCE ARRAY LENGTH RETURN TRUE : FALSE
const validateSubsequence = (array, sequence) => {
  let pointer = 0;
  array.forEach((num) => {
    if (num === sequence[pointer]) {
      pointer++;
    }
  });
  return pointer === sequence.length ? true : false;
};

console.log(validateSubsequence(sampleArray, sampleSequence));
