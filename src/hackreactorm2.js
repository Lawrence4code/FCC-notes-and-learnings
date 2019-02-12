// -----------------------------------------------------------------------------------------------------------------------------//
// DO NOT ADJUST

var x = 7;
var y = 8;
var z = 9;

x = y + z;
z = x;
x = y;
z = x + y;
y = z - x;
z = y;
x = y * z;
z = y / z;
x = (z - x) / (y + z);

/////////////////

var answer = {
  finalValueOfX: null // CHANGE 'null' to correct answer
};

// -----------------------------------------------------------------------------------------------------------------------------//
// BEGIN ORIGINAL CODE -- DO NOT MODIFIY THIS CODE

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x;

z[2] = y[0];
z[1] = y[2];
y[1] = z[1];
x[0] = y[0];
x[2] = 1;

(4)[
  // END ORIGINAL CODE

  (4, 2, 1)
];

/*
What is the final value of x?

IMPORTANT: DO NOT just rewrite this code and run it in a terminal.

There is ZERO POINT to that, you'd just be cheating yourself.

Having the computer keep track of the variable assignments for you does not help you learn!!!
*/

var answer = {
  finalValueOfX: null, // FILL THIS IN
  finalValueOfY: null, // FILL THIS IN
  finalValueOfZ: null // FILL THIS IN
};

// -----------------------------------------------------------------------------------------------------------------------------//
/*
Write an assertEqual function from scratch.

It should compare actual and expected values with strict equality (not typecasting). Use console.log, not return statements; and pay very close attention to the desired messages provided in the examples.

Examples

SUCCESS CASE

function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, 'it doubles 2 to 4');

// console output:
// passed


FAILURE CASE

assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"

*/

// function multiplyByTwo(n) {
// return n * 2 + 1; // an incorrect implementation
// }

// var output = multiplyByTwo(2); // returns 5

// console.log(output);

/*
Write an assertEqual function from scratch.

It should compare actual and expected values with strict equality (not typecasting). Use console.log, not return statements; and pay very close attention to the desired messages provided in the examples.

Examples

SUCCESS CASE

function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, 'it doubles 2 to 4');

// console output:
// passed


FAILURE CASE

function multiplyByTwo(n) {
  return (n * 2) + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"

*/

// function assertEqual(actual, expected, testName) {
//   if (actual === expected) {
//     console.log('passed');
//   } else {
//     console.log(
//       `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
//     );
//   }
//   return true;
// }

// console.log(assertEqual(output, 4, 'should multiply the given input with 2'));

// -----------------------------------------------------------------------------------------------------------------------------//
/*
Write an "assertArraysEqual" function from scratch.

Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.

Examples

SUCCESS CASE

var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

FAILURE CASE

var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7); //just an example
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

*/

function assertArraysEqual(actual, expected, testName) {
  if (actual.length === expected.length) {
    var same;
    for (let i in actual) {
      if (actual[i] === expected[i]) {
        same = true;
      } else {
        same = false;
        `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
        return 0;
      }
    }
    console.log('passed');
  } else {
    console.log(
      `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
    );
  }
}

// -----------------------------------------------------------------------------------------------------------------------------//
/*
Write an "assertObjectsEqual" function from scratch.

Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

It is OK to use JSON.stringify().

Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

Examples

SUCCESS CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'firstName', 'Jack');

var expected = {
  firstName: 'Jack',
  lastName: 'Blow'
};

assertObjectsEqual(person, expected, 'updates person's existing first name field');
// console output:
// passed

FAILURE CASE

var person = {
  firstName: 'Joe',
  lastName: 'Blow'
};
person = updateObject(person, 'age', 35);

var expected = {
  firstName: 'Joe',
  lastName: 'Blow',
  age: 35
};
assertObjectsEqual(person, expected, 'adds person's non-existing age field');
// console output:
// FAILED [adds person's non-existing age field] Expected {"firstName":"Joe", "lastName":"Blow", age:35}, but got {"firstName":"Joe", "lastName":"Blow"}

*/
// -----------------------------------------------------------------------------------------------------------------------------//

function assertWithinRange(low, high, actual, testName) {
  if (actual > low && actual < high) {
    console.log('passed');
  } else {
    console.log(
      `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
    );
  }
}

// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------------------------------------//
