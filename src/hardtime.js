// Questions 1

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log('nom nom nom');
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

// duck.eat(); // Should print "nom nom nom"
// beagle.eat(); // Should print "nom nom nom"

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };

  this.someMethod = function() {
    console.log('someMethod');
  };
}

let birdy = Object.create(Bird.prototype);

// const birdy = new Bird();

// console.log(birdy.getWeight());
// birdy.someMethod(); // this wont work, why???

// Question 2

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea(); // *** prepareTea is created outside and not used as argument, will it still be called functional programming, or functional programming but a pure function
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

// const tea4TeamFCC = getTea(40);

// Add your code above this line

// console.log(tea4TeamFCC);

// Question 3
// https://stackoverflow.com/questions/17402405/difference-between-stack-overflow-and-infinite-times-loop-call-in-c

// Question 4

function add1(bookList, bookName) {
  const newBookList = [...bookList];
  return newBookList.concat(bookName);

  // Add your code above this line
}

function add2(bookList, bookName) {
  const newBookList = [...bookList];
  return newBookList.push(bookName); // why this wont work???

  // Add your code above this line
}
