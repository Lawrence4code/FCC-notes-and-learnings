import { array, element } from 'prop-types';

console.log('Hackreactor Module 1');

/*
// https://codepen.io/Lawrence4code/pen/GzQRKa?q=isoldenoughtodrink&limit=mine

Write a function called "isOldEnoughToDrink".
Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

// function isOldEnoughToDrink(age) {
//   // your code here
//   /* START SOLUTION */
//   return age >= 21 ? true : false;
//   /* END SOLUTION */
// }

// 3 specs, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "isOldEnoughToDrive".
Given a number, in this case an age, 'isOldEnoughToDrive' returns whether a person of this given age is old enough to legally drive in the United States.
Notes:
* The legal driving age in the United States is 16.
var output = isOldEnoughToDrive(22);
console.log(output); // --> true
*/

// function isOldEnoughToDrive(age) {
//   return age >= 21 ? true : false;
// }

// 4 specs, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

// https://codepen.io/Lawrence4code/pen/zeRYoW

/*
Write a function called "isOldEnoughToVote".
Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.
Notes:
* The legal voting age in the United States is 18.
var output = isOldEnoughToVote(22);
console.log(output); // --> true
*/

// function isOldEnoughToVote(age) {
//   return age >= 18 ? true : false;
// }

// 3 specs, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

// https://codepen.io/Lawrence4code/pen/WPMNjo

/*
Write a function called "isOldEnoughToDrinkAndDrive".
Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false
*/

// function isOldEnoughToDrinkAndDrive(age) {
//   return false;
// }

// 2 specs, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

// https://codepen.io/Lawrence4code/pen/RvQwjb

/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

// const obj = { fruit: 'Apple' };

// function getProperty(obj, key) {
//   return obj[key];
// }

// 2 specs, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

// var obj = {};
// function addProperty(obj, key) {
//   obj[key] = true;
// }

// const user = { name: 'John' };

// console.log(addProperty(user, 'developer'));

// console.log(user);

// 2 specs, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/

// function removeProperty(obj, key) {
//   // your code here
// }

// 1 spec, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "checkAge". 
Given a person's name and age, "checkAge" returns one of two messages:
"Go home, {insert_name_here}!", if they are younger than 21.
"Welcome, {insert_name_here}!", if they are 21 or older.
Naturally, replace "{insert_name_here}" with the given name. :)
var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'
*/

// function checkAge(name, age) {
//   if (age >= 21) {
//     return `Welcome, ${name}!`;
//   } else {
//     return `Go home, ${name}!`;
//   }
// }

// 4 specs, 0 failures

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getFullName".
Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'
*/

// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// // 006_addProperty
// // 018_isEven

// function addFullNameProperty(obj) {
//   obj.fullName = function(obj) {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// var person = { firstName: 'Tim', lastName: 'Goldfish' };
// addFullNameProperty(person);
// // console.log(person.fullName());

// -------------------------------------------------------------------------------------------------------------------- //

// https://codepen.io/Lawrence4code/pen/Noyyam

/*
Write a function called "addObjectProperty".
Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }
*/

// function addObjectProperty(obj1, key, obj2) {
//   obj1[key] = obj2;
// }

// var person1 = {
//   name: 'Joe Blow',
//   role: 'schlub'
// };
// var person2 = {
//   name: 'Mr. Burns',
//   role: 'supervisor'
// };
// addObjectProperty(person1, 'manager', person2);
// console.log(person1.manager);

// -------------------------------------------------------------------------------------------------------------------- //
// ***
// https://codepen.io/Lawrence4code/pen/gqvvXd

/*
Write a function called "isPersonOldEnoughToDrinkAndDrive".
Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.
var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false
*/

// function isPersonOldEnoughToDrinkAndDrive(person) {
//   return false;
// }

// -------------------------------------------------------------------------------------------------------------------- //

// https://codepen.io/Lawrence4code/pen/omEEVq

