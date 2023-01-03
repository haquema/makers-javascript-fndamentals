const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (phoneNumberArray) => {
  return phoneNumberArray.filter(checkLength);
};

const messageGenerator = (exampleName) => {
  return `Hi ${exampleName}! 50% off our best candies for you today!`;
};

const generateMessages = (nameArray) => {
  return nameArray.map(messageGenerator);
};


const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));


console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out


console.log(filterLongNumbers([]));

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

console.log(generateMessages(names));