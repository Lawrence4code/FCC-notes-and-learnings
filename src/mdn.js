// const object1 = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// const object2 = Object.assign({ c: 4, d: 5 }, object1);

// console.log(object2.c, object2.d);
// // expected output: 3 5

// console.log(object2);

// if the property exists if wont override

// -------------------------------------------------------------------------------------------- //
// Merging objects
// var o1 = { a: 1 };
// var o2 = { b: 2 };
// var o3 = { c: 3 };

// var obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.

// object.assign and ... creates a shalow copy, nestes element keeps the reference and same with arrays,
// -------------------------------------------------------------------------------------------- //
// Merging objects with same properties
// var o1 = { a: 1, b: 1, c: 1 };
// var o2 = { b: 2, c: 2 };
// var o3 = { c: 3 };

// var obj = Object.assign({}, o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// -------------------------------------------------------------------------------------------- //
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = "Matthew"; // "name" is a property set on "me", bu t not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();
// // expected output: "My name is Matthew. Am I human? true"

// -------------------------------------------------------------------------------------------- //
