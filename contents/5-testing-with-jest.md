# Testing in Javascript

## Objectives

 * Install a package using `npm`.
 * Write a simple test case with Jest.
 * Export a function using `module.exports`
 * Require an "exported" function from another file.
 * Run a test suite using Jest. 
 * Test a more complex function with multiple test cases with Jest.

## Installing Jest

In most programming languages, we can use libraries, which are made of code already written for us to solve a specific problem. For example, you might have one library to manipulate dates, and to quickly calculate how many days have passed since, let's  say, the 10th of March 2018. Another common example is a library to write automated tests, such as RSpec in Ruby.

In Ruby, for example, those libraries are called `gems` and we use the `bundle` command to install them. We list those gems inside the `Gemfile`.

In Javascript, they are called `packages` and are listed in a file called `package.json`.

To create an empty `package.json` file, run the following command inside your project directory:
```
npm init
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

### Questions
1. Have a look at the project directory. Can you see any new files or directories? From this, what assumption can you make about the way the `npm` command is managing Javascript packages? 

## Exercise: your first test

When running `jest` inside the terminal, we should see a message such as "No tests found, exiting with code 1". There are no tests written yet. Let's write one!

We're going to test a function called `add` which will take two numbers as arguments and, perhaps unsurprisingly, *add* them together. First, let's create one file called `add.test.js` (the part `.test` is a naming convention so Jest can find out in which files are the tests).

```
touch add.test.js
```

Below is the basic scaffolding for out test - fill in the the blanks (`__`), one with the call to the `add` function, and one with the actual result that the function should return.

```javascript
describe('add', () => {
  it('adds 2 and 2', () => {
    // fill the two blanks
    // - one should be the result of calling the function `add` with 2 and 2
    // - the other the expected result (...4, in case you were wondering!)
    expect(__).toEqual(__);
  });
});
```

We can now write the function in its own file - let's call it `add.js`.
```
touch add.js
```

```javascript
let add = (a, b) => {
  return a + b;
}
```

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

1. Based on your knowledge from another programming language you know, what is missing in our test? How could we get Jest to "know" about our `add` function?

## The missing export

If you've mentioned something along the lines of "require" or "include", then you're on the right path. We need a way to `require` our function in our test file. In Javascript, this is done using something called `module.exports` and `require`. Those two things are the two halves of the solution - here's how we use it to "export" a function and "require" it from another file:

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

Note: we're using `const` instead of `let` when requiring the function. The behaviour is the same than `let` - it declares a variable - however `sayHello` cannot be reassigned to something else later. This is a good practice in idiomatic Javascript to always use `const` for functions that are required from other files, so we'll use it rather than `let`.

Using this new learning, do the following things:
1. Modify the file `add.js` to export the `add` function.
2. Modify the file `add.test.js` to require the `add` function from the `add.js` file.

Once this is done, we can run `jest` again, and we should see our test passing! Congratulations, you've just wrote your first Jest test!

## Exercises

1. Earlier, you've learned how to run a JS file from the command line. Modify the file `add.js` in such way that, when it is run from the command line, it prints to the terminal the result of adding 2 and 3 (by calling the `add` function).
2. Now run the `add.js` file from the command line. If you've written the correct code, you should see `5` output on the terminal.

## Exercise: testing the fizzBuzz function

We're going to write a test for the `fizzBuzz` function we defined earlier. 

Here's a basic skeleton of our test file, that we'll call `fizzbuzz.test.js`:

```javascript
// fizzbuzz.test.js

describe('fizzBuzz', () => {
  it('should return "Fizz" if divisible by 3', () => {

  });

  it('should return "Buzz" if divisible by 5', () => {
    
  });

  it('should return "FizzBuzz" if divisible by 15', () => {
    
  });

  it('should just return the number otherwise', () => {
    
  });
});
```

1. Using what you've learned previously about the syntax of Jest to write a test for the `add` function, write four assertions (`expect(...).toEqual(...)`) to test those four different cases for the `fizzBuzz` function.
2. Now write the fizzBuzz function inside a file named `fizzbuzz.js`. 
3. Remember our test file needs to know about the `fizzBuzz` function in order to test it. Use `module.exports` and `require`, like seen previously, to import the `fizzBuzz` function in the test file.
4. Make sure the tests pass.
5. Using what you've learned previously, modify the file `fizzbuzz.js` so, when run from the command line, it prints the result of calling the `fizzBuzz` function for the numbers from 1 to 50 (hint: you can use [a `for` loop to do this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for))

If you've done everything correctly, you should see something resembling the following output:

```
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