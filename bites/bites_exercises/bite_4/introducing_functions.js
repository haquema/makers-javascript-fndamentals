const printMessage = (name) => {
  console.log('Hi there ' + name);
};

const returnFour = () => {
  return 4;
};

const something = returnFour();
// will not return 4 because the function needs to have brackets

console.log(something);
