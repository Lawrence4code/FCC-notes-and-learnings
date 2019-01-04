// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  console.log(popped, shifted); // prints: complete challenge
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

const arr = [1, 2, 3];

const pushed = arr.push(9, 9, 9);
const unshifted = arr.unshift(1, 1, 1);
console.log('pushed ' + pushed); // prints pushed 6, return value from push gives length of the array.
console.log('unshifted ' + unshifted); // prints unshifted 9
console.log(arr);
