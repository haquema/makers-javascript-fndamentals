# Asynchronicity

This is a very frightening word, but it's also an important concept in Javascript. So let's go through one example first.

```javascript
console.log(1);

let someFunction = () => {
  console.log(2);
}

console.log(3);

someFunction();

console.log(4);
```

> 1. In which order are the numbers going to be printed? Try to think deeply and to write your answer somewhere, maybe on a notebook, before running this code.
> 2. Save this code in a file called `async.js`, run the file from the terminal, and see if the output matches your assumptions. If not, why?

If you've got the sequence 1, 3, 2, 4 - then you're right. What happens is that, after the first `console.log`, `someFunction` is defined, but it is not run! Only after the `console.log(3)` is `someFunction` called, and `console.log(2)` is then called. Finally, `console.log(4)` is called.

## An Asynchronous Example

```javascript
let delay = 2000; // in milliseconds
let printGreeting = () => {
  console.log('Hey! Am I late to the party?');
}

setTimeout(printGreeting, delay);
```

> 1. Replace the contents of `async.js` with this code, and run the file. What is happening? 
> 2. Try to call directly the function `printGreeting` at the end of the file, and log its return value. Run the file again. How is the result different?
> 3. From the previous answers, make an assumption about what the `setTimeout` function is doing. 

Here's another slightly different example:
```javascript
let delay = 2000; // in milliseconds

setTimeout(() => {
  console.log('Hey! Am I late to the party?');
}, delay);
```

> 1. In what is this example different? 
> 2. Does it change the final result of what the code is doing? Try to answer *before* running the code again, then verify your assumptions.

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

> 1. How do you think this will change the behaviour of the code. In which order will the numbers we printed?

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

> 2. Run the code and verify your assumptions. 
> 3. Did setting `delay` to 0 change anything? From this finding, what can you say about the `printGreeting` function passed to `setTimeout`? 

In Javascript, we call a function such as the one passed to `setTimeout` a *callback*. The name comes from the fact that such functions are "called back" at a later point.

1. Take a notebook or open a text note on your laptop, and put the following steps in the order in which you think they happen: 
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

1. Describe the order in which things happen. At what point is the string `'Hello'` returned by `sayHello`?
2. What do you think is the initial value of `result`? What is the value of `result` 2 seconds later?
3. Run the code. Use `console.log` to print the value of `result` at different points in time. Is what you see different from what you expected? If yes, try to make assumptions on why.
4. Modify the code so the string `'Hello'` ends being assigned to the variable `result`.


In short, it's not possible to return values from a *callback function* the same way as for "normal" functions. That is because, in the example above, `result` is assigned right after `setTimeout` has finished its work. But, at that point (about zero second after the program starts), `sayHello` has not executed yet - it will only execute 2 seconds later. So `result` can never get the value returned by `sayHello`. This return value is, in a way, lost (sad, isn't it). This is shown on the diagram below:

![Diagram](images/async-return-value.svg)

Since we can't `return` values, one solution is to assign them to a variable than exists outside of the callback function:

```javascript
let delay = 2000;
let result = null;
let sayHello = () => {
  result = 'Hello'; // result gets assigned here
}

setTimeout(sayHello, delay);

console.log(result);
```

1. Run this code. What is the initial value of `result`?
2. What is the value of `result` 2 seconds later? Why?
