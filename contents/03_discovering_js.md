# Discovering JavaScript

In this section, you'll be discovering JavaScript's syntax and find some concepts you already know.

<!-- OMITTED -->

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
> const greeting = 'Hello ';
> const name = 'Makers';

> console.log greeting + name;
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

3. Modify the function `sayHello` so it accepts one argument, and calling `sayHello('Sarah')` displays a personalised message:
```javascript
> sayHello('Sarah');
'Hello Sarah'
```

4. Bonus: can you find another way to write the `sayHello` function, [without using the sign `+` to concatenate the strings?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#syntax)

When you've completed the exercises above, you can reveal the solution:

<details>
<summary>Reveal solution</summary>

```javascript

// What about this one? Hint: you might want to use the word "argument" here too.
const sayHello = (name) => {
  return `Hello ${name}`;
}

console.log(sayHello('Sarah'));
```

</details>

In the previous solution, we've just used something called a JS *template string*. Note we're using the back tick ( \`) rather than the single or double quote characters. We can use the `${}` syntax to print the value of a variable in such template strings.

## Exercise: returning values

<!-- OMITTED -->

1. In `node`, define a function `add` that takes two arguments and return their sum, so we can run the following:
```javascript
// If your function is correct, it should give the following results in the REPL:

> add(2, 4);
6

> add(0, 1);
1
```

2. Your pair wrote this function, but it doesn't seem to work as expected — can you see why? You can have a look at the example in the [Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions) on the MDN website.

```javascript
const add = (a, b) => {
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

4. Using the functions `add` and `multiply`, write the code that calculate and print the following: `2 * (4 + 4)`. You should get the correct result (16).

<details>
<summary>Reveal solution</summary>

```javascript
const add = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b;
}

console.log(multiply(2, add(4, 4)));
```

</details>


## Exercise: shorthand syntax

The previous functions `add` and `multiply` are simple enough that [they can be rewritten using a shorthand syntax](https://www.javascripttutorial.net/es6/javascript-arrow-function/): modify the code so those two functions do not use the `return` keyword (and do not need curly brackets `{` and `}` as well), but still work as expected.

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

*Note*: in all the following examples, we'll use the strict equality operator `===` (instead of `==`), as it can prevent some bugs, and is viewed as one of the best practices in the JavaScript community. In your code, you should ideally use `===` as well when doing comparisons (unless you have a good reason not to!).

<details>
<summary>Reveal solution</summary>

```javascript
const getNumberSign = (number) => {
  if (number === 0) { // we use '===' instead of '=='
    return 'zero';
  } else if (number > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
}
```

</details>

## Exercise: code review

Someone from your team just asked you to review their code. In one of the JavaScript files, there is the following function:

```javascript
const isValidLength = (phoneNumber) => {
  const validLength = 10;
  if (phoneNumber.length == validLength) {
    true;
  } else {
    false;
  }
}
```

1. What comment(s) would you make to improve this code, based on what you learned on the previous page?
2. When running the code, something doesn't work as expected. What fix can you suggest to solve the problem? You'll know the function works if you manage to have the expected output when running in `node`:

```javascript
> isValidLength('00');
false

> isValidLength('0011223344');
true
```

## Exercise: a fizzBuzz function!

To complete this exercise you'll need to:
 * Define a function.
 * Return a value from a function.
 * Use conditionals.
 * Use the modulo operator `%` to calculate the reminder of a division.
 * Use `console.log` to print values to the terminal.
 * Use [a for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

1. Write a `fizzBuzz` function in JavaScript. As a reminder, this function should take a number as argument, and then either:
  * Return "Fizz" if this number is divisible by 3.
  * Return "Buzz" if this number is divisible by 5.
  * Return "FizzBuzz" if this number is divisible by *both* 5 and 3.
  * Otherwise, Return the number itself.

2. [Using a for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration), iterate through numbers from 1 to 50 and print out the string `'Fizzbuzz result for X is Y'` (where X is the number, and Y the result of calling the `fizzBuzz` function with this number).

If your code is correct, you should get the following output:

```
Fizzbuzz result for 1 is 1
Fizzbuzz result for 2 is 2
Fizzbuzz result for 3 is Fizz
Fizzbuzz result for 4 is 4
Fizzbuzz result for 5 is Buzz
Fizzbuzz result for 6 is Fizz
Fizzbuzz result for 7 is 7
Fizzbuzz result for 8 is 8
Fizzbuzz result for 9 is Fizz
Fizzbuzz result for 10 is Buzz
(...)
Fizzbuzz result for 15 is FizzBuzz
(...)
```

<details>
<summary>Reveal suggested solution</summary>

```javascript
const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}

for (let i = 1 ; i <= 50 ; i++) {
  console.log(`Fizzbuzz result for ${i} is ${fizzBuzz(i)}`);
}
```

</details>

## Exercise — passing functions

<!-- OMITTED -->

You've previously learned how to declare a function, and you've also seen that a function can be assigned just like a variable. To complete this exercise, you'll have to pass a function *as an argument* to another function.

1. Declare a function `notifyByEmail` that accepts an email address as argument and returns the string `'Email sent to: <EMAIL>'`.
2. Declare a function `notifyByText` that accepts a phone number (as a string) as argument and returns the string `'Text sent to: <PHONE NUMBER>'`.
3. Now declare a generic function `notify` that accepts a first string argument (either an email or a phone), and *the function to use* in second argument. This function should only rely on calling the function passed in second argument, not declare a string by itself.
4. Use the function `notify` with the two previous functions to:
    * send an email to `hello@makers.tech.test` and get the expected output.
    * send a text to `+10000000000` and get the expected output.

<details>
<summary>Reveal suggested solution</summary>

```javascript
const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));
```
</details>

## A note about syntax

In this module, we're using mainly "modern" JavaScript syntax — which is, ES6 syntax or versions released after 2015. Most JavaScript runtime (including Node) are compatible with older syntax versions, and both syntax can be mixed in the same file. It's important to note that, when searching online for resources and examples, you'll find some code using a different, older, syntax. Here are two examples on declaring variables and functions:

 * `var` is the "legacy" keyword to declare a variable — it's equivalent to `let`:
    ```js
    var total = 120;
    
    // equivalent to
    let total = 120;
    ```
 * The `function` keyword can be used to declare functions:
    ```js
    function add(a, b) {
      return a + b;
    }

    // equivalent to
    const add = (a, b) => {
      return a + b;
    }

    // also equivalent to
    var add = function (a, b) {
      return a + b;
    }
    ```
  Reading and using a mix of different syntaxes can quickly be confusing if you're not used to JavaScript yet — so when writing code, prefer the syntax used in this module's examples. But when reading code, online, remember those equivalences.

## About objects

In other languages, you might have learned to think about objects as "instances of a class" - for example, in the following Ruby code, `bike` would be an object (instance of the `Bike` class):

```ruby
bike = Bike.new
```

However, in JavaScript, "object" usually refers to a type of value, similar to a Ruby hash. Here's an example of a JavaScript object:

```javascript
const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);

```

## Exercise: accessing object values

An object is composed of *key-values* pairs. Those values can be any primitive values such as strings or numbers, as in the example above, or they can be more complex things, such as other objects, arrays, or even functions:
```javascript
const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};
```

1. Print the value of the `city` attribute ('London').
2. Print the value of the second `hobbies` value ('tennis').

[Next Challenge](04_arrays.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_discovering_js.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_discovering_js.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_discovering_js.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_discovering_js.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_discovering_js.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