/*
Write a function called "addArrayProperty".
Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]
*/

// function addArrayProperty(obj, key, arr) {
//   obj[key] = arr;
// }

// -------------------------------------------------------------------------------------------------------------------- //

// console.log(Math.sqrt(121));
// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
*/

// var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);

// function getElementsAfter(array, n) {
//   return array.slice(n + 1);
// }
// console.log(output);

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
*/

// var input = [1, 2, 3, 4];

// function getAllElementsButFirst(array) {
//   return array.splice(1);
// }

// var output = getAllElementsButFirst(input);
// // console.log(output); // --> [2, 3, 4]

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getAllElementsButLast".

Given an array, "getAllElementsButLast" returns an array with all the elements but the last.

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
*/

// function getAllElementsButLast(array) {
//   return array.splice(0, 3);
// }

// var input = [1, 2, 3, 4];
// var output = getAllElementsButLast(input);

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "removeFromFront".

Given an array, "removeFromFront" returns the given array with its first element removed.

Notes:
* You should be familiar with the method 'shift'.


*/

// var output = removeFromFront([1, 2, 3]);

// function removeFromFront(arr) {
//   arr.shift();
//   return arr;
// }

// console.log(output); // --> [2, 3]

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "removeFromBackOfNew".

Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.

Notes:
* You should be familiar with the 'slice' method.


var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
*/

// var arr = [1, 2, 3];

// function removeFromBackOfNew(arr) {
//   return arr.slice(0, arr.length - 1);
// }

// var output = removeFromBackOfNew(arr);

// console.log(output); // --> [1, 2]
// // console.log(arr); // --> [1, 2, 3]

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

// function countCharacter(str, char) {
//   charCount = 0;
//   const strArr = str.split('');
//   console.log(strArr);
//   strArr.forEach(element => {
//     if (char === element) {
//       charCount++;
//     }
//   });
//   return charCount;
// }

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

// function countCharacter(str, char) {
//   const strArr = str.split('');
//   console.log(strArr);
//   return strArr.reduce((accumulator, element) => {
//     if (element === char) {
//       accumulator++;
//     }
//     return accumulator;
//   }, 0);
// }

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in th given  string. 

Notes:
* If given an empty string, it should return an empty object.

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

// function countWords(str) {
//   return str.split(' ').reduce((accumulator, element) => {
//     console.log(accumulator);
//     if (accumulator.hasOwnProperty(element)) {
//       accumulator[element]++;
//     } else {
//       accumulator[element] = 1;
//     }
//     return accumulator;
//   }, {});
// }

// var output = countWords('ask a bunch get a bunch');

// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true
*/

// function isEitherEvenOrAreBoth7(num1, num2) {
//   return num1 % 2 === 0 || num2 % 2 === 0
//     ? true
//     : num1 === 7 && num2 === 7
//     ? true
//     : false;
// }

// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false

// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true


*/

// function isEitherEvenAndLessThan9(num1, num2) {
//   return num1 % 2 === 0 && num2 % 2 === 0 && num1 < 9 && num2 < 9
//     ? true
//     : false;
// }
// var output = isEitherEvenAndLessThan9(72, 2);
// console.log(output); // --> false

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:
* Add any keys that are not in the 1st object.
* If the 1st object already has a given key, ignore it (do not overwrite the property value).
* Do not modify the 2nd object at all.

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
*/

// var obj1 = {
//   a: 1,
//   b: 2
// };
// var obj2 = {
//   b: 4,
//   c: 3
// };

// function extend(obj1, obj2) {
//   for (let i in obj1) {
//     for (let j in obj2) {
//       if (!obj1.hasOwnProperty(j)) {
//         obj1[j] = obj2[j];
//       }
//     }
//   }
//   return obj1;
// }
// extend(obj1, obj2);

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true
*/

// function isEitherEvenOrAreBoth7(num1, num2) {
//   return num1 % 2 === 0 || num2 % 2 === 0 || (num1 === 7 && num2 == 7);
// }

