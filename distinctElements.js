// Iterates through the array in the range given
// Adds to new array if it doesnt already exist and returns length of array

const distinctElements = (N, L, R, Arr) => {
  let newArr = [];
  for (let i = L - 1; i < R; i++) {
    if (!newArr.includes(Arr[i])) {
      newArr.push(i);
    }
  }
  return newArr.length;
};

console.log(distinctElements(8, 2, 6, [8, 6, 3, 8, 4, 4, 4, 9]));
