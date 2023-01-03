const names = ['Aziz', 'Mike', 'Kevin']

// console.log(names.length);
// console.log(names[1]);
// const newNames = names.concat('Eliza');
// console.log(newNames);

let numbersOneToTen = [];

let i = 1

while (i <= 10) {
  numbersOneToTen = numbersOneToTen.concat(i);

  i += 1;
};

console.log(numbersOneToTen);

let sum = 0

numbersOneToTen.forEach(number => {
  sum += number;
})

console.log(sum);