// var output = isEitherEvenOrAreBoth7(3, 7);
// console.log(output); // --> false

// var output = isEitherEvenOrAreBoth7(2, 3);
// console.log(output); // --> true

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false
*/

// function isEitherEvenAndLessThan9(num1, num2) {
//   // your code here
//   return (num1 % 2 === 0 || num2 % 2 === 0) && num1 < 9 && num2 < 9;
// }

// var output = isEitherEvenAndLessThan9(2, 4);
// console.log(output); // --> true

// var output = isEitherEvenAndLessThan9(72, 2);
// console.log(output); // --> false

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:
* Add any keys that are not in the 1st object.
* If the 1st object already has a given key, ignore it (do not overwrite the property value).
* Do not modify the 2nd object at all.

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
*/

// function extend(obj1, obj2) {
//   for (let i in obj1) {
//     for (let j in obj2) {
//       if (!obj1.hasOwnProperty(j)) {
//         // if the obj1 does not have a property similar as obj2, do something
//         obj1[j] = obj2[j]; // create a new property in obj1 with obj2 property and assign its value
//       }
//     }
//   }
//   return obj1;
// }

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
*/

// var obj = {
//   a: [1, 3, 4],
//   b: 2,
//   c: ['hi', 'there']
// };

// function removeArrayValues(obj) {
//   for (let i in obj) {
//     console.log(typeof obj[i]);
//     if (Array.isArray(obj[i])) {
//       delete obj[i];
//     }
//   }
// }

// removeArrayValues(obj);
// console.log(obj); // --> { b: 2 }

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// function getAllElementsButNth(array, n) {
//   const newArr = [...array];
//   newArr.splice(n, 1);
//   return newArr;
// }

// console.log(output); // --> ['a', 'c']

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

// function getAllElementsButNth(array, n) {
//   const newArr = [...array];
//   const spliceResult = newArr.splice(n, 1);
//   console.log(spliceResult);
//   return newArr;
// }

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "getIndexOf".

Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.

Notes:
* Strings are zero indexed, meaning the first character in a string is at position 0.
* When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
* If the character does not exist in the string, it should return -1.
* Do not use the native indexOf function in your implementation.

var output = getIndexOf('a', 'I am a hacker');

*/

// var output = getIndexOf('a', 'I am a hacker');
// // var output1 = getIndexOf('z', 'I am a hacker');

// function getIndexOf(char, str) {
//   const strArr = str.split('');
//   console.log(strArr);
//   for (let i = 0; i < strArr.length; i++) {
//     if (char === strArr[i]) {
//       console.log(char, strArr[i]);
//       return i;
//     }
//   }
// }

// console.log(output); // --> 2
// console.log(output1); // --> 2

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

*/

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// function findMinLengthOfThreeWords(word1, word2, word3) {
//   console.log(arguments);
//   const arrArry = [word1, word2, word3];
//   counter = 0;
//   arrArry.forEach(element => {
//     element.length === 3 && counter++;
//   });
//   return counter;
// }

// console.log(output); // --> 1
// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// function findMinLengthOfThreeWords(word1, word2, word3) {
//   const argArr = [word1, word2, word3];
//   const argArrLen = argArr.map(element => element.length);
//   return Math.min(...argArrLen);
// }

// console.log(output); // --> 1

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

*/

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// function findMaxLengthOfThreeWords(word1, word2, word3) {
//   return Math.max(...arguments);
// }
// console.log(output); // --> 3

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements are equal to 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

*/

// var obj = {
//   key: [1000, 10, 50, 10]
// };

