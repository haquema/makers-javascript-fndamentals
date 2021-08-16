# Testing in JavaScript

Your friend's website is now online and delivering candies all over the world. Everything is great. Late at night, you decide to make a few improvements to the search function, and you update the website before going to have a well deserved night of sleep. A few hours later, the phone rings: your friend tells you there's a problem on the website — customers cannot search for candies anymore!

You wake up groggy and have a first cup of well-needed coffee before you open your laptop to check the website, which is not working. You have a look at the code you've deployed just before going to sleep, trying to understand what's wrong.

```javascript
const searchCandies = (searchPrefix, maxPrice) => {
  return candies
    .filter(candy => {
      return candy[1].toLowerCase().startsWith(
        searchPrefix.toLowerCase()
      );
    }).filter(candy => {
      return candy[1] <= maxPrice;
    }).map(candy => candy[0]);
}
```

1. Try this function again in `node`. What is wrong with it?

You realise your mistake, quickly fix it and update the website. Phew, everything seems to be working again! How could such a silly error happen to you? On top of this, this is not nice for your friend's business.

If you think mistakes such as this one happen rarely in the "real world" — think twice. This kind of small errors is far too common in software, simply because code is written by humans, and humans do make mistakes. However, there are ways to avoid or mitigate such errors before the code is updated and impact users — as you might have guessed, one of the most important ways is to test your code and use TDD in your development process.

In this section, you'll learn about how to test your JavaScript code with simple exercises, and you'll then work on writing robust tests for the `searchCandies` function above, so it never puts you out of a good night's sleep again.

## Objectives

 * Install a package using `npm`.
 * Write a simple test case with Jest.
 * Export a function using `module.exports`
 * Require an "exported" function from another file.
 * Run a test suite using Jest. 
 * Test a more complex function with multiple test cases with Jest.

## Installing Jest

In most programming languages, we can use libraries, which are made of code already written for us to solve a specific problem. For example, you might have one library to easily manipulate dates. Another good example is a testing library, which allows us to run automated tests against our code. We'll install and use such a library in this section.

In JavaScript, such libraries are called `packages` and are listed in a file called `package.json`, located in the project directory root. To create an empty `package.json` file, run the following command inside your project directory:
```
$ npm init
```

You will have to answer a bunch of questions about your program - but they don't really matter for now. You can skip them all pressing `enter` until your `package.json` file is generated. If you're curious though, feel free to fill some of the required inputs and see how this affects the `package.json` file!

You should now have something that looks like this:
```json
{
  "name": "js-week",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {},
  "author": "",
  "license": "ISC",
  "bugs": {},
  "homepage": ""
}
```

We're going to install our first package: `jest`. We'll use it to run unit tests for our JS code. To install it, run `npm install jest` inside the project directory.

That might be the time for a quick tea or coffee break. If everything worked, you should see an ouput similar to this one inside your terminal:

```
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN jest-1@1.0.0 No description
npm WARN jest-1@1.0.0 No repository field.

+ jest@27.0.6
added 328 packages from 269 contributors and audited 328 packages in 33.686s

24 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Exercise: your first test

When running `jest` inside the terminal, we should see a message such as "No tests found, exiting with code 1". There are no tests written yet. Let's write one!

We're going to test-drive a function called `add` which will take two numbers as arguments and, perhaps unsurprisingly, *add* them together. First, let's create one file called `add.test.js` (the part `.test` is a naming convention so Jest can find out in which files are the tests).

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

1. We've come up above with the basic scaffolding, using `it` to define the test case - fill in the the blanks (the inside of this test case), using Jest matchers to write a test. You'll need to [use the Jest syntax](https://jestjs.io/docs/expect#tobevalue) to do this.

2. Write a second test case (a second `it` "block") testing with different numbers — perhaps adding 0 and 5.
3. Write the function `add` into its file `add.js` so it satisfies the tests we just wrote.

At this point, we should now have two files, one containing the function (`add.js`) and the other one the tests for this function (`add.test.js`). If we try to run Jest now, and we've written our code correctly, we should expect the tests to pass. Let's see what happens:
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

## The missing export

In the previous exercise, we needed a way to `require` our function in our test file. In JavaScript, this is done using something called `module.exports` and `require`. Those two things are the two halves of the solution - here's how we use it to "export" a function and "require" it from another file:

```javascript
// sayHello.js

let sayHello = () => {
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

Note: we're using `const` instead of `let` when requiring the function. The behaviour is the same than `let` - it declares a variable - however `sayHello` cannot be reassigned to something else later. This is a good practice in idiomatic JavaScript to always use `const` for functions that are required from other files, so we'll use it rather than `let`.

Once this is done, we can run `jest` again, and we should see our test passing! Congratulations, you've just wrote your first Jest test!

## Exercise: testing the fizzBuzz function

We're going to write a test for the `fizzBuzz` function we defined earlier — we'll name the file containing the tests `fizzbuzz.test.js`.

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

1. Initialize a new project directory with a `package.json` file and install Jest.
2. Write one test case for each acceptance criteria above, using one `it` block for each, and matchers to test the function's return value.
3. Write the `fizzBuzz` function in the file `fizzbuzz.js` to the four tests pass.
4. Modify the file `fizzbuzz.js` so, when run from the command line, it prints the result of calling the `fizzBuzz` function for the numbers from 1 to 50 (hint: you can use [a `for` loop to do this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)).

If you've done everything correctly, you should see something resembling the following output:

```
$ node fizzbuzz.js

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
...
```

## Exercise — testing the `searchCandies` function

You're now ready to write tests for the function at the beginning of the file. You can save it to a file called `searchCandies.js` and write the test file as `searchCandies.test.js`. You may use the acceptance criteria for this function to write the Jest test cases:

```javascript
> searchCandies('Ma', 10);
[ 'Mars', 'Maltesers' ]

> searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
[ 'Mars' ]

> searchCandies('S', 10); 
[ 'Skitties', 'Skittles', 'Starburst' ]

> searchCandies('S', 4); 
[ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4

> searchCandies('s', 4); 
[ 'Skitties', 'Skittles' ] // works with lowercase search prefix too
```

### Questions

1. Write the tests for the `searchCandies` function and make sure they pass — there should be at least one test case for each example in the acceptance criteria input/output above.
2. Try to break the `searchCandies` function so at least one test doesn't pass anymore.

Note: you might need to use the `.toEqual()` matcher rather than `.toBe()` — and research a bit how those two are different.

Once completed, you should be able to run `jest --verbose` from the terminal and get an ouput similar to this one:

```bash
$ jest --verbose

PASS  ./searchCandies.test.js
  searchCandies
    ✓ should return Mars and Maltesers (2 ms)
    ✓ should return only Mars
    ✓ should return Skitties, Skittles and Starbust
    ✓ should return Skitties and Skittles (1 ms)
    ✓ should return Skitties and Skittles for lowercase "s"

Test Suites: 1 passed, 1 total
```

## About TDD

You might have noticed that, although we wrote tests, we didn't follow a strict TDD process — we wrote the `searchCandies` function before writing its tests. Ideally, we would have written the tests before, but sometimes it's not obvious to know what to test, and you might need to write a first "draft" version of the code first to have a clearer picture of what should be tested.

Writing tests *before* the code is something that you'll get better with experience, so always try to have this in mind when writing code, even if it might feel like working backwards. In the case of our `searchCandies` function, one way to write tests first would have been to look at the acceptance criteria and "translate" them into Jest tests, before writing the actual function.