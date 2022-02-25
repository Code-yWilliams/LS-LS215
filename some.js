function mySome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function isNumber(value) {
  if (Number.isNaN(value)) return false;
  return typeof(value) === 'number';
}

function atleastOneNumber(array) {
  return mySome(array, isNumber);
}

console.log(atleastOneNumber(['a', 'b', 'c', 'd', 1]));