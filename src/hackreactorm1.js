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

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
