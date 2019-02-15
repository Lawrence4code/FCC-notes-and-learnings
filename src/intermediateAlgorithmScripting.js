console.log(
  '----------------------------------------- Intermediate Algorithm Scripting -----------------------------------------'
);

// function sumAll(arr) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   let result = 0;

//   console.log(sortedArr);

//   for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
//     result = result + i;
//   }
//   return result;
// }

// console.log(sumAll([1, 4]));
// console.log(sumAll([5, 10]));
// console.log(sumAll([4, 1]));

// -------------------------------------------------------------------------------------------------------------------- //
// function diffArray(arr1, arr2) {
//   var newArr = [];

//   for (let i in arr1) {
//     if (!arr2.includes(arr1[i])) {
//       newArr.push(arr1[i] || arr2[i]);
//     }
//   }
//   for (let i in arr2) {
//     if (!arr1.includes(arr2[i])) {
//       newArr.push(arr2[i] || arr2[i]);
//     }
//   }
//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// console.log(
//   diffArray(
//     ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//     ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
//   )
// );

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

// -------------------------------------------------------------------------------------------------------------------- //
// function destroyer(arr, ...rest) {
//   const newArr = [];
//   for (let i in arr) {
//     if (!rest.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);

//   for (let i of args) {
//     console.log(i);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i];
//       }
//     }
//   }

//   return arr.filter(Boolean);
// }

// console.log(destroyer(arr, 2, 3));
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));

// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

// const arr = [1, 2, 3, 1, 2, 3];

// function destroyer1(arr) {
//   const args = Array.from(arguments).slice(1);
//   return arr.filter(element => !args.includes(element));
// }

// console.log(destroyer1(arr, 2, 3)) ;

// -------------------------------------------------------------------------------------------------------------------- //
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   console.log(source);
//   // first access through all the property and values on the given object with for in loop
//   for (let i in collection) {
//     // console.log(Object.keys(collection[i]));
//     // console.log(Object.keys(source));
//     if (Object.keys(collection[i]).includes(Object.keys(source))) {
//       arr.push(collection[i]);
//       console.log('met');
//     }
//   }

//   // Only change code above this line
//   return arr;
// }

// console.log(
//   whatIsInAName(
//     [
//       { first: 'Romeo', last: 'Montague' },
//       { first: 'Mercutio', last: null },
//       { first: 'Tybalt', last: 'Capulet' }
//     ],
//     { last: 'Capulet' }
//   )
// );

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// );
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]

// -------------------------------------------------------------------------------------------------------------------- //
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   const newStr = str
//     .split(/\s|_|(?=[A-Z])/g)
//     .join('-')
//     .toLowerCase();

//   return newStr;
// }
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   const newStr = str
//     .split(/\s|_|(?<=[a-z])[A-Z]/)

//     .join('-')
//     .toLowerCase();

//   return newStr;
// }
// console.log(spinalCase('The_Andy_Griffith_Show'));
// console.log(spinalCase('This Is Spinal Tap'));

// -------------------------------------------------------------------------------------------------------------------- //
// bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ
// aeiouAEIOU

// function for checking wheather the passed array is consonant or not

// function translatePigLatin(str) {
//   let tempchar = '';
//   let strArr = [];

//   function isConsonant(letter) {
//     if (!letter) return false;
//     return !/[aieou]/.test(letter);
//   }

//   if (!isConsonant(str.charAt(0))) {
//     console.log('met');
//     return str + 'way';
//   } else {
//     strArr = str.split('');
//     console.log('met');
//     while (isConsonant(strArr[0])) {
//       tempchar = strArr.shift();
//       strArr.push(tempchar);
//     }
//   }
//   return strArr.join('') + 'ay';
// }
// console.log(translatePigLatin('glove')); //oveglay
// console.log(translatePigLatin('eight'));

// -------------------------------------------------------------------------------------------------------------------- //
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

// function pairElement(str) {
//   let DNAstr = [];
//   const strArr = str.split('');
//   for (let i in strArr) {
//     if (strArr[i] === 'G') {
//       DNAstr.push([strArr[i], 'C']);
//     } else if (strArr[i] === 'C') {
//       DNAstr.push([strArr[i], 'G']);
//     } else if (strArr[i] === 'A') {
//       DNAstr.push([strArr[i], 'T']);
//     } else if (strArr[i] === 'T') {
//       DNAstr.push([strArr[i], 'A']);
//     }
//   }
//   return DNAstr;
// }

// console.log(pairElement('ATCGA'));

// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// -------------------------------------------------------------------------------------------------------------------- //
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

// function uniteUnique(arr, ...arr1) {
//   const args = Array.from(arguments).slice();
//   // const args = [...Array.from(arguments)];
//   return args.reduce((acc, cur) => {
//     // console.log(acc);
//     for (let i in cur) {
//       if (!acc.includes(cur[i])) {
//         acc.push(cur[i]);
//       }
//     }
//     return acc;
//   }, []);
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// -------------------------------------------------------------------------------------------------------------------- //

