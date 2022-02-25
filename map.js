function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i], i, array);
  }
  return result;
}

let plusOne = value => value + 1;
let arr = [1, 3, 5, 7, 9];
let newArr = myMap(arr, plusOne);
console.log(newArr);

let getBookTitle = book => book.title;

function getAllbookTitles(array) {
  return myMap(array, getBookTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

let bookTitles = getAllbookTitles(books);

console.log(bookTitles);