//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      // only if this case is satisfied do something, else skip to return statement
      newArr.push(arr[i]);
    }
  }

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(
  filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9], [2, 2, 2]], 3)
);
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(
  filteredArray([['trumpets', 2], ['flutes', 4], ['saxophones', 2]], 2)
);
console.log(
  filteredArray([['amy', 'beth', 'sam'], ['dave', 'sean', 'peter']], 'peter')
);
