// https://www.geeksforgeeks.org/object-entries-javascript/

console.log('GFG');

const object = { 0: '23', 1: 'geeksforgeeks', 3: true };

console.log(Object.entries(object));
console.log(Object.keys(object));
console.log(Object.values(object));

// keys and values not key and value

console.log(Object.entries(object)[1]);

const arr = [1, 'string', true, 99];

// this works
console.log(Object.entries(arr));
console.log(Object.keys(arr));
console.log(Object.values(arr));

// Object compare two values and does NOT do type coercion.
console.log(Object.is(1, 1));
console.log(Object.is('string', 'string')); //

// works great
// window.history.forward();
// window.history.back();
// window.history.go(x) // x can be number of pages to move forward or backword with positive and negative integer

// https://www.geeksforgeeks.org/object-assign-javascript/
