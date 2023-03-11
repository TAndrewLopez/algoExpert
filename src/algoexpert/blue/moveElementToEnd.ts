const moveElementToEnd = (array: number[], toMove: number): number[] => {
  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 <= p2) {
    // CHECK IF INDEX AT POINTER TWO IS THE SAME AS THE ELEMENT TO MOVE, IF IT IS WE CAN SKIP IT
    if (array[p2] === toMove) {
      p2--;
      continue;
    }

    // SWAP ELEMENTS THAT MATCH TO MOVE ELEMENT
    if (array[p1] === toMove) {
      array[p1] = array[p2];
      array[p2] = toMove;
      p2--;
    }
    p1++;
  }
  return array;
};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