// var output = getElementsThatEqual10AtProperty(obj, 'key');
// function getElementsThatEqual10AtProperty(obj, key) {
//   for (let i in obj) {
//     if (!obj.hasOwnProperty(key)) {
//       return [];
//     }
//     if (!Array.isArray(obj[key])) {
//       return [];
//     }
//     const newArr = [];
//     obj[key].forEach(element => {
//       if (element !== 10) {
//         return [];
//       } else {
//         newArr.push(element);
//       }
//     });
//     return newArr;
//   }
// }

// console.log(output); // --> [10, 10]

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "select".

Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. 

Notes:
* If keys are present in the given array, but are not in the given object, it should ignore them. 
* It does not modify the passed in object.


*/

// var arr = ['a', 'c', 'e'];
// var obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// var output = select(arr, obj);
// function select(arr, obj) {
//   newObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], obj[arr[i]]);
//     if (obj.hasOwnProperty(arr[i])) {
//       console.log('conditional met');
//       newObj[arr[i]] = obj[arr[i]];
//     }
//   }
//   return newObj;
// }
// console.log(output); // --> { a: 1, c: 3 }

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getElementsLessThan100AtProperty".

Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

Notes:

* If the array contains no elements less than 100, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.


var obj = {
  key: [1000, 20, 50, 500]
};

*/

// var obj = {
//   key: [1000, 20, 50, 500]
// };

// var output = getElementsLessThan100AtProperty(obj, 'key');

// function getElementsLessThan100AtProperty(obj, key) {
//   if (!obj.hasOwnProperty(key)) {
//     console.log('condition met');
//     return [];
//   }
//   if (!Array.isArray(obj[key])) {
//     console.log('condition met');
//     return [];
//   }
//   newArr = [];
//   for (let i = 0; i < obj[key].length; i++) {
//     console.log('condition met');
//     if (obj[key].every(ele => ele > 100)) {
//       return [];
//     } else if (obj[key][i] < 100) {
//       newArr.push(obj[key][i]);
//     }
//   }
//   return newArr;
// }

// console.log(output); // --> [20, 50]

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

*/

// var output = countAllCharacters('banana');

// function countAllCharacters(str) {
//   return str.split('').reduce((accumulator, element) => {
//     if (!accumulator.hasOwnProperty(element)) {
//       accumulator[element] = 1;
//     } else {
//       accumulator[element] = accumulator[element] + 1;
//     }
//     return accumulator;
//   }, {});
// }

// console.log(output); // --> {b: 1, a: 3, n: 2}

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "removeElement".

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

Notes:
* If all the elements match, it should return an empty array.
* If an empty array is passed in, it should return an empty array.

*/

// var output = removeElement([1, 2, 3, 2, 1], 2);
// function removeElement(array, discarder) {
//   if (!array.length) {
//     return [];
//   }
//   // const newArr = array.filter(element => element !== discarder);
//   // return newArr;
//   const newArr = [];
//   for (let i of array) {
//     if (i !== discarder) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }
// console.log(output); // --> [1, 3, 1]

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "getFirstElementOfProperty".

Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.



*/
// var obj = {
//   key: [1, 2, 4]
// };
// var output = getFirstElementOfProperty(obj, 'key');
// function getFirstElementOfProperty(obj, key) {
//   if (
//     !obj.hasOwnProperty(key) ||
//     !Array.isArray(obj[key]) ||
//     obj[key].length === 0
//   ) {
//     return 'met';
//   }
//   return obj[key][0];
// }
// console.log(output); // --> 1

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "getNthElementOfProperty".

Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If n is out of range, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

*/

// var obj = {
//   key: [1, 2, 6]
// };
// var output = getNthElementOfProperty(obj, 'key', 1);
// function getNthElementOfProperty(obj, key, n) {
//   if (
//     !obj.hasOwnProperty(key) ||
//     obj[key].length === 0 ||
//     obj[key].length < n ||
//     !Array.isArray(obj[key])
//   ) {
//     return 'met';
//   }

//   return obj[key][obj[key].length - 1];
// }

// console.log(output); // --> 2

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

*/

