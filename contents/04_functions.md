
# Functions

## Objectives

 * Declare a function.
 * Return a value from a function with `return`.

In JavaScript, we can define a function with the following syntax (a function is the same thing as a Ruby "method", but it lives on its own, without being attached to a specific object):

```js
// this function accepts no arguments
const printMessage = () => {
  console.log('Hi there!');
}

// this function accepts one
const printMessage = (message) => {
  console.log(message);
}
```

## Exercise - a simple function

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
  When writing code, prefer the syntax used in this module. But when reading code, online, remember those equivalences.

## Additional resources

 * [Defining functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions)

[Next Challenge](05_returning_values.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_functions.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_functions.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_functions.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_functions.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/04_functions.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
