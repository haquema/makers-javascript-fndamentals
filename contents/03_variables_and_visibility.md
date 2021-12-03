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

const age = 25;
console.log('I am ' + age + 'years old');
```

## Exercise: variables

We can use the `const` keyword to declare a variable and assign a value to it. Be careful to not omit this keyword, as otherwise JS will "think" you're trying to reassign an existing variable, and will complain that this variable doesn't exist yet.

```javascript
name = 'Charlie'; // wrong - we will get an error
const name = 'Charlie'; // ok
```

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
