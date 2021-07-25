# Running Javascript files

So far, we've been only writing Javascript inside our `node` REPL. This is good for trying out some ideas, or double checking that a snippet of code is working as intended. But going further, we want to be able to write and save our code to files, so we can organise our projects in a way that makes sense and use Git to commit and version our code. 

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
node hello.js
```

Simple as that!

## Exercise

1. In a file named `longest.js`, write a function `findLongest` that takes an array of names and returns the longest of them.
2. In the same file, use `console.log` to print out the result of calling this function with a few names.
3. Run this file with the command line. If done right, you should see the value of the longest name printed.