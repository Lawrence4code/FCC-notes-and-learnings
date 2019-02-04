import { string } from 'postcss-selector-parser';

console.log('Basic Algorithm Scripting');

// function reverseString(str) {
//   return str.split('').reverse();
// }

// console.log(reverseString('hello').join(''));

// // my solution, works fine
// function factorialize(num) {
//   let factorial = 1;
//   for (var i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// console.log(factorialize(5));
// console.log(factorialize(10));

// function factorialize(num) {
//   return num;
// }

// console.log(factorialize(5));

// const countDownToOne = num => {
//   if (num <= 0) {
//     return;
//   }
//   console.log(num);
//   return countDownToOne(num - 1);
// };

// console.log(countDownToOne(9));

// function factorialize(num) {
//   if (num === 0) return 1;
//   return num * factorialize(num - 1);
// }

// console.log(factorialize(5));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

// My solution, works fine
// function findLongestWordLength(str) {
//   const strArrayWithLength = str.split(' ').map(word => word.length);
//   const maxLength = Math.max(...strArrayWithLength);
//   return maxLength;
// }

// console.log(
//   findLongestWordLength('The quick brown fox jumped over the lazy dog')
// );

// Refactored, works fine

// function findLongestWordLength(str) {
//   const maxLength = Math.max(...str.split(' ').map(word => word.length));
//   return maxLength;
// }

// findLongestWordLength('The quick brown fox jumped over the lazy dog');

// FCC solution try with for loop

// function findLongestWordLength(str) {
//   const strArray = str.split(' ');
//   let maxLength = 0;
//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i].length > maxLength) {
//       maxLength = strArray[i].length;
//     }
//   }
//   return maxLength;
// }

// console.log(
//   findLongestWordLength('The quick brown fox jumped over the lazy dog')
// );

// FCC solution with reduce

// function findLongestWordLength(str) {
//   const strArray = str.split(' ');
//   let maxLength = strArray.reduce((accumulation, element) => {
//     return Math.max(accumulation, element.length);
//   }, 0);
//   return maxLength;
// }

// console.log(
//   findLongestWordLength('The quick brown fox jumped over the lazy dog')
// );

// Checkout the recurrsion soluton later

//learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
// My soluton, works fine

// function largestOfFour(arr) {
//   const maxArray = arr.map(arr => {
//     return Math.max(...arr);
//   });
//   console.log(maxArray);
//   return maxArray;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);

// solution:  [5, 27, 39, 1001]

// FCC solution with loop
// function largestOfFour(arr) {
//   let result = [];
//   for (let n = 0; n < arr.length; n++) {
//     let largestNumber = arr[n][0];
//     for (let sa = 0; sa < arr[n].length; sa++) {
//       if (arr[n][sa] > largestNumber) {
//         largestNumber = arr[n][sa];
//       }
//     }
//     result[n] = largestNumber;
//   }
//   return result;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
//   ])
// );

// FCC solution with map and reduce

// function largestOfFour(arr) {
//   const maxNumArray = arr.map(sa => {
//     return sa.reduce((prev, current) => {
//       return prev > current ? prev : current;
//     });
//   });
//   return maxNumArray;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
//   ])
// );

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

// function confirmEnding(str, target) {
// "Never give up and good luck will find you."
//   const stringArray = str
//     .toLowerCase()
//     .split('')
//     .reverse();

//   const targetArray = target
//     .toLowerCase()
//     .split('')
//     .reverse();

//   console.log(stringArray);
//   console.log(targetArray);

//   for (let i = 0; i < stringArray.length; i++) {
//     for (let j = 0; j < targetArray.length; j++) {
//       console.log(targetArray[j], stringArray[i]);
//       return targetArray[j] === stringArray[i] ? true : false;
//     }
//   }
//   // -- Falcor
//   return false;
// }

