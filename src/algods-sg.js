console.log(
  '------------------------------- ALGODS SG -------------------------------'
);

// https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/learn/v4/t/lecture/8533052?start=0

// Reverse String
function reverse(str) {
  return str.split('').reverse();
}

console.log(reverse('Hello').join(''));

function reverse1(str) {
  strArray = str.split('');
  const reversedArray = [];
  const strLength = strArray.length;
  for (let i = 1; i <= strArray.length; i++) {
    reversedArray.push(strArray[strLength - i]);
  }
  return reversedArray.join('');
}

console.log(reverse1('Hello'));
