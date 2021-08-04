# Asynchronous JavaScript

Here's a hard truth: even if we would have the fastest, most efficient computer ever to run our programs and web applications, our programs could still be slow. 

Why? Let's take an example: imagine you're deciding to browse your favourite social media. The homepage might load instantly but, in the first few fractions of time before everything is completely loaded, you can still see "empty" parts of the page. Some Javascript code is fetching the relevant data to display behind the scenes, and replaces those empty parts once the data is loaded. But the data travels on the network, which could be slow and unreliable. Maybe your connection will be down, in which case this data might never come back to your computer!

The key thing to understand is that some parts of our programs will need to execute not right now, but at a *later time* in the future, when some conditon will be met. This condition might be to receive some data back from a remote server, or it can be waiting for a delay, etc.

However, we *do not* want to block the rest of our program until the data has been received. Going back to the example above, you wouldn't want the website to freeze while the data is still loading! This kind of behaviour is called *asynchronous programming* — it means we are able to execute some part of the code at a *later time*, without blocking the code that needs to execute before.

## An Asynchronous Example

```javascript
let delay = 2000; // in milliseconds (so it's 2 seconds)
let printGreeting = () => {
  console.log('Hey! Am I late to the party?');
}

setTimeout(printGreeting, delay);
```

1. Run this code. What is happening? 
2. Try to call directly the function `printGreeting` at the end of the file, and run the code again. How is the result different?
3. From the previous answers, make an assumption about what the `setTimeout` function is doing. 

Here's another slightly different example:
```javascript
let delay = 2000; // in milliseconds

setTimeout(() => {
  console.log('Hey! Am I late to the party?');
}, delay);
```

1. In what is this example different? 
2. Does it change the final result of what the code is doing? Try to answer *before* running the code again, then verify your assumptions.

## Following the flow of the program

Since we're curious (aren't you?) to learn more about the previous code example, let's add a few `console.log` to get visibility in the code. Make the necessary changes into `async.js`.

Before running the following code from the command line, try to think hard about it and to guess in which order to different numbers output by `console.log` will be printed. 

```javascript
let delay = 2000;

console.log(1);

let printGreeting = () => {
  console.log(2);
  console.log('Hey! Am I late to the party?');
  console.log(3);
}

setTimeout(printGreeting, delay);

console.log(4);
```

Let's take the same code, again, but setting the `delay` variable to 0. 

 1. How do you think this will change the behaviour of the code. In which order will the numbers we printed?

```javascript
let delay = 0;

console.log(1);

let printGreeting = () => {
  console.log(2);
  console.log('Hey! Am I late to the party?');
  console.log(3);
}

setTimeout(printGreeting, delay);

console.log(4);
```

 2. Run the code and verify your assumptions. 
 3. Did setting `delay` to 0 change anything? From this finding, what can you say about the `printGreeting` function passed to `setTimeout`? 

In JavaScript, we call a function such as the one passed to `setTimeout` a *callback*. The name comes from the fact that such functions are "called back" at a later point.

1. Take a notebook or open a text note on your laptop, and put the following steps in the exact order in which you think they happen: 
  * `printGreeting` is called.
  * The program starts.
  * `setTimeout` is called.
  * The program ends.
  * 2 seconds (2000ms) lapse.  
2. Discuss with your pair: do you agree on the order of those steps? You might want to run the program again to verify your answers.

## Exercise: returning values

```javascript

let delay = 2000;
let sayHello = () => {
  return 'Hello';
}

let result = setTimeout(sayHello, delay);

console.log(result);
```

1. Describe the order in which things happen. At what point in time is the string `'Hello'` returned by `sayHello`?
2. What do you think is the initial value of `result`? What is the value of `result` 2 seconds later?
3. Run the code. Use `console.log` to print the value of `result` at different points in time. Is what you see different from what you expected? If yes, try to make assumptions on why.
4. Modify the code so the string `'Hello'` ends being assigned to the variable `result`. If you're having trouble with this, keep reading to learn more.


In short, it's not possible to return values from a *callback function* the same way as for "normal" functions. That is because, in the example above, `result` is assigned right after `setTimeout` has finished its work. But, at that point (about zero second after the program starts), `sayHello` has not executed yet - it will only execute 2 seconds later.

So `result` can never get the value returned by `sayHello` - it cannot get a value from the future! This return value is, in a way, lost (sad, isn't it). This is shown on the diagram below:

![Diagram](images/async-return-value.svg)

Since we can't `return` values, we need to use other solutions - one of them is to use *callback* functions, again, to tackle this asynchronous problem.

## Exercise: using callbacks to return values

Someone wrote a function `calculateAfterDelay` to do some calculation after a delay:

```javascript
let calculateAfterDelay = () => {
  let delay = 2000;
  setTimeout(() => {
    let result = 2 + 3;
  }, delay);
}
```

1. Modify the `calculateAfterDelay` function so it accepts a function, and calls it after the 2 seconds delay.
2. Call `calculateAfterDelay` with a callback that accepts one argument for the result, and print it.

<details>
<summary>Reveal solution</summary>

```javascript
let calculateAfterDelay = (callback) => {
  let delay = 2000;
  setTimeout(() => {
    let result = 2 + 3;
    callback(result);
  }, delay);
}

calculateAfterDelay((result) => {
  console.log(result);
})
```

</details>

3. Explain in which order the different steps happen in this solution program.

## Exercise: asynchronous user input

Earlier we used the package `readline-sync` to read user input in a JS program. As the name implies, the behaviour of this package is *synchronous*. Let's zoom in the following line to explain what this means:

```javascript
const readline = require('readline-sync');
let name = readline.question('Enter your name');

console.log(`Your name is {name}`);
```

In this example, the second line *blocks* the program to continue further. The variable `name` is not assigned at all *before* the user has entered some input, and the rest of the program won't be executed as well. Therefore we say the user input is read in a *synchronous* way, because it blocks the program from advancing further. This behaviour is very similar to Ruby's `gets.chomp`, which blocks the program while it's waiting for user input.

As we've just seen above, it can be different with JavaScript. In the previous exercise, `setTimeout` doesn't block the program for 2 seconds before `sayHello` is called. The rest of the program is executed and *then*, after 2 seconds have lapsed, `sayHello` happens. This is then an *asynchronous* behaviour.

There is a version of the `readline-sync` gem, [simply named `readline`](https://node.readthedocs.io/en/stable/api/readline/), that also reads user input, but in an asynchronous way.

1. After looking at the documentation for the `readline` package, reimplement the program that asks a user for their name and print "Your name is [name]", using `readline` instead of `readline-sync`.
2. In which order do the different steps of the program happen? How is it different from the version using `readline-sync`?