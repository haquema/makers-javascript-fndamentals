# Discovering JavaScript

In this section, you'll be discovering JavaScript's syntax and find some concepts you already know.

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

1. In `node`, declare two variables — `a` is 4 and `b` is 6.
2. Using `console.log`, print the result of:
  * a + b (should print 10)
  * a * b (should print 24)

## Exercise: debugging

```javascript
let greeting = 'Hello ';
let name = 'Makers';

console.log greeting + name;
```

1. Can you find the bug? If not, run the code inside `node` to discover it. Make the fix, so the program prints "Hello Makers".

## Exercise: Functions

1. Define a function `sayHello` so, when called in `node`, it returns the string `'Hello'`:

```javascript
> sayHello();
'Hello'
```

2. Someone is trying to call the function `sayHello` and print its result using `console.log` — however, it doesn't work as expected: why? Make the fix so it prints the return value of the function, as expected.

```javascript
console.log(sayHello);
```

3. Modify the function `sayHello` so it accepts one argument, and calling `sayHello('Sarah')` displays a personalized message:
```javascript
> sayHello('Sarah');
'Hello Sarah'
```

4. Bonus: can you find another way to write the `sayHello` function, without using the sign `+` to concatenate the strings?

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

1. In `node`, define a function `add` that takes two arguments and return their sum, so we can run the following:
```javascript
> add(2, 4);
6

> add(0, 1);
1
```

2. Your pair wrote this function, but it doesn't seem to work as expected — can you see why? You can have a look at the example in the [Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions) on the MDN website.

```javascript
let add = (a, b) => {
  a + b;
}
```


3. In `node`, define a function `multiply` that takes two arguments and return their product, so we can run the following:
```javascript
> multiply(2, 4);
8

> multiply(0, 1);
0
```

4. Using the functions `add` and `multiply`, write the code that calculate and print the following: `2 * (4 + 4)`.

## Exercise: a more complex function

To complete the following, you will have to:
 * use `if`, `else if` and `else` to write conditionals.
 * use the strict equality operator `===` to compare values.

1. Define a function `getNumberSign` that takes a number and returns either 'zero', 'positive' or 'negative' depending on its sign:

```javascript
> getNumberSign(3);
'positive'

> getNumberSign(0);
'zero'

> getNumberSign(-5);
'negative'
```

2. Modify the function so it returns the string 'invalid number' if the given value is not a number. Hint: you might want to use [the strict equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

```javascript
> getNumberSign('2');
'invalid number'
```

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