// https://hackernoon.com/prototypes-in-javascript-5bba2990e04b

function Human(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function() {
      return this.firstName + ' ' + this.lastName;
    });
}

const Person1 = new Human('Christiano', 'Ronaldo');
const Person2 = new Human('Ronaldhino', 'Gaúcho');

console.log(Person1.fullName());
console.log(Person2.fullName());

// every object created using the constructor function will have it’s own copy of properties and methods.It doesn’t make sense to have two instances of function fullName that do the same thing.Storing separate instances of function for each objects results into wastage of memory.

console.log(Human);

console.log(Human.prototype === Person1.__proto__);

// console.log(Person1);

// https://tylermcginnis.com/subscribe/
// https://tylermcginnis.com/beginners-guide-to-javascript-prototype/
// Why arrow function cannot be used to create constructor function because it does not have 'this' keyword and Arrow function does have prototype property.

// CLASSES

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

// The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

// The static keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application.