// function convertHTML(str) {
//   // &colon;&rpar;
//   const strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === '&') {
//       strArr.splice(strArr.indexOf(strArr[i]), 1, '&amp;');
//     }
//     if (strArr[i] === '<') {
//       strArr.splice(strArr.indexOf(strArr[i]), 1, '&lt;');
//     }
//     if (strArr[i] === '>') {
//       strArr.splice(strArr.indexOf(strArr[i]), 1, '&gt;');
//     }
//     if (strArr[i] === '"') {
//       strArr.splice(strArr.indexOf(strArr[i]), 1, '&quot;');
//     }
//     if (strArr[i] === "'") {
//       strArr.splice(strArr.indexOf(strArr[i]), 1, '&apos;');
//     }
//   }
//   return strArr.join('');
// }

// // console.log(convertHTML('Dolce & Gabbana'));
// console.log(convertHTML('Hamburgers < Pizza < Tacos')); // Hamburgers &lt; Pizza &lt; Tacos
// console.log(convertHTML('Sixty > twelve'));
// -------------------------------------------------------------------------------------------------------------------- //
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

// Pending

// function sumFibs(num) {
//   let arr = [0, 1];
//   for (i = 2; i <= num; i++) {
//     arr[i] = arr[i - 2] + arr[i - 1];
//     console.log(arr[i]);
//   }

//   const fibOddArr = arr.filter(ele => ele % 2 !== 0);
//   console.log(fibOddArr);

//   return fibOddArr.reduce((acc, cur) => {
//     acc += cur;
//     return acc;
//   }, 0);
// }

// console.log(sumFibs());

// -------------------------------------------------------------------------------------------------------------------- //

// Pending

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

// function sumPrimes(num) {
//   const primeArr = [];
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) if (n % i === 0) return false;
//     return n !== 1 && n !== 0;
//   }
//   for (let i = 0; i <= num; i++) {
//     if (isPrime(i)) {
//       primeArr.push(i);
//     }
//   }
//   return primeArr.reduce((acc, cur) => {
//     return (acc += cur);
//   });
// }

// console.log(sumPrimes(977));
// console.log(sumPrimes(10));

// -------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

// function steamrollArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr = newArr.concat(steamrollArray(arr[i]));
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

// -------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

// const bi = '01000001';

// const ascii = parseInt(bi, 2).toString();

// console.log(parseInt(bi, 2).toString());

// function binaryAgent(str) {
//   const strArr = str.split(' ');
//   let string = '';
//   for (let i = 0; i < strArr.length; i++) {
//     let ascii = parseInt(strArr[i], 2).toString();
//     let letter = String.fromCharCode(ascii);
//     string += letter;
//   }
//   return string;
// }

// console.log(
//   binaryAgent(
//     '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
//   )
// );

// -------------------------------------------------------------------------------------------------------------------- //

// function truthCheck(collection, pre) {
//   for (let i = 0; i < collection.length; i++) {
//     const propertiesList = [];

//     propertiesList.push(Object.keys(collection[i])[1]);
//     console.log(propertiesList);
//   }
//   return pre;
// }
// function truthCheck(collection, pre) {
//   return collection.every(ele => ele.hasOwnProperty(pre) && ele[pre]);
// }

// console.log(
//   truthCheck(
//     [
//       { user: 'Tinky-Winky', sex: 'male' },
//       { user: 'Dipsy', sex: 'male' },
//       { user: 'Laa-Laa', sex: 'female' },
//       { user: 'Po', sex: 'female' }
//     ],
//     'sex'
//   )
// );

// console.log(
//   truthCheck(
//     [
//       { user: 'Tinky-Winky', sex: 'male' },
//       { user: 'Dipsy' },
//       { user: 'Laa-Laa', sex: 'female' },
//       { user: 'Po', sex: 'female' }
//     ],
//     'sex'
//   )
// );

// console.log(
//   truthCheck(
//     [
//       { name: 'Pete', onBoat: true },
//       { name: 'Repeat', onBoat: true },
//       { name: 'FastFoward', onBoat: null }
//     ],
//     'onBoat'
//   )
// );

// -------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

// function addTogether() {
//   const argArr = Array.from(arguments).slice();
//   for (let value of argArr) {
//     if (typeof value === 'number') {
//       console.log(value);

//       if (argArr.length > 1 && typeof argArr[1] === 'number') {
//         return argArr[0] + argArr[1];
//       } else if (argArr.length === 1) {
//         return function(num) {
//           console.log(typeof num === 'number');
//           if (typeof num === 'number') {
//             return argArr[0] + num;
//           }
//           return undefined;
//         };
//       }
//     }
//     return undefined;
//   }
//   return false;
// }

// console.log(addTogether(2, 3));
// console.log(addTogether(2)(3));
// console.log(addTogether('http://bit.ly/IqT6zt'));
// console.log(addTogether(2, '3'));
// console.log(addTogether(2)([3]));

// -------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person

// var Person = function(firstAndLast) {
//   // Complete the method below and implement the others similarly
//   var firstName = firstAndLast.split(' ')[0];
//   var lastName = firstAndLast.split(' ')[1];

//   this.getFullName = function() {
//     return `${firstName} ${lastName}`;
//   };
//   this.getFirstName = function() {
//     return `${firstName}`;
//   };
//   this.getLastName = function() {
//     return `${lastName}`;
//   };

