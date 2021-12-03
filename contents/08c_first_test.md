# Your first test

## Objectives

 * Test-drive a simple function with Jest.
 * Export a function using `module.exports`
 * Require an "exported" function from another file.
 * Run a test suite using Jest. 

When running `jest` inside the terminal, we should see a message such as "No tests found, exiting with code 1". There are no tests written yet. Let's write one!

We're going to test-drive a function called `add` which will take two numbers as arguments and, perhaps unsurprisingly, *add* them together.

## Exercise

First, let's create one file called `add.test.js` (the part `.test` is a naming convention so Jest can find out in which files are the tests).

```
$ touch add.test.js
```

Below is the basic scaffolding for a test suite, using the `describe` function:

```javascript
describe('add', () => {
  // test cases
});
```

As usual when writing tests, we need to think *what is it* we want to test or verify. Let's imagine for a second that the function `add` exists, and that we can call it inside the REPL. How could we test that this function is working? We could simply call it with some given arguments and verify the result is correct:

```javascript
add(2, 2); // given we call `add` with 2 and 2, it should return 4
```

We can then translate this into a proper test case, using the `it` function:

```javascript
describe('add', () => {
  it('adds 2 and 2', () => {
    // TODO: write test
  });
});
```

To complete the rest of this exercise, you will need to:
  * use [Jest test matchers](https://jestjs.io/docs/using-matchers) (such as `expect().toBe()`)
  * use `module.exports` and `require` to require a JavaScript "module".

## Questions

1. We've come up above with the basic scaffolding, using `it` to define the test case - fill in the blanks (the inside of this test case), using Jest matchers to write a test. You'll need to [use the Jest syntax](https://jestjs.io/docs/expect#tobevalue) to do this.

2. Write a second test case (a second `it` "block") testing with different numbers — perhaps adding 0 and 5.
3. Write the function `add` into its file `add.js` so it satisfies the tests we just wrote.

At this point, we should now have two files, one containing the function (`add.js`) and the other one the tests for this function (`add.test.js`). If we try to run Jest now, we should expect the tests to pass. Let's see what happens:
```
$ jest

 FAIL  ./add.test.js
  add
    ✕ adds 2 and 2 (1 ms)

  ● add › adds 2 and 2

    ReferenceError: add is not defined
```

Something doesn't seem right. Jest doesn't seem to know about our `add` function.

4. Have a look at [the first example from Jest's documentation](https://jestjs.io/docs/getting-started) — write the missing code so our function `add` is defined in our tests.

<details>
<summary>Reveal suggested solution</summary>

1. Contents of `add.js`:
```javascript
const add = (a, b) => {
  return a + b;
}

module.exports = add;
```

2. Contents of `add.test.js`:
```javascript
const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });
});
```
</details>

## The missing export

In the previous exercise, we needed a way to `require` our function in our test file. In JavaScript, this is done using something called `module.exports` and `require`. Those two things are the two halves of the solution - here's how we use it to "export" a function and "require" it from another file:

```javascript
// sayHello.js

const sayHello = () => {
  return 'Hello';
}

// we're "exporting" the sayHello function
module.exports = sayHello;
```
```javascript
// another file

const sayHello = require('./sayHello');

// we can now use the sayHello function
sayHello();
```

Once this is done, we can run `jest` again, and we should see our test passing! Congratulations, you've just wrote your first Jest test!


<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08c_first_test.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08c_first_test.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08c_first_test.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08c_first_test.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/javascript-fundamentals&prefill_File=contents/08c_first_test.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
