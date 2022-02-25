let rlSync = require('readline-sync');

function meetAndGreet() {
  let result;
  let name = rlSync.question('What is your name? ');
  if (name[name.length - 1] === '!') {
    name = name.slice(0, name.length - 1).toUpperCase();
    result = `HELLO ${name}. WHY ARE WE SCREAMING?`;
  } else {
    result = `Hello ${name}.`
  }

  console.log(result);
}

meetAndGreet()