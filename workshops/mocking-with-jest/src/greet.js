const randomName = require('./randomName');

let greet = () => {
  let name = randomName();
  return `Hello there ${name}!`
}

module.exports = greet;