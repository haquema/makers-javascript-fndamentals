# Variables and getting visibility

In this section, you'll be discovering JavaScript's syntax and find some concepts you already know.

<!-- OMITTED -->

## Objectives

 * Use variables in JS.
 * Use `console.log` to print the value of a variable.

For each of those code examples, you should ideally resist the temptation of pasting it inside `node`, and instead reading it and explaining what it does. Then execute the code in `node` and verify your assumptions.

Make sure you understand the example you're looking at before jumping to the next one. Ideally, those snippets of code should have no more mystery for you by the time you reach the end of the page.

## Use console.log to get visibility

In JavaScript, we can print **to the terminal** arbitrary strings and variables using `console.log`, like this:
```javascript
console.log('Hello there');

age = 25;
console.log('I am ' + age + 'years old');

age = 27;
console.log('I am now ' + age + 'years old!');
```

We can use the `const` keyword to declare a value as "constant", if we're not planning to change its value later — usually, prefer using `const` if you don't need to reassign a variable, as it can prevent a few different kind of errors in your programs (it also communicates that this value won't need to change).

```javascript
const name = 'Charlie';

name = 'Jess'; // will throw 'TypeError: Assignment to constant variable.'
```

## Exercise: variables


### Questions

1. In `node`, declare two variables — `a` with value 4 and `b` with value 6.
2. Using `console.log`, print the result of:
  * `a + b` (should print 10)
  * `a * b` (should print 24)

## Exercise: debugging

Can you find the problem in the following program? Make the fix, so the code prints "Hello Makers" when run into `node`.

```javascript
> const greeting = 'Hello ';
> const name = 'Makers';

> console.log greeting + name;
```


[Next Challenge](04_functions.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_variables_and_visibility.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_variables_and_visibility.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_variables_and_visibility.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_variables_and_visibility.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/03_variables_and_visibility.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
