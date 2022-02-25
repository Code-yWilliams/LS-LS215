function myReduce(array, callback, initialValue) {
  let accumulator;
  let i;
  if (initialValue === undefined) {
    accumulator = array[0];
    i = 1
  } else {
    accumulator = initialValue;
    i = 0;
  }
  for ( ; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

let add = (accumulator, value) => accumulator + value;

let arr = [1, 2, 3, 4, 5];
let sum = myReduce(arr, add);
console.log(sum);


function longerWord(accumulator, currentWord) {
  let result = currentWord.length > accumulator.length ? currentWord : accumulator;
  return result;
}

function longestWord(words) {
  return myReduce(words, longerWord)
}

console.log(longestWord(['abc', 'launch', 'targets', ''])); 