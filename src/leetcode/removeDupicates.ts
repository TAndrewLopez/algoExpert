// ? Given a sorted array of ints, remove the duplicates
// ? Modify array in place and do not duplicate
// ? O(1) extra memory

const removeDuplicates = (numbers: number[]): number => {
  const dictionary: { [key: string]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
    if (!dictionary[numbers[i]]) {
      dictionary[numbers[i]] = 1;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (dictionary[numbers[i]]) {
      dictionary[numbers[i]]--;
    } else {
      numbers[i] = -1;
    }
  }
  console.log(numbers);
  return Object.keys(dictionary).length;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

/*

* SOLUTION CODE

function removeDuplicates(nums: number[]): number {
    if(nums.length === 1) return 1

    let p2 = 0
    let p1 = 0

    while(p2 < nums.length) {
        if(nums[p1] < nums[p2]) {
            nums[p1+1] = nums[p2]
            p1++
        }
        p2++
    }
    return p1 + 1
}; 
*/
