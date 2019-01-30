console.log('Basic Algorithm Scripting');

// function reverseString(str) {
//   return str.split('').reverse();
// }

// console.log(reverseString('hello').join(''));

// // my solution, works fine
// function factorialize(num) {
//   let factorial = 1;
//   for (var i = 1; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// console.log(factorialize(5));
// console.log(factorialize(10));

// function factorialize(num) {
//   return num;
// }

// console.log(factorialize(5));

const countDownToOne = num => {
  if (num === 0) {
    return;
  }
  console.log(num);
  return countDownToOne(num - 1);
};

console.log(countDownToOne(9));