// var obj = {
//   key: ['It', 'has', 'some', 'words']
// };
// var output = getOddLengthWordsAtProperty(obj, 'key');
// function getOddLengthWordsAtProperty(obj, key) {
//   if (
//     !obj.hasOwnProperty(key) ||
//     !Array.isArray(obj[key]) ||
//     obj[key].length === 0
//   ) {
//     return undefined;
//   }
//   if (obj[key].every(element => element.length % 2 === 0)) {
//     return 'undefined';
//   }
//   return obj[key].filter(element => element.length % 2 !== 0);
// }

// console.log(output); // --> ['has', 'words']

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
* If given an empty array, it should return 0.

*/

// var input = [1, 2, 3, 4, 5];
// var output = computeAverageOfNumbers(input);
// function computeAverageOfNumbers(nums) {
//   return (
//     nums.reduce((accumulator, element) => {
//       accumulator += element;
//       return accumulator;
//     }, 0) / 2
//   );
// }

// console.log(output); // --> 3
// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


*/

// var obj = {
//   key: [1, 2, 3]
// };
// var output = getAverageOfElementsAtProperty(obj, 'key');
// function getAverageOfElementsAtProperty(obj, key) {
//   if (
//     !obj.hasOwnProperty(key) ||
//     !Array.isArray(obj[key]) ||
//     obj[key].length === 0
//   ) {
//     return 0;
//   }
//   return (
//     obj[key].reduce((acc, ele) => {
//       acc += ele;
//       return acc;
//     }, 0) / obj[key].length
//   );
// }
// console.log(output); // --> 2
// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:
* If given array is empty, it should return 0.

*/

// var output = computeProductOfAllElements([2, 5, 6]);
// function computeProductOfAllElements(arr) {
//   return arr.reduce((acc, ele) => {
//     acc *= ele;
//     return acc;
//   }, 1);
// }

// console.log(output); // --> 60

// -------------------------------------------------------------------------------------------------------------------- //
// REDO
/* 
Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, tt should return an empty string.

*/

// var output = getLongestElement(['one', 'two', 'three']);
// function getLongestElement(arr) {
//   if (arr.length === 0) {
//     return '';
//   }
//   const ArrEleLen = arr.map(ele => {
//     return ele.length;
//   });

//   const EleMaxIndex = Math.max(...ArrEleLen);

//   return arr.filter(element => {
//     return element.length === EleMaxIndex;
//   })[0];
// }

// var output1 = getLongestElement1(['one', 'two', 'three']);
// function getLongestElement1(arr) {
//   return arr.reduce((acc, ele) => {
//     console.log(acc.length, ele);

//     if (acc.length > ele.length) {
//       acc = ele;
//     }
//     return acc;
//   }, '');
// }

// console.log(output); // --> 'three'
// console.log(output1); // --> 'three'

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

*/
// working fine but not accepted as solution
// var output = findSmallestElement([-1, -5, -3]);
// function findSmallestElement(arr) {
//   if (arr.length === 0) return 0;
//   return Math.min(...arr);
// }
// console.log(output); // --> -5

// -------------------------------------------------------------------------------------------------------------------- //
// REDO
/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

*/

// var output = findShortestElement(['a', 'two', 'three']);

// function findShortestElement(arr) {
//   let shortestElement = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (shortestElement.length > arr[i].length) {
//       shortestElement = arr[i];
//     }
//   }
//   return shortestElement;
// }

// console.log(output); // --> 'a'

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "joinArrayOfArrays".

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.


You should be familiar with the "concat" method for this problem.
*/

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);

// function joinArrayOfArrays(arr) {
//   return arr.reduce((acc, ele) => {
//     acc.push(...ele);
//     return acc;
//   }, []);
// }
// console.log(output); // --> [1, 4, true, false, 'x', 'y']

// -------------------------------------------------------------------------------------------------------------------- //
// PENDING

/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.


If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

// var output = sumDigits(1148);