//   this.setFirstName = function(fName) {
//     return (firstName = fName);
//   };

//   this.setLastName = function(lName) {
//     return (lastName = lName);
//   };

//   this.setFullName = function(name) {
//     return (firstName = name.split(' ')[0]), (lastName = name.split(' ')[1]);
//   };

//   return firstAndLast;
// };

// var bob = new Person('Bob Ross');
// console.log(bob.getFullName());
// console.log(Object.keys(bob));

// bob.setFirstName('Haskel');

// console.log(bob.getFullName());

// -------------------------------------------------------------------------------------------------------------------- //
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;

//   // const oP = Math.round(2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM));

//   return arr.map(({ name, avgAlt }) => {
//     const oP = Math.round(
//       2 * Math.PI * Math.sqrt((earthRadius + avgAlt) ** 3 / GM)
//     );
//     return { name, orbitalPeriod: oP };
//   });
// }

// console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));

// should return [{ name: "sputnik", orbitalPeriod: 86400 }].

// -------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

// function dropElements(arr, func) {
//   for (let i in arr) {
//     if (func(arr[i])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }

// console.log(
//   dropElements([1, 2, 3, 4], function(n) {
//     return n > 5;
//   })
// );

// console.log(
//   dropElements([0, 1, 0, 1], function(n) {
//     return n === 1;
//   })
// );
// console.log(
//   dropElements([1, 2, 3, 9, 2], function(n) {
//     return n > 2;
//   })
// );

// dropElements([0, 1, 0, 1], function (n) { return n === 1; }) should return [1, 0, 1].
// dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }) should return [3, 9, 2].

// -------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/
// function smallestCommons(arr) {
//   const numRange = [];
//   for (let i = arr[0]; i <= arr[1]; i++) {
//     numRange.push(i);
//   }

//   return numRange.reduce((acc, cur) => {
//     console.log(acc, cur);
//     acc *= cur;
//     return acc;
//   }, arr[0]);
// }

// console.log(smallestCommons([1, 5]));
// -------------------------------------------------------------------------------------------------------------------- //

// function leastCommonMultiple(min, max) {
//   function range(min, max) {
//     var arr = [];
//     for (var i = min; i <= max; i++) {
//       arr.push(i);
//     }

//     return arr;
//   }

//   function gcd(a, b) {
//     return !b ? a : gcd(b, a % b);
//   }

//   function lcm(a, b) {
//     return (a * b) / gcd(a, b);
//   }

//   var multiple = min;
//   range(min, max).forEach(function(n) {
//     multiple = lcm(multiple, n);
//   });

//   return multiple;
// }

// console.log(leastCommonMultiple(5, 1));
// -------------------------------------------------------------------------------------------------------------------- //
// function whatIsInAName(collection, source) {
//   var srcKeys = Object.keys(source);
//   return collection.filter(function(obj) {
//     return srcKeys
//       .map(function(key) {
//         return obj.hasOwnProperty(key) && obj[key] === source[key];
//       })
//       .reduce(function(a, b) {
//         return a && b;
//       });
//   });
// }

// --------------------------------------------------------P------------------------------------------------------------ //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

// function sumFibs(num) {
//   let arr = [0, 1];
//   for (i = 2; i <= num; i++) {
//     arr[i] = arr[i - 2] + arr[i - 1];
//     console.log(arr[i]);
//   }

//   const fibOddArr = arr.filter(ele => ele % 2 !== 0 && ele <= num);
//   console.log(fibOddArr);

//   return fibOddArr.reduce((acc, cur) => {
//     acc += cur;
//     return acc;
//   }, 0);
// }

// console.log(sumFibs(11));

// -------------------------------------------------------------------------------------------------------------------- //

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

// function myReplace(str, before, after) {
//   const strArr = str.split(' ');

//   String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//   };

//   if (before.charAt(0) === before.charAt(0).toUpperCase()) {
//     console.log('met');
//     const After = after.capitalize();
//     strArr.splice(strArr.indexOf(before), 1, After);
//   } else {
//     strArr.splice(strArr.indexOf(before), 1, after);
//   }

//   return strArr.join(' ');
// }

// console.log(
//   myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
// );
// console.log(myReplace('His name is Tom', 'Tom', 'john'));

// -------------------------------------------------------------------------------------------------------------------- //

// function fearNotLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     const charCodePlus = str.charCodeAt(i+1) ;
//     console.log(charCodePlus)
//     console.log(charCode);
//     if (charCodePlus - charCode === 1) {
//       console.log(charCodePlus - charCode);
//       return String.fromCharCode(charCode + 1);
//     } else {
//       return undefined;
//     }
//   }
//   return str;
// }

// console.log(fearNotLetter('abce'));
// console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));

// -------------------------------------------------------------------------------------------------------------------- //

// function fearNotLetter(str) {
//   for (var i = 0; i < str.length; i++) {
//     var code = str.charCodeAt(i);
//     if (code !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(code - 1);
//     }
//   }
//   return undefined;
// }

// console.log(fearNotLetter('abce'));
// console.log(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
