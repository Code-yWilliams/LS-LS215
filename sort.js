function mySort(array, callback) {
  while (true) {
    let swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (callback(array[i], array[i + 1]) > 0) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swap = true;
      } 
    }
    if (!swap) break;
  }
  return array;
}

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

let studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92 },
  { name: 'StudentC', grade: 91.8 },
  { name: 'StudentD', grade: 95.23 },
  { name: 'StudentE', grade: 91.81 },
];

let gradesInOrder = mySort(studentGrades, compareGrades);
console.log(gradesInOrder);