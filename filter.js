function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++){
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }

  }

  return result;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));


function isMultipleOfThreeOrFive(value) {
  return (value % 3 === 0 || value % 5 === 0);
}

function filterMultiplesOfThreeOrFive(array) {
  return myFilter(array, isMultipleOfThreeOrFive);
}

console.log(filterMultiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));