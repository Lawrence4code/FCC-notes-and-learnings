console.log('FCC Algo and ds Projects');

// --------------------------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------------------------- //
function palindrome(str) {
  return (
    str
      .replace(/[\W_]/g, '')
      .split('')
      .join('')
      .toLowerCase() ===
    str
      .replace(/[\W_]/g, '')
      .split('')
      .reverse()
      .join('')
      .toLowerCase()
  );
}

// console.log(palindrome('eye'));
// console.log(palindrome('eye_'));
// console.log(palindrome('not a palindrome'));
console.log(palindrome('A man, a plan, a canal. Panama'));

// --------------------------------------------------------------------------------------------------- //
// function convertToRoman(num) {
//   const romanNum = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };

//   let roman = '';
//   for (let i in romanNum) {
//     while (num >= romanNum[i]) {
//       roman += i;
//       num -= romanNum[i];
//     }
//   }

//   return roman;
// }

// console.log(convertToRoman(1));

// --------------------------------------------------------------------------------------------------- //
// function rot13(str) {
//   const strArr = str.split('');
//   const asciiArr = [];
//   for (let i in strArr) {
//     let ascii = str.charCodeAt(i);

//     if (/[A-Z]/.test(strArr[i])) {
//       console.log('met');
//       ascii -= 13;
//       if (ascii < 65) {
//         ascii += 26;
//       }
//       asciiArr.push(ascii);
//     } else {
//       console.log('met');
//       asciiArr.push(ascii);
//     }
//   }
//   const newStrArr = asciiArr.map(ele => String.fromCharCode(ele));
//   return newStrArr.join('');
// }

// // Change the inputs below to test
// // console.log(rot13('SERR PBQR PNZC'));
// // console.log(rot13('SERR CVMMN!'));
// console.log(rot13('SERR YBIR?'));

function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}

// test here
smallestCommons([1, 5]);