// function sumDigits(num) {
//   num;
//   console.log(typeof num);
// }

// console.log(output); // --> 14

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

*/

// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);

// function findShortestWordAmongMixedElements(arr) {
//   if (arr.length === 0 || !arr.some(ele => typeof ele === 'string')) {
//     return '';
//   }
//   const strArr = arr.filter(ele => typeof ele === 'string');
//   const shorestLength = Math.min(...strArr.map(ele => ele.length));
//   for (let i in strArr) {
//     if (shorestLength === strArr[i].length) {
//       return strArr[i];
//     }
//   }
// }

// console.log(output); // --> 'two'

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

*/

// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// var output = findSmallestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

// var output = findSmallestNumberAmongMixedElements(['lincoln', 'octopus']);
// var output = findSmallestNumberAmongMixedElements(['word', 'up']);
// function findSmallestNumberAmongMixedElements(arr) {
//   if (
//     !Array.isArray(arr) ||
//     arr.length === 0 ||
//     !arr.some(ele => typeof ele === 'number')
//   ) {
//     return 0;
//   }
//   const numArr = [];
//   for (let v of arr) {
//     if (typeof v === 'number') {
//       numArr.push(v);
//     }
//   }
//   return Math.min(...numArr);
// }
// console.log(output); // --> 4

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "convertScoreToGrade".

Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

*/

// var output = convertScoreToGrade(90);

// function convertScoreToGrade(score) {
//   if (score > 100 || score < 0) {
//     console.log('condition met');
//     return 'INVALID SCORE';
//   } else if (score >= 90) {
//     return 'A';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score >= 60) {
//     return 'D';
//   } else if (score >= 0) {
//     return 'F';
//   }
// }

// console.log(output); // --> 'A'

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (60  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

*/
// var output = convertScoreToGradeWithPlusAndMinus(99);

// function convertScoreToGradeWithPlusAndMinus(score) {
//   if (score > 100 || score < 0) {
//     return 'INVALID SCORE';
//   } else if (score >= 90) {
//     if (score >= 98 && score <= 100) {
//       return 'A+';
//     } else if (score >= 90 && score <= 92) {
//       return 'A-';
//     }
//     return 'A';
//   } else if (score >= 80) {
//     if (score >= 88 && score <= 89) {
//       return 'B+';
//     } else if (score >= 80 && score <= 82) {
//       return 'B-';
//     }
//     return 'B';
//   } else if (score >= 70) {
//     if (score >= 78 && score <= 79) {
//       return 'C+';
//     } else if (score >= 70 && score <= 72) {
//       return 'C-';
//     }
//     return 'C';
//   } else if (score >= 60) {
//     if (score >= 68 && score <= 69) {
//       return 'D+';
//     } else if (score >= 60 && score <= 62) {
//       return 'D-';
//     }
//     return 'D';
//   } else {
//     return 'F';
//   }
// }
// console.log(output); // --> 'A-'

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), "computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6

*/

// var output = computeFactorialOfN(4);

// function computeFactorialOfN(n) {
//   let counter = 1;
//   for(let i = 1; i <= n; i++) {
//     counter *= i
//   }
//   return counter;
// }

// function computeFactorialOfN(n) {

//   if(n < 0) {
//     return;
//   }
//   if(n === 0) {
//     return 1;
//   }

//   return n * computeFactorialOfN(n-1);
// }

// console.log(output); // --> 24

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

*/

// var output = repeatString('code', 3);

// // function repeatString(string, num) {
// //   if (num < 0) return;
// //   if (num === 1) return string;
// //   return string + repeatString(string, num - 1);
// // }

// function repeatString(string, num) {
//   let str = '';
//   for (let i = 0; i < num; i++) {
//     str += string;
//   }
//   return str;
// }

// console.log(output); // --> 'codecodecode'

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words. 

Notes:
* If there is a tie, it should return the first word in the tie.

*/

