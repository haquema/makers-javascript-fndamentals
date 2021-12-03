# Testing the fizzBuzz function

## Objectives

 * Export a function using `module.exports`
 * Require an "exported" function from another file.
 * Run a test suite using Jest. 
 * Test a more complex function with multiple test cases with Jest.

We're going to write a test for the `fizzBuzz` function we defined earlier — we'll name the file containing the tests `fizzbuzz.test.js`.

## Exercise

To complete this exercise, you'll need to: 
  * use `npm init` and `npm install` to setup a project directory and install a library.
  * Use Jest's `describe` and `it` syntax.
  * use Jest matchers you've just learned to test the different cases above.
  * use `module.exports` and `require`, like seen previously, to import the `fizzBuzz` function in the test file.

## Questions

Here's our acceptance criteria for this function:
 * it should return "Fizz" if the number is divisible by 3 (e.g 3 or 9)
 * it should return "Buzz" if  the number is divisible by 5 (e.g 5 or 10)
 * it should return "FizzBuzz" if the number is divisible by 15 (e.g 15 or 30)
 * it should just return the number the number is otherwise

1. Initialise a new project directory with a `package.json` file and install Jest.
2. In a file `fizzbuzz.test.js`, Write one test case for each acceptance criteria above, using one `it` block for each, and matchers to test the function's return value.
3. Write the `fizzBuzz` function in the file `fizzbuzz.js` to the four tests pass.

<details>
<summary>Reveal suggested solution</summary>

Contents of `fizzbuzz.test.js`:
```javascript
const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('returns Fizz when number is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz when number is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns FizzBuzz when number is 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns the number when otherwise', () => {
    expect(fizzBuzz(2)).toBe(2);
  });
});
```
</details>

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08d_testing_fizzbuzz.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08d_testing_fizzbuzz.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08d_testing_fizzbuzz.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08d_testing_fizzbuzz.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08d_testing_fizzbuzz.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
