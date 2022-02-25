// For this practice problem, we'll represent rectangles as Arrays 
// ith two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles
// as an argument. The Function should return the total area covered
// by all the rectangles.

// function totalArea(array) {
//   return array.reduce((acc, e) => acc + (e[0] * e[1]), 0);
// }

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141


// Now, write a second Function named totalSquareArea. This Function
// should calculate the total area of a set of rectangles, just like
// totalArea. However, it should only include squares in its calculations:
// it should ignore rectangles that aren't square.

// function onlySquares(arr) {
//   return arr.filter(e => e[0] === e[1]);
// }

// function totalSquareArea(array) {
//   return totalArea(onlySquares(array));
// }

// console.log(totalSquareArea(rectangles));


// Write a Function named processReleaseData that processes the
// following movie release data:
// let newReleases = [
//   {
//     'id': 70111470,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 654356453,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
// ];

// The Function should generate an Array of Objects that contain 
// only the id and title key/value pairs. You may assume that id
// and title, when existing, is an integer greater than 0 and non-empty
// string respectively. Here are the rules:

// Keep only releases that have both id and title property present.
// Keep only the id and title data for each release.

// function releasesWithTitleAndID(releases) {
//   let result = releases.filter(release => {
//     return (release.id !== undefined && release.title !== undefined)
//   });
//   return result;
// }

// function getTitlesAndIDs(array) {
//   let releases = releasesWithTitleAndID(array);
//   return releases.map(release => ({ id: release.id, title: release.title }));
// }

// console.log(getTitlesAndIDs(newReleases));


// Write a Function named octalToDecimal that performs octal to
// decimal conversion. When invoked on a String that contains the
// representation of an octal number, the Function returns a decimal
// version of that value as a Number. Implement the conversion
// yourself: do not use something else to perform the conversion for you.

// function octalToDecimal(numString) {
//   let digits = numString.split("").map(i => Number(i));
//   let power = 0;
//   let result = digits.reduceRight((accumulator, digit) => {
//     let value = digit * (8 ** power);
//     power += 1;
//     return accumulator + value;
//   }, 0)
//   return result;
// }

// console.log(octalToDecimal('130'));
// console.log(octalToDecimal('2047'));
// console.log(octalToDecimal('011'));


// Write a Function named anagram that takes two arguments: a word
// and an array of words. Your function should return an array that
// contains all the words from the array argument that are anagrams
// of the word argument. For example, given the word "listen" and an
// array of candidate words like "enlist", "google", "inlets", and
// "banana", the program should return an array that contains "enlist"
// and "inlets".

// function charsInOrder(word) {
//   return word.split('').sort()
// }

// function isAnagram(word1, word2) {
//   let chars1 = charsInOrder(word1);
//   let chars2 = charsInOrder(word2);
//   return arraysEqual(chars1, chars2);
// }

// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function anagram(word, list) {
//   return list.filter(string => isAnagram(word, string));
// }

// console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
// console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); 


// We have the following Array of information for some popular bands:
// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// There are problems with this data, though, so we first have to clean
// it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as
// the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.

// function setObjectName(object, name) {
//   object.name = name;
// }

// function capitalizeAllWords(string) {
//   let words = string.split(" ");
//   words = words.map(word => {
//     word = word.toLowerCase();
//     return word[0].toUpperCase() + word.slice(1);
//   })
//   return words.join(" ");
// }

// function updateName(object) {

// }

// function removeDots(string) {
//   const periodRegex = /\./g;
//   return string.replaceAll(periodRegex, "");
// }

// function setObjectCountry(object, countryName) {
//   object.country = countryName;
// }

// function processBands(bandsArray) {
//   bandsArray.forEach(band => {
//     let newName = capitalizeAllWords(band.name);
//     newName = removeDots(newName);
//     setObjectName(band, newName);
//     setObjectCountry(band, 'Canada');
//   })
//   return bandsArray;
// }

// console.log(processBands(bands));


// At the end of each term, faculty members need to prepare a class
// record summary for students based on the weighted scores of exams
// and exercises. In this practice problem, we will prepare one such
// summary from some provided student records.

// Grading areas include exams and exercises, with the following weights:

