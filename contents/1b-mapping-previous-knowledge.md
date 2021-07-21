# Mapping previous knowledge

## Objectives

 * Use variables in JS.
 * Use `console.log` to print the value of a variable.
 * Declare a function.
 * Return a value from a function with `return`.
 * Call a function and get its return value.
 * Use conditional statements (`if` / `else`).
 * Declare a class.
 * Declare a method.

## Code examples

For each of those code examples, you should:
1. Resist the temptation of pasting it inside `node`, and instead reading it and explaining what it does. Also try to answer any question written in code comments.
2. Only *then* execute the code in `node` and verify your assumptions. If the result seems different than what you expected, try to understand why.

Make sure you understand the example you're looking at before jumping to the next one. If there's something that you don't understand, try to modify the example slightly, run it, and see what happens. Maybe google a bit if needed, or ask your pair, or someone else in the cohort. Ideally, those snippets of code should have no more mystery for you by the time you reach the end of the page.

```javascript
let a = 2;
let b = 4;
let result = a + b; // what is the value of `result`?

let greeting = 'Hello ';
let name = 'Makers';

console.log(greeting name); // what's missing in this line?
```


```javascript
// Describe what the following code is doing 
// using the words "function", "declare", "return"
let sayHello = () => {
  return 'Hello';
}

console.log(sayHello());

// What about this one? Hint: you might want to use the word "argument" here too.
let sayHello = (name) => {
  return `Hello ${name}`;
}

console.log(sayHello('Sarah'));
```
We've just used something called a JS *template string*. Note we're using the backtick ( \`) rather than the single or double quote characters. We can use the `${}` syntax to print the value of a variable in such template strings.

1. How would you write the second `sayHello` function in the last example slightly differently? If you're not sure, have a look at the previous page in the "Your first Javascript program" section.

## Exercise: simple functions

```javascript
let add = (a, b) => {
  a + b;
}

let result = add(2, 2); // what is the value of `result`?
console.log(result); // what will be printed here?
```
1. Run the code above and verify your assumptions. Is it printing the result you expected? 
2. Have a look at the example in the [Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions) MDN documentation. Compare it to the `add` function we've written above.
3. Modify the `add` function to get its result correctly printed in the terminal.
4. In `node`, define a function `multiply` that takes two arguments and multiply them. Then, use `console.log` to print the result of multiplying 2 and 4 using this new function.

## Exercise: classes

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log('Hello, my name is ' + name);
  }
}

```
1. Describe what the following code is doing using the words "class", "define", "argument", "attribute", and "method".
2. Will anything be printed on the screen if the code above is executed into `node`? Why?
3. Run the code and verify your assumptions.
4. We can create an instance of this class `Person` and call a method like this:
```javascript
let bob = new Person("Bob");

bob.speak();
```
5. Define a new method `shout` on the `Person` class. This method should return the same thing than the `speak` method, but [in uppercase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase).
6. Create a new instance of `Person` and print the result of calling the `shout` method in the terminal.

## Exercise: more functions

```javascript
let sayHello = () => {
  console.log('Hello');
}

console.log(sayHello);
console.log(sayHello());
```
1. What do you think is the difference between the two last lines? Is `sayHello` the same as `sayHello()`
2. After running the code, verify what is printed. What does it tell you about how to call functions in JS?

```javascript
let isTasty = (sugarLevel) => {
  if (sugarLevel > 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isTasty(5)); // what will be printed?
console.log(isTasty(20)); // and here?

```

```javascript
let sayHello = () => {
  return 'Hello!';
}

let greet = sayHello;
```

1. What will be the result of calling the `greet` function? Is it the same as calling `sayHello`?
2. What can you say about the relationship between those two functions?
4. Discuss with your pair (or with yourself!) - in Javascript, do you think a function can also be a variable? Explain why. Is this different from another programming language you already know?

## Exercise: a more complex function

1. After having been through those examples, make a list of the main differences you found so far with a another programming language you already know (maybe Ruby).
2. Try to write a `fizzBuzz` function in Javascript. As a reminder, this function should take a number as argument, and then either:
  * Print "Fizz" if this number is divisible by 3.
  * Print "Buzz" if this number is divisible by 5.
  * Print "FizzBuzz" if this number is divisible by 5 and 3.
  * Otherwise, print the number itself.

  You will need to find how to write conditionals in Javascript, and also how to find if a number is divisible by another. How would you write this in a language you know? Now what about Javascript?