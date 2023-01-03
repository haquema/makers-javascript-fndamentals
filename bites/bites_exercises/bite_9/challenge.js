const addToBatch = (givenArray, givenNumber) => {
  if (givenArray.length >= 5) {
    return givenArray;
  } else {
    return givenArray.concat(givenNumber);
  }; 
};

console.log(addToBatch([1], 3));
console.log(addToBatch([1, 2, 3], 4));
console.log(addToBatch([], 8));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));