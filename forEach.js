function myForEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index], index, array);
  }
}

let min = Infinity;
let max = -Infinity;
let getMinMax = value => {
  if (value > max) {
    max = value;
  } else if (value < min) {
    min = value;
  }
}
myForEach([4, 5, 12, 23, 3], getMinMax);
console.log(min);
console.log(max);