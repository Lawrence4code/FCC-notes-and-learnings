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
function diffArray(arr1, arr2) {
  var newArr = [];

  for (let i in arr1) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i] || arr2[i]);
    }
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i] || arr2[i]);
    }
  }
  return newArr;
}

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

function destroyer1(arr) {
  const args = Array.from(arguments).slice(1);
  return arr.filter(element => !args.includes(element));
}

// console.log(destroyer1(arr, 2, 3)) ;

// -------------------------------------------------------------------------------------------------------------------- //
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  console.log(source);
  // first access through all the property and values on the given object with for in loop
  for (let i in collection) {
    // console.log(Object.keys(collection[i]));
    // console.log(Object.keys(source));
    if (Object.keys(collection[i]).includes(Object.keys(source))) {
      arr.push(collection[i]);
      console.log('met');
    }
  }

  // Only change code above this line
  return arr;
}

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
//   return str;
// }

// spinalCase('This Is Spinal Tap');

// const string = 'AllThe-small';

// console.log(transformedString);

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
// // console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// -------------------------------------------------------------------------------------------------------------------- //

function convertHTML(str) {
  // &colon;&rpar;
  return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
    return '&#' + i.charCodeAt(0) + ';';
  });
}

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));

// -------------------------------------------------------------------------------------------------------------------- //
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  var i;
  var fib = []; // Initialize array!

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= 10; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  }
  console.log(fib);

  return fib.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

console.log(sumFibs(4));
