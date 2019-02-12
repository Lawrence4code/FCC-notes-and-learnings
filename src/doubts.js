// Questions 1

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// duck.eat(); // Should print "nom nom nom"
// beagle.eat(); // Should print "nom nom nom"

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };

  this.someMethod = function() {
    console.log('someMethod');
  };
}

let birdy = Object.create(Bird.prototype);

// const birdy = new Bird();

// console.log(birdy.getWeight());
// birdy.someMethod(); // this wont work, why???

// Question 2

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea(); // *** prepareTea is created outside and not used as argument, will it still be called functional programming, or functional programming but a pure function
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

// const tea4TeamFCC = getTea(40);

// Add your code above this line

// console.log(tea4TeamFCC);

// Question 3
// https://stackoverflow.com/questions/17402405/difference-between-stack-overflow-and-infinite-times-loop-call-in-c

// Question 4

function add1(bookList, bookName) {
  const newBookList = [...bookList];
  return newBookList.concat(bookName);

  // Add your code above this line
}

function add2(bookList, bookName) {
  const newBookList = [...bookList];
  return newBookList.push(bookName); // why this wont work???

  // Add your code above this line
}

// https://codepen.io/Lawrence4code/pen/vbddwV Similar as above`

// Question 5

// solution works in vscode but does solve in FCC ???

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method

// function alphabeticalOrder(arr) {
//   // Add your code below this line
//   return arr.sort((a, b) => {
//     return a > b;
//   });
//   // Add your code above this line
// }
// console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));

// Question 6

// I know little JS but when question is asked, I get confused, what the best way to prepare of such question.

// Question 7
// https://codepen.io/Lawrence4code/pen/gqvLrK
// https://codepen.io/Lawrence4code/pen/rPJJze

// Learniing
// variable declaration and initialization
// function expression and declaratiron
// object and function, object in javascript
// var are hoisted and let is not hoisted

// strings are immutable, the split method makes it easier to work with them.

// https://codepen.io/Lawrence4code/pen/PVQadX ASK

// DO
// https://codepen.io/Lawrence4code/pen/zeRLOd

// REDO

// https://codepen.io/Lawrence4code/pen/zeRjVx
// https://codepen.io/Lawrence4code/pen/NoyzRe
// https://codepen.io/Lawrence4code/pen/mvXKjG
// https://codepen.io/Lawrence4code/pen/LqQrKd
// https://codepen.io/Lawrence4code/pen/NoyBdx

// 4 rules

// ------------------------------------------------------------------------------------------------------------------------ //

// https://codepen.io/Lawrence4code/pen/LqmMoP
// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);

function repeatString(string, num) {
  if (num < 0) return;
  if (num === 1) return string;
  return string + repeatString(string, num - 1);
}

console.log(output); // --> 'codecodecode'

// ------------------------------------------------------------------------------------------------------------------------ //

// Write a function called "computeCompoundInterest".

// Given a principal, an interest rate, a compounding frequency, and a time(in years), "computeCompoundInterest" returns the amount of compound interest generated.

//   Reference:
// https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest
// This shows the formula used to calculate the total compound interest generated.
// * /

var output = computeCompoundInterest(1500, 0.043, 4, 6);

function computeCompoundInterest(
  principal,
  interestRate,
  compoundingFrequency,
  timeInYears
) {
  return (
    principal *
    Math.pow(
      1 + interestRate / (compoundingFrequency * 100),
      compoundingFrequency * timeInYears
    )
  );
}

console.log(output); // --> 438.8368221341061

// -------------------------------------------------------------------------------------------------------------------- //

// https://codepen.io/Lawrence4code/pen/yZjway
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
