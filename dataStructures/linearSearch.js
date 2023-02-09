const linearSearch = (list, target) => {
  // IF THE TARGET IS LOCATED IN THE LIST, => INDEX ELSE => NULL
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return null;
};

const testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const validTarget = 6;
const invalidTarget = 12;

console.log("linear search", linearSearch(testList, validTarget));
console.log("linear search", linearSearch(testList, invalidTarget));

// LINEAR SEARCH - O(n)
