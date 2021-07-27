# Discovering JavaScript

## Objectives

 * Use variables in JS.
 * Use `console.log` to print the value of a variable.
 * Declare a function.
 * Return a value from a function with `return`.
 * Call a function and get its return value.
 * Use conditional statements (`if` / `else`).

For each of those code examples, you should ideally resist the temptation of pasting it inside `node`, and instead reading it and explaining what it does. Only *then* execute the code in `node` and verify your assumptions. If the result seems different than what you expected, try to understand why.

Make sure you understand the example you're looking at before jumping to the next one. If there's something that you don't understand, try to modify the example slightly, run it, and see what happens. Maybe google a bit if needed, or ask your pair. Ideally, those snippets of code should have no more mystery for you by the time you reach the end of the page.

## Exercise: variables

```javascript
let a = 2;
let b = 4;
let result = a + b;

console.log(result);

let greeting = 'Hello ';
let name = 'Makers';

console.log greeting + name;
```

1. What is printed by this program?
2. Did you find the bug? If not, run the code inside `node` to discover it. Make the fix, so the program prints "Hello Makers".

## Exercise: Functions

```javascript
let sayHello = () => {
  return 'Hello';
}

console.log(sayHello);
```
1. Find a [different way](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions) to write the function `sayHello`.
2. What will be printed by this program? Go ahead and run it in `node`. Is the result what you expected?
3. Make a fix so "Hello" is correctly printed by this program. Hint: [the first example from this section about Calling Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions) might be useful!
4. Modify the function `sayHello` so it accepts one argument, and calling `sayHello("Sarah")` displays the personalized message "Hello Sarah".
5. Bonus: can you find another way to write the `sayHello` function, without using the sign `+` at all?

When you've completed the exercises above, you can reveal the solution:

<details>
<summary>Reveal solution</summary>

```javascript

// What about this one? Hint: you might want to use the word "argument" here too.
let sayHello = function(name) => {
  return `Hello ${name}`;
}

console.log(sayHello('Sarah'));
```

</details>

In the previous solution, we've just used something called a JS *template string*. Note we're using the backtick ( \`) rather than the single or double quote characters. We can use the `${}` syntax to print the value of a variable in such template strings.

## Exercise: returning values

```javascript
let add = (a, b) => {
  a + b;
}

let result = add(2, 2); // what is the value of `result`?
console.log(result); // what will be printed here?
```
1. Run the code above and verify your assumptions. Is it printing the result you expected? 
2. Have a look at the example in the [Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions) MDN documentation. Compare it to the `add` function we've written above. Can you see what's missing in our code?
3. Modify the `add` function to get its result correctly printed in the terminal.
4. In `node`, define a function `multiply` that takes two arguments and multiply them. Then, use `console.log` to print the result of multiplying 2 and 4 using this new function.
5. Using the functions `add` and `multiply`, write the code that calculate and print the following: `2 * (4 + 4)`.

<details>
<summary>Reveal solution</summary>

```javascript
let add = (a, b) => {
  return a + b;
}

let multiply = (a, b) => {
  return a * b;
}

let result = multiply(2, add(4, 4));

console.log(result);
```

</details>

## Exercise: a more complex function

```javascript
let getNumberSign = (number) => {
  if (number == 0) {
    return 'zero';
  } else if (number > 0) {
    return 'positive';
  } 
}

console.log(isTasty(12)); // what will be printed?
console.log(isTasty(0)); // and here?
console.log(isTasty(-30)); // and here?
```

1. Modify the function `getNumberSign` to it returns the string `'negative'` when the number is negative.
2. Modify the function `getNumberSign` so it returns the string `'invalid number'` when the given value is not a number.
2. Call the function `getNumberSign` by giving the *string* `'0'`:
```javascript
getNumberSign('0');
```
3. What is the function returning? Is that what you expected? Why do you think this happens?
4. Modify the first `if` condition so it doesn't return `'zero'` when given the string '0'. Hint: you might want to use [the strict equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality).

*Note*: in all the following examples, we'll use the strict equality operator `===` (instead of `==`), as it can prevent some bugs, and is viewed as one of the best practices in the JavaScript community. In your code, you should ideally use `===` as well when doing comparisons (unless you have a good reason not to!).

## Exercise: functions and variables

```javascript
let sayHello = () => {
  return 'Hello!';
}

let greet = sayHello;
```

1. What will be the result of calling the `greet` function? Is it the same as calling `sayHello`?
2. What can you say about the relationship between those two functions?
3. Discuss with your pair - in JavaScript, do you think a function can also be a variable? Explain why. Is this different from another programming language you already know?

## Exercise: a fizzBuzz function!

1. After having been through those examples, make a list of the main differences you found so far with a another programming language you already know (maybe Ruby).
2. Try to write a `fizzBuzz` function in JavaScript. As a reminder, this function should take a number as argument, and then either:
  * Print "Fizz" if this number is divisible by 3.
  * Print "Buzz" if this number is divisible by 5.
  * Print "FizzBuzz" if this number is divisible by 5 and 3.
  * Otherwise, print the number itself.

  You will need to find how to write conditionals in JavaScript, and also how to find if a number is divisible by another. How would you write this in a language you know? Now what about JavaScript?