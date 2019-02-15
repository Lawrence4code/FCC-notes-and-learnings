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
//     console.log('met');
//     return str.slice(0, num) + '...';
//   } else if (str.length > num && num <= 3) {
//     console.log('met');
//     return str.slice(0, num) + '...';
//   } else if (str.length > num) {
//     console.log('met');
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }
// }

// console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
// console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));
// console.log(
//   truncateString(
//     'A-tisket a-tasket A green and yellow basket',
//     'A-tisket a-tasket A green and yellow basket'.length
//   )
// );
// console.log(
//   truncateString(
//     'A-tisket a-tasket A green and yellow basket',
//     'A-tisket a-tasket A green and yellow basket'.length + 2
//   )
// );
// console.log(truncateString('A-', 1));
// console.log(truncateString('Absolutely Longer', 2));

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

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

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

// function getIndexToIns(arr, num) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   console.log(sortedArr);
//   if (sortedArr.length === 0) {
//     return 0;
//   }
//   for (let i = 0; i <= sortedArr.length; i++) {
//     console.log('met');
//     if (sortedArr[i] > num) {
//       console.log(sortedArr[i]);
//       sortedArr.splice(sortedArr.indexOf(sortedArr[i]), 0, num);
//       break;
//     }
//     if (sortedArr[i] < num) {
//       sortedArr.push(num);
//     }
//   }
//   return sortedArr.indexOf(num);
// }
// console.log(getIndexToIns([5, 3, 20, 3], 5));
// console.log(getIndexToIns([2, 20, 10], 19));

// function getIndexToIns(arr, num) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   console.log(sortedArr);

//   return num;
// }

// getIndexToIns([40, 60], 50);

// getIndexToIns([2, 20, 10], 19) should return 2
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

// Imp

// function mutation(arr) {
//   const array1 = arr[0].toLowerCase();
//   const array2 = arr[1].toLowerCase().split('');
//   for (let i = 0; i < array2.length; i++) {
//     const checkIndex = array1.indexOf(array2[i]);
//     if (checkIndex < 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(mutation(['Mary', 'Army']));

// function mutation1(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split('')
//     .every(letter => {
//       return arr[0].toLowerCase().indexOf(letter) !== -1;
//     });
// }

// console.log(mutation1(['Mary', 'Army']));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }

// console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

// function testingIII(arr) {
//   for (let i = 0; i <= arr.length; i += 2) {
//     console.log(i);
//   }
// }

// testingIII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/counting-cards

// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case 10:
//     case 10:
//     case 10:
//     case 10:
//       count--;
//       break;
//   }

//   return 'Change Me';
//   // Only change code above this line
// }

// // Add/remove calls to test your function.
// // Note: Only the last will display
// cc(2);
// cc(3);
// cc(7);
// cc('K');
// cc('A');

// const name = 'string';

// console.log(name[0]);

// ------------------------------------------------------------------------------------------------------ //

// Setup
// var collection = {
//   '2548': {
//     album: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   '2468': {
//     album: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   '1245': {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   '5439': {
//     album: 'ABBA Gold'
//   }
// };
// Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value) {
//   //   If prop isn't "tracks" and value isn't empty(""), update or set the value for that record album's property.
//   if (prop !== 'tracks' && value !== '') {
//     console.log('met');
//     collection[id][prop] = value;
//   } else if (prop === 'tracks' && value !== '') {
//     console.log('met');
//     if (collection[id].hasOwnProperty(prop)) {
//       console.log('met');
//       collection[id][prop].push(value);
//     } else {
//       console.log('met');
//       collection[id][prop] = [value];
//     }
//   } else if (prop === 'artists' && value !== '') {
//     console.log('met');
//     collection[id][prop].push(value);
//   }
//   return collection;
// }

// // console.log(updateRecords(5439, 'tracks', 'Take a Chance on Me'));
// console.log(updateRecords(2548, 'tracks', ''));
// console.log(updateRecords(2548, 'tracks', ''));

// ------------------------------------------------------------------------------------------------------ //

//Setup
var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin']
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes']
  }
];

function lookUpProfile(name, prop) {
  for (let i in contacts) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}

// Change these values to test your function
console.log(lookUpProfile('Akira', 'likes'));
console.log(lookUpProfile('Kristian', 'lastName'));
