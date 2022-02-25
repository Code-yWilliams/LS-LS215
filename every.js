function myEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false
    }
  }
  return true;
}

function isNumber(value) {
  if (Number.isNaN(value)) return false;
  return typeof(value) === 'number';
}

function allAreNumbers(array) {
  return myEvery(array, isNumber);
}

console.log(allAreNumbers([1, 5, 6, 7, '1']));             // false
console.log(allAreNumbers([1, 5, 6, 7, 1]));               // true
console.log(allAreNumbers([1, 5, 6, 7, NaN]));             // false