console.log('Object Oriented Programming Challenges');

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird('Tweety');
// let ownProps = [];
// // Add your code below this line

// for (let property in canary) {
//   if (canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 2;

// // Add your code above this line
// let beagle = new Dog('Snoopy');
// console.log(beagle.numLegs);
// console.log(beagle.hasOwnProperty('numLegs')); // numLegs is created as property and is avaiable but hasOwnProperty won't work

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog('Snoopy');

// let ownProps = [];
// let prototypeProps = [];

// for (let property in beagle) {
//   if (beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property

// function Dog(name) {
//   this.name = name;
// }

// // Add your code below this line
// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

// instance from construtor has special property constructor which is equal to the constructor function

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = {
//   // Add your code below this line
//   numLegs: 4,
//   eat: function() {
//     console.log('nom nom nom');
//   },
//   describe: function() {
//     console.log('My name is ' + this.name);
//   }
// };

// const rusty = new Dog();

// // This works but creats a side effect and erases the contructor property of the constructor;
// // example
// // console.log(rusty.constructor);
// // console.log(rusty.numLegs);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/remember-to-set-the-constructor-property-when-changing-the-prototype

// function Dog(name) {
//   this.name = name;
// }

// // Modify the code below this line
// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 2,
//   eat: function() {
//     console.log('nom nom nom');
//   },
//   describe: function() {
//     console.log('My name is ' + this.name);
//   }
// };

// const chuwie = new Dog();
// console.log(chuwie.constructor);

//  https:learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog('Snoopy');

// Dog.prototype.isPrototypeOf(beagle);

// Add your code below this line

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype

// let animal = Object.create(Animal.prototype);

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log('nom nom nom');
//   }
// };

// // Add your code below this line

// let duck = Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

// duck.eat(); // Should print "nom nom nom"
// beagle.eat(); // Should print "nom nom nom"

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent

// this is the eventual way to do prototypal inheritence

// function Animal() {}

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log('nom nom nom');
//   }
// };

// function Dog() {}

// Dog.prototype = {
//   constructor: Dog
// };

// // Add your code below this line
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();
// beagle.eat(); // Should print "nom nom nom"
// console.log(beagle.prototype);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property

// function Animal() {}
// function Bird() {}
// function Dog() {}

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Add your code below this line
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/override-inherited-methods

// Overiding prototype methods, go through with FCC explantion

// function Bird() {}

// Bird.prototype.fly = function() {
//   return 'I am flying!';
// };

// function Penguin() {}
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Add your code below this line

// Penguin.prototype.fly = function() {
//   return 'Alas, this is a flightless bird.';
// };

// // Add your code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects

// Important

// let bird = {
//   name: 'Donald',
//   numLegs: 2
// };

// let boat = {
//   name: 'Warrior',
//   type: 'race-boat'
// };

// let glideMixins = function(obj) {
//   obj.glide = function() {
//     console.log('Gliding all the way!!!');
//   };
// };

// glideMixins(bird);
// glideMixins(boat);

// boat.glide();
// bird.glide();

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally

// Add your code below this line

// function Bird() {
//   let weight = 15;

//   this.getWeight = function() {
//     return weight;
//   };
// }

// const birdy = new Bird();

// console.log(birdy.getWeight());
// birdy.someMethod();

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module

// Imp

// const funModule = (function () {
//   return {
//     isCuteMixin: function (obj) {
//       return true;
//     },
//     singMixin: function (obj) {
//       console.log('Singing to an awesome tune');
//     }
//   }
// })()
