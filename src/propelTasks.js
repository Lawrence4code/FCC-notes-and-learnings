// var fruitCount = { Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 }

// result = [{ nameOfFruit: "Apple", howMany: 1 }, {}, {}, {}]

const fruitCount = { Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 };

function changeFruitCountFormat(obj) {
  const fruitCountArray = [];
  for (let i in obj) {
    fruitCountArray.push({ nameOfFruit: i, howMany: obj[i] });
  }
  return fruitCountArray;
}

// console.log(
//   changeFruitCountFormat({ Apple: 1, Orange: 1, Brinjal: 10, Kiwi: 11 })
// );
