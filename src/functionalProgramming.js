console.log('Functional Programming');

/* Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions.In JavaScript, all functions are first class functions. */

/* The functions that take a function as an argument, or return a function as a return value are called higher order functions. */

// 1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

// 2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

// /**
//  * A long process to prepare tea.
//  * @return {string} A cup of tea.
//  **/
// const prepareTea = () => 'greenTea';

// /**
//  * Get given number of cups of tea.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = numOfCups => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }

//   return teaCups;
// };

// // Add your code below this line

// const tea4TeamFCC = getTea(40); // :(

// // Add your code above this line

// console.log(tea4TeamFCC);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/understand-the-hazards-of-using-imperative-code

// Imp exercise

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/avoid-mutations-and-side-effects-using-functional-programming

// the global variable
// var fixedValue = 4;

// function incrementer() {
//   // Add your code below this line

//   for (let i = 0; i < 4; i++) {
//     fixedValue += 1;
//   }

//   return fixedValue;
//   // Add your code above this line
// }

// var newValue = incrementer(); // Should equal 5
// console.log(newValue);
// console.log(fixedValue); // Should print 4

// function someNstuff(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(someNstuff(6));

//learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions

// var bookList = [
//   'The Hound of the Baskervilles',
//   'On The Electrodynamics of Moving Bodies',
//   'Philosophiæ Naturalis Principia Mathematica',
//   'Disquisitiones Arithmeticae'
// ];

// /* This function should add a book to the list and return the list */
// // New parameters should come before the bookName one

// // Add your code below this line
// function add(bookList, bookName) {
//   const newBookList = [...bookList];
//   return newBookList.concat(bookName);

//   // Add your code above this line
// }

// /* This function should remove a book from the list and return the list */
// // New parameters should come before the bookName one

