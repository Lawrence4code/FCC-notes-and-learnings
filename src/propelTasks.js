// var fruitCount = { Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 }

// result = [{ nameOfFruit: "Apple", howMany: 1 }, {}, {}, {}]

// const fruitCount = { Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 };

// function changeFruitCountFormat(obj) {
//   const fruitCountArray = [];
//   for (let i in obj) {
//     fruitCountArray.push({ nameOfFruit: i, howMany: obj[i] });
//   }
//   return fruitCountArray;
// }

// console.log(
//   changeFruitCountFormat({ Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 })
// );

// const objArray = Object.entries(fruitCount);

// console.log(objArray);

// function changeFruitCountFormat1(obj) {
//   return Object.entries(obj).reduce((accumulator, element) => {
//     accumulator.push({ nameOfFruit: element[0], howMany: element[1] });
//     return accumulator;
//   }, []);
// }

// console.log(changeFruitCountFormat1(fruitCount));

// ----------------------------------------------------------------------------------------------------------------------------- //
// const obj1 = { name: 'john', age: 23, address: { city: 'Bangalore' } };
// // const obj2 = { ...obj1 };

// // console.log(obj1.city === obj2.city);

// function deepCloning(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

// const obj2 = deepCloning(obj1);

// obj1.address.city = 'Hyd';
// console.log(obj2.address.city);

// console.log(obj1.address.city === obj2.address.city);

// ----------------------------------------------------------------------------------------------------------------------------- //

// custom MAP

// const arr = [1, 2, 4, 4, 5, 6];
// const newArr = [];
// Array.prototype.MAP = function(cb) {
//   this.forEach(element => newArr.push(cb(element)));
//   return newArr;
// };

// const arr1 = arr.MAP(element => {
//   return element * element;
// });

// console.log(arr1);

// ----------------------------------------------------------------------------------------------------------------------------- //

// custom FILTER

// const arr = [12, 3, 7, 2, 9, 45, 1];

// Array.prototype.FILTER = function(callback) {
//   const newArr = [];
//   this.forEach(element => {
//     if (callback(element)) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// };

// const arr1 = arr.FILTER(element => {
//   return element % 2 === 0;
// });

// console.log(arr1);

// ----------------------------------------------------------------------------------------------------------------------------- //

// custom REDUCE

// const arr = [1, 2, 3, 4];

// Array.prototype.REDUCE = function(callback, accumulator = 0) {
//   // argument defaults to 0 if not initializer is not supplied
//   this.forEach(element => {
//     let index = this.indexOf(element); // declaring a index and assigning to index of element of the passed array
//     const arr = this; // declaring arr and setting to the passed array
//     accumulator = callback(accumulator, element, index, arr); // assigning accumulator to the value return by the callback function
//   });
//   return accumulator;
// };

// // custom reduce with array
// const arr1 = arr.REDUCE((acc, ele, index, arr) => {
//   acc += ele;
//   return acc;
// }, 0);

// console.log(arr1);
// // regular reduce with array
// const arr2 = arr.reduce((acc, ele, index, arr) => {
//   acc += ele;
//   return acc;
// }, 0);

// console.log(arr2);
// // ----------------------------------------------------- //

// // custom reduce with object
// const arr10 = ['john', 'jane', 'peter'];

// const arr11 = arr10.REDUCE((acc, ele, index, arr) => {
//   acc[arr.indexOf(ele)] = arr[index];
//   return acc;
// }, {});

// // regular reduce with object
// console.log(arr11);

// const arr20 = arr10.reduce((acc, ele, index, arr) => {
//   acc[arr.indexOf(ele)] = arr[index];
//   return acc;
// }, {});

// console.log(arr20);

// ----------------------------------------------------- //

function fizzBuzz(num) {
  if (num < 0 || typeof num !== 'number' || num - Math.floor(num) !== 0) {
    console.log(
      'Invalid input, please enter positive integer(number) and a whole number.'
    );
    return;
  }

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(100.5));

function transposeTwoStrings(str1, str2) {
  return zipArrays(str1.split(''), str2.split(''));
}

// const zipArrays = (...arrs) =>
// arrs.reduce((a, b) => a.length > b.length ? a : b).map((_, idx) => arrs.map(arr => arr[idx] || ' ')).map((pair) => pair.join(' ')).join('\n');