// var output = getLongestOfThreeWords('these', 'thre', 'words');
// function getLongestOfThreeWords(word1, word2, word3) {
//   const argArr = [word1, word2, word3];
//   const argArrLen = argArr.map(ele => ele.length);
//   const argArrMaxLen = Math.max(...argArrLen);
//   return argArr.filter(ele => ele.length === argArrMaxLen)[0];
// }

// console.log(output); // --> 'these'
// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

*/

// var output = findShortestOfOfThreeWords('a', 'two', 'three');

// function findShortestOfOfThreeWords(word1, word2, word3) {
//   const argArr = [word1, word2, word3];
//   const argArrLen = argArr.map(ele => ele.length);
//   const argArrMinLen = Math.min(...argArrLen);
//   return argArr.filter(ele => ele.length === argArrMinLen)[0]

// }

// console.log(output); // --> 'a'

// -------------------------------------------------------------------------------------------------------------------- //
// PENDING
/*
Write a function called "computeCompoundInterest".

Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.


Reference:
https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest
This shows the formula used to calculate the total compound interest generated.
*/

// var output = computeCompoundInterest(1500, 0.043, 4, 6);

// function computeCompoundInterest(
//   principal,
//   interestRate,
//   compoundingFrequency,
//   timeInYears
// ) {
//   return (
//     principal *
//     Math.pow(
//       1 + interestRate / (compoundingFrequency * 100),
//       compoundingFrequency * timeInYears
//     )
//   );
// }

// console.log(output); // --> 438.8368221341061

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

*/

// var output = modulo(25, 4);

// function modulo(num1, num2) {
//   if (num1 === NaN || num1 === NaN) {
//     return NaN;
//   }
//   if (num1 === 0) {
//     return 0;
//   }

//   if (num2 > num1) {
//     return num1;
//   }

//   if (num1 === num2) return num1;

//   num1 -= num2;

//   return num1 - modulo(num1, num2);
// }

// function modulo(num1, num2) {
//   if (num1 === NaN || num1 === NaN) {
//     return NaN;
//   }
//   if (num1 === 0) {
//     return 0;
//   }
//   while (num1 > num2) {
//     num1 -= num2;
//   }
//   return num1;
// }

// console.log(output); // --> 1
// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

*/

// var output = multiply(4, 7);

// function multiply(num1, num2) {
//   while (num1 > 0) {
//     num2 += num2;
//     num1--;
//   }

//   return num1;
// }

// console.log(output); // --> 28

// -------------------------------------------------------------------------------------------------------------------- //

// 131_getLargestNumberAmongMixedElements
// 132_computeSummationToN

// const arr = [1, 4, 40, 6, 7, 1000, 1009, 1111, 1211, 9, 1,10];

// const sortedarr = arr.sort();

// console.log(sortedarr);

// -------------------------------------------------------------------------------------------------------------------- //

/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

*/

// var output = multiply(4, 7);

// function multiply(num1, num2) {
//   let product = 0;
//   while (num1 > 0) {
//     num1--;
//     product += num2;
//   }
//   return product;
// }

// console.log(output); // --> 28

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

*/

// var output = isOddWithoutModulo(-17);

// function isOddWithoutModulo(num) {
//   if (num > 0) {
//     while (num > 1) {
//       num -= 2;
//     }
//     return Boolean(num);
//   }
//   if (num < 0) {
//     while (num < 0) {
//       num += 2;
//     }
//     return Boolean(num);
//   }
// }

// console.log(output); // --> true

// -------------------------------------------------------------------------------------------------------------------- //
/*
Write a function called "multiplyBetween".

Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.

Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* If num2 is not greater than num1, it should return 0.

*/

var output = multiplyBetween(2, 5);

function multiplyBetween(num1, num2) {
  let sum = 1;
  for (let i = num1; i < num2; i++) {
    sum *= i;
  }
  return sum;
}

console.log(output); // --> 24

// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------- //