// // Add your code below this line
// function remove(bookList, bookName) {
//   const newBookList = [...bookList];
//   if (newBookList.indexOf(bookName) >= 0) {
//     console.log('if condition ran');
//     newBookList.splice(newBookList.indexOf(bookName), 1);
//     return newBookList;
//     // Add your code above this line
//   }
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(
//   add(bookList, 'A Brief History of Time'),
//   'On The Electrodynamics of Moving Bodies'
// );

// // console.log(bookList);
// console.log(newBookList);
// console.log(newerBookList);
// console.log(newestBookList);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype

// the global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(a => {
//     console.log(a);
//     newArray.push(callback(a));
//   });
//   // Add your code above this line
//   return newArray;
// };

// var new_s = s.myMap(function(item) {
//   return item * 2;
// });

// console.log(new_s);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array

// the global variable
// var watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     Rated: 'PG-13',
//     Released: '16 Jul 2010',
//     Runtime: '148 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer: 'Christopher Nolan',
//     Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
//     Plot:
//       'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
//     Language: 'English, Japanese, French',
//     Country: 'USA, UK',
//     Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.8',
//     imdbVotes: '1,446,708',
//     imdbID: 'tt1375666',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     Rated: 'PG-13',
//     Released: '07 Nov 2014',
//     Runtime: '169 min',
//     Genre: 'Adventure, Drama, Sci-Fi',
//     Director: 'Christopher Nolan',
//     Writer: 'Jonathan Nolan, Christopher Nolan',
//     Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
//     Plot:
//       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: 'English',
//     Country: 'USA, UK',
//     Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.6',
//     imdbVotes: '910,366',
//     imdbID: 'tt0816692',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     Rated: 'PG-13',
//     Released: '18 Jul 2008',
//     Runtime: '152 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
//     Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
//     Plot:
//       'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
//     Language: 'English, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
//     Metascore: '82',
//     imdbRating: '9.0',
//     imdbVotes: '1,652,832',
//     imdbID: 'tt0468569',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     Rated: 'PG-13',
//     Released: '15 Jun 2005',
//     Runtime: '140 min',
//     Genre: 'Action, Adventure',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
//     Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
//     Plot:
//       'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
//     Language: 'English, Urdu, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
//     Metascore: '70',
//     imdbRating: '8.3',
//     imdbVotes: '972,584',
//     imdbID: 'tt0372784',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     Rated: 'PG-13',
//     Released: '18 Dec 2009',
//     Runtime: '162 min',
//     Genre: 'Action, Adventure, Fantasy',
//     Director: 'James Cameron',
//     Writer: 'James Cameron',
//     Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
//     Plot:
//       'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
//     Language: 'English, Spanish',
//     Country: 'USA, UK',
//     Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
//     Metascore: '83',
//     imdbRating: '7.9',
//     imdbVotes: '876,575',
//     imdbID: 'tt0499549',
//     Type: 'movie',
//     Response: 'True'
//   }
// ];

// // Add your code below this line

// var filteredList = watchList
//   .filter(movie => {
//     return movie.imdbRating > 8;
//   })
//   .map(movie => {
//     return { title: movie.Title, rating: movie.imdbRating };
//   });

// // Add your code above this line

// console.log(filteredList);

// const filteredList1 = watchList
//   .map(movie => {
//     return { title: movie['Title'], rating: movie['imdbRating'] };
//   })
//   .filter(movie => {
//     return movie.imdbRating;
//   });

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype

// // the global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(item => {
//     if (callback(item) === true) {
//       newArray.push(item);
//     }
//   });
//   // Add your code above this line
//   return newArray;
// };

// var new_s = s.myFilter(function(item) {
//   return item % 2 === 1;
// });

// console.log(new_s);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-part-of-an-array-using-the-slice-method

// function sliceArray(anim, beginSlice, endSlice) {
//   const newArr = anim.slice(beginSlice, endSlice);
//   return newArr;
// }
// var inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];

// console.log(sliceArray(inputAnim, 1, 3));

// const ar = [1, 2, 3, 4, 5];

// console.log(ar);

// ar.splice(1, 1, 'Hello');

// console.log(ar);

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice

// function nonMutatingSplice(cities) {
//   const n = cities.length;
//   const citiesCopy = cities.slice(0, 3);
//   return citiesCopy;

//   // Add your code above this line
// }
// var inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'];
// var inputCities1 = [
//   'Chicago',
//   'Delhi',
//   'Islamabad',
//   'London',
//   'Berlin',
//   'Chicago',
//   'Delhi',
//   'Islamabad',
//   'London',
//   'Berlin'
// ];
// console.log(nonMutatingSplice(inputCities));
// console.log(nonMutatingSplice(inputCities1));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data

// the global variable
// var watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     Rated: 'PG-13',
//     Released: '16 Jul 2010',
//     Runtime: '148 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer: 'Christopher Nolan',
//     Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
//     Plot:
//       'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
//     Language: 'English, Japanese, French',
//     Country: 'USA, UK',
//     Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.8',
//     imdbVotes: '1,446,708',
//     imdbID: 'tt1375666',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     Rated: 'PG-13',
//     Released: '07 Nov 2014',
//     Runtime: '169 min',
//     Genre: 'Adventure, Drama, Sci-Fi',
//     Director: 'Christopher Nolan',
//     Writer: 'Jonathan Nolan, Christopher Nolan',
//     Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
//     Plot:
//       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: 'English',
//     Country: 'USA, UK',
//     Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
//     Metascore: '74',
//     imdbRating: '8.6',
//     imdbVotes: '910,366',
//     imdbID: 'tt0816692',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     Rated: 'PG-13',
//     Released: '18 Jul 2008',
//     Runtime: '152 min',
//     Genre: 'Action, Adventure, Crime',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
//     Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
//     Plot:
//       'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
//     Language: 'English, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
//     Metascore: '82',
//     imdbRating: '9.0',
//     imdbVotes: '1,652,832',
//     imdbID: 'tt0468569',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     Rated: 'PG-13',
//     Released: '15 Jun 2005',
//     Runtime: '140 min',
//     Genre: 'Action, Adventure',
//     Director: 'Christopher Nolan',
//     Writer:
//       'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
//     Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
//     Plot:
//       'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
//     Language: 'English, Urdu, Mandarin',
//     Country: 'USA, UK',
//     Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
//     Metascore: '70',
//     imdbRating: '8.3',
//     imdbVotes: '972,584',
//     imdbID: 'tt0372784',
//     Type: 'movie',
//     Response: 'True'
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     Rated: 'PG-13',
//     Released: '18 Dec 2009',
//     Runtime: '162 min',
//     Genre: 'Action, Adventure, Fantasy',
//     Director: 'James Cameron',
//     Writer: 'James Cameron',
//     Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
//     Plot:
//       'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
//     Language: 'English, Spanish',
//     Country: 'USA, UK',
//     Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
//     Poster:
//       'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
//     Metascore: '83',
//     imdbRating: '7.9',
//     imdbVotes: '876,575',
//     imdbID: 'tt0499549',
//     Type: 'movie',
//     Response: 'True'
//   }
// ];

// Add your code below this line

// const averageRating = watchList.reduce((accumulator, element, index) => {
//   const CNML = watchList.filter(
//     movie => movie.Director === 'Christopher Nolan'
//   );

//   if (element.Director === 'Christopher Nolan') {
//     accumulator = accumulator + Number(element.imdbRating);
//     return accumulator;
//   }

//   return accumulator / CNML.length;
// }, 0);

// Add your code above this line

// console.log(averageRating);

// ******************************************************************************************************************************** //
// notes
// slice does not mutate the array
// splice mutates teh array
// concat does not mutate the array
// push and pop mutute the array
// https://stackoverflow.com/questions/6611824/why-do-we-need-to-use-radix

// function alphabeticalOrder(arr) {
//   // Add your code below this line
//   return arr.sort((a, b) => {
//     a > b;
//   });
//   // Add your code above this line
// }

// console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array

// var globalArray = [5, 6, 3, 2, 9];
// const newArr = [];
// function nonMutatingSort(arr) {
//   return newArr.concat(arr).sort((a, b) => a - b);
// }
// console.log(nonMutatingSort(globalArray));

// console.log(
//   /^h[^a]*a[^c]*c[^k]*k[^e]*e[^r]*r[^r]*r[^a]*a[^n]*n[^k]*k/.test(
//     'hwwwwwawwwwwcwwwwwkwwwwwewwwwwrwwwwrwwwawwwnkwww'
//   )
// );
// console.log(
//   /^h[^a]*a[^c]*c[^k]*k[^e]*e[^r]*r[^r]*r[^a]*a[^n]*n[^k]*k/.test('hack')
// );

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method

// function splitify(str) {
//   // Add your code below this line

//   return str.split(/\W/);
//   // Add your code above this line
// }
// console.log(splitify('Hello World,I-am code'));

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method

// function sentensify(str) {
//   // Add your code below this line

//   return str.split(/\W/).join(' ');
//   // Add your code above this line
// }
// console.log(sentensify('May-the-force-be-with-you'));

var globalTitle = 'Winter Is   Coming';

// Add your code below this line
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s*\s/)
    .join('-');
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

// console.log(winterComing);

function checkPositive(arr) {
  // Add your code below this line
  return arr.every(element => element > 0);

  // Add your code above this line
}
// console.log(checkPositive([1, 2, 3, 4, 5]));

// ------------------------------------------------------------------------------------------------------ //
// function alphabeticalOrder(arr) {
//   // Add your code below this line
//   const sortedArr = arr.sort((a, b) => {
//     console.log(a, b);
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
//   });
//   return sortedArr;
//   // Add your code above this line
// }

// const arr = ['a', 'd', 'i', 'e'];
// console.log(arr.sort());
// console.log(arr.sort());
// console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));

// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------ //
