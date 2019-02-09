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

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

function extend(obj1, obj2) {
  for (let i in obj1) {
    for (let j in obj2) {
      if (!obj1.hasOwnProperty(j)) {
        obj1[j] = obj2[j];
      }
    }
  }
  return obj1;
}
extend(obj1, obj2);

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

// -------------------------------------------------------------------------------------------------------------------- //

var obj = {
  name: 'Sam',
  age: 20
};

console.log(Object.entries(obj));
