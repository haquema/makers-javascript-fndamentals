const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const messageGenerator = (exampleName) => {
  return `Hi ${exampleName.name}! ${exampleName.discount}% off our best candies for you today!`;
};

const generateMessages = (nameObject) => {
  return nameObject.map(messageGenerator);
};

console.log(generateMessages(namesAndDiscounts));