console.log(
  '----------------------------------------- Intermediate Algorithm Scripting -----------------------------------------'
);

function sumAll(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }

  for (let j = sortedArr[0] + 1; j < sortedArr[1]; j++) {
    result = result + j;
  }
  return result;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([4, 1]));
