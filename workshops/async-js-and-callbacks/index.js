const readline = require('readline');
const got = require('got');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//  ----- Do not touch anything above this line! ;-) --------

const executeAfterDelay = (callback) => {
  setTimeout(() => {
    let result = 2 + 2;
    callback(result);
  }, 2000);
}

executeAfterDelay((result) => {
  console.log(result);
});