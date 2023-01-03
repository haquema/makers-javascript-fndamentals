const printHello = () => {
  console.log('Hello!');
};

// setTimeout(printHello, 3000);

const executeAfterDelay = (delayTime, givenFunction) => {
  setTimeout(givenFunction, delayTime * 1000);
};

executeAfterDelay(5, printHello);