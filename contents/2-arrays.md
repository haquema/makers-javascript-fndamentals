# Arrays and functions

Javascript Arrays work in a similar way to other languages - they are list of values. We can use them to store all sorts of interesting things - numbers, strings, etc. Even functions!

## Objectives

 * Declare an array in JS.
 * Add elements to an array.
 * Get the length of an array.
 * Iterate over an array.
 * Execute some code for each element of an array.
 * Give a function as an argument to another function.

## Exercise: a first array

```javascript
let oddNumbers = [1, 3, 5];

console.log(oddNumbers);

```

1. Run the above in `node` and add the following number 7 to it.
2. Find how to print the length of the array using `console.log`.
3. Declare a new array called `evenNumbers`, containing the first few even numbers.

## Exercise: iterating through elements

```javascript
// What is this doing? Execute it inside `node` if needed.
oddNumbers.forEach((n) => console.log(n);

// Is this doing the same thing? Why do you think the brackets {} were added?
oddNumbers.forEach((n) => {
  console.log(n)
});

// Is this doing the same thing? If yes, what is it different in the way the code is written?
let printNumber = (n) => console.log(n);

oddNumbers.forEach(printNumber);

```

## Exercise: an array of names

Do the following in `node`:
1. Declare an *array* called `names` containing a few people's names, such as `'Anna'`.
2. Declare a *function* named `sayHello` that, when called with an argument `'Laura'`, will print `'Hello Laura'`.
3. For each element of the `names` array, print a hello message using the function `sayHello`. If it works, you should see something like this printed in the terminal:
```
Hello Anna
Hello Laura
Hello <name>
```

## Exercise: an array of prices

Do the following in `node`:
1. Declare an array called `prices` containing two values, `4.99` and `9.99`.
2. Add a new value `12.99` to this array.
3. Use `console.log` to print the length of this array.
4. Using `forEach`, calculate the total of adding all the prices together. Hint: you might need to have an extra variable to keep the total in memory.
5. Use `console.log` to print the total price after calculation. If your code is correct, you should have the following output:
```
27.97
```

## A world of functions

We've previously wrote this code, to print all the elements of an array:

```javascript
let printNumber = (n) => {
  console.log(n);
}

oddNumbers.forEach(printNumber);
```

The `forEach` function will call `printNumber` for each number in the array `oddNumbers`. You can notice `printNumber` is a function, but so is `forEach` - we've given one function as an argument to another function. 

In Javascript, this concept is very powerful - you might read about it in the terms of "higher-order functions". A *higher-order function* is a function that, like `forEach`, takes another function in its arguments in order to do its work.

Remember that in Javascript, functions are considered as values of their own kind, like numbers, strings or arrays. Hence we can give functions to other functions. 

## Exercise

Do the following in `node`:
1. Declare an array `numbers` containing the first numbers until 10.
2. Declare a function `isOddNumber`, taking one argument, which returns `true` *if the number given as argument is odd*.
3. Using [Array's filter method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) and the function `isOddNumber`, creates a new array `oddNumbers` containing only odd numbers.
4. Print out the `oddNumbers` to verify that your code is working - it should display: `[ 1, 3, 5, 7, 9 ]`.
5. Reading the documentation of the `filter` method and seeing the result of your code, how would you explain `filter` is working? How does it use the `isOddNumber` function?
6. What term recently learned can you use to qualify the function `filter`?

## Finding the bug

After working through the last example, a student decided to modify it to compute *even* numbers instead of odd ones. However, when they run the code, something is not working.

```javascript
let numbers = [0,1,2,3,4,5,6,7,8,9,10];

let isEvenNumber = (number) => {
  number % 2 == 0;
}

let evenNumbers = numbers.filter(isEvenNumber);
```

1. Run the code yourself. What is the issue with `evenNumbers`?
2. Can you spot the bug with this code? Make the fix so it runs as expected.