import { object } from 'prop-types';

import './hackreactorm1';

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

//   for (let i in obj) {
//     arr.push([i, obj[i]]);
//     arr;
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

// https://codepen.io/Lawrence4code/pen/Erorwm
// 2 specs, 0 failures

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://codepen.io/hrprep/pen/ybMpXd

/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object. 

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ): 

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD IDEA:


if (firstName === 'Joe') {
  // do something
}

Starter Code :
*/

var customerData = {
  Joe: {
    visits: 1
  },
  Carol: {
    visits: 2
  },
  Howard: {
    visits: 3
  },
  Carrie: {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  if (customerData[firstName]) {
    if (customerData[firstName].visits > 1) {
      return `Welcome back, ${firstName}! So glad to see you again!`;
    } else {
      return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    }
  } else {
    return 'Welcome! Is this your first time?';
  }

  return greeting;
}

// console.log(greetCustomer('Carrie'));
// console.log(greetCustomer('Joe'));
// console.log(greetCustomer('Mark'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var fruitCount = { Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 }

// result = [{ nameOfFruit: "Apple", howMany: 1 }, {}, {}, {}]

const fruitCount = { Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 };

function changeFruitCountFormat(obj) {
  const fruitCountArray = [];
  for (let i in obj) {
    fruitCountArray.push({ nameOfFruit: i, howMany: obj[i] });
  }
  return fruitCountArray;
}

// console.log(
//   changeFruitCountFormat({ Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 })
// );
