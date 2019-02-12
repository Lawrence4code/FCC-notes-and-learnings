// https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c

const arr = [1, 2, 3, 4, 5, 2];
const arri = Array.from(arr);
console.log(arri);
console.log(arr.indexOf(2));

// const spliceResult = arr.splice(2,2) // splice mutates the original  // start of index and how many to remove
// console.log(arr);
// console.log(spliceResult);

const sliceResult = arr.slice(6, arr.length); // does not mutate the original arr // start of index and till what index to end

console.log(arr);
console.log(sliceResult);

for (let i in arr) {
  // console.log(arr[i]);
}

const arr1 = [1, 2, 3];
const arrConcat = arr1.concat(4); // returns the concated array
console.log(arrConcat);
const arrPush = arr1.push(5); /// returns the length of the new arr
console.log(arrPush);

const obj3 = { name: 1 };
console.log(typeof obj3.name.toString());

console.log(typeof JSON.stringify({ x: 5, y: 6 }));

// arr.findIndex((e, i, a) => {});

console.log(arr.includes(2, 1)); // can take element and index

for (let i of arr) {
  // console.log(i);
}

arr.forEach(element => {
  // console.log(element);
});

console.log(['a', 'b', 'c'].entries());
// console.log(Object.entries({ 1: 'a', 2: 'b', 3: 'c' }));

//get the index as well, using `entries()`
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  // console.log(i, v);
}

const obj = { name: 'John', age: 23, profession: 'software engineer' };

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

const str = 'string       u  oooooo ';

// console.log(str);

// Exponentiation(**)

// console.log(2 ** 2); // prints 4;

// Assignment shortcuts
// +=: addition assignment
// -=: subtraction assignment
// *=: multiplication assignment
// /=: division assignment
// %=: remainder assignment
// **=: exponentiation assignment

// Math.abs()

// Math.abs(2.5) //2.5
// Math.abs(-2.5) //2.5

// Math.ceil()
// Math.ceil(2.5) //3
// Math.ceil(2) //2
// Math.ceil(2.1) //3
// Math.ceil(2.99999) //3

// Math.floor();
// Math.ceil(2.5) //2
// Math.ceil(2) //2
// Math.ceil(2.1) //2
// Math.ceil(2.99999) //

// console.log(Math.min(1.5,2))

// Math.random()
// Returns a pseudorandom number between 0.0 and 1.0
// Math.random() //0.9318168241227056
// Math.random() //0.35268950194094395

// Math.round()
// Rounds a number to the nearest integer
// Math.round(1.2) //1
// Math.round(1.6) //2

// Math.sqrt()
// Return the square root of the argument
// Math.sqrt(4) //2
// Math.sqrt(16) //4
// Math.sqrt(5) //2.23606797749979