// // console.log(confirmEnding('Bastian', 'an'));
// console.log(
//   confirmEnding(
//     'Walking on water and developing software from a specification are easy if both are frozen',
//     'specification'
//   )
// );
// console.log(confirmEnding('Open sesame', 'game'));'

// function confirmEnding(str, target) {
//   if (str.slice(str.length - target.length) === target) {
//     console.log(str.slice(str.length - target.length));
//     return true;
//   }
//   return false;
// }

// console.log(confirmEnding('Bastian', 'n'));

// function repeatStringNumTimes(str, num) {
//   let multipliedString = [];
//   for (let i = 0; i < num; i++) {
//     multipliedString.push(...str);
//   }
//   return multipliedString.join('');
// }

// console.log(repeatStringNumTimes('abc', 3));

// console.log('Hello'.repeat(2));

// FCC solution

// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   if (num < 0) {
//     return '';
//   } else if (num === 1) {
//     return str;
//   } else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }

// console.log(repeatStringNumTimes('abc', 3));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   const newString = str
//     .split('')
//     .splice(0, num)
//     .join('');

//   return newString + '...';
// }

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num && num > 3) {
//     return str.slice(0, num - 3) + '...';
//   } else if (str.length > num && num <= 3) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
// }

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers

// my solution, gives the result but it wrong
// function findElement(arr, func) {
//   let num = arr.find(element => {
//     return element % 2 === 0;
//   });
//   return num;
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

// function booWho(bool) {
//   // What is the new fad diet for ghost developers? The Boolean.
//   if (typeof bool === 'Boolean') {
//     return true;
//   }
//   return false;
// }

// console.log(booWho(null));

// function booWho1(bool) {
//   return typeof bool === 'boolean';
// }

// console.log(booWho1(true));

// console.log(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore nostrum
// dicta.`);

// console.log(1 === 1 && 0);

// console.error('something awesome here');

// console.log(typeof Boolean(12345));

// console.log(isNaN(121 * 'string'));
// console.log(isNaN(121));

// functional example from eloquant js

function wrapValue(n) {
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

// console.log(wrap1());

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, '1');
// }

// console.log(findSolution(24));
// // → (((1 * 3) + 5) * 3)

// function printFarmInventory(cows, chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = '0' + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = '0' + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);

// function titleCase(str) {
//   const stringArray = str.toLowerCase().split(' ');
//   console.log(stringArray);
//   const result = stringArray.map(element => {
//     return element.replace(element.charAt(0), element.charAt(0).toUpperCase());
//   });
//   return result.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));

// function titleCase1(str) {
//   const stringArray = str.toLowerCase().split(' ');
//   for (let i = 0; i < stringArray.length; i++) {
//     stringArray[i] = stringArray[i].replace(
//       stringArray[i].charAt(0),
//       stringArray[i].charAt(0).toUpperCase()
//     );
//   }
//   return stringArray.join(' ');
// }

// console.log(titleCase1('yello little tea pot'));

// const arri = ['yellow', 'this', 'umbrella', 'jack', 'thinking'];
// const newArray = [...arri];
// for (let i = 0; i < arri.length; i++) {
//   newArray.push(
//     arri[i].replace(arri[i].charAt(0), arri[i].charAt(0).toUpperCase())
//   );
// }

// console.log(arri);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

// my solution // works fine
// function frankenSplice(arr1, arr2, n) {
//   const newArray = [...arr2];
//   newArray.splice(n, 0, ...arr1);

//   return newArray;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5], 1));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

// my solution, works fine;
// function bouncer(arr) {
//   const newArr = [];
//   arr.forEach(element => {
//     // console.log(Boolean(element));
//     // console.log(typeof Boolean(element));
//     if (Boolean(element)) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// }

// console.log(bouncer([7, 'ate', '', false, 9]));

//learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong/

function getIndexToIns(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.sort[i]) {
    }
  }
  return num;
}

getIndexToIns([40, 60], 50);
