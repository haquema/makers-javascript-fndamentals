const readline = require('readline');
const got = require('got');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//  ----- Do not touch anything above this line! ;-) --------



rl.question('What is the secret word? ', (answer) => {
  console.log(`Thanks for entering the secret word: ${answer}. You can go on.`);
});
