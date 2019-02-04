// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/add-items-using-splice
// function htmlColorNames(arr) {
//   // change code below this line
//   arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
//   // change code above this line
//   return arr;
// }

// do not change code below this line
// console.log(
//   htmlColorNames([
//     'DarkGoldenRod',
//     'WhiteSmoke',
//     'LavenderBlush',
//     'PaleTurqoise',
//     'FireBrick'
//   ])
// );

// splice - The third arguments+ are the element to be added to the array.

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice

// function forecast(arr) {
//   // change code below this line
//   return arr.slice(2, 4);
// }

// // do not change code below this line
// console.log(
//   forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
// );

// slice - 2 arguments, starting point of extraction, ending point of extraction, not number of elements*

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift

// function popShift(arr) {
//   let popped = arr.pop();
//   let shifted = arr.shift();
//   console.log(popped, shifted); // prints: complete challenge
//   return [shifted, popped];
// }

// // do not change code below this line
// console.log(popShift(['challenge', 'is', 'not', 'complete']));

// const arr = [1, 2, 3];

// const pushed = arr.push(9, 9, 9);
// const unshifted = arr.unshift(1, 1, 1);
// console.log('pushed ' + pushed); // prints pushed 6, return value from push gives length of the array.
// console.log('unshifted ' + unshifted); // prints unshifted 9
// console.log(arr);

//learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator

// https: function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line
//     newArr.push([...arr]);
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }

// // change code here to test different cases:
// console.log(copyMachine([true, false, true], 2));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof

// function quickCheck(arr, elem) {
//   // change code below this line
//   // return arr.indexOf(elem) === -1 ? false : true; // My solution, worked fine
//   return arr.indexOf(elem) >= 0 ? true : false;
//   // change code above this line
// }

// // change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// // Boolean( Any statement ) will return true or false

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures/-iterate-through-the-keys-of-an-object-with-a-for---in-statement

// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function countOnline(obj) {
//   let count = 0;

//   for (let user in obj) {
//     if (obj[user].online === true) {
//       count = count + 1;
//     }
//   }
//   return count;

//   // change code above this line
// }

// console.log(countOnline(users));
