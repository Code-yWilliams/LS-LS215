// Write a function that takes one argument, a positive integer,
// and returns the sum of its digits. Do this without using for,
// while, or do...while loops - instead, use a series of method
// calls to perform the sum.

// function sum(integer) {
//   let digits = String(integer).split("");
//   return digits.reduce((sum, digit) => sum + Number(digit), 0);
// }

// OR

// function sum(integer) {
//   let result = 0;
//   while (integer > 0) {
//     let currentDigit = integer % 10;
//     result += currentDigit;
//     integer = (integer - currentDigit) / 10;
//   }
//   return result;
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45



// Write a function that takes an array of integers between 0 and 19 and
// returns an array of those integers sorted based on the English word for each number:

// function alphabeticNumberSort(numberArray) {
//   const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four',
//                         'five', 'six', 'seven', 'eight', 'nine',
//                         'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//                         'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
//   return numberArray.slice().sort((int1, int2) => {
//     if (NUMBER_WORDS[int1] < NUMBER_WORDS[int2]) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]



// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// function multiplyAllPairs(arr1, arr2) {
//   let result = [];
//   arr1.forEach(firstNumber => {
//     arr2.forEach(secondNumber => {
//       result.push(firstNumber * secondNumber);
//     });
//   });
//   return result.sort((num, nextNum) => num < nextNum ? -1 : 1);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]



// Write a function that takes an array of numbers and returns the sum of the sums of
// each leading subsequence in that array. Examine the examples to see what we mean.
// You may assume that the array always contains at least one number.

// function sumOfSums(array) {
//   let sums = array.map((num, index) => {
//     let currentSum = 0;
//     for (let i = 0; i <= index; i++) {
//       currentSum += array[i]
//     }
//     return currentSum;
//   });

//   return sums.reduce((sum, num) => sum + num);
// }

// function sumOfSums(array) {
//   return array.reduce((sum, number, index) => {
//     let currentSum = 0;
//     for (let i = 0; i <= index; i++) {
//       currentSum += array[i];
//     }
//     return sum + currentSum;
//   });
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35



// Write a function that takes a string argument and returns a list of
// substrings of that string. Each substring should begin with the
// first letter of the word, and the list should be ordered from
// shortest to longest.

// function leadingSubstrings(string) {
//   let result = [];
//   let chars = string.split('');
//   chars.forEach((char, index) => {
//     let currentResult = '';
//     for (let i = 0; i <= index; i++) {
//       currentResult += chars[i];
//     }
//     result.push(currentResult);
//   });
//   return result;
// }

// function leadingSubstrings(string) {
//   let result = [];
//   let chars = string.split('');
//   chars.forEach((char, index) => {
//     result.push(string.slice(0, index + 1));
//   });
//   return result;
// }

// function leadingSubstrings(string) {
//   let chars = string.split('');
//   return chars.reduce((result, char, index) => {
//     return result.concat(string.slice(0, index + 1));
//   }, []);
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]



// Write a function that returns a list of all substrings of a string.
// Order the returned list by where in the string the substring begins.
// This means that all substrings that start at index position 0 should
// come first, then all substrings that start at index position 1, and so
// on. Since multiple substrings will occur at each position, return the
// substrings at a given index from shortest to longest.

// function substrings(string) {
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     for (let l = i + 1; l <= string.length; l++) {
//       result.push(string.slice(i, l));
//     }
//   }
//   return result;
// }

// console.log(substrings('abcde'));



// Write a function that returns a list of all substrings of a string
// that are palindromic. That is, each substring must consist of the same
// sequence of characters forwards as backwards. The substrings in the
// returned list should be sorted by their order of appearance in the
// input string. Duplicate substrings should be included multiple times.

// function substrings(string) {
//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     for (let l = i + 1; l <= string.length; l++) {
//       result.push(string.slice(i, l));
//     }
//   }
//   return result;
// }

// function isPalindrome(string) {
//   let reverseString = string.split('').reverse().join('');
//   return (string === reverseString) && (string.length > 1);
// }

// function palindromes(string) {
//   let subs = substrings(string);
//   return subs.filter(isPalindrome);
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]
// console.log(palindromes('hello-madam-did-madam-goodbye'));
// console.log(palindromes('knitting cassettes')); // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]



// Write a function that takes a grocery list in a two-dimensional
// array and returns a one-dimensional array. Each element in the
// grocery list contains a fruit name and a number that represents
// the desired quantity of that fruit. The output array is such that
// each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas.
// Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

// function buyFruit(listArray) {
//   let result = listArray.map(items => {
//     let list = []
//     for (let i = 0; i < items[1]; i++) {
//       list.push(items[0]);
//     }
//     return list;
//   });
//   return result.flat()
// }

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]



// Write a function that takes two arguments, an inventory item ID and a
// list of transactions, and returns an array containing only the transactions
// for the specified inventory item.

// function transactionsFor(inventoryID, transactionList) {
//   return transactionList.filter(t => t.id === inventoryID);
// }

// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                        { id: 105, movement: 'in',  quantity: 10 },
//                        { id: 102, movement: 'out', quantity: 17 },
//                        { id: 101, movement: 'in',  quantity: 12 },
//                        { id: 103, movement: 'out', quantity: 15 },
//                        { id: 102, movement: 'out', quantity: 15 },
//                        { id: 105, movement: 'in',  quantity: 25 },
//                        { id: 101, movement: 'out', quantity: 18 },
//                        { id: 102, movement: 'in',  quantity: 22 },
//                        { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]



// Building on the previous exercise, write a function that returns
// true or false based on whether or not an inventory item is available.
// As before, the function takes two arguments: an inventory item and a
// list of transactions. The function should return true only if the sum
// of the quantity values of the item's transactions is greater than zero.
// Notice that there is a movement property in each transaction object.
// A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// function transactionsFor(inventoryID, transactionList) {
//   return transactionList.filter(t => t.id === inventoryID);
// }

// function calculateQuantity(transactionList) {
//   return transactionList.reduce((totalQuantity, transaction) => {
//     let currentQuantity = transaction.quantity;
//     if (transaction.movement === 'in') {
//       return totalQuantity + currentQuantity;
//     } else {
//       return totalQuantity - currentQuantity;
//     }
//   }, 0);
// }

// function isItemAvailable(inventoryID, transactionList) {
//   let transactions = transactionsFor(inventoryID, transactionList);
//   return (calculateQuantity(transactions) > 0)
// }

// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                        { id: 105, movement: 'in',  quantity: 10 },
//                        { id: 102, movement: 'out', quantity: 17 },
//                        { id: 101, movement: 'in',  quantity: 12 },
//                        { id: 103, movement: 'out', quantity: 15 },
//                        { id: 102, movement: 'out', quantity: 15 },
//                        { id: 105, movement: 'in',  quantity: 25 },
//                        { id: 101, movement: 'out', quantity: 18 },
//                        { id: 102, movement: 'in',  quantity: 22 },
//                        { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true



