import { object } from 'prop-types';

console.log('Hack Reactor');

// https://prep.hackreactor.com/courses/118569/lectures/3427339

// https:// codepen.io/Lawrence4code/pen/aXWxaj

// function transformFirstAndLast(arr) {
//   const objArray = {};
//   objArray[arr[0]] = arr[arr.length - 1];
//   return objArray;
// }

// console.log(
//   transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
// );

// 2 specs, 0 failures

// --------------------------------------------------------------------------------------------------------------------------------

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// const object1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// const object2 = Object.assign({ c: 4, d: 99 }, object1);
// existing values wont change but new properties added will get added to the object along with all the key value property of the assigned object
// Properties in the target object will be overwritten by properties in the sources if they have the same key.  Later sources' properties will similarly overwrite earlier ones.

// console.log(object1);
// console.log(object2);

//

// --------------------------------------------------------------------------------------------------------------------------------
//codepen.io/Lawrence4code/pen/wNdbZm?editors=1010

// function getAllKeys(obj) {
//   const arr = [];
//   for (let element in obj) {
//     arr.push(element);
//   }
//   return arr;
// }

// console.log(getAllKeys({ a: 1, b: 2, c: 3 }));
// 2 specs, 0 failures

// --------------------------------------------------------------------------------------------------------------------------------

// https://codepen.io/hrprep/pen/YVZeVJ
/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample. 
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Starter Code:
*/

// function fromListToObject(array) {
//   const objectArray = {};
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       objectArray[array[i][0]] = array[i][1];
//     }
//   }
//   return objectArray;
// }

// console.log(
//   fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
// );

// 2 specs, 0 failures

// --------------------------------------------------------------------------------------------------------------------------------

/*
Write a function called "listAllValues" which returns an array of all the input object's values.

Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]

Note that the input may have a different number of keys and values than the given sample. 

E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 11, true, 1]

Starter Code
*/

// function listAllValues(obj) {
//   const objArray = [];

//   for (let i in obj) {
//     objArray.push(obj[i]);
//   }
//   return objArray;
// }

// console.log(
//   listAllValues({
//     a: 'a',
//     number: 11,
//     hungry: true,
//     grammyWins: 1
//   })
// );

// 2 specs, 0 failures

// --------------------------------------------------------------------------------------------------------------------------------

/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]

Given that input, the return value should look like this:
[
  {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
  {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

// **** important

// function transformEmployeeData(array) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const objectArray = {};
//     for (let j = 0; j < array[i].length; j++) {
//       objectArray[array[i][j][0]] = array[i][j][1];
//     }
//     newArray.push(objectArray);
//   }

//   return newArray;
// }

// console.log(
//   transformEmployeeData([
//     [
//       ['firstName', 'Joe'],
//       ['lastName', 'Blow'],
//       ['age', 42],
//       ['role', 'clerk']
//     ],
//     [
//       ['firstName', 'Mary'],
//       ['lastName', 'Jenkins'],
//       ['age', 36],
//       ['role', 'manager']
//     ]
//   ])
// );

// function transformEmployeeData1(array) {
//   const newArray = [];

//   return array.map(a => {
//     const newObj = {};
//     a.map(b => {
//       newObj[b[0]] = b[1];
//     });
//     return newObj;
//   });

//   return newArray;
// }

// console.log(
//   transformEmployeeData1([
//     [
//       ['firstName', 'Joe'],
//       ['lastName', 'Blow'],
//       ['age', 42],
//       ['role', 'clerk']
//     ],
//     [
//       ['firstName', 'Mary'],
//       ['lastName', 'Jenkins'],
//       ['age', 36],
//       ['role', 'manager']
//     ]
//   ])
// );

// --------------------------------------------------------------------------------------------------------------------------------

/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

// function convertObjectToList(obj) {
//   const arr = [];

//   for (let i = 0; i <= 1; i++) {
//     arr.push(obj[i]);
//   }

//   return arr;
// }

// console.log(
//   convertObjectToList({
//     name: 'Holly',
//     age: 35,
//     role: 'producer'
//   })
// );
