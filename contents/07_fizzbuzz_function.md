
# FizzBuzz in JS

Let's write FizzBuzz in JS, using what you've learned to this point.

To complete this exercise you'll need to:
 * Define a function.
 * Return a value from a function.
 * Use conditionals.
 * Use the modulo operator `%` to calculate the reminder of a division.
 * Use `console.log` to print values to the terminal.
 * Use [a for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Exercise

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


[Next Challenge](08_passing_functions.md)

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/07_fizzbuzz_function.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/07_fizzbuzz_function.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/07_fizzbuzz_function.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/07_fizzbuzz_function.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/07_fizzbuzz_function.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
