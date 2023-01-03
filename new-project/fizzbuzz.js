const fizzBuzz = (integer) => {
  if (integer % 15 === 0) {
    return "FizzBuzz";
  } else if (integer % 3 === 0) {
    return "Fizz";
  } else if (integer % 5 === 0) {
    return "Buzz";
  } else {
    return integer;
  }
};

module.exports = fizzBuzz;