// Grading Area	Weight
// Exam	65%
// Exercises	35%
// Each term has four exams, and several exercises. Every exam has a fixed
// maximum score of 100, while exercises have varied maximum score values
// and counts. The total maximum point value for all exercises in any term
// is always 100, regardless of how many exercises the students had to complete.
// For example, a term may have five exercises with possible score maximums of
// [30, 20, 10, 20, 20] while another term may have three exercises with
// possible score maximums of [20, 30, 50].

// To determine a student's grade, we first determine the student's average
// score from the four exams, then sum all the exercise scores. We then apply
// the weights to compute the student's final percent grade. Finally,
// we determine the letter equivalent grade from the student's percent grade
// we just computed.

// Percent Grade	Letter Equivalent
// 93 - 100	A
// 85 - 92	B
// 77 - 84	C
// 69 - 76	D
// 60 - 68	E
// 0 - 59	F

// For example, let's assume a term with three exercises with maximum scores of
// [20, 30, 50]. A student got [90, 80, 95, 71] on her four exams, and [20, 15, 40]
// on her exercises. To determine her final grade, we follow these steps:

// Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
// Compute the student's total exercise score: 20 + 15 + 40 = 75
// Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
// Round the percent grade to the nearest integer: 81
// Lookup the letter grade in the table above: C
// Combine the percent grade and letter grade: "81 (C)"

// We store the student data in an object that looks like this:

// let studentScores = {
//   student1: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
//   student2: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
//   student3: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
//   studentN: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
// };

// The output class record summary should look like this:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

// Round the exam averages to one digit after the decimal point.

// Given this information, implement a function that takes a studentScores
// object and returns a class record summary object.

let GRADE_LOWER_LIMITS = {
  "93": "A",
  "85": "B",
  "77": "C",
  "69": "D",
  "60": "E",
  "0": "F",
}

function determineLetterGrade(score) {
  let result = null;
  Object.entries(GRADE_LOWER_LIMITS).reverse().forEach(limit => {
    if (score >= Number(limit[0]) && result === null) {
      result = limit[1];
    }
  });
  return result;
}

function determineFinalPercentage(avgExamScore, exerciseScore) {
  let finalPercentage = ((avgExamScore * 0.65) + (exerciseScore * 0.35));
  return Math.round(finalPercentage);
}

function determineExamScoreAverage(scoresArray) {
  let sum = scoresArray.reduce((accumulator, score) => accumulator + score)
  return sum / scoresArray.length;
}

function determineExerciseScore(scoresArray) {
  return scoresArray.reduce((accumulator, score) => accumulator + score);
}

function generateClassRecordSummary(studentScoresObject) {
  let studentGrades = [];
  let exams = [];
  let result = { studentGrades, exams };

  for (let student in studentScoresObject) {
    let examScores = studentScoresObject[student].scores.exams;
    examScores.forEach((score, index) => {
      if (exams[index] === undefined) {
        exams[index] = [score];
      } else {
        exams[index].push(score);
      }
    });

    debugger;
    let avgExamScore = determineExamScoreAverage(examScores);
    let allExerciseScores = studentScoresObject[student].scores.exercises;
    let finalExerciseScore = determineExerciseScore(allExerciseScores);
    let finalPercentage = determineFinalPercentage(avgExamScore, finalExerciseScore);
    let finalLetterGrade = determineLetterGrade(finalPercentage);
    studentGrades.push(`${finalPercentage} (${finalLetterGrade})`);
  }

  result.exams = exams.map(examScores => {
    examScores.sort((score1, score2) => {
      if (score1 < score2) {
        return -1;
      } else if (score1 >= score2) {
        return 1;
      }
    });

    let min = examScores[0];
    let max = examScores[examScores.length - 1];
    let sum = examScores.reduce((sum, score) => sum + score);
    let avg = sum / (examScores.length);
   
    return { average: avg, minimum: min, maximum: max }
  });

  return result;
}

// You can use the following code to test your implementation:

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }


// Implement a function that determines whether a string has any character
// that appears more than once. The function should return true if, and only
// if, all characters in the string are unique. We should ignore multiple
// spaces and case differences; focus instead on the non-space characters
// without regard to case.

function isAllUnique(string) {
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    }
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      return false;
    }
  }

  return true;
}

isAllUnique('The quick brown fox jumped over a lazy dog');  // false
isAllUnique('123,456,789');                                 // false
isAllUnique('The big apple');                               // false
isAllUnique('The big apPlE');                               // false
isAllUnique('!@#$%^&*()');                                  // true
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true