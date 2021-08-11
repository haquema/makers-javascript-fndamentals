# Running JavaScript files

So far, we've been only writing JavaScript inside our `node` REPL. This is good for trying out some ideas, or double checking that a snippet of code is working as intended. But going further, we want to be able to write and save our code to files, so we can organise our projects in a way that makes sense and use Git to commit and version our code. 

## Objectives

 * Write your JS code to a file.
 * Run a JS file from the command line using node.

## Running a file from the terminal

Well, good news! Much like for other languages, we can run JS contained in files from the command line, again using `node`. Let's try with an exemple from earlier:

```javascript
let sayHello = (name) => {
  return `Hello ${name}`;
}

console.log(sayHello('Sarah'));
```

Save this code in a file called `hello.js`, and you can now run it from the command line using `node`:

```
$ node hello.js
```

Simple as that!

## Exercise

1. In a file named `longest.js`, write a function `findLongest` that takes an array of names and returns the longest of them.
2. In the same file, use `console.log` to print out the result of calling this function with a few names.
3. Run this file with the command line. If done right, you should see the value of the longest name printed.

## Exercise: code review

Someone from your team just asked you to review their code. In one of the JavaScript files, there is the following function:

```javascript
let isValidLength = (phoneNumber) => {
  let validLength = 10;
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